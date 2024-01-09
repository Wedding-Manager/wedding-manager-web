import { User } from "@/types/global";
import { Invitation } from "@/types/weddings";

export const GUSET_TABLE_COLUMNS = [
  {
    heading: "Sr.No",
    cell: (invitation: Invitation, index: number) => {
      return index + 1;
    },
  },
  {
    heading: "Name",
    cell: (invitation: Invitation, index?: number) => {
      return `${invitation?.guest_id?.surname} ${invitation?.guest_id?.name}`;
    },
  },
  {
    heading: "Accepted On",
    cell: (invitation: Invitation, index: number) => {
      return `${invitation?.updated_on}`;
    },
  },
];
