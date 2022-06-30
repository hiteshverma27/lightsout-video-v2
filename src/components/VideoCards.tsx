import {
  Avatar,
  Card,
  Grid,
  Group,
  Image,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { CardMenu } from "./CardMenu";

 function VideoCard() {
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
      grow
    >
      <Grid.Col
        style={{ maxWidth: 300, minWidth: 250, alignSelf: "flex-start" }}
        sm={4}
        xs={4}
        className="video-card"
      >
        <Card shadow="sm">
          <Card.Section>
            <Image
              src="https://source.unsplash.com/random"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <div style={{ display: "flex", maxWidth: "80%" }}>
              <Avatar
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                alt="it's me"
                size={"sm"}
                radius="xl"
                mr={"sm"}
                mt="xs"
              />
              <div>
                <Text weight={500} style={{ width: "100%" }}>
                  Video Title lorem hello hello
                </Text>
                <Text weight={300} style={{ width: "100%" }}>
                  Creator
                </Text>
                <Text weight={300} style={{ width: "100%", fontSize: "small" }}>
                  2.1M views . 1 year ago
                </Text>
              </div>
            </div>

            {/* <Badge color="pink" variant="light">
                  On Sale
                </Badge> */}
            <CardMenu />
          </Group>
        </Card>
      </Grid.Col>
      <Grid.Col
        style={{ maxWidth: 300, minWidth: 250 }}
        sm={4}
        xs={4}
        className="video-card"
      >
        <Card shadow="sm">
          <Card.Section>
            <Image
              src="https://source.unsplash.com/random"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <div style={{ display: "flex", maxWidth: "80%" }}>
              <Avatar
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                alt="it's me"
                size={"sm"}
                radius="xl"
                mr={"sm"}
                mt="xs"
              />
              <div>
                <Text weight={500} style={{ width: "100%" }}>
                  Video Title lorem hello hello
                </Text>
                <Text weight={300} style={{ width: "100%" }}>
                  Creator
                </Text>
                <Text weight={300} style={{ width: "100%", fontSize: "small" }}>
                  2.1M views . 1 year ago
                </Text>
              </div>
            </div>

            {/* <Badge color="pink" variant="light">
                  On Sale
                </Badge> */}
            <CardMenu />
          </Group>
        </Card>
      </Grid.Col>
      <Grid.Col
        style={{ maxWidth: 300, minWidth: 250 }}
        sm={4}
        xs={4}
        className="video-card"
      >
        <Card shadow="sm">
          <Card.Section>
            <Image
              src="https://source.unsplash.com/random"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <div style={{ display: "flex", maxWidth: "80%" }}>
              <Avatar
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                alt="it's me"
                size={"sm"}
                radius="xl"
                mr={"sm"}
                mt="xs"
              />
              <div>
                <Text weight={500} style={{ width: "100%" }}>
                  Video Title lorem hello hello
                </Text>
                <Text weight={300} style={{ width: "100%" }}>
                  Creator
                </Text>
                <Text weight={300} style={{ width: "100%", fontSize: "small" }}>
                  2.1M views . 1 year ago
                </Text>
              </div>
            </div>

            {/* <Badge color="pink" variant="light">
                  On Sale
                </Badge> */}
            <CardMenu />
          </Group>
        </Card>
      </Grid.Col>
      <Grid.Col
        style={{ maxWidth: 300, minWidth: 250 }}
        sm={4}
        xs={4}
        className="video-card"
      >
        <Card shadow="sm">
          <Card.Section>
            <Image
              src="https://source.unsplash.com/random"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <div style={{ display: "flex", maxWidth: "80%" }}>
              <Avatar
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                alt="it's me"
                size={"sm"}
                radius="xl"
                mr={"sm"}
                mt="xs"
              />
              <div>
                <Text weight={500} style={{ width: "100%" }}>
                  Video Title lorem hello hello
                </Text>
                <Text weight={300} style={{ width: "100%" }}>
                  Creator
                </Text>
                <Text weight={300} style={{ width: "100%", fontSize: "small" }}>
                  2.1M views . 1 year ago
                </Text>
              </div>
            </div>

            {/* <Badge color="pink" variant="light">
                  On Sale
                </Badge> */}
            <CardMenu />
          </Group>
        </Card>
      </Grid.Col>
      <Grid.Col
        style={{ maxWidth: 300, minWidth: 250 }}
        sm={4}
        xs={4}
        className="video-card"
      >
        <Card shadow="sm">
          <Card.Section>
            <Image
              src="https://source.unsplash.com/random"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <div style={{ display: "flex", maxWidth: "80%" }}>
              <Avatar
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                alt="it's me"
                size={"sm"}
                radius="xl"
                mr={"sm"}
                mt="xs"
              />
              <div>
                <Text weight={500} style={{ width: "100%" }}>
                  Video Title lorem hello hello
                </Text>
                <Text weight={300} style={{ width: "100%" }}>
                  Creator
                </Text>
                <Text weight={300} style={{ width: "100%", fontSize: "small" }}>
                  2.1M views . 1 year ago
                </Text>
              </div>
            </div>

            {/* <Badge color="pink" variant="light">
                  On Sale
                </Badge> */}
            <CardMenu />
          </Group>
        </Card>
      </Grid.Col>
      <Grid.Col
        style={{ maxWidth: 300, minWidth: 250 }}
        sm={4}
        xs={4}
        className="video-card"
      >
        <Card shadow="sm">
          <Card.Section>
            <Image
              src="https://source.unsplash.com/random"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <div style={{ display: "flex", maxWidth: "80%" }}>
              <Avatar
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                alt="it's me"
                size={"sm"}
                radius="xl"
                mr={"sm"}
                mt="xs"
              />
              <div>
                <Text weight={500} style={{ width: "100%" }}>
                  Video Title lorem hello hello
                </Text>
                <Text weight={300} style={{ width: "100%" }}>
                  Creator
                </Text>
                <Text weight={300} style={{ width: "100%", fontSize: "small" }}>
                  2.1M views . 1 year ago
                </Text>
              </div>
            </div>

            {/* <Badge color="pink" variant="light">
                  On Sale
                </Badge> */}
            <CardMenu />
          </Group>
        </Card>
      </Grid.Col>
      <Grid.Col
        style={{ maxWidth: 300, minWidth: 250 }}
        sm={4}
        xs={4}
        className="video-card"
      >
        <Card shadow="sm">
          <Card.Section>
            <Image
              src="https://source.unsplash.com/random"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <div style={{ display: "flex", maxWidth: "80%" }}>
              <Avatar
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                alt="it's me"
                size={"sm"}
                radius="xl"
                mr={"sm"}
                mt="xs"
              />
              <div>
                <Text weight={500} style={{ width: "100%" }}>
                  Video Title lorem hello hello
                </Text>
                <Text weight={300} style={{ width: "100%" }}>
                  Creator
                </Text>
                <Text weight={300} style={{ width: "100%", fontSize: "small" }}>
                  2.1M views . 1 year ago
                </Text>
              </div>
            </div>

            {/* <Badge color="pink" variant="light">
                  On Sale
                </Badge> */}
            <CardMenu />
          </Group>
        </Card>
      </Grid.Col>
      <Grid.Col
        style={{ maxWidth: 300, minWidth: 250 }}
        sm={4}
        xs={4}
        className="video-card"
      >
        <Card shadow="sm">
          <Card.Section>
            <Image
              src="https://source.unsplash.com/random"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <div style={{ display: "flex", maxWidth: "80%" }}>
              <Avatar
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                alt="it's me"
                size={"sm"}
                radius="xl"
                mr={"sm"}
                mt="xs"
              />
              <div>
                <Text weight={500} style={{ width: "100%" }}>
                  Video Title lorem hello hello
                </Text>
                <Text weight={300} style={{ width: "100%" }}>
                  Creator
                </Text>
                <Text weight={300} style={{ width: "100%", fontSize: "small" }}>
                  2.1M views . 1 year ago
                </Text>
              </div>
            </div>

            {/* <Badge color="pink" variant="light">
                  On Sale
                </Badge> */}
            <CardMenu />
          </Group>
        </Card>
      </Grid.Col>
      <Grid.Col
        style={{ maxWidth: 300, minWidth: 250 }}
        sm={4}
        xs={4}
        className="video-card"
      >
        <Card shadow="sm">
          <Card.Section>
            <Image
              src="https://source.unsplash.com/random"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <div style={{ display: "flex", maxWidth: "80%" }}>
              <Avatar
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                alt="it's me"
                size={"sm"}
                radius="xl"
                mr={"sm"}
                mt="xs"
              />
              <div>
                <Text weight={500} style={{ width: "100%" }}>
                  Video Title lorem hello hello
                </Text>
                <Text weight={300} style={{ width: "100%" }}>
                  Creator
                </Text>
                <Text weight={300} style={{ width: "100%", fontSize: "small" }}>
                  2.1M views . 1 year ago
                </Text>
              </div>
            </div>

            {/* <Badge color="pink" variant="light">
                  On Sale
                </Badge> */}
            <CardMenu />
          </Group>
        </Card>
      </Grid.Col>
      <Grid.Col
        style={{ maxWidth: 300, minWidth: 250 }}
        sm={4}
        xs={4}
        className="video-card"
      >
        <Card shadow="sm">
          <Card.Section>
            <Image
              src="https://source.unsplash.com/random"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <div style={{ display: "flex", maxWidth: "80%" }}>
              <Avatar
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                alt="it's me"
                size={"sm"}
                radius="xl"
                mr={"sm"}
                mt="xs"
              />
              <div>
                <Text weight={500} style={{ width: "100%" }}>
                  Video Title lorem hello hello
                </Text>
                <Text weight={300} style={{ width: "100%" }}>
                  Creator
                </Text>
                <Text weight={300} style={{ width: "100%", fontSize: "small" }}>
                  2.1M views . 1 year ago
                </Text>
              </div>
            </div>

            {/* <Badge color="pink" variant="light">
                  On Sale
                </Badge> */}
            <CardMenu />
          </Group>
        </Card>
      </Grid.Col>
      <Grid.Col
        style={{ maxWidth: 300, minWidth: 250 }}
        sm={4}
        xs={4}
        className="video-card"
      >
        <Card shadow="sm">
          <Card.Section>
            <Image
              src="https://source.unsplash.com/random"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <div style={{ display: "flex", maxWidth: "80%" }}>
              <Avatar
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                alt="it's me"
                size={"sm"}
                radius="xl"
                mr={"sm"}
                mt="xs"
              />
              <div>
                <Text weight={500} style={{ width: "100%" }}>
                  Video Title lorem hello hello
                </Text>
                <Text weight={300} style={{ width: "100%" }}>
                  Creator
                </Text>
                <Text weight={300} style={{ width: "100%", fontSize: "small" }}>
                  2.1M views . 1 year ago
                </Text>
              </div>
            </div>

            {/* <Badge color="pink" variant="light">
                  On Sale
                </Badge> */}
            <CardMenu />
          </Group>
        </Card>
      </Grid.Col>
      <Grid.Col
        style={{ maxWidth: 300, minWidth: 250 }}
        sm={4}
        xs={4}
        className="video-card"
      >
        <Card shadow="sm">
          <Card.Section>
            <Image
              src="https://source.unsplash.com/random"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <div style={{ display: "flex", maxWidth: "80%" }}>
              <Avatar
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                alt="it's me"
                size={"sm"}
                radius="xl"
                mr={"sm"}
                mt="xs"
              />
              <div>
                <Text weight={500} style={{ width: "100%" }}>
                  Video Title lorem hello hello
                </Text>
                <Text weight={300} style={{ width: "100%" }}>
                  Creator
                </Text>
                <Text weight={300} style={{ width: "100%", fontSize: "small" }}>
                  2.1M views . 1 year ago
                </Text>
              </div>
            </div>

            {/* <Badge color="pink" variant="light">
                  On Sale
                </Badge> */}
            <CardMenu />
          </Group>
        </Card>
      </Grid.Col>
      <Grid.Col
        style={{ maxWidth: 300, minWidth: 250 }}
        sm={4}
        xs={4}
        className="video-card"
      >
        <Card shadow="sm">
          <Card.Section>
            <Image
              src="https://source.unsplash.com/random"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <div style={{ display: "flex", maxWidth: "80%" }}>
              <Avatar
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                alt="it's me"
                size={"sm"}
                radius="xl"
                mr={"sm"}
                mt="xs"
              />
              <div>
                <Text weight={500} style={{ width: "100%" }}>
                  Video Title lorem hello hello
                </Text>
                <Text weight={300} style={{ width: "100%" }}>
                  Creator
                </Text>
                <Text weight={300} style={{ width: "100%", fontSize: "small" }}>
                  2.1M views . 1 year ago
                </Text>
              </div>
            </div>

            {/* <Badge color="pink" variant="light">
                  On Sale
                </Badge> */}
            <CardMenu />
          </Group>
        </Card>
      </Grid.Col>
      <Grid.Col
        style={{ maxWidth: 300, minWidth: 250 }}
        sm={4}
        xs={4}
        className="video-card"
      >
        <Card shadow="sm">
          <Card.Section>
            <Image
              src="https://source.unsplash.com/random"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <div style={{ display: "flex", maxWidth: "80%" }}>
              <Avatar
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                alt="it's me"
                size={"sm"}
                radius="xl"
                mr={"sm"}
                mt="xs"
              />
              <div>
                <Text weight={500} style={{ width: "100%" }}>
                  Video Title lorem hello hello
                </Text>
                <Text weight={300} style={{ width: "100%" }}>
                  Creator
                </Text>
                <Text weight={300} style={{ width: "100%", fontSize: "small" }}>
                  2.1M views . 1 year ago
                </Text>
              </div>
            </div>

            {/* <Badge color="pink" variant="light">
                  On Sale
                </Badge> */}
            <CardMenu />
          </Group>
        </Card>
      </Grid.Col>
      <Grid.Col
        style={{ maxWidth: 300, minWidth: 250 }}
        sm={4}
        xs={4}
        className="video-card"
      >
        <Card shadow="sm">
          <Card.Section>
            <Image
              src="https://source.unsplash.com/random"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <div style={{ display: "flex", maxWidth: "80%" }}>
              <Avatar
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                alt="it's me"
                size={"sm"}
                radius="xl"
                mr={"sm"}
                mt="xs"
              />
              <div>
                <Text weight={500} style={{ width: "100%" }}>
                  Video Title lorem hello hello
                </Text>
                <Text weight={300} style={{ width: "100%" }}>
                  Creator
                </Text>
                <Text weight={300} style={{ width: "100%", fontSize: "small" }}>
                  2.1M views . 1 year ago
                </Text>
              </div>
            </div>

            {/* <Badge color="pink" variant="light">
                  On Sale
                </Badge> */}
            <CardMenu />
          </Group>
        </Card>
      </Grid.Col>
      <Grid.Col
        style={{ maxWidth: 300, minWidth: 250 }}
        sm={4}
        xs={4}
        className="video-card"
      >
        <Card shadow="sm">
          <Card.Section>
            <Image
              src="https://source.unsplash.com/random"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <div style={{ display: "flex", maxWidth: "80%" }}>
              <Avatar
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                alt="it's me"
                size={"sm"}
                radius="xl"
                mr={"sm"}
                mt="xs"
              />
              <div>
                <Text weight={500} style={{ width: "100%" }}>
                  Video Title lorem hello hello
                </Text>
                <Text weight={300} style={{ width: "100%" }}>
                  Creator
                </Text>
                <Text weight={300} style={{ width: "100%", fontSize: "small" }}>
                  2.1M views . 1 year ago
                </Text>
              </div>
            </div>

            {/* <Badge color="pink" variant="light">
                  On Sale
                </Badge> */}
            <CardMenu />
          </Group>
        </Card>
      </Grid.Col>
      <Grid.Col
        style={{ maxWidth: 300, minWidth: 250 }}
        sm={4}
        xs={4}
        className="video-card"
      >
        <Card shadow="sm">
          <Card.Section>
            <Image
              src="https://source.unsplash.com/random"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <div style={{ display: "flex", maxWidth: "80%" }}>
              <Avatar
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                alt="it's me"
                size={"sm"}
                radius="xl"
                mr={"sm"}
                mt="xs"
              />
              <div>
                <Text weight={500} style={{ width: "100%" }}>
                  Video Title lorem hello hello
                </Text>
                <Text weight={300} style={{ width: "100%" }}>
                  Creator
                </Text>
                <Text weight={300} style={{ width: "100%", fontSize: "small" }}>
                  2.1M views . 1 year ago
                </Text>
              </div>
            </div>

            {/* <Badge color="pink" variant="light">
                  On Sale
                </Badge> */}
            <CardMenu />
          </Group>
        </Card>
      </Grid.Col>
      <Grid.Col
        style={{ maxWidth: 300, minWidth: 250 }}
        sm={4}
        xs={4}
        className="video-card"
      >
        <Card shadow="sm">
          <Card.Section>
            <Image
              src="https://source.unsplash.com/random"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <div style={{ display: "flex", maxWidth: "80%" }}>
              <Avatar
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                alt="it's me"
                size={"sm"}
                radius="xl"
                mr={"sm"}
                mt="xs"
              />
              <div>
                <Text weight={500} style={{ width: "100%" }}>
                  Video Title lorem hello hello
                </Text>
                <Text weight={300} style={{ width: "100%" }}>
                  Creator
                </Text>
                <Text weight={300} style={{ width: "100%", fontSize: "small" }}>
                  2.1M views . 1 year ago
                </Text>
              </div>
            </div>

            {/* <Badge color="pink" variant="light">
                  On Sale
                </Badge> */}
            <CardMenu />
          </Group>
        </Card>
      </Grid.Col>
      <Grid.Col
        style={{ maxWidth: 300, minWidth: 250 }}
        sm={4}
        xs={4}
        className="video-card"
      >
        <Card shadow="sm">
          <Card.Section>
            <Image
              src="https://source.unsplash.com/random"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <div style={{ display: "flex", maxWidth: "80%" }}>
              <Avatar
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                alt="it's me"
                size={"sm"}
                radius="xl"
                mr={"sm"}
                mt="xs"
              />
              <div>
                <Text weight={500} style={{ width: "100%" }}>
                  Video Title lorem hello hello
                </Text>
                <Text weight={300} style={{ width: "100%" }}>
                  Creator
                </Text>
                <Text weight={300} style={{ width: "100%", fontSize: "small" }}>
                  2.1M views . 1 year ago
                </Text>
              </div>
            </div>

            {/* <Badge color="pink" variant="light">
                  On Sale
                </Badge> */}
            <CardMenu />
          </Group>
        </Card>
      </Grid.Col>
      <Grid.Col
        style={{ maxWidth: 300, minWidth: 250 }}
        sm={4}
        xs={4}
        className="video-card"
      >
        <Card shadow="sm">
          <Card.Section>
            <Image
              src="https://source.unsplash.com/random"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <div style={{ display: "flex", maxWidth: "80%" }}>
              <Avatar
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                alt="it's me"
                size={"sm"}
                radius="xl"
                mr={"sm"}
                mt="xs"
              />
              <div>
                <Text weight={500} style={{ width: "100%" }}>
                  Video Title lorem hello hello
                </Text>
                <Text weight={300} style={{ width: "100%" }}>
                  Creator
                </Text>
                <Text weight={300} style={{ width: "100%", fontSize: "small" }}>
                  2.1M views . 1 year ago
                </Text>
              </div>
            </div>

            {/* <Badge color="pink" variant="light">
                  On Sale
                </Badge> */}
            <CardMenu />
          </Group>
        </Card>
      </Grid.Col>
      <Grid.Col
        style={{ maxWidth: 300, minWidth: 250 }}
        sm={4}
        xs={4}
        className="video-card"
      >
        <Card shadow="sm">
          <Card.Section>
            <Image
              src="https://source.unsplash.com/random"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <div style={{ display: "flex", maxWidth: "80%" }}>
              <Avatar
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                alt="it's me"
                size={"sm"}
                radius="xl"
                mr={"sm"}
                mt="xs"
              />
              <div>
                <Text weight={500} style={{ width: "100%" }}>
                  Video Title lorem hello hello
                </Text>
                <Text weight={300} style={{ width: "100%" }}>
                  Creator
                </Text>
                <Text weight={300} style={{ width: "100%", fontSize: "small" }}>
                  2.1M views . 1 year ago
                </Text>
              </div>
            </div>

            {/* <Badge color="pink" variant="light">
                  On Sale
                </Badge> */}
            <CardMenu />
          </Group>
        </Card>
      </Grid.Col>
      <Grid.Col
        style={{ maxWidth: 300, minWidth: 250 }}
        sm={4}
        xs={4}
        className="video-card"
      >
        <Card shadow="sm">
          <Card.Section>
            <Image
              src="https://source.unsplash.com/random"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <div style={{ display: "flex", maxWidth: "80%" }}>
              <Avatar
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                alt="it's me"
                size={"sm"}
                radius="xl"
                mr={"sm"}
                mt="xs"
              />
              <div>
                <Text weight={500} style={{ width: "100%" }}>
                  Video Title lorem hello hello
                </Text>
                <Text weight={300} style={{ width: "100%" }}>
                  Creator
                </Text>
                <Text weight={300} style={{ width: "100%", fontSize: "small" }}>
                  2.1M views . 1 year ago
                </Text>
              </div>
            </div>

            {/* <Badge color="pink" variant="light">
                  On Sale
                </Badge> */}
            <CardMenu />
          </Group>
        </Card>
      </Grid.Col>
      <Grid.Col
        style={{ maxWidth: 300, minWidth: 250 }}
        sm={4}
        xs={4}
        className="video-card"
      >
        <Card shadow="sm">
          <Card.Section>
            <Image
              src="https://source.unsplash.com/random"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <div style={{ display: "flex", maxWidth: "80%" }}>
              <Avatar
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                alt="it's me"
                size={"sm"}
                radius="xl"
                mr={"sm"}
                mt="xs"
              />
              <div>
                <Text weight={500} style={{ width: "100%" }}>
                  Video Title lorem hello hello
                </Text>
                <Text weight={300} style={{ width: "100%" }}>
                  Creator
                </Text>
                <Text weight={300} style={{ width: "100%", fontSize: "small" }}>
                  2.1M views . 1 year ago
                </Text>
              </div>
            </div>

            {/* <Badge color="pink" variant="light">
                  On Sale
                </Badge> */}
            <CardMenu />
          </Group>
        </Card>
      </Grid.Col>
      <Grid.Col
        style={{ maxWidth: 300, minWidth: 250 }}
        sm={4}
        xs={4}
        className="video-card"
      >
        <Card shadow="sm">
          <Card.Section>
            <Image
              src="https://source.unsplash.com/random"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <div style={{ display: "flex", maxWidth: "80%" }}>
              <Avatar
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                alt="it's me"
                size={"sm"}
                radius="xl"
                mr={"sm"}
                mt="xs"
              />
              <div>
                <Text weight={500} style={{ width: "100%" }}>
                  Video Title lorem hello hello
                </Text>
                <Text weight={300} style={{ width: "100%" }}>
                  Creator
                </Text>
                <Text weight={300} style={{ width: "100%", fontSize: "small" }}>
                  2.1M views . 1 year ago
                </Text>
              </div>
            </div>

            {/* <Badge color="pink" variant="light">
                  On Sale
                </Badge> */}
            <CardMenu />
          </Group>
        </Card>
      </Grid.Col>
      <Grid.Col
        style={{ maxWidth: 300, minWidth: 250 }}
        sm={4}
        xs={4}
        className="video-card"
      >
        <Card shadow="sm">
          <Card.Section>
            <Image
              src="https://source.unsplash.com/random"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <div style={{ display: "flex", maxWidth: "80%" }}>
              <Avatar
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                alt="it's me"
                size={"sm"}
                radius="xl"
                mr={"sm"}
                mt="xs"
              />
              <div>
                <Text weight={500} style={{ width: "100%" }}>
                  Video Title lorem hello hello
                </Text>
                <Text weight={300} style={{ width: "100%" }}>
                  Creator
                </Text>
                <Text weight={300} style={{ width: "100%", fontSize: "small" }}>
                  2.1M views . 1 year ago
                </Text>
              </div>
            </div>

            {/* <Badge color="pink" variant="light">
                  On Sale
                </Badge> */}
            <CardMenu />
          </Group>
        </Card>
      </Grid.Col>
      <Grid.Col
        style={{ maxWidth: 300, minWidth: 250 }}
        sm={4}
        xs={4}
        className="video-card"
      >
        <Card shadow="sm">
          <Card.Section>
            <Image
              src="https://source.unsplash.com/random"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <div style={{ display: "flex", maxWidth: "80%" }}>
              <Avatar
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                alt="it's me"
                size={"sm"}
                radius="xl"
                mr={"sm"}
                mt="xs"
              />
              <div>
                <Text weight={500} style={{ width: "100%" }}>
                  Video Title lorem hello hello
                </Text>
                <Text weight={300} style={{ width: "100%" }}>
                  Creator
                </Text>
                <Text weight={300} style={{ width: "100%", fontSize: "small" }}>
                  2.1M views . 1 year ago
                </Text>
              </div>
            </div>

            {/* <Badge color="pink" variant="light">
                  On Sale
                </Badge> */}
            <CardMenu />
          </Group>
        </Card>
      </Grid.Col>
      <Grid.Col
        style={{ maxWidth: 300, minWidth: 250 }}
        sm={4}
        xs={4}
        className="video-card"
      >
        <Card shadow="sm">
          <Card.Section>
            <Image
              src="https://source.unsplash.com/random"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <div style={{ display: "flex", maxWidth: "80%" }}>
              <Avatar
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                alt="it's me"
                size={"sm"}
                radius="xl"
                mr={"sm"}
                mt="xs"
              />
              <div>
                <Text weight={500} style={{ width: "100%" }}>
                  Video Title lorem hello hello
                </Text>
                <Text weight={300} style={{ width: "100%" }}>
                  Creator
                </Text>
                <Text weight={300} style={{ width: "100%", fontSize: "small" }}>
                  2.1M views . 1 year ago
                </Text>
              </div>
            </div>

            {/* <Badge color="pink" variant="light">
                  On Sale
                </Badge> */}
            <CardMenu />
          </Group>
        </Card>
      </Grid.Col>
      <Grid.Col
        style={{ maxWidth: 300, minWidth: 250 }}
        sm={4}
        xs={4}
        className="video-card"
      >
        <Card shadow="sm">
          <Card.Section>
            <Image
              src="https://source.unsplash.com/random"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <div style={{ display: "flex", maxWidth: "80%" }}>
              <Avatar
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                alt="it's me"
                size={"sm"}
                radius="xl"
                mr={"sm"}
                mt="xs"
              />
              <div>
                <Text weight={500} style={{ width: "100%" }}>
                  Video Title lorem hello hello
                </Text>
                <Text weight={300} style={{ width: "100%" }}>
                  Creator
                </Text>
                <Text weight={300} style={{ width: "100%", fontSize: "small" }}>
                  2.1M views . 1 year ago
                </Text>
              </div>
            </div>

            {/* <Badge color="pink" variant="light">
                  On Sale
                </Badge> */}
            <CardMenu />
          </Group>
        </Card>
      </Grid.Col>
      <Grid.Col
        style={{ maxWidth: 300, minWidth: 250 }}
        sm={4}
        xs={4}
        className="video-card"
      >
        <Card shadow="sm">
          <Card.Section>
            <Image
              src="https://source.unsplash.com/random"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <div style={{ display: "flex", maxWidth: "80%" }}>
              <Avatar
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                alt="it's me"
                size={"sm"}
                radius="xl"
                mr={"sm"}
                mt="xs"
              />
              <div>
                <Text weight={500} style={{ width: "100%" }}>
                  Video Title lorem hello hello
                </Text>
                <Text weight={300} style={{ width: "100%" }}>
                  Creator
                </Text>
                <Text weight={300} style={{ width: "100%", fontSize: "small" }}>
                  2.1M views . 1 year ago
                </Text>
              </div>
            </div>

            {/* <Badge color="pink" variant="light">
                  On Sale
                </Badge> */}
            <CardMenu />
          </Group>
        </Card>
      </Grid.Col>
    </Grid>
  );

}
export { VideoCard };