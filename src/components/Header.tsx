import {
  Avatar,
  Button,
  Divider,
  Drawer,
  Header,
  MediaQuery,
  Menu,
  Modal,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  History,
  Logout,
  Menu2,
  Moon,
  Playlist,
  Settings,
  ThumbUp,
  Video,
} from "tabler-icons-react";
import { useAuth } from "../contexts/AuthContext";
import { useAuthModal } from "../contexts/AuthModalContext";
import { useLogoutModal } from "../contexts/LogoutModalContext";
import { useMobileDrawer } from "../contexts/MobileDrawerContext";
import { AuthenticationForm } from "./AuthenticationForm";
import { MobileNav } from "./MobileNav";
import { SearchBar } from "./SearchBar";
import { ThemeToggle } from "./ThemeToggleButton";
import { successToast } from "./Toast";

function HeaderComponent() {
  const theme = useMantineTheme();
  const { logoutModalOpened, setLogoutModalOpened } = useLogoutModal();
  const { sideNavOpen, setSideNavOpen } = useMobileDrawer();
  const { toggleColorScheme } = useMantineColorScheme();
  const { authModalOpened, setAuthModalOpned } = useAuthModal();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    isAuthenticated,
    userData,
    setToken,
    setIsAuthenticated,
    setUserData,
  } = useAuth();

  const logoutHandler = async () => {
    setToken("");
    setIsAuthenticated(false);
    setUserData({});
    successToast("Logout Success!");
    setLogoutModalOpened(false);
    navigate("/explore");
  };

  return (
    <Header height={70} p="md">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <Modal
          withCloseButton={false}
          opened={logoutModalOpened}
          onClose={() => setLogoutModalOpened(false)}
        >
          <Text>Do you really want to logout from lightsout video?</Text>
          <Button color="red" my={"md"} onClick={logoutHandler}>
            Logout
          </Button>{" "}
        </Modal>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Menu2
            onClick={() => setSideNavOpen((o: any) => !o)}
            color={theme.colors.gray[6]}
          />
        </MediaQuery>
        <Drawer
          opened={sideNavOpen}
          onClose={() => setSideNavOpen(false)}
          withCloseButton={false}
        >
          <MobileNav />
        </Drawer>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignSelf:"left"
          }}
        >
          <Text
            weight={700}
            size="xl"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            component={Link}
            variant="text"
            to="/"
          >
            LightsOut
            <Video color={theme.colors.blue[6]} style={{ margin: "0 1rem" }} />
          </Text>
        </div>
        {location.pathname.includes("explore")&&
        <MediaQuery smallerThan={"sm"} styles={{display:"none"}}>

        <div style={{width:"35%"}}>

        <SearchBar/>
        </div>
        </MediaQuery>
        }
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ThemeToggle />
          <Modal
            opened={authModalOpened}
            onClose={() => setAuthModalOpned(false)}
            title="Introduce yourself!"
          >
            <AuthenticationForm />
          </Modal>
          {!isAuthenticated ? (
            <Button onClick={() => setAuthModalOpned(true)} mx={"sm"}>
              Login
            </Button>
          ) : (
            <Menu
              sx={{ cursor: "pointer" }}
              closeOnScroll
              control={
                <Avatar alt={userData.name} radius={"xl"} mx="md" size={"md"} />
              }
            >
              <Menu.Item
                icon={<ThumbUp size={14} color={theme.colors.red[6]} />}
                onClick={() => navigate("/liked-videos")}
              >
                Liked Videos
              </Menu.Item>
              <Menu.Item
                icon={<Playlist size={14} color={theme.colors.yellow[6]} />}
                onClick={() => navigate("/playlists")}
              >
                Playlists
              </Menu.Item>
              <Menu.Item
                icon={<History size={14} color={theme.colors.blue[6]} />}
                onClick={() => navigate("/history")}
              >
                History
              </Menu.Item>
              <Divider />
              <Menu.Label>Theme</Menu.Label>
              <Menu.Item
                icon={<Moon size={14} />}
                onClick={() => toggleColorScheme()}
              >
                Appearence : {theme.colorScheme === "dark" ? "Dark" : "Light"}
              </Menu.Item>
              <Divider />
              <Menu.Label>Account</Menu.Label>
              <Menu.Item icon={<Settings size={14} />}onClick={() => navigate("/profile")}>Profile</Menu.Item>
              <Menu.Item
                color={"red"}
                icon={<Logout size={14} />}
                onClick={() => setLogoutModalOpened(true)}
              >
                Logout
              </Menu.Item>
            </Menu>
          )}
        </div>
      </div>
    </Header>
  );
}

export { HeaderComponent };
