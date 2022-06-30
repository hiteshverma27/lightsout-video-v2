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
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Logout,
  Menu2,
  Message,
  Moon,
  Settings,
  Star,
  Video,
} from "tabler-icons-react";
import { useAuthModal } from "../temp-context/AuthModalContext";
import { useLogoutModal } from "../temp-context/LogoutModalContext";
import { useMobileDrawer } from "../temp-context/MobileDrawerContext";
import { AuthenticationForm } from "./AuthenticationForm";
import { MobileNav } from "./MobileNav";
import { ThemeToggle } from "./ThemeToggleButton";

function HeaderComponent() {
  const theme = useMantineTheme();
  const { logoutModalOpened, setLogoutModalOpened } = useLogoutModal();
  const { sideNavOpen, setSideNavOpen } = useMobileDrawer();
  const { toggleColorScheme } = useMantineColorScheme();
  const { authModalOpened, setAuthModalOpned } = useAuthModal();


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
          <Button color="red" my={"md"} >
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
          {<Button onClick={() => setAuthModalOpned(true)} mx={"sm"}>
            Login
          </Button>}
          {<Menu
            sx={{ cursor: "pointer" }}
            closeOnScroll
            control={
              <Avatar
                src={"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"}
                alt="it's me"
                radius={"xl"}
                mx="md"
                size={"md"}
              ></Avatar>
            }
          >
            <Menu.Item icon={<Heart size={14} color={theme.colors.red[6]} />}>
              Liked posts
            </Menu.Item>
            <Menu.Item icon={<Star size={14} color={theme.colors.yellow[6]} />}>
              Saved posts
            </Menu.Item>
            <Menu.Item
              icon={<Message size={14} color={theme.colors.blue[6]} />}
            >
              Your comments
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
            <Menu.Item icon={<Settings size={14} />}>Profile</Menu.Item>
            <Menu.Item
              color={"red"}
              icon={<Logout size={14} />}
              onClick={() => setLogoutModalOpened(true)}
            >
              Logout
            </Menu.Item>
          </Menu>}
        </div>
      </div>
    </Header>
  );
}

export { HeaderComponent };
