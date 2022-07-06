import {
  Drawer,
  Header,
  MediaQuery,
  Modal,
  Skeleton,
  useMantineTheme,
} from "@mantine/core";
import { useLocation } from "react-router-dom";
import { Menu2 } from "tabler-icons-react";
import { AuthenticationForm, MobileNav } from "../components";
import { useAuth } from "../contexts/AuthContext";
import { useAuthModal } from "../contexts/AuthModalContext";
import { useMobileDrawer } from "../contexts/MobileDrawerContext";

function HeaderSkeleton() {
  const theme = useMantineTheme();
  const { sideNavOpen, setSideNavOpen } = useMobileDrawer();
  const { authModalOpened, setAuthModalOpned } = useAuthModal();
  const location = useLocation();
  const { isAuthenticated } = useAuth();

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
            alignSelf: "left",
          }}
        >
          <Skeleton width={110} height={40} />
          <Skeleton width={30} height={40} ml="md" />
        </div>
        {location.pathname.includes("explore") && (
          <MediaQuery smallerThan={"sm"} styles={{ display: "none" }}>
            <div style={{ width: "35%" }}>
              <Skeleton width={"100%"} height={50} />
            </div>
          </MediaQuery>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Skeleton width={45} height={30} radius="xl" />
          <Modal
            opened={authModalOpened}
            onClose={() => setAuthModalOpned(false)}
            title="Introduce yourself!"
          >
            <AuthenticationForm />
          </Modal>
          {!isAuthenticated ? (
            <Skeleton width={70} height={35} ml="md" />
          ) : (
            <Skeleton height={40} width={40} radius="xl" />
          )}
        </div>
      </div>
    </Header>
  );
}

export { HeaderSkeleton };
