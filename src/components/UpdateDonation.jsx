import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { updateDonation } from "../services/service";
import { useState } from "react";
import { useLocation } from "react-router-dom";
const UpdateDonation = () => {
  const [donation, setDonation] = useState(useLocation().state);
  const [email, setEmail] = useState(donation.donor.email);
  const [name, setName] = useState(donation.donor.name);
  const [amount, setAmount] = useState(donation.amount);
  const [status, setStatus] = useState(donation.status);
  const updateDon = async (event) => {
    event.preventDefault();
    const newDonation = {
      donor: { name: name, email: email },
      amount: amount,
      status: status,
    };
    setDonation(newDonation);
    updateDonation(donation._id, newDonation);
  };

  return (
    <div>
      <h1>Update Donation</h1>
      <form onSubmit={updateDon}>
        <Container id="flex-update" maxWidth="sm">
          <TextField
            defaultValue={donation.donor.name}
            id="outlined-basic"
            label="Enter name"
            variant="outlined"
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
            required
          />
          <TextField
            defaultValue={donation.donor.email}
            id="outlined-basic"
            label="Enter email"
            variant="outlined"
            type="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            required
          />
          <TextField
            defaultValue={donation.amount}
            id="outlined-basic"
            label="Enter amount"
            variant="outlined"
            type="number"
            onChange={(event) => {
              setAmount(event.target.value);
            }}
            required
          />
          <TextField
            defaultValue={donation.status}
            id="outlined-basic"
            label="Enter status"
            variant="outlined"
            type="text"
            onChange={(event) => {
              setStatus(event.target.value);
            }}
            required
          />
          <div id="flex-button">
            <Button type="submit" style={{ width: "30%" }} variant="contained">
              Submit
            </Button>
          </div>
        </Container>
      </form>
    </div>
  );
};
export default UpdateDonation;
