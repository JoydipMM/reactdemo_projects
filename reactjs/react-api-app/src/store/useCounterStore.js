import { create } from 'zustand';

const useCounterStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: (state.count > 0 ? state.count - 1 : 0) })),
    setCount: (value) => set({ count: value }),
}));

export default useCounterStore;