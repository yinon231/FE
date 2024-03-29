import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Home";
import AddDonation from "../components/AddDonation";
import UpdateDonation from "../components/UpdateDonation";
import Donation from "../components/Donation";
import NotFound from "../components/NotFound";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/addDonation" element={<AddDonation />} />
          <Route path="/UpdateDonation/:id" element={<UpdateDonation />} />
          <Route path="/Donation" element={<Donation />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
export default AppRouter;
