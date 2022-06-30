import {
  Badge,
  Button,
  Card,
  Grid,
  Group,
  Image,
  Text,
  useMantineTheme,
} from "@mantine/core";

function CategoryCard() {
  const theme = useMantineTheme();

  return (
    <Grid
      justify="center"
      style={{
        alignItems: "flex-start",
        overflowX: "hidden",
        justifyContent: "center",
      }}
      mt="md"
    >
      <Grid.Col
        style={{ maxWidth: 300, minWidth: 250, alignSelf: "flex-start" }}
        sm={4}
        xs={4}
      >
        <Card shadow="sm" p="lg">
          <Card.Section>
            <Image src="https://images.unsplash.com/photo-1508176850193-21de4476f385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" height={160} alt="Norway" />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <Text weight={500}>Norway Fjord Adventures</Text>
            <Badge color="pink" variant="light">
              On Sale
            </Badge>
          </Group>

          <Text size="sm" style={{ lineHeight: 1.5 }}>
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button
            variant="light"
            color="blue"
            fullWidth
            style={{ marginTop: 14 }}
          >
            Book classic tour now
          </Button>
        </Card>
      </Grid.Col>
      <Grid.Col
        style={{ maxWidth: 300, minWidth: 250, alignSelf: "flex-start" }}
        sm={4}
        xs={4}
      >
        <Card shadow="sm" p="lg">
          <Card.Section>
            <Image src="https://images.unsplash.com/photo-1508176850193-21de4476f385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" height={160} alt="Norway" />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <Text weight={500}>Norway Fjord Adventures</Text>
            <Badge color="pink" variant="light">
              On Sale
            </Badge>
          </Group>

          <Text size="sm" style={{ lineHeight: 1.5 }}>
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button
            variant="light"
            color="blue"
            fullWidth
            style={{ marginTop: 14 }}
          >
            Book classic tour now
          </Button>
        </Card>
      </Grid.Col>
      <Grid.Col
        style={{ maxWidth: 300, minWidth: 250, alignSelf: "flex-start" }}
        sm={4}
        xs={4}
      >
        <Card shadow="sm" p="lg">
          <Card.Section>
            <Image src="https://images.unsplash.com/photo-1508176850193-21de4476f385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" height={160} alt="Norway" />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <Text weight={500}>Norway Fjord Adventures</Text>
            <Badge color="pink" variant="light">
              On Sale
            </Badge>
          </Group>

          <Text size="sm" style={{ lineHeight: 1.5 }}>
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button
            variant="light"
            color="blue"
            fullWidth
            style={{ marginTop: 14 }}
          >
            Book classic tour now
          </Button>
        </Card>
      </Grid.Col>
      <Grid.Col
        style={{ maxWidth: 300, minWidth: 250, alignSelf: "flex-start" }}
        sm={4}
        xs={4}
      >
        <Card shadow="sm" p="lg">
          <Card.Section>
            <Image src="https://images.unsplash.com/photo-1508176850193-21de4476f385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" height={160} alt="Norway" />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <Text weight={500}>Norway Fjord Adventures</Text>
            <Badge color="pink" variant="light">
              On Sale
            </Badge>
          </Group>

          <Text size="sm" style={{ lineHeight: 1.5 }}>
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button
            variant="light"
            color="blue"
            fullWidth
            style={{ marginTop: 14 }}
          >
            Book classic tour now
          </Button>
        </Card>
      </Grid.Col>
      
    </Grid>
  );
}

export  {CategoryCard};
