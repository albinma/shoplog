import { MenuItem, Select } from '@mui/material';
import { getVehicles } from '~/actions/vehicle';

export default async function VehicleSelect({ userId }: { userId: string }) {
  const vehicles = await getVehicles(userId);

  if (!vehicles) {
    return;
  }

  const vehicleSelectItems = vehicles.map((vehicle) => ({
    value: vehicle.refId,
    label: `${vehicle.year} ${vehicle.make} ${vehicle.model} ${vehicle.trim} ${vehicle.style}`,
  }));

  const [firstItem] = vehicleSelectItems;

  return (
    <Select
      labelId="vehicle-select-label"
      id="vehicle-select"
      value={firstItem.value}
      label={firstItem.label}
    >
      {vehicleSelectItems.map((item) => (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
  );
}
