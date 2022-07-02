import { createStyles, Group, Paper, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { HistoryToggle, Playlist, ThumbUp } from "tabler-icons-react";
import { useVideo } from "../contexts/VideoContext";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundImage: `linear-gradient(-60deg, ${
      theme.colors[theme.primaryColor][4]
    } 0%, ${theme.colors[theme.primaryColor][7]} 100%)`,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    display: "flex",

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  icon: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing.lg,
    color: theme.colors[theme.primaryColor][6],
  },

  stat: {
    cursor: "pointer",
    minWidth: 98,
    paddingTop: theme.spacing.xl,
    minHeight: 140,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: theme.white,
  },

  label: {
    textTransform: "uppercase",
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.colors.gray[6],
    lineHeight: 1.2,
  },

  value: {
    fontSize: theme.fontSizes.sm,
    fontWeight: 700,
    color: theme.black,
  },

  count: {
    color: theme.colors.gray[6],
  },

  day: {
    fontSize: 44,
    fontWeight: 700,
    color: theme.white,
    lineHeight: 1,
    textAlign: "center",
    marginBottom: 5,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  month: {
    fontSize: theme.fontSizes.sm,
    color: theme.white,
    lineHeight: 1,
    textAlign: "center",
  },

  controls: {
    display: "flex",
    flexDirection: "column",
    marginRight: theme.spacing.xl * 2,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "row",
      alignItems: "center",
      marginRight: 0,
      marginBottom: theme.spacing.xl,
    },
  },

  date: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  control: {
    height: 28,
    width: "100%",
    color: theme.colors[theme.primaryColor][2],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.radius.md,
    transition: "background-color 50ms ease",

    [theme.fn.smallerThan("xs")]: {
      height: 34,
      width: 34,
    },

    "&:hover": {
      backgroundColor: theme.colors[theme.primaryColor][5],
      color: theme.white,
    },
  },

  controlIcon: {
    [theme.fn.smallerThan("xs")]: {
      transform: "rotate(-90deg)",
    },
  },
}));

export function ProfileStats() {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const {
    watchLater,
    likedVideos,
    playlist,
  } = useVideo();

  return (
    <div className={classes.root}>
      <div className={classes.controls}>
        <div className={classes.date}>
          <Text align="center" color={"white"}>
            Your journey with us
          </Text>
        </div>
      </div>
      <Group sx={{ flex: 1 }}>
        <Paper
          className={classes.stat}
          radius="md"
          shadow="md"
          p="xs"
          onClick={() => navigate("/liked-videos")}
        >
          <ThumbUp size={32} className={classes.icon} />
          <div>
            <Text className={classes.label} align="center">
              Liked
            </Text>
            <Text size="md" align="center" weight={"bold"} color="black">
              {likedVideos.length}
            </Text>
          </div>
        </Paper>
        <Paper
          className={classes.stat}
          radius="md"
          shadow="md"
          p="xs"
          onClick={() => navigate("/playlists")}
        >
          <Playlist size={32} className={classes.icon} />
          <div>
            <Text className={classes.label} align="center">
              Playlists
            </Text>
            <Text size="md" align="center" weight={"bold"} color="black">
              {playlist.length}
            </Text>
          </div>
        </Paper>
        <Paper
          className={classes.stat}
          radius="md"
          shadow="md"
          p="xs"
          onClick={() => navigate("/watch-later")}
        >
          <HistoryToggle size={32} className={classes.icon} />
          <div>
            <Text className={classes.label} align="center">
              Watch Later
            </Text>
            <Text size="md" align="center" weight={"bold"} color="black">
              {watchLater.length}
            </Text>
          </div>
        </Paper>
      </Group>
    </div>
  );
}
