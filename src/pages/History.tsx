import {
  ActionIcon,
  AppShell,
  Avatar,
  Card,
  Chip,
  Chips,
  Divider,
  Grid,
  Group,
  Image,
  LoadingOverlay,
  MediaQuery,
  Text,
  TextInput,
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
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Search } from "tabler-icons-react";
import { CardMenu } from "../components";
import { DesktopNav } from "../components/DesktopNav";
import { HeaderComponent } from "../components/Header";
import { errorToast } from "../components/Toast";
import { useAuth } from "../temp-context/AuthContext";
import { useAuthModal } from "../temp-context/AuthModalContext";
import { useVideo } from "../temp-context/VideoContext";

function History() {
  const [isloading, setIsloading] = useState(true);
  const { isAuthenticated, token } = useAuth();
  const { setAuthModalOpned, authModalOpened } = useAuthModal();
  const { history, setHistory } = useVideo();
  const theme = useMantineTheme();
  const navigate = useNavigate();
  useEffect(() => {
    !isAuthenticated && setAuthModalOpned(true);
  }, []);
  useEffect(() => {
    const getHistory = async () => {
        setIsloading(true);
      try {
        const res = await axios.get(`/api/user/history`, {
          headers: { authorization: token },
        });
        console.log(res);
        setHistory(res.data.history);
      } catch (error) {
        errorToast("Something went wrong while adding video to history!");
      }
      setIsloading(false);
    };
    isAuthenticated && getHistory();
  }, [isAuthenticated]);

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
        <div style={{ position: "relative", height:"100%" }}>
          <LoadingOverlay visible={isloading} />
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
            <Grid
              justify="center"
              style={{
                alignItems: "flex-start",
                overflowX: "hidden",
                justifyContent: "center",
              }}
              mt="md"
              grow
            >
              {history.map(
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
                    className="video-card"
                    key={item._id}
                  >
                    <Card
                      shadow="sm"
                      onClick={() => navigate(`/video/${item._id}`)}
                    >
                      <Card.Section>
                        <Image src={item.thumbnail} height={160} alt="Norway" />
                      </Card.Section>

                      <Group
                        position="apart"
                        style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
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
              )}
            </Grid>
          </div>
        </div>
      )}
    </AppShell>
  );
}

export { History };
