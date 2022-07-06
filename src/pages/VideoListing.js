import {
  AppShell,
  Chip,
  Chips,
  Divider,
  MediaQuery,
  Skeleton,
  useMantineTheme,
} from "@mantine/core";
import { useDocumentTitle } from "@mantine/hooks";
import axios from "axios";
import { useEffect, useState } from "react";
import { categories } from "../backend/db/categories";
import {
  DesktopNav,
  HeaderComponent,
  SearchBar,
  VideoCard,
} from "../components";
import { errorToast } from "../components/Toast";
import { useVideo } from "../contexts/VideoContext";
import { DesktopNavSkeleton } from "../skeletonComponents/DesktopNavSkeleton";
import { HeaderSkeleton } from "../skeletonComponents/HeaderSkeleton";
import { VideoCardSkeleton } from "../skeletonComponents/VideoCardSkeleton";

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
      navbar={isloading ? <DesktopNavSkeleton /> : <DesktopNav />}
      header={isloading ? <HeaderSkeleton /> : <HeaderComponent />}
    >
      {isloading ? (
        <div>
          <MediaQuery largerThan={"sm"} styles={{ display: "none" }}>
            <div>
              <Skeleton width={"100%"} height={50} />
              <Divider mt={"md"} />
            </div>
          </MediaQuery>
          <div
            style={{
              marginBottom: "1rem",
              marginLeft: "1rem",
              display: "flex",
            }}
          >
            <Skeleton width={50} height={30} radius="lg" mx={"xs"} />
            <Skeleton width={70} height={30} radius="lg" mx={"xs"} />
            <Skeleton width={110} height={30} radius="lg" mx={"xs"} />
            <Skeleton width={90} height={30} radius="lg" mx={"xs"} />
          </div>

          <Divider />
          <VideoCardSkeleton />
        </div>
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
