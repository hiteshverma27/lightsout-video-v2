import {
  AppShell,
  Chip,
  Chips,
  Divider,
  MediaQuery,
  Paper,
  useMantineTheme,
} from "@mantine/core";
import { useDocumentTitle } from "@mantine/hooks";
import axios from "axios";
import { useEffect, useState } from "react";
import { categories } from "../backend/db/categories";
import {
  DesktopNav,
  HeaderComponent,
  Loading,
  SearchBar,
  VideoCard,
} from "../components";
import { errorToast } from "../components/Toast";
import { useVideo } from "../contexts/VideoContext";

function VideoListing() {
  const [isloading, setIsloading] = useState(true);
  const { setVideos, categoriesToFilter, setCategoriesToFilter } = useVideo();
  useDocumentTitle("Videos | LightsOut");
  
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
    // eslint-disable-next-line
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
              <SearchBar />
              <Divider mt={"md"} />
            </div>
          </MediaQuery>

          <Chips
            py={"sm"}
            spacing="md"
            onChange={setCategoriesToFilter}
            style={{
              flexWrap: "nowrap",
              overflowY: "scroll",
              overflow: "auto",
            }}
          >
            <Chip value={""}>All</Chip>
            {categories.map(({ categoryName }) => (
              <Chip key={categoryName} value={categoryName}>
                {categoryName}
              </Chip>
            ))}
          </Chips>
          <Divider />
          <VideoCard />
        </div>
      )}
    </AppShell>
  );
}

export { VideoListing };
