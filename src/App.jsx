import {
  Grid,
  GridItem,
} from "@chakra-ui/react";
import "./App.css";
import WorkExp from "./layout/work";
import Profile from "./layout/profile";

function App() {
  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)" gap="6">
        <GridItem colSpan={1}>
          <Profile/>
        </GridItem>
        <GridItem colSpan={2}>
         <WorkExp/>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
