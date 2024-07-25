"use client";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { useAtom } from "jotai";
import { equipmentTypeAtom } from "../../atoms";
import { useEquipmentList } from "../../hooks/use-equipment-list/use-equipment-list";

export function EquipmentFilters() {
  const equipmentList = useEquipmentList();
  const type = Array.from(
    new Set(equipmentList.map((equipment) => equipment.type))
  );
  const [selectedType, setSelectedType] = useAtom(equipmentTypeAtom);

  return (
    <Stack direction="column" spacing={2}>
      <div className="">Selected type: {selectedType}</div>
      <FormControl fullWidth>
        <InputLabel>Equipment Type</InputLabel>
        <Select
          label="Equipment Type"
          onChange={(e) => setSelectedType(e.target.value as string)}
        >
          <MenuItem key="" value="">
            -
          </MenuItem>
          {type.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
}
