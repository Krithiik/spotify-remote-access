import { atom } from "recoil";

// place the playlistid in a atom in global state
export const playlistIdState = atom({
  key: "playlistIdState",
  default: "0Tt0PTPRK08lZ5uT74ArUz",
});

export const playlistState = atom({
  key: "playlistState",
  default: null,
});
