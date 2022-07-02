import {
  AppShell,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Group,
  Image,
  LoadingOverlay,
  Overlay,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useDocumentTitle } from "@mantine/hooks";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Playlist } from "tabler-icons-react";
import { DesktopNav } from "../components/DesktopNav";
import { HeaderComponent } from "../components/Header";
import { errorToast } from "../components/Toast";
import { useAuth } from "../contexts/AuthContext";
import { useAuthModal } from "../contexts/AuthModalContext";
import { useVideo } from "../contexts/VideoContext";

function PlaylistListing() {
  const [isloading, setIsloading] = useState(true);
  const { isAuthenticated, token } = useAuth();
  const { setAuthModalOpned } = useAuthModal();
  const { setPlaylist, playlist } = useVideo();
  const theme = useMantineTheme();
  const navigate = useNavigate();
  useDocumentTitle(`Playlists | LightsOut`);

  useEffect(() => {
    !isAuthenticated && setAuthModalOpned(true);
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    const getPlaylists = async () => {
      setIsloading(true);
      try {
        const res = await axios.get(`/api/user/playlists`);
        setPlaylist(res.data.playlists);
      } catch (error) {
        errorToast("Something went wrong while adding video to history!");
      }
      setIsloading(false);
    };
    isAuthenticated && getPlaylists();
  }, [isAuthenticated, token, setPlaylist]);
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
      ) : (
        <div style={{ position: "relative", height: "100%" }}>
          <LoadingOverlay visible={isloading} />
          <div>
            <Text align="center" size="xl" weight={"bold"} my="md">
              Playlist
            </Text>
            <Divider />
            <Grid
              justify="center"
              style={{
                overflowX: "hidden",
              }}
              mt="md"
              grow
            >
              {playlist.length === 0 ? (
                <Title>
                  No videos here yet{" "}
                  <Button component={Link} to={"/explore"}>
                    Explore Videos
                  </Button>
                </Title>
              ) : (
                playlist.map((item) => (
                  <Grid.Col
                    style={{ maxWidth: 300, minWidth: 250 }}
                    sm={4}
                    xs={4}
                  >
                    <Card
                      shadow="sm"
                      onClick={() => {
                        navigate(`/playlist/${item._id}`);
                      }}
                    >
                      <Card.Section>
                        <Box className="playlist-card-image">
                          <Overlay
                            opacity={0.8}
                            color="#000"
                            zIndex={5}
                            style={{
                              width: "40%",
                              height: "160px",
                              marginLeft: "auto",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Text
                              weight={600}
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                              }}
                            >
                              {item.videos.length}
                              <Playlist />
                            </Text>
                          </Overlay>

                          <Image
                            src="https://source.unsplash.com/random"
                            height={160}
                            alt="Norway"
                          />
                        </Box>
                      </Card.Section>

                      <Group
                        position="apart"
                        style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
                      >
                        <div style={{ display: "flex", maxWidth: "100%" }}>
                          <div>
                            <Text weight={500} style={{ width: "100%" }}>
                              {item[0].name}
                            </Text>
                            {/* <Text weight={300} style={{ width: "100%" }}>
                  Creator
                </Text> */}
                            {/* <Text weight={300} style={{ width: "100%", fontSize: "small" }}>
                  2.1M views . 1 year ago
                </Text> */}
                          </div>
                        </div>

                        {/* <Badge color="pink" variant="light">
                    On Sale
                  </Badge> */}
                      </Group>
                    </Card>
                  </Grid.Col>
                ))
              )}
            </Grid>
          </div>
        </div>
      )}
    </AppShell>
  );
}

export { PlaylistListing };
