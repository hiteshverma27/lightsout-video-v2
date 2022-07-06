import { AppShell, Title, useMantineTheme } from "@mantine/core";
import { useDocumentTitle } from "@mantine/hooks";
import { CategoryCard } from "../components";
import { Footer } from "../components/Footer";
import { HeaderComponent } from "../components/Header";
import { Hero } from "../components/Hero";
import { FooterData } from "../staticData/FooterData";

function Landingpage() {
  const theme = useMantineTheme();
  useDocumentTitle(`LightsOut`);
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
      <Hero />
      <Title align="center" m="xl">Categories</Title>
      <CategoryCard />
    </AppShell>
  );
}

export { Landingpage };
