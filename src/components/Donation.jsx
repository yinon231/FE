/* eslint-disable react/prop-types */
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
const Donation = ({ donation, delDonation }) => {
  return (
    <tr>
      <td>{donation.donor.name}</td>
      <td>{donation.donor.email}</td>
      <td>{donation.amount}</td>
      <td>{donation.date}</td>
      <td>{donation.status}</td>
      <td id="buttons">
        <Link to={`/UpdateDonation/${donation._id}`} state={donation}>
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
      </td>
    </tr>
  );
};
export default Donation;
