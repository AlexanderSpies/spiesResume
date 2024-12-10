import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import WorkExp from "./layout/work";
import Profile from "./layout/profile";

function App() {
  return (
    <>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={6}
        p={4}
      >
        <GridItem colSpan={{ base: 1, md: 1 }}>
          <Profile />
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 2 }}>
          <WorkExp />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
