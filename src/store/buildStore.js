import { create } from "zustand"

export const useBuildStore = create((set) => ({
    build: {
        nombre: "",
        nivel: 1,
        clase: "sacrier",
        items: [],
        autor: "",
        fechaCreacion: new Date().toISOString(),
    },

    setField: (field, value) => set((state) => ({
        build: {
            ...state.build,
            [field]: value,
        },
    })),

    setItems: (items) => set((state) => ({
        build: {
            ...state.build,
            items,
        },
    })),

    resetBuild: () => set({
        build: {
            nombre: "",
            nivel: 1,
            clase: "sacrier",
            items: [],
            autor: "",
            fechaCreacion: new Date().toISOString(),
        },
    }),
}));