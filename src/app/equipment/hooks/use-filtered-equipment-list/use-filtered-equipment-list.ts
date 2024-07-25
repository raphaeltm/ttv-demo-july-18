import { useAtom } from "jotai";
import { equipmentTypeAtom } from "../../atoms";
import { useEquipmentList } from "../use-equipment-list/use-equipment-list";

export function useFilteredEquipmentList() {
  const list = useEquipmentList();
  const [selectedType] = useAtom(equipmentTypeAtom);

  return list.filter((equipment) => {
    if (!selectedType || selectedType === "") {
      return true;
    }
    return equipment.type === selectedType;
  });
}
