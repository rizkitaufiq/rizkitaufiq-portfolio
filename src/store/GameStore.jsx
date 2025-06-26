import { create } from "zustand";

const GameStore = create(() => ({
  projects: [
    {
      title: "Adventure of Levi",
      content:
        "Adventure Of Levi Game a is an adventure game where we play a main character to complete The Challenge. Each level you are given the challange of collecting an item to go to the next level .",
      image: "images/homepage/content/project/Adventure-of-levi.PNG",
      url: "https://github.com/rizkitaufiq/blog-app.git",
    },

    {
      title: "Roots Run Deep",
      content:
        "2.5D adventure game for desktop where the main character has root powers which are useful for passing every obstacle .",
      image: "images/homepage/content/project/Roots-Run-Deep.png",
      url: "https://github.com/rizkitaufiq/blog-app.git",
    },

    {
      title: "Box Runner",
      content:
        "Box Runner 3D Next Level is an arcade game where the player avoids various obstacles at each level and has different difficult .",
      image: "images/homepage/content/project/Box-Runner.PNG",
      url: "https://github.com/rizkitaufiq/blog-app.git",
    },
  ],
}));

export default GameStore;
