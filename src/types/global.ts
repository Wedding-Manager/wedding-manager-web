export type globalStoreType = userBasicData & {
  setUser: (data: userBasicData) => void;
};
export type userBasicData = {
  userName: string;
  userId: string;
  userRole: string;
};
