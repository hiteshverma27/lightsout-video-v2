import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "F101",
    description:
      "Watch the basics of F1 and learn about the history of the sport.",
    image: "https://i.ytimg.com/vi/QL_ZAxF0_9o/maxresdefault.jpg",
    
  },
  {
    _id: uuid(),
    categoryName: "F1 Explained",
    description:
      "Learn about the history of the sport and the rules of the sport.",
      image: "https://i.ytimg.com/vi/tZpEHsId2g8/maxresdefault.jpg",
    },
    {
      _id: uuid(),
      categoryName: "It's all over F1",
      description:
      "Learn about journeys of the drivers and the careers in the sport.",
      image: "https://i.ytimg.com/vi/N3hgko9AoVU/maxresdefault.jpg",
  },
];
