import { create } from "zustand";
import axios from "axios";

export const commentsApi = create((set) => ({
  response: null,
  fetchData: async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      if (response) {
        set({ response: response.data});
      }
    } catch (error) {
      console.error(error);
    }
  },
}));