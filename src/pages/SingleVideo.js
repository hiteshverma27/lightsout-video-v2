import {
  AppShell,
  Avatar,
  Button,
  Checkbox,
  Container,
  createStyles,
  LoadingOverlay,
  Modal,
  Text,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import { StopwatchIcon } from "@modulz/radix-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Eye, History, PlaylistAdd, ThumbUp } from "tabler-icons-react";
import { DesktopNav, Footer, HeaderComponent } from "../components";
import { errorToast, successToast, warningToast } from "../components/Toast";
import { FooterData } from "../staticData/FooterData";
import { useAuth } from "../contexts/AuthContext";
import { useAuthModal } from "../contexts/AuthModalContext";
import { useVideo } from "../contexts/VideoContext";

const useStyles = createStyles((theme) => ({
  actionButtons: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px",
    flexWrap: "wrap",
  },
  flex: {
    display: "flex",
    padding: "0",
  },
  creatorProfile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: theme.spacing.md,
  },
  viewsAndDuration: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0",
  },
  container: {
    maxWidth: "100%",
    margin: "0",
    minHeight: "90vh",
    height: "max-content",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    padding: "1rem",
    position: "relative",

    [theme.fn.smallerThan("sm")]: {
      height: "80vh",
    },
  },

  title: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
    fontSize: 30,
    fontWeight: 900,
    lineHeight: 3,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 40,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
      lineHeight: 1.5,
    },
  },
  ytPlayer: {
    height: "90%",
    width: "100%",
    [theme.fn.smallerThan("sm")]: {
      height: "70%",
    },
  },

  description: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
      fontSize: theme.fontSizes.sm,
    },
  },
}));
function SingleVideo() {
  const theme = useMantineTheme();
  const [playlistModal, setPlaylistModal] = useState(false);
  const [isloading, setisloading] = useState(false);
  const { classes } = useStyles();
  const { videoId } = useParams();
  const { setAuthModalOpned } = useAuthModal();
  const {
    singleVideo,
    setWatchLater,
    setLikedVideos,
    likedVideos,
    watchLater,
    playlist,
    setPlaylist,
    setSingleVideo,
  } = useVideo();
  const { _id, avatar, title, creator, description, views, duration } =
    singleVideo;
  const { token, isAuthenticated } = useAuth();
  const [videoIsLiked, setVideoIsLiked] = useState(false);
  const [videoInWatchLater, setVideoInWatchLater] = useState(false);
  const [playListNameInput, setPlayListNameInput] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    (async () => {
      setisloading(true);
      try {
        const {
          data: { video },
        } = await axios.get(`/api/video/${videoId}`);
        setSingleVideo(video);
      } catch (error) {
        errorToast("Something went wrong while featching video!");
      }
      setisloading(false);
    })();
  }, [setSingleVideo, videoId]);

  const watchLaterHandler = async (video) => {
    const deleteFromWatchLater = async (video) => {
      try {
        const watchLater = await axios.delete(
          `/api/user/watchlater/${video._id}`,
          {
            headers: { authorization: token },
          }
        );
        setWatchLater(watchLater.data.watchlater);
        successToast("Video deleted from watch later!");
      } catch (error) {
        error.response.status === 409
          ? successToast("Video already exist in watch later!")
          : errorToast(
              "Something went wrong while adding video to watch later!"
            );
      }
    };
    const addToWatchLater = async (video) => {
      try {
        const watchLaterVideo = await axios.post(
          `/api/user/watchlater`,
          { video },
          {
            headers: { authorization: token },
          }
        );
        successToast("Video added to watch later!");
        setWatchLater(watchLaterVideo.data.watchlater);
      } catch (error) {
        error.response.status === 409
          ? successToast("Video already exist in watch later!")
          : errorToast(
              "Something went wrong while adding video to watch later!"
            );
      }
    };
    isAuthenticated
      ? videoInWatchLater
        ? deleteFromWatchLater(video)
        : addToWatchLater(video)
      : setAuthModalOpned(true);
  };
  const likeButtonHandler = async (video) => {
    const addToLikedVideos = async (video) => {
      try {
        const likedVideos = await axios.post(
          `/api/user/likes`,
          { video }
        );
        successToast("Video added to liked videos!");
        setLikedVideos(likedVideos.data.likes);
      } catch (error) {
        error.response.status === 409
          ? successToast("Video already exist in liked videos!")
          : errorToast(
              "Something went wrong while adding video to liked videos!"
            );
      }
    };

    const removeFromLikedVideos = async (video) => {
      try {
        const likedVideos = await axios.delete(`/api/user/likes/${video._id}`, {
          headers: { authorization: token },
        });
        successToast("Video removed from liked videos!");
        setLikedVideos(likedVideos.data.likes);
      } catch (error) {
        errorToast("Something went wrong!");
      }
    };
    isAuthenticated
      ? videoIsLiked
        ? removeFromLikedVideos(video)
        : addToLikedVideos(video)
      : ifNotAuthenticated();
  };
  const ifNotAuthenticated = () => {
    setAuthModalOpned(true);
    warningToast("You must be logged in!");
  };
  const addToHistory = async (video) => {
    try {
      await axios.post(
        `/api/user/history`,
        { video },
        {
          headers: { authorization: token },
        }
      );
    } catch (error) {
      error.response.status === 500 &&
        errorToast("Something went wrong while adding video to history!");
    }
  };

  useEffect(
    () =>
      likedVideos.filter((item) => item._id === _id).length === 1
        ? setVideoIsLiked(true)
        : setVideoIsLiked(false),
    [likedVideos, _id]
  );
  useEffect(
    () =>
      watchLater.filter((item) => item._id === _id).length === 1
        ? setVideoInWatchLater(true)
        : setVideoInWatchLater(false),
    [watchLater, _id]
  );

  useEffect(() => {
    isAuthenticated && setTimeout(() => addToHistory(singleVideo), 0);
  });

  useEffect(() => window.scrollTo(0, 0), []);

  const createPlaylistHandler = (video, e) => {
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
              },
              {
                headers: { authorization: token },
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

  const getPlaylists = async () => {
    try {
      const res = await axios.get(`/api/user/playlists`, {
        headers: { authorization: token },
      });
      setPlaylist(res.data.playlists);
    } catch (error) {
      error.response.status === 500 && errorToast("Something went wrong!");
    }
  };
  const addVideoToPlaylist = async (video, item) => {
    try {
      await axios.post(
        `/api/user/playlists/${item._id}`,
        {
          video,
        },
        {
          headers: { authorization: token },
        }
      );

      successToast(`Video added to ${item[0].name} ${item._id}`);
    } catch (error) {
      error.response.status === 409
        ? errorToast(`Video already exist in ${item[0].name} ${item._id}`)
        : errorToast("SOmething went wrong when added video to playlist");
    }
    getPlaylists();
  };
  const removeVideoFromPlaylist = async (video, item) => {
    try {
      await axios.delete(`/api/user/playlists/${item._id}/${video._id}`, {
        headers: { authorization: token },
      });

      successToast(`Video removed from ${item[0].name}`);
    } catch (error) {
      error.response.status === 409
        ? errorToast(`Video already exist in ${item[0].name}`)
        : errorToast("Something went wrong while removing video from playlist");
    }
    getPlaylists();
  };

  return (
    <AppShell
      padding={0}
      style={{ overflow: "hidden" }}
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="xs"
      fixed
      navbar={<DesktopNav />}
      header={<HeaderComponent />}
      footer={<Footer {...FooterData} />}
    >
      <div style={{ position: "relative" }}>
        <LoadingOverlay visible={isloading} />
        <Container className={classes.container}>
          <Modal
            opened={playlistModal}
            onClose={() => setPlaylistModal(false)}
            title="Save to playlist"
            centered
          >
            {playlist.map((item, index) => (
              <div className="flex-col my-1" key={index}>
                <label className="flex">
                  <Checkbox
                    my={"sm"}
                    onChange={(e) => {
                      e.target.checked
                        ? addVideoToPlaylist(singleVideo, item)
                        : removeVideoFromPlaylist(singleVideo, item);
                    }}
                    checked={
                      item.videos.filter(
                        (video) => video._id === singleVideo._id
                      ).length === 1
                    }
                    label={item[0].name}
                  />
                </label>
              </div>
            ))}
            <form>
              <label>
                <TextInput
                  type={"text"}
                  className="my-1 px-1"
                  value={playListNameInput}
                  placeholder="Playlist name"
                  onChange={(e) => setPlayListNameInput(e.target.value)}
                />
              </label>
              <Button
                my={"sm"}
                type="submit"
                className={`btn-${
                  !Boolean(playListNameInput) ? "secondary" : "primary"
                }-confirm my-1`}
                disabled={!Boolean(playListNameInput)}
                onClick={(e) => createPlaylistHandler(singleVideo, e)}
              >
                Create playlist
              </Button>
            </form>
          </Modal>
          <iframe
            className={classes.ytPlayer}
            src={`https://www.youtube.com/embed/${_id}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: "1rem", height: "60vh" }}
          ></iframe>
          <Text className={classes.title} lineClamp={1} align="left">
            {title}
          </Text>
          <div className={classes.actionButtons}>
            <Container
              size={200}
              className={classes.creatorProfile}
              m={0}
              pl={0}
            >
              <Avatar
                src={avatar}
                alt="it's me"
                radius={"xl"}
                mx={"sm"}
                size={"md"}
              />
              <Container
                p={0}
                style={{ minWidth: "125px", maxWidth: "20rem" }}
                my={"sm"}
              >
                <Text weight={600}>{creator}</Text>
                <Container className={classes.viewsAndDuration}>
                  <Text size="sm" style={{ display: "flex" }}>
                    <Eye size={18} />
                    {views}
                  </Text>
                  <Text>
                    <StopwatchIcon />
                    {duration}
                  </Text>
                </Container>
              </Container>
            </Container>
            <Container m={0}>
              <Button
                variant="subtle"
                px={"0.5rem"}
                leftIcon={<ThumbUp />}
                onClick={() => likeButtonHandler(singleVideo)}
              >
                {videoIsLiked ? "Liked" : "Like"}
              </Button>
              <Button
                variant="subtle"
                px={"0.5rem"}
                leftIcon={<PlaylistAdd />}
                onClick={() => {
                  isAuthenticated
                    ? setPlaylistModal(true)
                    : ifNotAuthenticated();
                }}
              >
                Add to playlist
              </Button>
              <Button
                variant="subtle"
                px={"0.5rem"}
                leftIcon={<History />}
                onClick={() => watchLaterHandler(singleVideo)}
              >
                Watch later
              </Button>
            </Container>
          </div>
          <Text className={classes.description} m="md" lineClamp={2}>
            {description}
          </Text>
        </Container>
      </div>
    </AppShell>
  );
}

export { SingleVideo };
