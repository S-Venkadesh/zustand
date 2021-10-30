import create from "zustand";
import { devtools, persist } from "zustand/middleware";

let usePeopleStore = (set)=>({
    people: ["venky", "jaii", "ram"],
    addPerson: (person) => set((state) => ({
        people: [...state.people, person]
    }))
})

let useThemeSetting = (set) => ({
    dark: false,
    toggleDark : () => set((state)=> ({dark: !state.dark}))
})

useThemeSetting = devtools(useThemeSetting);
useThemeSetting = persist(useThemeSetting, {name: "theme_setting"});

usePeopleStore = devtools(usePeopleStore);
usePeopleStore = persist(usePeopleStore, { name: "peopleSettings" });

export const peopleSettings = create(usePeopleStore);
export const themeSetting = create(useThemeSetting);
