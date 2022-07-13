import {
  Button,
  Code,
  createStyles,
  Group,
  Navbar,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserCircle, Video } from "tabler-icons-react";
import { useAuth } from "../contexts/AuthContext";
import { useMobileDrawer } from "../contexts/MobileDrawerContext";
import { NavbarData } from "../staticData/NavbarData";

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
  return {
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === "dark" ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },
    version: {
      backgroundColor: theme.colors[theme.primaryColor][7],
      color: theme.white,
      fontWeight: 700,
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.fn.rgba(theme.colors[theme.primaryColor][8], 0.25)
            : theme.colors[theme.primaryColor][0],
        color:
          theme.colorScheme === "dark"
            ? theme.white
            : theme.colors[theme.primaryColor][7],
        [`& .${icon}`]: {
          color:
            theme.colors[theme.primaryColor][
              theme.colorScheme === "dark" ? 5 : 7
            ],
        },
      },
    },
  };
});

function MobileNav() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("Billing");
  const navigate = useNavigate();
  const { setSideNavOpen } = useMobileDrawer();
  const theme = useMantineTheme();
  const { isAuthenticated } = useAuth();

  const links = NavbarData.map((item) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
        navigate(item.link);
        setSideNavOpen(false);
      }}
    >
      <item.icon className={classes.linkIcon} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <Navbar height={700} width={{ sm: 250 }} p="md">
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
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
              }}
            >
              LightsOut
            </Text>
            <Video color={theme.colors.blue[6]} style={{ margin: "0 1rem" }} />
          </div>
          <Code className={classes.version}>v2.0</Code>
        </Group>
        {links}
      </Navbar.Section>

      {isAuthenticated && (
        <Navbar.Section className={classes.footer}>
          <Button
            className={classes.link}
            onClick={(event) => {
              event.preventDefault();
              navigate("/profile");
              setSideNavOpen(false);
            }}
            style={{ marginBottom: "2rem" }}
          >
            <UserCircle className={classes.linkIcon} />
            <span>Profile</span>
          </Button>
        </Navbar.Section>
      )}
    </Navbar>
  );
}

export { MobileNav };
