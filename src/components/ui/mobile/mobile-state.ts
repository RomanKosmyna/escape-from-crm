import { create } from 'zustand';

type MobileStore = {
    isMobileVersionActive: boolean;
    toggleIsMobileVersionActive: (state: boolean) => void;
};

const useMobileVersion = create<MobileStore>((set) => ({
    isMobileVersionActive: false,
    toggleIsMobileVersionActive: (state) => set({ isMobileVersionActive: state }),
}));

export default useMobileVersion;
