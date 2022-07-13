import axios from "axios";
import { errorToast, successToast } from "../../../components/Toast";
import { getPlaylists } from "./getPlaylists";

const addToPlaylist = async (video, item, setPlaylist) => {
  try {
    await axios.post(`/api/user/playlists/${item._id}`, {
      video,
    });

    successToast(`Video added to ${item[0].name}`);
  } catch (error) {
    error.response.status === 409
      ? errorToast(`Video already exist in ${item[0].name}`)
      : errorToast("SOmething went wrong when added video to playlist");
  }
  getPlaylists(setPlaylist);
};

export { addToPlaylist };
