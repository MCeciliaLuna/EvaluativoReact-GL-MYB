import { create } from "zustand";
import axios from "axios";

const useStore = create((set) => ({
  response: null,
  fetchData: async () => {
    try {
      const response = await axios.get(
        "https://phrasesapi.onrender.com/getHumanWisdom"
      );
      if (response) {
        set({ response: response.data});
      }
    } catch (error) {
      console.error(error);
    }
  },
}));

export default useStore;