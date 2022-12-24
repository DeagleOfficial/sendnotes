import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './ResponsiveAppBar';
import Hero from "./Hero";

import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import Item from "@mui/material";
import ActionAreaCard from './ActionAreaCard';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <div className="App"
    style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}
    >
      {/* <ResponsiveAppBar /> */}
      <Hero />

      <div style={{width: "80vw"}}>
      <TextField id="outlined-basic" label="Post something..." variant="outlined" fullWidth
      />
      </div>

      <br /> <br />


      <Box sx={{ width: '80%', display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Grid  container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs = {12} lg={4}
        style={{display: "flex", alignItems: "center", justifyContent: "center"}}
        >
          {/* <Item> */}
          <ActionAreaCard 
      image="https://pm1.narvii.com/6932/32c766d12a79106b6c4a4efa45cf6049f4eef6f4r1-1080-1226v2_hq.jpg"
      title="DSA Notes"
      desc="Automata Notes for CA3 exam. Covers all topics."
      />
          {/* </Item> */}
        </Grid>
        <Grid item xs = {12} lg={4}
        style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          {/* <Item> */}
          <ActionAreaCard 
      image="https://pm1.narvii.com/6932/32c766d12a79106b6c4a4efa45cf6049f4eef6f4r1-1080-1226v2_hq.jpg"
      title="Automata Notes"
      desc="Automata Notes for CA3 exam. Covers all topics."
      />
          {/* </Item> */}
        </Grid>
        <Grid item xs = {12} lg={4}
        style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          {/* <Item> */}
          <ActionAreaCard 
      image="https://pm1.narvii.com/6932/32c766d12a79106b6c4a4efa45cf6049f4eef6f4r1-1080-1226v2_hq.jpg"
      title="Networking Notes"
      desc="Automata Notes for CA3 exam. Covers all topics."
      />
          {/* </Item> */}
        </Grid>
        <Grid item xs = {12} lg={4}
        style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          {/* <Item> */}
          <ActionAreaCard 
      image="https://pm1.narvii.com/6932/32c766d12a79106b6c4a4efa45cf6049f4eef6f4r1-1080-1226v2_hq.jpg"
      title="Automata Notes"
      desc="Automata Notes for CA3 exam. Covers all topics."
      />
          {/* </Item> */}
        </Grid>
      </Grid>
    </Box>




      
    </div>
  );
}

export default App;
