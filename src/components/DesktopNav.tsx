import { Button, createStyles, MediaQuery, Navbar } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";
import { Logout } from "tabler-icons-react";
import { useAuth } from "../contexts/AuthContext";
import { useLogoutModal } from "../contexts/LogoutModalContext";
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

function DesktopNav() {
  const { classes, cx } = useStyles();
  const navigate = useNavigate();
  const { setLogoutModalOpened } = useLogoutModal();
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  const links = NavbarData.map((item) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: item.link.includes(location.pathname),
      })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        navigate(item.link);
      }}
    >
      {/* <Text component={Link} variant="text" to={item.link}> */}
      <item.icon className={classes.linkIcon} />
      <span>{item.label}</span>
      {/* </Text> */}
    </a>
  ));

  return (
    <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
      <Navbar height={700} width={{ sm: 250 }} p="md">
        <Navbar.Section grow>{links}</Navbar.Section>

        {isAuthenticated && (
          <Navbar.Section className={classes.footer}>
            <Button
              className={classes.link}
              onClick={(event: { preventDefault: () => void }) => {
                event.preventDefault();
                setLogoutModalOpened(true);
              }}
              style={{ marginBottom: "2rem" }}
            >
              <Logout className={classes.linkIcon} />
              <span>Logout</span>
            </Button>
          </Navbar.Section>
        )}
      </Navbar>
    </MediaQuery>
  );
}

export { DesktopNav };
