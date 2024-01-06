export type globalStoreType = userBasicData & {
  setUser: (data: userBasicData) => void;
};
export type userBasicData = {
  userName: string;
  userId: string;
  userRole: string;
};

export type Family = {
  husband: string;
  children: string[]; // Assuming children have some identifier, change it accordingly
};

export type User = {
  family: Family;
  _id: string;
  name: string;
  surname: string;
  gender: string;
  place: string;
  mobile: string;
  email: string;
  role: string;
  my_weddings: string[]; // Assuming weddings have some identifier, change it accordingly
  weddings: string[];
  approval_pending_weddings: string[];
  h_no: string;
  created_on: string;
  updated_on: string;
};
