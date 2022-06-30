import { Menu, useMantineTheme } from "@mantine/core";
import { Clock, Playlist, Share, ThumbUp } from "tabler-icons-react";

 function CardMenu() {
  const theme = useMantineTheme();
  return (
    <Menu trigger="hover">
      <Menu.Item icon={<ThumbUp color={theme.colors.blue[6]} size={14} />}>
        Like
      </Menu.Item>
      <Menu.Item icon={<Clock size={14} />}>Save to watch later</Menu.Item>
      <Menu.Item icon={<Playlist size={14} />}>Add to playlist</Menu.Item>
      <Menu.Item icon={<Share size={14} />}>Share</Menu.Item>
    </Menu>
  );
}

export { CardMenu };
