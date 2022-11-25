import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./Components/Common/ScrollToTop/ScrollToTop";
import Header from "./Components/Header/Header";
import Homepage from "./Components/Homepage/Homepage";
import JobPostForm from "./Components/JobPostForm/JobPostForm";
import JobsPage from "./Components/JobsPage/JobsPage";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import ProposalSubmit from "./Components/ProposalSubmit/ProposalSubmit";
import SignupForm from "./Components/Signup/components/SignupForm/SignupForm";
import Signup from "./Components/Signup/Signup";
import SingleJobPage from "./Components/SingleJobPage/SingleJobPage";

const App = () => {
  return (
    <Fragment>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup/:type" element={<SignupForm />} />
          <Route path="/signup/:type" element={<SignupForm />} />
          <Route path="/job-post" element={<JobPostForm />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/jobs/single-view/:jobId" element={<SingleJobPage />} />
          <Route path="/proposal-submit/:jobId" element={<ProposalSubmit />} />
          {/* <Route path="/freelancers" element={<FreeLancersPage />} /> */}
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;
