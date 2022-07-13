import axios from "axios";
import { errorToast, successToast } from "../../../components/Toast";
import { getPlaylists } from "./getPlaylists";

const removeFromPlaylist = async (video, playlist, setPlaylist) => {
  try {
    await axios.delete(`/api/user/playlists/${playlist._id}/${video._id}`);

    successToast(`Video removed from ${playlist[0].name}`);
  } catch (error) {
    errorToast("Something went wrong while removing video from playlist");
  }
  getPlaylists(setPlaylist);
};

export { removeFromPlaylist };
