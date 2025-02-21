import {create} from "zustand/react";

export const useCart = create((set) => ({
    items: [],
    addProduct: (product: any) =>
        set((state: any) => ({items: [...state.items, {product, quantity: 1}]})),

    resetCart: () => set({ items: [] }),
}));