import { create } from "zustand";

const useStore = create((set) => ({
    minSpend: null,
    setMinSpend: (minSpend) => set({ minSpend }),
}))


export default useStore;