import React, { Fragment, useState, useEffect, memo } from "react";
import { Col } from "reactstrap";
import ScreenFive from "./components/ScreenFive";
import ScreenFour from "./components/ScreenFour";
import ScreenOne from "./components/ScreenOne";
import ScreenSix from "./components/ScreenSix";
import ScreenThree from "./components/ScreenThree";
import ScreenTwo from "./components/ScreenTwo";
import "./JobPostForm.css";

const JobPostForm = () => {
  const [screen, setScreen] = useState<number>(1);
  const [title, setTitle] = useState<string>("Headline");
  const [mainHeading, setMainHeading] = useState<string>(
    "Let's start with a strong headline."
  );
  const [subHeading, setSubHeading] =
    useState(`This helps your job post stand out to the right candidates. It’s
  the first thing they’ll see, so make it count!`);

  const [header, setHeader] = useState("");
  const [category, setCategory] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [scope, setScope] = useState("");
  const [expertise, setExpertise] = useState("");
  const [budgetType, setBudgetType] = useState("");
  const [description, setDescription] = useState("");
  const [chips, setChips] = useState([
    { id: 1, name: "Graphic Design" },
    { id: 2, name: "Javascript" },
    { id: 3, name: "English" },
    { id: 4, name: "Adobe Photoshop" },
    { id: 5, name: "Logo Design" },
    { id: 6, name: "Fluent" },
    { id: 7, name: "English to Japanese" },
    { id: 8, name: "React" },
    { id: 9, name: "Angular" },
    { id: 10, name: "HTML" },
    { id: 11, name: "CSS" },
  ]);

  useEffect(() => {
    if (
      category === "Front-end development" ||
      category === "Full-stack development" ||
      category === "Mobile Development"
    ) {
      setChips([
        { id: 1, name: "React" },
        { id: 2, name: "JavaScript" },
        { id: 3, name: "Redux" },
        { id: 4, name: "CSS" },
        { id: 5, name: "HTML" },
        { id: 6, name: "TypeScript" },
        { id: 7, name: "NodeJS" },
      ]);
    } else if (
      category === "Graphic Design" ||
      category === "Image Editing" ||
      category === "Illustration"
    ) {
      setChips([
        { id: 1, name: "Graphic Design" },
        { id: 2, name: "Adobe Photoshop" },
        { id: 3, name: "Logo Design" },
        { id: 4, name: "Facebook" },
        { id: 4, name: "Adobe Illustrator" },
      ]);
    } else if (
      category === "Video Editing" ||
      category === "Video Production" ||
      category === "Videography"
    ) {
      setChips([
        { id: 1, name: "Video Editing" },
        { id: 2, name: "Video Production" },
        { id: 3, name: "Videography" },
        { id: 4, name: "Video Commercial" },
      ]);
    } else {
      setChips([
        { id: 1, name: "English" },
        { id: 2, name: "Proofreading" },
        { id: 3, name: "Content Writing" },
        { id: 4, name: "Writing" },
        { id: 4, name: "Fluent" },
        { id: 4, name: "English to Japanese" },
      ]);
    }
  }, [category]);

  const [selectedChips, setSelectedChips] = useState([]);
  const [budgetFrom, setBudgetFrom] = useState("");
  const [budgetTo, setBudgetTo] = useState("");
  const [singleBudget, setSingleBudget] = useState("");

  useEffect(() => {
    if (screen === 2) {
      setTitle("Skills");
      setMainHeading("What are the main skills required for your work?");
      setSubHeading("");
    }
    if (screen === 3) {
      setTitle("Scope");
      setMainHeading("Next, estimate the scope of your work.");
      setSubHeading(
        "Consider the size of your project and the time it will take."
      );
    }
    if (screen === 4) {
      setTitle("Budget");
      setMainHeading("Tell us about your budget");
      setSubHeading("This will help us match you to talent within your range.");
    }
    if (screen === 5) {
      setTitle("Budget");
      setMainHeading("Last step, start the conversation");
      setSubHeading(
        "Talent: Clear expectations about your task or deliverables"
      );
    }
  }, [screen]);

  return (
    <Fragment>
      <Col className="job-container">
        {screen < 6 && (
          <Col md={12} className="d-flex job-column">
            <Col xs={12} md={6} className="job-left-screen">
              {screen < 5 && (
                <div className="d-flex">
                  <p className="default-text light-gray me-4">{`${screen}/4`}</p>
                  <p className="default-text light-gray">{title}</p>
                </div>
              )}
              <h3 style={{ color: "#13544e", fontSize: "2.25rem" }}>
                {mainHeading}
              </h3>

              <p className="default-text light-gray mt-3">{subHeading}</p>
            </Col>

            {screen === 1 && (
              <ScreenOne
                setScreen={setScreen}
                header={header}
                setHeader={setHeader}
                setCategory={setCategory}
                category={category}
              />
            )}
            {screen === 2 && (
              <ScreenTwo
                setScreen={setScreen}
                chips={chips}
                setChips={setChips}
                selectedChips={selectedChips}
                setSelectedChips={setSelectedChips}
              />
            )}
            {screen === 3 && (
              <ScreenThree
                setScreen={setScreen}
                selectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
                scope={scope}
                setScope={setScope}
                expertise={expertise}
                setExpertise={setExpertise}
              />
            )}
            {screen === 4 && (
              <ScreenFour
                setScreen={setScreen}
                setBudgetFrom={setBudgetFrom}
                budgetFrom={budgetFrom}
                setBudgetTo={setBudgetTo}
                budgetTo={budgetTo}
                setSingleBudget={setSingleBudget}
                singleBudget={singleBudget}
                setBudgetType={setBudgetType}
                budgetType={budgetType}
              />
            )}
            {screen === 5 && (
              <ScreenFive
                setScreen={setScreen}
                header={header}
                setHeader={setHeader}
                description={description}
                setDescription={setDescription}
              />
            )}
          </Col>
        )}
        {screen === 6 && (
          <ScreenSix
            setScreen={setScreen}
            header={header}
            description={description}
            selectedChips={selectedChips}
            selectedValue={selectedValue}
            scope={scope}
            expertise={expertise}
            budgetType={budgetType}
            budgetFrom={budgetFrom}
            budgetTo={budgetTo}
            singleBudget={singleBudget}
            category={category}
          />
        )}
      </Col>
    </Fragment>
  );
};

export default memo(JobPostForm);
