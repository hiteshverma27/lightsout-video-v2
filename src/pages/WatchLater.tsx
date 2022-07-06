import {
  AppShell,
  Avatar,
  Button,
  Card,
  Divider,
  Grid,
  Group,
  Image,
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
import { Link, useNavigate } from "react-router-dom";
import { CardMenu } from "../components";
import { DesktopNav } from "../components/DesktopNav";
import { HeaderComponent } from "../components/Header";
import { errorToast } from "../components/Toast";
import { useAuth } from "../contexts/AuthContext";
import { useAuthModal } from "../contexts/AuthModalContext";
import { useVideo } from "../contexts/VideoContext";
import {
  DesktopNavSkeleton,
  HeaderSkeleton,
  VideoCardSkeleton,
} from "../skeletonComponents";

function WatchLater() {
  const [isloading, setIsloading] = useState(true);
  const { isAuthenticated, token } = useAuth();
  const { setAuthModalOpned } = useAuthModal();
  const { watchLater, setWatchLater } = useVideo();
  const theme = useMantineTheme();
  const matches = useMediaQuery("(min-width: 425px)");
  const navigate = useNavigate();
  useDocumentTitle("Watch Later | LightsOut");

  useEffect(() => {
    window.scrollTo(0, 0);
    !isAuthenticated && setAuthModalOpned(true);
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    const getWatchLater = async () => {
      setIsloading(true);
      try {
        const res = await axios.get(`/api/user/watchlater`);
        setWatchLater(res.data.watchlater);
      } catch (error) {
        errorToast("Something went wrong while adding video to history!");
      }
      setIsloading(false);
    };
    isAuthenticated && getWatchLater();
  }, [isAuthenticated, token, setWatchLater]);

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
            Watch Later
          </Text>
          <Divider />
          <Grid
            style={{
              overflowX: "hidden",
            }}
            mt="md"
            grow
          >
            {watchLater.length === 0 ? (
              <Title align="center">
                No videos here yet{" "}
                <Button component={Link} to={"/explore"}>
                  Explore Videos
                </Button>
              </Title>
            ) : (
              watchLater.map(
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
                        <CardMenu />
                      </Group>
                    </Card>
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

export { WatchLater };
