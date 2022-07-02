import {
  AppShell,
  Avatar,
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
import { FooterData } from "../staticData/FooterData";

function Profile() {
  const theme = useMantineTheme();
  const { userData, isAuthenticated } = useAuth();
  const { setAuthModalOpned } = useAuthModal();
  const [loading, setLoading] = useState(false);
  useDocumentTitle(`${userData.firstName} | LightsOut`);
  useEffect(() => {
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
      {/* <MediaQuery largerThan={"sm"} styles={{ display: "none" }}>
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
            <Divider mt={"md"}/>
          </div>
        </MediaQuery> */}
      {/* <Container  color="white" m={0} style={{width:"100vw"}}>
            <Title align="center" mt={"xl"}>
                Your Profile
            </Title>
            <Center mt={"xl"}>

            <Avatar size={"xl"} radius="xl"/>
            </Center>
            <Center>

            <Stack>
                <Text>Email</Text>
            </Stack>
            </Center> */}
      {/* </Container> */}
      {!isAuthenticated ? (
        <Title align="center">You need to login to access your profile</Title>
      ) : loading ? (
        <Paper>
          <Loading />
        </Paper>
      ) : (
        <Container>
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
                Email : <Text>{userData.email}</Text>
              </Text>
              <Text
                size="xl"
                weight={"bold"}
                style={{ display: "flex", alignItems: "center" }}
              >
                Name :{" "}
                <Text> {`${userData.firstName} ${userData.lastName}`}</Text>
              </Text>
              {/* <Text size="xl" weight={"bold"} style={{display:"flex", alignItems:"center"}}>Member since : <Text>{userData.createdAt.slice(0, 10)}</Text></Text> */}
            </Stack>
          </Container>
          <ProfileStats />
        </Container>
      )}
    </AppShell>
  );
}

export { Profile };
