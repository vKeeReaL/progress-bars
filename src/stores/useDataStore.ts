import { create } from "zustand";

type DataStoreType = {
  actionAmount: number;
  setActionAmount: (actionAmount: number) => void;
  selectedBar: number;
  setSelectedBar: (selectedBar: number) => void;
};

const useDataStore = create<DataStoreType>((set) => ({
  actionAmount: 0,
  setActionAmount: async (actionAmount: number) => {
    await Promise.resolve(set({ actionAmount: 0 })).then(() =>
      set({ actionAmount }),
    );
  },
  selectedBar: 1,
  setSelectedBar: (selectedBar: number) => set({ selectedBar }),
}));

export default useDataStore;
