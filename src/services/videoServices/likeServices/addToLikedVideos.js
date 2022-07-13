import axios from "axios";
import { errorToast, successToast } from "../../../components/Toast";

const addToLikedVideos = async (video, setLikedVideos) => {
    try {
      const likedVideos = await axios.post(`/api/user/likes`, { video });
      successToast("Video added to liked videos!");
      setLikedVideos(likedVideos.data.likes);
    } catch (error) {
      error.response.status === 409
        ? successToast("Video already exist in liked videos!")
        : errorToast(
            "Something went wrong while adding video to liked videos!"
          );
    }
}
export { addToLikedVideos }
