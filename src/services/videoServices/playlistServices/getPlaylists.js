import axios from "axios";
import { errorToast } from "../../../components/Toast";

const getPlaylists = async (setPlaylist) => {
  try {
    const res = await axios.get(`/api/user/playlists`);
    setPlaylist(res.data.playlists);
  } catch (error) {
    error.response.status === 500 && errorToast("Something went wrong!");
  }
};
export { getPlaylists };
