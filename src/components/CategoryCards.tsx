import { Card, Grid, Image, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { categories } from "../backend/db/categories";

function CategoryCard() {
  const navigate = useNavigate();

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
      {categories.map((item) => (
        <Grid.Col
          style={{
            maxWidth: 300,
            minWidth: 250,
            alignSelf: "flex-start",
            cursor: "pointer",
          }}
          sm={4}
          xs={4}
          key={item._id}
          onClick={() => {
            navigate("/explore");
          }}
        >
          <Card shadow="sm" p="lg">
            <Card.Section>
              <Image src={item.image} height={160} alt={item.categoryName} />
            </Card.Section>
            <Text align="center" size="sm" my={"md"} weight="bold" style={{ lineHeight: 1.5 }}>
              {item.categoryName}
            </Text>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
}

export { CategoryCard };
