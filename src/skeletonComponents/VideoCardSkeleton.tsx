import { Box, Grid, Skeleton } from "@mantine/core";

function VideoCardSkeleton() {
  return (
    <>
      <Grid
        justify="center"
        style={{
          overflowX: "hidden",
          margin: "0",
        }}
        mt="md"
        grow
      >
        {"qwertyas".split("").map((i) => (
          <Box key={i}>
            <Skeleton height={160} width={280} m="sm" />
            <div style={{ display: "flex" }}>
              <Skeleton height={35} circle mb="xl" ml={"md"} />
              <div style={{ width: "80%" }}>
                <Skeleton height={12} width={"90%"} mb="sm" ml={"md"} />
                <Skeleton height={12} width={"90%"} mb="sm" ml={"md"} />
                <Skeleton height={12} width={"40%"} mb="sm" ml={"md"} />
                <Skeleton height={12} width={"40%"} mb="lg" ml={"md"} />
              </div>
            </div>
          </Box>
        ))}
      </Grid>
    </>
  );
}

export { VideoCardSkeleton };
