import {
  ActionIcon,
  AppShell,
  Chip,
  Chips,
  Divider,
  MediaQuery,
  Paper,
  TextInput,
  useMantineTheme,
} from "@mantine/core";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Search } from "tabler-icons-react";
import { DesktopNav } from "../components/DesktopNav";
import { HeaderComponent } from "../components/Header";
import { Loading } from "../components/LoadingScreenOverlay";
import { PlaylistCard } from "../components/PlaylistCard";

function PlaylistListing() {
  const [isloadinh, setIsloadinh] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsloadinh(false);
    }, 500);
  }, []);
  const theme = useMantineTheme();
  return isloadinh ? (
    <Paper>
      <Loading />
    </Paper>
  ) : (
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
    </AppShell>
  );
}

export { PlaylistListing };
