import axios from "axios"
import { errorToast, successToast, warningToast } from "../../components/Toast";


export const createPlaylistHandler = (video, e, setPlaylist, setPlayListNameInput, playListNameInput) => {
    e.preventDefault();
    playListNameInput
      ? (async () => {
          try {
            const res = await axios.post(
              `/api/user/playlists`,
              {
                playlist: [
                  {
                    name: playListNameInput,
                    videos: (prev) => [...prev, video],
                  },
                ],
              }
            );
            setPlaylist(res.data.playlists);
            setPlayListNameInput("");
            successToast("Playlist created");
          } catch (error) {
            error.response.status === 500 &&
              errorToast("Something went wrong while creating playlist!");
          }
        })()
      : warningToast("Please enter playlist name!");
  };