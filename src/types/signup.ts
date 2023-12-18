export type Child = {
  name: string | undefined;
};

export type UserAccount = {
  family: Family;
  _id: string;
  name: string;
  surname: string;
  gender: string;
  place: string;
  mobile: string;
  email: string;
  password: string;
  role: string;
  my_weddings: string[]; // You can replace 'any' with the actual type if there's a specific structure for my_weddings
  weddings: string[]; // You can replace 'any' with the actual type if there's a specific structure for weddings
  approval_pending_weddings: any[]; // You can replace 'any' with the actual type if there's a specific structure for approval_pending_weddings
  h_no: string;
  created_on: string;
  updated_on: string;
  __v: number;
};
type Option = {
  label: string;
  value: string;
};

export type AccountOption = Option & { data: UserAccount };

type Family = {
  father: AccountOption;
  mother: AccountOption;
  wife: AccountOption;
  children: AccountOption[];
  husband: AccountOption;
};

export type UserData = {
  name: string;
  surname: string;
  gender: { label: string; value: string };
  mobile: string;
  place: string;
  email: string;
  password: string;
  repeat_password: string;
  family: Family;
  h_no: string;
};
