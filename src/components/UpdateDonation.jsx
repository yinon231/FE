import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { updateDonation } from "../services/service";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const UpdateDonation = () => {
  const { _id } = useLocation().state;
  const navigate = useNavigate();
  const [donation, setDonation] = useState(useLocation().state);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
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
    const res = await updateDonation(_id, newDonation);

    if (Object.keys(res).length > 0) {
      setSuccess(true);
      if (error) setError(false);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <h1>Update Donation</h1>
      <form onSubmit={updateDon}>
        <Container maxWidth="sm" className="flex-form">
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
          {success && (
            <div className="alert alert-success" role="alert">
              donation updated successfully
            </div>
          )}
          {error && (
            <div className="alert alert-danger" role="alert">
              donation updated failed
            </div>
          )}
        </Container>
      </form>
    </div>
  );
};
export default UpdateDonation;
