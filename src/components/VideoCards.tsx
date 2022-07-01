import {
  Avatar,
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
  const { videos, categoriesToFilter } = useVideo();
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width: 425px)");
  const { setSingleVideo } = useVideo();

  // const likeButtonHandler = async (video: {
  //   _id: Key;
  //   thumbnail: string;
  //   avatar: string;
  //   title:
  //     | string
  //     | number
  //     | boolean
  //     | ReactFragment
  //     | ReactPortal
  //     | ReactElement<any, string | JSXElementConstructor<any>>;
  //   creator:
  //     | string
  //     | number
  //     | boolean
  //     | ReactFragment
  //     | ReactPortal
  //     | ReactElement<any, string | JSXElementConstructor<any>>;
  //   views:
  //     | string
  //     | number
  //     | boolean
  //     | ReactFragment
  //     | ReactPortal
  //     | ReactElement<any, string | JSXElementConstructor<any>>;
  //   duration:
  //     | string
  //     | number
  //     | boolean
  //     | ReactFragment
  //     | ReactPortal
  //     | ReactElement<any, string | JSXElementConstructor<any>>;
  // }) => {
  //   const addToLikedVideos = async (video: any) => {
  //     try {
  //       const likedVideos = await axios.post(
  //         `/api/user/likes`,
  //         { video },
  //         {
  //           headers: { authorization: token },
  //         }
  //       );
  //       successToast("Video added to liked videos!");
  //       setLikedVideos(likedVideos.data.likes);
  //     } catch (error) {
  //       errorToast("Something went wrong while adding video to liked videos!");
  //     }
  //   };

  //   const removeFromLikedVideos = async (video: { _id: any }) => {
  //     try {
  //       const likedVideos = await axios.delete(`/api/user/likes/${video._id}`, {
  //         headers: { authorization: token },
  //       });
  //       successToast("Video removed from liked videos!");
  //       setLikedVideos(likedVideos.data.likes);
  //     } catch (error) {
  //       errorToast("Something went wrong!");
  //     }
  //   };
  //   isAuthenticated
  //     ? videoIsLiked
  //       ? removeFromLikedVideos(video)
  //       : addToLikedVideos(video)
  //     : ifNotAuthenticated();
  // };
  // const ifNotAuthenticated = () => {
  //   setAuthModalOpned(true);
  //   warningToast("You must be logged in!");
  // };
  // useEffect(
  //   () =>
  //     likedVideos.filter((item: { _id: any }) => item._id === currentVideoId)
  //       .length === 1
  //       ? setVideoIsLiked(true)
  //       : setVideoIsLiked(false),
  //   [likedVideos, currentVideoId]
  // );
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
              style={{ maxWidth: matches ? 300 : "100%", minWidth: 250 }}
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
              <Card shadow="sm" onClick={() => navigate(`/video/${item._id}`)}>
                <Card.Section >
                  <Image
                    src={item.thumbnail}
                    height={matches ? 160 : 200}
                    alt="Norway"
                  />
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
                        {item.views} . {item.duration}
                      </Text>
                    </div>
                  </div>
                </Group>
                {/* <Menu
                  trigger="hover"
                  style={{ position: "absolute", right: "10%", bottom: "20%" }}
                >
                  <Menu.Item
                    icon={<ThumbUp color={theme.colors.blue[6]} size={14} />}
                    onClick={() => {likeButtonHandler(item)
                    setCurrentVideoId(item._id)}}
                  >
                    {videoIsLiked ? "Liked" : "Like"}
                  </Menu.Item>
                  <Menu.Item icon={<Clock size={14} />}>
                    Save to watch later
                  </Menu.Item>
                  <Menu.Item icon={<Playlist size={14} />}>
                    Add to playlist
                  </Menu.Item>
                  <Menu.Item icon={<Share size={14} />}>Share</Menu.Item>
                </Menu> */}
              </Card>
            </Grid.Col>
          )
        )}
    </Grid>
  );
}
export { VideoCard };
