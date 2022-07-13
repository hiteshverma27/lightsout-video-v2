import axios from "axios";
import { errorToast, successToast } from "../../../components/Toast";

const removeFromLikedVideos = async (_id, setLikedVideos) => {
  try {
    const likedVideos = await axios.delete(`/api/user/likes/${_id}`);
    successToast("Video removed from liked videos!");
    setLikedVideos(likedVideos.data.likes);
  } catch (error) {
    errorToast("Something went wrong!");
  }
};

export { removeFromLikedVideos };
