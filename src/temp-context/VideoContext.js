import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { errorToast } from "../components/Toast";

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [singleVideo, setSingleVideo] = useState({});
  const [watchLater, setWatchLater] = useState([]);
  const [likedVideos, setLikedVideos] = useState([]);
  const [history, setHistory] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [playlistId, setPlaylistId] = useState("");
  const [categoriesToFilter, setCategoriesToFilter] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const fetchedVideos = await axios.get(`/api/videos`);
  //       setVideos(fetchedVideos.data.videos);
  //     } catch (error) {
  //       errorToast("Something went wrong!");
  //     }
  //     // eslint-disable-next-line
  //   })();
  // }, []);

  return (
    <VideoContext.Provider
      value={{
        videos,
        setVideos,
        singleVideo,
        setSingleVideo,
        watchLater,
        setWatchLater,
        likedVideos,
        setLikedVideos,
        history,
        setHistory,
        playlist,
        setPlaylist,
        playlistId,
        setPlaylistId,
        categoriesToFilter,
        setCategoriesToFilter,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);
export { VideoProvider, useVideo };
