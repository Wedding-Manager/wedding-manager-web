export type Child = {
  name: string | undefined;
};

type Family = {
  father: string;
  mother: string;
  wife: string;
  children: Child[];
  husband: string;
};

export type UserData = {
  name: string;
  surname: string;
  gender: string;
  mobile: string;
  place: string;
  email: string;
  password: string;
  repeat_password: string;
  family: Family;
  h_no: string;
};
