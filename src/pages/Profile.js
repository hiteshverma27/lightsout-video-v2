import {
  AppShell,
  Avatar,
  Button,
  Center,
  Container,
  Paper,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useDocumentTitle } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { Loading } from "../components";
import { Footer } from "../components/Footer";
import { HeaderComponent } from "../components/Header";
import { ProfileStats } from "../components/ProfileStats";
import { useAuth } from "../contexts/AuthContext";
import { useAuthModal } from "../contexts/AuthModalContext";
import { useLogoutModal } from "../contexts/LogoutModalContext";
import { FooterData } from "../staticData/FooterData";

function Profile() {
  const theme = useMantineTheme();
  const { userData, isAuthenticated } = useAuth();
  const { setAuthModalOpned } = useAuthModal();
  const { setLogoutModalOpened } = useLogoutModal();
  const [loading, setLoading] = useState(false);
  useDocumentTitle(`${userData.firstName ?? "Profile"} | LightsOut`);
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    !isAuthenticated && setAuthModalOpned(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
    // eslint-disable-next-line
  }, []);

  return (
    <AppShell
      padding={0}
      style={{ overflow: "hidden" }}
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
      header={<HeaderComponent />}
      footer={<Footer {...FooterData} />}
    >
      {!isAuthenticated ? (
        <Title align="center">You need to login to access your profile</Title>
      ) : loading ? (
        <Paper>
          <Loading />
        </Paper>
      ) : (
        <Container mt={"xl"} pt="xl">
          <Title align="center" my={"xl"}>
            Your Profile
          </Title>
          <Center my={"xl"}>
            <Avatar size={"xl"} radius="xl" />
          </Center>
          <Container my={"xl"}>
            <Stack>
              <Text
                size="xl"
                weight={"bold"}
                style={{ display: "flex", alignItems: "center" }}
              >
                Email : <Text ml={"sm"}>{userData.email}</Text>
              </Text>
              <Text
                size="xl"
                weight={"bold"}
                style={{ display: "flex", alignItems: "center" }}
              >
                Name :{" "}
                <Text ml={"sm"}>
                  {" "}
                  {`${userData.firstName} ${userData.lastName}`}
                </Text>
              </Text>
            </Stack>
            <Button
              mt={"lg"}
              color="red"
              weight={"bold"}
              onClick={() => setLogoutModalOpened(true)}
            >
              Logout
            </Button>
          </Container>
          <ProfileStats />
        </Container>
      )}
    </AppShell>
  );
}

export { Profile };
