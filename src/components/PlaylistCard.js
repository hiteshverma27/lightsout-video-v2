import {
  Box,
  Card,
  Grid,
  Group,
  Image,
  Overlay,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { Playlist } from "tabler-icons-react";
import { useVideo } from "../contexts/VideoContext";

function PlaylistCard(item) {
  const theme = useMantineTheme();
  const { playlist } = useVideo();

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
      <Grid.Col style={{ maxWidth: 300, minWidth: 250 }} sm={4} xs={4}>
        <Card shadow="sm">
          <Card.Section>
            <Box className="playlist-card-image">
              <Overlay
                opacity={0.8}
                color="#000"
                zIndex={5}
                style={{
                  width: "40%",
                  height: "160px",
                  marginLeft: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  weight={600}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {item.videos.length}
                  <Playlist />
                </Text>
              </Overlay>

              <Image
                src="https://source.unsplash.com/random"
                height={160}
                alt="Norway"
              />
            </Box>
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <div style={{ display: "flex", maxWidth: "100%" }}>
              <div>
                <Text weight={500} style={{ width: "100%" }}>
                  {item[0].name}
                </Text>
                {/* <Text weight={300} style={{ width: "100%" }}>
                  Creator
                </Text> */}
                {/* <Text weight={300} style={{ width: "100%", fontSize: "small" }}>
                  2.1M views . 1 year ago
                </Text> */}
              </div>
            </div>

            {/* <Badge color="pink" variant="light">
                    On Sale
                  </Badge> */}
          </Group>
        </Card>
      </Grid.Col>
    </Grid>
  );
}

export { PlaylistCard };
