import { create } from "zustand";

const useOrderStore = create((set) => ({
  orders: [],
  addOrder: (order) => set((state) => ({ orders: [...state.orders, order] })),
  clearOrders: () => set({ orders: [] }),
}));

export default useOrderStore;
