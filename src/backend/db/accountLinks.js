import { v4 as uuid } from "uuid";

export const accountLinks = [
  { _id: uuid(), title: "Liked Videos", route: "/liked-videos" },
  { _id: uuid(), title: "Watch Later", route: "/watch-later" },
  { _id: uuid(), title: "Playlists", route: "/playlist" },
  { _id: uuid(), title: "History", route: "/history" },
  { _id: uuid(), title: "My Account", route: "/profile" },
];
