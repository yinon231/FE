import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";
import { useState, useEffect } from "react";
import { deleteDonation, getDonations } from "../services/service";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

const Home = () => {
  const [donations, setDonations] = useState([]);
  const delDonation = async (id) => {
    await deleteDonation(id);
    const data = await getDonations();
    setDonations(data);
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDonations();
      setDonations(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>List of donations</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>name</TableCell>
              <TableCell>email</TableCell>
              <TableCell>amount</TableCell>
              <TableCell>date</TableCell>
              <TableCell>status</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {donations &&
              donations.map((donation) => (
                <TableRow key={donation._id}>
                  <TableCell>{donation.donor.name}</TableCell>
                  <TableCell>{donation.donor.email}</TableCell>
                  <TableCell>{donation.amount}</TableCell>
                  <TableCell>{donation.date}</TableCell>
                  <TableCell>{donation.status}</TableCell>
                  <TableCell>
                    <Link to={`/UpdateDonation?id=${donation._id}`}>
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                    </Link>
                    <IconButton
                      onClick={() => {
                        delDonation(donation._id);
                      }}
                    >
                      <DeleteIcon sx={{ color: red[500] }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default Home;
