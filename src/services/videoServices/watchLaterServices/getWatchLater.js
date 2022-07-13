import axios from "axios";
import { errorToast } from "../../../components/Toast";

const getWatchLater = async (setIsloading, setWatchLater) => {
  setIsloading(true);
  try {
    const res = await axios.get(`/api/user/watchlater`);
    setWatchLater(res.data.watchlater);
  } catch (error) {
    errorToast("Something went wrong while adding video to history!");
  }
  setIsloading(false);
};
export { getWatchLater };
