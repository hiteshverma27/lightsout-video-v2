import axios from "axios";
import { errorToast } from "../../../components/Toast";

const getLikedVideos = async (setIsloading, setLikedVideos) => {
  setIsloading(true);
  try {
    const res = await axios.get(`/api/user/likes`);
    setLikedVideos(res.data.likes);
  } catch (error) {
    errorToast("Something went wrong while adding video to history!");
  }
  setIsloading(false);
};
export { getLikedVideos };
