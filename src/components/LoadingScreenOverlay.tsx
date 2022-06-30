import { LoadingOverlay } from "@mantine/core";

 function Loading() {
  return (
    <LoadingOverlay
      loaderProps={{ size: "xl", color: "blue", variant: "bars" }}
      overlayOpacity={1}
      transitionDuration={0}
      visible={true}
    />
  );
}

export { Loading };