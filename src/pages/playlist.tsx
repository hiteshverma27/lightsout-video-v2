import {
  AppShell,
  Avatar,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Menu,
  Skeleton,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useDocumentTitle, useMediaQuery } from "@mantine/hooks";

import axios from "axios";
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PlaylistOff } from "tabler-icons-react";
import { NoVideos } from "../assets/NoVideos";
import { DesktopNav } from "../components/DesktopNav";
import { HeaderComponent } from "../components/Header";
import { errorToast, successToast } from "../components/Toast";
import { useAuth } from "../contexts/AuthContext";
import { useAuthModal } from "../contexts/AuthModalContext";
import { VideoCardSkeleton } from "../skeletonComponents";

function Playlist() {
  const [isloading, setIsloading] = useState(true);
  const { isAuthenticated, token } = useAuth();
  const { setAuthModalOpned } = useAuthModal();
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width: 425px)");
  const [currentPlaylistVideos, setCurrentPlayistVideos] = useState([]);
  const [currentPlaylistName, setCurrentPlayistName] = useState("");
  const { playlistId } = useParams();
  useDocumentTitle(`${currentPlaylistName} | LightsOut`);

  useEffect(() => {
    window.scrollTo(0, 0);
    !isAuthenticated && setAuthModalOpned(true);
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    const getPlaylist = async () => {
      setIsloading(true);
      try {
        const res = await axios.get(`/api/user/playlists`);
        setCurrentPlayistVideos(
          res.data.playlists.filter(
            (item: { _id: string }) => item._id === playlistId
          )[0].videos
        );
        setCurrentPlayistName(
          res.data.playlists.filter(
            (item: { _id: string }) => item._id === playlistId
          )[0][0].name
        );
      } catch (error) {
        errorToast("Something went wrong while fetching videos for playlist!");
      }
      setIsloading(false);
    };
    isAuthenticated && getPlaylist();
  }, [isAuthenticated, token, playlistId]);

  const removeVideoFromPlaylist = async (videoId: Key, playlistId: string) => {
    setIsloading(true);
    try {
      await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`);
      const res = await axios.get(`/api/user/playlists`);
      setCurrentPlayistVideos(
        res.data.playlists.filter(
          (item: { _id: string }) => item._id === playlistId
        )[0].videos
      );
      setCurrentPlayistName(
        res.data.playlists.filter(
          (item: { _id: string }) => item._id === playlistId
        )[0][0].name
      );
      successToast("Video deleted from playlist!");
    } catch (error) {
      errorToast("Something went wrong!");
    }
    setIsloading(false);
  };

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
      {!isAuthenticated ? (
        <Title align="center">You need to login to access this page</Title>
      ) : isloading ? (
        <div>
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
          <Text align="center" size="xl" weight={"bold"} my="md">
            {currentPlaylistName}
          </Text>
          <Divider />
          <Grid
            style={{
              overflowX: "hidden",
            }}
            mt="md"
            grow
          >
            {currentPlaylistVideos.length === 0 ? (
              <Container>
                <NoVideos />
                <Title align="center">No videos here yet </Title>
                <Text align="center" my={"lg"}>
                  <Button component={Link} to={"/explore"}>
                    Explore Videos
                  </Button>
                </Text>
              </Container>
            ) : (
              currentPlaylistVideos.map(
                (item: {
                  _id: Key;
                  thumbnail: string;
                  avatar: string;
                  title:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | ReactFragment
                    | ReactPortal;
                  creator:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | ReactFragment
                    | ReactPortal;
                  views:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | ReactFragment
                    | ReactPortal;
                  duration:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | ReactFragment
                    | ReactPortal;
                }) => (
                  <Grid.Col
                    style={{
                      maxWidth: matches ? 300 : "100%",
                      minWidth: 250,
                      position: "relative",
                    }}
                    sm={4}
                    xs={4}
                    key={item._id}
                  >
                    <Card
                      shadow="sm"
                      onClick={() => navigate(`/video/${item._id}`)}
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      <Card.Section>
                        <Image src={item.thumbnail} height={160} alt="Norway" />
                      </Card.Section>

                      <Group
                        position="apart"
                        style={{
                          marginBottom: 5,
                          marginTop: theme.spacing.sm,
                        }}
                      >
                        <div style={{ display: "flex", maxWidth: "80%" }}>
                          <Avatar
                            src={item.avatar}
                            alt="it's me"
                            size={"sm"}
                            radius="xl"
                            mr={"sm"}
                            mt="xs"
                          />
                          <div>
                            <Text
                              weight={500}
                              style={{ width: "100%" }}
                              lineClamp={2}
                              align="left"
                            >
                              {item.title}
                            </Text>
                            <Text
                              weight={300}
                              style={{ width: "100%" }}
                              align="left"
                            >
                              {item.creator}
                            </Text>
                            <Text
                              weight={300}
                              style={{ width: "100%", fontSize: "small" }}
                              align="left"
                            >
                              {item.views} . 1 year ago . {item.duration}
                            </Text>
                          </div>
                        </div>
                      </Group>
                    </Card>
                    <Menu
                      trigger="hover"
                      style={{
                        position: "absolute",
                        right: "10%",
                        bottom: "30%",
                      }}
                    >
                      <Menu.Item
                        icon={
                          <PlaylistOff color={theme.colors.red[6]} size={14} />
                        }
                        onClick={() =>
                          removeVideoFromPlaylist(item._id, playlistId)
                        }
                      >
                        Remove from playlist
                      </Menu.Item>
                    </Menu>
                  </Grid.Col>
                )
              )
            )}
          </Grid>
        </div>
      )}
    </AppShell>
  );
}

export { Playlist };
