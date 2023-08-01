import create from "zustand";

const loginState = create((set) => ({
  login: false,
  setLogin: (logged) => set({ login: logged }),
}));

export default loginState