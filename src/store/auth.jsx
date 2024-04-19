import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  isAuth: false,
  setAuthed: (isAuth) => set({ isAuth }),
  setUnAuthed: () => set({ isAuth: false }),
}));
