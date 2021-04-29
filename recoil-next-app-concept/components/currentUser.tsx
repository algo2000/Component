import { atom, selector } from "recoil";

const currentUserIDState = atom({
  key: 'CurrentUserID',
  default: 1,
});

export const currentUserNameQuery = selector({
  key: 'CurrentUserName',
  get: async ({get}) => {
    const response = await (() => "");
    return response;
  },
});

export default currentUserIDState