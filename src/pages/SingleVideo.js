import {
  Accordion,
  AccordionItem,
  AppShell,
  Avatar,
  Button,
  Checkbox,
  Container,
  createStyles,
  Modal,
  Skeleton,
  Text,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import { useDocumentTitle } from "@mantine/hooks";
import { StopwatchIcon } from "@modulz/radix-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Eye, History, PlaylistAdd, ThumbUp } from "tabler-icons-react";
import { DesktopNav, Footer, HeaderComponent } from "../components";
import { errorToast, warningToast } from "../components/Toast";
import { useAuth } from "../contexts/AuthContext";
import { useAuthModal } from "../contexts/AuthModalContext";
import { useVideo } from "../contexts/VideoContext";
import {
  addToLikedVideos,
  addToPlaylist,
  addToWatchLater,
  createPlaylistHandler,
  removeFromLikedVideos,
  removeFromPlaylist,
  removeFromWatchLater,
} from "../services";
import { FooterData } from "../staticData/FooterData";

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
  const { isAuthenticated } = useAuth();
  const [videoIsLiked, setVideoIsLiked] = useState(false);
  const [videoInWatchLater, setVideoInWatchLater] = useState(false);
  const [playListNameInput, setPlayListNameInput] = useState("");
  useDocumentTitle(`${title} | LightsOut`);

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
    isAuthenticated
      ? videoInWatchLater
        ? removeFromWatchLater(video, setWatchLater)
        : addToWatchLater(video, setWatchLater)
      : setAuthModalOpned(true);
  };
  const likeButtonHandler = async (video) => {
    isAuthenticated
      ? videoIsLiked
        ? removeFromLikedVideos(video._id, setLikedVideos)
        : addToLikedVideos(video, setLikedVideos)
      : ifNotAuthenticated();
  };
  const ifNotAuthenticated = () => {
    setAuthModalOpned(true);
    warningToast("You must be logged in!");
  };
  const addToHistory = async (video) => {
    try {
      await axios.post(`/api/user/history`, { video });
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
      {isloading ? (
        <Container className={classes.container}>
          <Skeleton height={"60vh"} width={"100%"} radius="lg" mb={"md"} />
          <Skeleton height={40} width={"90%"} mt="xl" />
          <div className={classes.actionButtons}>
            <Container
              size={200}
              className={classes.creatorProfile}
              m={0}
              pl={0}
            >
              <Skeleton height={50} width={50} radius="xl" ml={"sm"} />
              <Container
                p={0}
                style={{ minWidth: "125px", maxWidth: "20rem" }}
                my={"sm"}
              >
                <Skeleton width={90} height={20} ml="sm" />
                <Container className={classes.viewsAndDuration}>
                  <Skeleton width={40} height={15} mt="sm" ml="sm" />
                  <Skeleton width={40} height={15} mt="sm" ml="sm" />
                </Container>
              </Container>
            </Container>
            <Container m={0} style={{ display: "flex" }}>
              <Skeleton mx={".2rem"} width={80} height={40} />
              <Skeleton mx={".2rem"} width={150} height={40} />
              <Skeleton mx={".2rem"} width={120} height={40} />
            </Container>
          </div>
          <Skeleton width={"100%"} height={50} />
        </Container>
      ) : (
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
                        ? addToPlaylist(
                            singleVideo,
                            item,
                            setPlaylist,
                            setisloading
                          )
                        : removeFromPlaylist(
                            singleVideo,
                            item,
                            setPlaylist,
                            setisloading
                          );
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
                onClick={(e) =>
                  createPlaylistHandler(
                    singleVideo,
                    e,
                    setPlaylist,
                    setPlayListNameInput,
                    playListNameInput
                  )
                }
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
                px={"0.2rem"}
                leftIcon={<ThumbUp />}
                onClick={() => likeButtonHandler(singleVideo)}
              >
                {videoIsLiked ? "Liked" : "Like"}
              </Button>
              <Button
                variant="subtle"
                px={"0.2rem"}
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
                px={"0.2rem"}
                leftIcon={<History />}
                onClick={() => watchLaterHandler(singleVideo)}
              >
                Watch later
              </Button>
            </Container>
          </div>
          {/* <Text className={classes.description} m="md" lineClamp={2}>
            {description}
          </Text> */}
          <Accordion style={{ width: "100%" }}>
            <AccordionItem label="Description">
              <Text>{description}</Text>
            </AccordionItem>
          </Accordion>
        </Container>
      )}
    </AppShell>
  );
}

export { SingleVideo };
