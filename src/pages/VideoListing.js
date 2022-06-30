import {
  ActionIcon,
  AppShell,
  Chip,
  Chips,
  Divider,
  MediaQuery,
  Paper,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Search } from "tabler-icons-react";
import { DesktopNav, HeaderComponent, Loading, VideoCard } from "../components";
import { errorToast } from "../components/Toast";
import { useVideo } from "../temp-context/VideoContext";

function VideoListing() {
  const [isloading, setIsloading] = useState(true);
  const { setVideos, videos } = useVideo();
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsloading(false);
  //   }, 500);
  // }, []);
  useEffect(() => {
    (async () => {
      setIsloading(true);
      try {
        const {
          data: { videos },
        } = await axios.get(`/api/videos`);
        setVideos(videos);
      } catch (error) {
        errorToast("Something went wrong while featching videos!");
      }
      setIsloading(false);
    })();
  }, []);
  const theme = useMantineTheme();
  return (
    <AppShell
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
    >
      {isloading ? (
        <Paper>
          <Loading />
        </Paper>
      ) : (
        <div>
          <MediaQuery largerThan={"sm"} styles={{ display: "none" }}>
            <div>
              <TextInput
                icon={<Search size={18} />}
                radius="xl"
                size="md"
                rightSection={
                  <ActionIcon
                    size={32}
                    radius="xl"
                    color={theme.primaryColor}
                    variant="filled"
                  >
                    {theme.dir === "ltr" ? (
                      <ArrowRight size={18} />
                    ) : (
                      <ArrowLeft size={18} />
                    )}
                  </ActionIcon>
                }
                placeholder="Search questions"
                rightSectionWidth={42}
              />
              <Divider mt={"md"} />
            </div>
          </MediaQuery>

          <Chips m={"lg"} spacing="md">
            <Chip value="react">React</Chip>
            <Chip value="ng">Angular</Chip>
            <Chip value="svelte">Svelte</Chip>
          </Chips>
          <Divider />
          <VideoCard />
        </div>
      )}
    </AppShell>
  );
}

export { VideoListing };
