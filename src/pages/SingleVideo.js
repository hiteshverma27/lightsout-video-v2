import { AppShell, Avatar, Button, Checkbox, Container, createStyles, LoadingOverlay, Modal, Text, TextInput, useMantineTheme } from "@mantine/core";
import { StopwatchIcon } from "@modulz/radix-icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Eye, History, PlaylistAdd, ThumbUp } from "tabler-icons-react";
import { DesktopNav, Footer, HeaderComponent } from "../components";
import { FooterData } from "../staticData/FooterData";
import axios from "axios"
import { errorToast } from "../components/Toast";
import { useAuth } from "../temp-context/AuthContext";


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
  const [video, setVideo] = useState({});
  const {token} = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
    (async () => {
      setisloading(true);
      try {
        const {
          data: { video },
        } = await axios.get(`/api/video/${videoId}`);
        setVideo(video);
        await axios.post(
          `/api/user/history`,
          { video },
          {
            headers: { authorization: token },
          }
        );
        
      } catch (error) {
        errorToast("Something went wrong while featching video!");
      }
      setisloading(false);
    })();
    
  }, [videoId]);

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
            <Checkbox label="Playlist name" m={6} size="md" />
            <Checkbox label="Playlist name" m={6} size="md" />
            <Checkbox label="Playlist name" m={6} size="md" />
            <Checkbox label="Playlist name" m={6} size="md" />
            <Checkbox label="Playlist name" m={6} size="md" />
            <Checkbox label="Playlist name" m={6} size="md" />
            <TextInput placeholder="New playlist..." />
            <Button>Create</Button>
          </Modal>
          <iframe
            className={classes.ytPlayer}
            src={`https://www.youtube.com/embed/${video._id}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: "1rem", height: "60vh" }}
          ></iframe>
          <Text className={classes.title} lineClamp={1} align="left">
            {video.title}
          </Text>
          <div className={classes.actionButtons}>
            <Container
              size={200}
              className={classes.creatorProfile}
              m={0}
              pl={0}
            >
              <Avatar
                src={video.avatar}
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
                <Text weight={600}>{video.creator}</Text>
                <Container className={classes.viewsAndDuration}>
                  <Text size="sm" style={{ display: "flex" }}>
                    <Eye size={18} />
                    {video.views}
                  </Text>
                  <Text>
                    <StopwatchIcon />{video.duration}
                  </Text>
                </Container>
              </Container>
            </Container>
            <Container m={0}>
              <Button variant="subtle" px={"0.5rem"} leftIcon={<ThumbUp />}>
                Like
              </Button>
              <Button
                variant="subtle"
                px={"0.5rem"}
                leftIcon={<PlaylistAdd />}
                onClick={() => setPlaylistModal(true)}
              >
                Add to playlist
              </Button>
              <Button variant="subtle" px={"0.5rem"} leftIcon={<History />}>
                Watch later
              </Button>
            </Container>
          </div>
          <Text className={classes.description} m="md" lineClamp={2}>
            {video.description}
          </Text>
        </Container>
      </div>
    </AppShell>
  );
}

export { SingleVideo };
