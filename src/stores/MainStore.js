import { create } from 'zustand'

export const useMainStore = create((set) => ({
  firstValue: 0,
  secondValue: 0,
  addToFirst: () => set((state) => ({
		firstValue: state.firstValue+1
	})),
}))
