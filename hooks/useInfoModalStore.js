import { create } from 'zustand';

const useInfoModalStore = create((set) => ({
    movieId: undefined,
    isOpen: false,
    openModal: (movieId) => set({ isOpen: true, movieId }),
    closeModal: () => set({ isOpen: false, movieId: undefined }),
}));

export default useInfoModalStore;
