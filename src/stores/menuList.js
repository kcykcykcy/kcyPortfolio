import { defineStore } from 'pinia'

export const useClkMenuStore = defineStore('clkMenu', {
  state: () => ({
    menuList: [
        {menuName : "About me", path : "/"},
        {menuName : "Skills", path: "/skill-page"},
        {menuName : "Projects", path: "/project-page"},
        {menuName : "Contact", path: "/contact-page"}
    ],
    myCareer: "My Career",
  }),
  actions: {
   
  }
})
