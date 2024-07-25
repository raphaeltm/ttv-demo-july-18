import { Stack } from "@mui/material";
import { DisplayEquipmentList } from "./components/display-equipement-list/display-equipment-list";
import { EquipmentFilters } from "./components/equipment-filters/equipment-filters";

export default function EquipmentPage() {
  return (
    <Stack
      sx={{
        flexDirection: {
          xs: "column",
          sm: "row",
        },
      }}
    >
      <Stack
        sx={{
          width: {
            xs: "100%",
            sm: 300,
          },
        }}
      >
        <h2>Equipment Filtering</h2>
        <EquipmentFilters />
      </Stack>
      <Stack sx={{ flexGrow: 1 }}>
        <h2>Equipment List</h2>
        <DisplayEquipmentList />
      </Stack>
    </Stack>
  );
}
