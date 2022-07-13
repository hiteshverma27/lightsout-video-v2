import axios from "axios";
import { errorToast, successToast } from "../../../components/Toast";
import { getPlaylists } from "./getPlaylists";

const deletePlaylist = async (_id, setPlaylist) => {
  try {
    await axios.delete(`/api/user/playlists/${_id}`);
    successToast("Playlist deleted!");
  } catch (error) {
    errorToast("Something went wrong!");
  }
  getPlaylists(setPlaylist);
};

export { deletePlaylist };
