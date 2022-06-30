import {
  Avatar,
  Card,
  Grid,
  Group,
  Image,
  Text,
  useMantineTheme,
} from "@mantine/core";
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";
import { useNavigate } from "react-router-dom";
import { useVideo } from "../temp-context/VideoContext";
import { CardMenu } from "./CardMenu";

function VideoCard() {
  const theme = useMantineTheme();
  const { videos } = useVideo();
  const navigate = useNavigate()

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
      {videos.map(
        (item: {
          _id: Key;
          thumbnail: string;
          avatar: string;
          title:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | ReactFragment
            | ReactPortal;
          creator:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | ReactFragment
            | ReactPortal;
          views:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | ReactFragment
            | ReactPortal;
          duration:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | ReactFragment
            | ReactPortal;
        }) => (
          <Grid.Col
            style={{ maxWidth: 300, minWidth: 250 }}
            sm={4}
            xs={4}
            className="video-card"
            key={item._id}
          >
            <Card shadow="sm" onClick={()=>navigate(`/video/${item._id}`)}>
              <Card.Section>
                <Image src={item.thumbnail} height={160} alt="Norway" />
              </Card.Section>

              <Group
                position="apart"
                style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
              >
                <div style={{ display: "flex", maxWidth: "80%" }}>
                  <Avatar
                    src={item.avatar}
                    alt="it's me"
                    size={"sm"}
                    radius="xl"
                    mr={"sm"}
                    mt="xs"
                  />
                  <div>
                    <Text
                      weight={500}
                      style={{ width: "100%" }}
                      lineClamp={2}
                      align="left"
                    >
                      {item.title}
                    </Text>
                    <Text weight={300} style={{ width: "100%" }} align="left">
                      {item.creator}
                    </Text>
                    <Text
                      weight={300}
                      style={{ width: "100%", fontSize: "small" }}
                      align="left"
                    >
                      {item.views} . 1 year ago . {item.duration}
                    </Text>
                  </div>
                </div>
                <CardMenu />
              </Group>
            </Card>
          </Grid.Col>
        )
      )}
    </Grid>
  );
}
export { VideoCard };
