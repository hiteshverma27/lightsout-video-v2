import {
  Avatar,
  Badge,
  Card,
  Grid,
  Group,
  Image,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";
import { useNavigate } from "react-router-dom";
import { useVideo } from "../contexts/VideoContext";

function VideoCard() {
  const theme = useMantineTheme();
  const { videos, categoriesToFilter, searchTerm } = useVideo();
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width: 425px)");
  const { setSingleVideo } = useVideo();

  return (
    <Grid
      justify="center"
      style={{
        overflowX: "hidden",
      }}
      mt="md"
      grow
    >
      {videos
        .filter((item: { category: any }) =>
          categoriesToFilter.length === 0
            ? item
            : categoriesToFilter.includes(item.category)
        )
        .filter((item: { title: string }) =>
          searchTerm.length === 0
            ? item
            : item.title.toLowerCase().includes(searchTerm)
        )
        .map(
          (item: {
            _id: string;
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
              style={{ maxWidth: matches ? 300 : "100%", minWidth: 250}}
              sm={4}
              xs={4}
              className="video-card"
              key={item._id}
              onClick={async () =>
                await setSingleVideo(
                  videos.filter((i: { _id: any }) => i._id === item._id)[0]
                )
              }
            >
              <Card
                shadow="sm"
                pb={0}
                onClick={() => navigate(`/video/${item._id}`)}
              >
                <Card.Section style={{position:"relative"}}>
                  <Badge radius={"xs"} color="dark" variant="filled" style={{position:"absolute", right:"0", zIndex:"10"}}>{item.duration}</Badge>
                  <Image
                    src={item.thumbnail}
                    height={matches ? 160 : 200}
                    alt="Norway"
                  >
                    
                  </Image>
                </Card.Section>

                <Group
                  position="apart"
                  style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
                  onClick={() => navigate(`/video/${item._id}`)}
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
                        {item.views}
                      </Text>
                    </div>
                  </div>
                </Group>
              </Card>
            </Grid.Col>
          )
        )}
    </Grid>
  );
}
export { VideoCard };
