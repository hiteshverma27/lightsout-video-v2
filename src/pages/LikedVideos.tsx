import {
  AppShell,
  Avatar,
  Button,
  Card,
  Divider,
  Grid,
  Group,
  Image,
  LoadingOverlay,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";

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
import { Link, useNavigate } from "react-router-dom";
import { CardMenu } from "../components";
import { DesktopNav } from "../components/DesktopNav";
import { HeaderComponent } from "../components/Header";
import { errorToast } from "../components/Toast";
import { useAuth } from "../contexts/AuthContext";
import { useAuthModal } from "../contexts/AuthModalContext";
import { useVideo } from "../contexts/VideoContext";

function LikedVideos() {
  const [isloading, setIsloading] = useState(true);
  const { isAuthenticated, token } = useAuth();
  const { setAuthModalOpned } = useAuthModal();
  const { setLikedVideos, likedVideos } = useVideo();
  const theme = useMantineTheme();
  const navigate = useNavigate();
  useEffect(() => {
    !isAuthenticated && setAuthModalOpned(true);
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    const getLikedVideos = async () => {
      setIsloading(true);
      try {
        const res = await axios.get(`/api/user/likes`, {
          headers: { authorization: token },
        });
        setLikedVideos(res.data.likes);
      } catch (error) {
        errorToast("Something went wrong while adding video to history!");
      }
      setIsloading(false);
    };
    isAuthenticated && getLikedVideos();
  }, [isAuthenticated, token, setLikedVideos]);

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
        <Text>Login first</Text>
      ) : (
        <div
          style={{ position: "relative", height: "100%", overflowX: "hidden" }}
        >
          <LoadingOverlay visible={isloading} />
          <div>
            <Text align="center" size="xl" weight={"bold"} my="md">
              Liked Videos
            </Text>
            <Divider />
            <Grid
              style={{
                alignItems: "flex-start",
                overflowX: "hidden",
                justifyContent: "center",
              }}
              mt="md"
              grow
            >
              {likedVideos.length === 0 ? (
                <Title>
                  No videos here yet{" "}
                  <Button component={Link} to={"/explore"}>
                    Explore Videos
                  </Button>
                </Title>
              ) : (
                likedVideos.map(
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
                      style={{ maxWidth: 300, minWidth: 250 }}
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
                          <Image
                            src={item.thumbnail}
                            height={160}
                            alt="Norway"
                          />
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
                          <CardMenu />
                        </Group>
                      </Card>
                    </Grid.Col>
                  )
                )
              )}
            </Grid>
          </div>
        </div>
      )}
    </AppShell>
  );
}

export { LikedVideos };
