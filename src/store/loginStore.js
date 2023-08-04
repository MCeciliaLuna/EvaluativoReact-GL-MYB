import { create } from "zustand";

const useLogin = create((set) => ({
  login: false,
  setLogin: (logged) => set({ login: logged }),
}));

export default useLogin;
