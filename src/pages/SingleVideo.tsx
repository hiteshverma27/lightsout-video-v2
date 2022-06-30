import { AppShell, Avatar, Button, Checkbox, Container, createStyles, LoadingOverlay, Modal, Text, TextInput, useMantineTheme } from "@mantine/core";
import { StopwatchIcon } from "@modulz/radix-icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Eye, History, PlaylistAdd, ThumbUp } from "tabler-icons-react";
import { DesktopNav, Footer, HeaderComponent } from "../components";
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
  const [isloading, setisloading] = useState(true);
  const { classes } = useStyles();
  const { videoId } = useParams();
  useEffect(() => {
    console.log(videoId);
    setTimeout(() => {
      setisloading(false);
    }, 2000);
  }, []);

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
        {/* ...other content */}
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
            src="https://www.youtube.com/embed/FE6CTvs_g9Y"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: "1rem", height: "60vh" }}
          ></iframe>
          <Text className={classes.title} lineClamp={1}>
            Sukhoi Su-57 - Pushing the Limits
          </Text>
          <div className={classes.actionButtons}>
            <Container
              size={200}
              className={classes.creatorProfile}
              m={0}
              pl={0}
            >
              <Avatar
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
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
                <Text weight={600}>Creator name</Text>
                <Container className={classes.viewsAndDuration}>
                  <Text size="sm" style={{ display: "flex" }}>
                    <Eye size={18} />
                    1M
                  </Text>
                  <Text>
                    <StopwatchIcon /> 8:09
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
            Watch everything goining on in motorsport world at one place.
            Weather it be the science behind things or the story of drivers and
            teams. Watch everything goining on in motorsport world at one place.
            Weather it be the science behind things or the story of drivers and
            teams. Watch everything goining on in motorsport world at one place.
            Weather it be the science behind things or the story of drivers and
            teams. Watch everything goining on in motorsport world at one place.
            Weather it be the science behind things or the story of drivers and
            teams.
          </Text>
        </Container>
      </div>
    </AppShell>
  );
}

export { SingleVideo };
