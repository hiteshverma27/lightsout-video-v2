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
import { Trash } from "tabler-icons-react";
import { NoVideos } from "../assets/NoVideos";
import { CardMenu } from "../components";
import { DesktopNav } from "../components/DesktopNav";
import { HeaderComponent } from "../components/Header";
import { errorToast, successToast } from "../components/Toast";
import { useAuth } from "../contexts/AuthContext";
import { useAuthModal } from "../contexts/AuthModalContext";
import { useVideo } from "../contexts/VideoContext";
import { VideoCardSkeleton } from "../skeletonComponents";

function History() {
  const [isloading, setIsloading] = useState(true);
  const { isAuthenticated, token } = useAuth();
  const { setAuthModalOpned } = useAuthModal();
  const { history, setHistory } = useVideo();
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width: 425px)");
  useDocumentTitle("History | LightsOut");
  useEffect(() => {
    window.scrollTo(0, 0);
    !isAuthenticated && setAuthModalOpned(true);
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    const getHistory = async () => {
      setIsloading(true);
      try {
        const res = await axios.get(`/api/user/history`, {
          headers: { authorization: token },
        });
        setHistory(res.data.history);
      } catch (error) {
        errorToast("Something went wrong while adding video to history!");
      }
      setIsloading(false);
    };
    isAuthenticated && getHistory();
  }, [isAuthenticated, token, setHistory]);

  const clearAllHistory = async () => {
    try {
      const history = await axios.delete(`/api/user/history/all`, {
        headers: { authorization: token },
      });
      setHistory(history.data.history);
      successToast("History cleared!");
    } catch (error) {
      errorToast("Something went wrong while deleting history!");
    }
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
          <Trash
            style={{
              position: "absolute",
              right: "0",
              marginRight: "2rem",
              cursor: "pointer",
            }}
            onClick={clearAllHistory}
            color={theme.colors.red[6]}
          />
          <Text align="center" size="xl" weight={"bold"} my="md">
            History
          </Text>
          <Divider />
          <Grid
            style={{
              overflowX: "hidden",
            }}
            mt="md"
            grow
          >
            {history.length === 0 ? (
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
              history.map(
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

export { History };
