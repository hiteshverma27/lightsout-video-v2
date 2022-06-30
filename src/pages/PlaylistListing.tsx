import {
  ActionIcon,
  AppShell,
  Chip,
  Chips,
  Divider,
  LoadingOverlay,
  MediaQuery,
  Text,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import axios from "axios"
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Search } from "tabler-icons-react";
import { DesktopNav } from "../components/DesktopNav";
import { HeaderComponent } from "../components/Header";
import { PlaylistCard } from "../components/PlaylistCard";
import { errorToast } from "../components/Toast";
import { useAuth } from "../temp-context/AuthContext";
import { useAuthModal } from "../temp-context/AuthModalContext";
import { useVideo } from "../temp-context/VideoContext";

function PlaylistListing() {
  const [isloading, setIsloading] = useState(true);
  const { isAuthenticated, token } = useAuth();
  const { setAuthModalOpned, authModalOpened } = useAuthModal();
  const {setPlaylist, playlist} = useVideo()
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
        setPlaylist(res.data.playlists);
      } catch (error) {
        errorToast("Something went wrong while adding video to history!");
      }
      setIsloading(false);
    };
    isAuthenticated && getHistory();
  }, [isAuthenticated]);
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
          <PlaylistCard />
        </div>
      </div>
      )}
    </AppShell>
  );
}

export { PlaylistListing };
