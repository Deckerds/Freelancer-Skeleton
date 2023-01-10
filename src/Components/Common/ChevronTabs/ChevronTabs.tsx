import React from "react";
import { useMediaQuery } from "react-responsive";
import { Col } from "reactstrap";
import "./ChevronTabs.css";

interface ChevronTabsProps {
  activeTab: number;
  setActiveTab: (num: number) => void;
}

const ChevronTabs = ({ activeTab, setActiveTab }: ChevronTabsProps) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <Col md={12} className="breadcrumb-container">
      <Col
        id={`breadcrumb-start`}
        xs={3}
        md={3}
        onClick={() => setActiveTab(1)}
        className="breadcrumb"
      >
        <div className={`${activeTab === 1 && "active-tab-top"} skew-top`} />
        <span className={`${activeTab === 1 && "active-text"} span-text`}>
          {isMobile ? "View Job" : "View Job Post"}
        </span>
        <div
          className={`${activeTab === 1 && "active-tab-bottom"} skew-bottom`}
        />
      </Col>
      <Col
        xs={3}
        id={`breadcrumb-second`}
        md={3}
        onClick={() => setActiveTab(2)}
        className="breadcrumb"
      >
        <div className={`${activeTab === 2 && "active-tab-top"} skew-top`} />
        <span className={`${activeTab === 2 && "active-text"} span-text`}>
          {isMobile ? "Invite" : "Invite Freelancers"}
        </span>
        <div
          className={`${activeTab === 2 && "active-tab-bottom"} skew-bottom`}
        />
      </Col>
      <Col xs={3} md={3} onClick={() => setActiveTab(3)} className="breadcrumb">
        <div className={`${activeTab === 3 && "active-tab-top"} skew-top`} />
        <span className={`${activeTab === 3 && "active-text"} span-text`}>
          {isMobile ? "Review" : "Review Proposals"}
        </span>
        <div
          className={`${activeTab === 3 && "active-tab-bottom"} skew-bottom`}
        />
      </Col>
      <Col
        xs={3}
        id={`breadcrumb-end`}
        md={3}
        onClick={() => setActiveTab(4)}
        className="breadcrumb"
      >
        <div className={`${activeTab === 4 && "active-tab-top"} skew-top`} />
        <span className={`${activeTab === 4 && "active-text"} span-text`}>
          Hire
        </span>
        <div
          className={`${activeTab === 4 && "active-tab-bottom"} skew-bottom`}
        />
      </Col>
    </Col>
  );
};

export default ChevronTabs;
