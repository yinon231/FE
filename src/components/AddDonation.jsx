import "../style/style.css";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
const AddDonation = () => {
  return (
    <div>
      <h1>Add Donation</h1>
      <Container id="container" maxWidth="sm">
        <TextField
          id="outlined-basic"
          label="Enter full name"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Enter email" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Enter amount"
          variant="outlined"
        />
        <div id="flex-button">
          <Button style={{ width: "30%" }} variant="contained">
            Submit
          </Button>
        </div>
      </Container>
    </div>
  );
};
export default AddDonation;
