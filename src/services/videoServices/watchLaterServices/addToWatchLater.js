import axios from "axios";
import { errorToast, successToast } from "../../../components/Toast";

const addToWatchLater = async (video, setWatchLater) => {
  try {
    const watchLaterVideo = await axios.post(`/api/user/watchlater`, {
      video,
    });
    successToast("Video added to watch later!");
    setWatchLater(watchLaterVideo.data.watchlater);
  } catch (error) {
    error.response.status === 409
      ? successToast("Video already exist in watch later!")
      : errorToast("Something went wrong while adding video to watch later!");
  }
};

export { addToWatchLater };
