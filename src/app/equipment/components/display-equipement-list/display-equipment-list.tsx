"use client";

import { List, ListItem, Stack } from "@mui/material";
import { useFilteredEquipmentList } from "../../hooks/use-filtered-equipment-list/use-filtered-equipment-list";

export function DisplayEquipmentList() {
  const equipmentList = useFilteredEquipmentList();
  console.log(equipmentList);
  return (
    <div>
      <List sx={{ width: "100%", maxWidth: 800 }}>
        {equipmentList.map((equipment) => (
          <ListItem key={equipment.id} sx={{ width: "100%" }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              width="100%"
            >
              <div>{equipment.name}</div>
              <div>{equipment.type}</div>
            </Stack>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
