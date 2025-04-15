// import { create } from "zustand";

// const useStore = create((set) => ({
//     minSpend: null,
//     setMinSpend: (minSpend) => set({ minSpend }),
// }))


// export default useStore;


import { create } from "zustand";

const useStore = create((set) => ({
  minSpend: localStorage.getItem("minSpend") ? JSON.parse(localStorage.getItem("minSpend")) : null,
  
  setMinSpend: (minSpend) => {
    // Store in localStorage
    localStorage.setItem("minSpend", JSON.stringify(minSpend));
    
    // Update state
    set({ minSpend });
  },
}));

export default useStore;