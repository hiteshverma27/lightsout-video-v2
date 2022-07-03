import {
  ActionIcon,
  Anchor,
  Container,
  createStyles,
  Group,
  Text,
} from "@mantine/core";
import { Link } from "react-router-dom";
import {
  BrandGithub,
  BrandLinkedin,
  BrandTwitter,
  Video,
} from "tabler-icons-react";
import { IndexKind } from "typescript";

const useStyles = createStyles((theme) => ({
  footer: {
    width: "100%",
    marginTop: 20,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    width: 160,
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

function Footer({ data }: FooterLinksProps) {
  const { classes } = useStyles();
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        component={Link} variant="text" to={link.link}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title} >{group.title}</Text>
        {links}
      </div>
    );
  });
  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Text
            weight={700}
            size="xl"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "1rem",
            }}
          >
            LightsOut
            <Video style={{ margin: "0 0.5rem " }} />
          </Text>
          <Text size="xs" color="dimmed" className={classes.description}>
            Watch everything on F1 at one place
          </Text>
          <Text
            size="xs"
            color="dimmed"
            className={classes.description}
            align="center"
          >
            Made by <Anchor size="sm" href="https://github.com/hiteshverma27">Hitesh</Anchor>
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2022 LightsOut Video. All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <Anchor href="https://twitter.com/hitesh27v" target="_blank">
            <ActionIcon size="lg">
              <BrandTwitter size={18} />
            </ActionIcon>
          </Anchor>
          <Anchor href="https://github.com/hiteshverma27" target="_blank">
            <ActionIcon size="lg">
              <BrandGithub size={18} />
            </ActionIcon>
          </Anchor>
          <Anchor
            href="https://www.linkedin.com/in/hiteshverma27/"
            target="_blank"
          >
            <ActionIcon size="lg">
              <BrandLinkedin size={18} />
            </ActionIcon>
          </Anchor>
        </Group>
      </Container>
    </footer>
  );
}

export { Footer };
