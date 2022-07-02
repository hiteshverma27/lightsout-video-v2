import { AppShell, Text, Title, useMantineTheme } from "@mantine/core";
import { CategoryCard } from "../components";
import { Footer } from "../components/Footer";
import { HeaderComponent } from "../components/Header";
import { Hero } from "../components/Hero";
import { FooterData } from "../staticData/FooterData";

 function Landingpage() {
  const theme = useMantineTheme();
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
      <Hero />
      <Title align="center">
        Categories
      </Title>
      <CategoryCard/>
    </AppShell>
  );
}

export { Landingpage };
