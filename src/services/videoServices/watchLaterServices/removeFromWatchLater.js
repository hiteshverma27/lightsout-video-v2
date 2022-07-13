import axios from "axios";
import { errorToast, successToast } from "../../../components/Toast";

const removeFromWatchLater = async (video, setWatchLater) => {
  try {
    const watchLater = await axios.delete(`/api/user/watchlater/${video._id}`);
    setWatchLater(watchLater.data.watchlater);
    successToast("Video deleted from watch later!");
  } catch (error) {
    error.response.status === 409
      ? successToast("Video already exist in watch later!")
      : errorToast("Something went wrong while removing video to watch later!");
  }
};

export { removeFromWatchLater };
