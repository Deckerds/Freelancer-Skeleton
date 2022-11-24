import React from "react";
import { Col } from "reactstrap";
import "./ChevronTabs.css";

interface ChevronTabsProps {
  activeTab: number;
  setActiveTab: (num: number) => void;
}

const ChevronTabs = ({ activeTab, setActiveTab }: ChevronTabsProps) => {
  return (
    <Col md={12} className="breadcrumb-container">
      <Col
        id={`breadcrumb-start`}
        md={3}
        onClick={() => setActiveTab(1)}
        className="breadcrumb"
      >
        <div className={`${activeTab === 1 && "active-tab-top"} skew-top`} />
        <span className={`${activeTab === 1 && "active-text"} span-text`}>
          View Job Post
        </span>
        <div
          className={`${activeTab === 1 && "active-tab-bottom"} skew-bottom`}
        />
      </Col>
      <Col
        id={`breadcrumb-second`}
        md={3}
        onClick={() => setActiveTab(2)}
        className="breadcrumb"
      >
        <div className={`${activeTab === 2 && "active-tab-top"} skew-top`} />
        <span className={`${activeTab === 2 && "active-text"} span-text`}>
          Invite Freelancers
        </span>
        <div
          className={`${activeTab === 2 && "active-tab-bottom"} skew-bottom`}
        />
      </Col>
      <Col md={3} onClick={() => setActiveTab(3)} className="breadcrumb">
        <div className={`${activeTab === 3 && "active-tab-top"} skew-top`} />
        <span className={`${activeTab === 3 && "active-text"} span-text`}>
          Review Proposals
        </span>
        <div
          className={`${activeTab === 3 && "active-tab-bottom"} skew-bottom`}
        />
      </Col>
      <Col
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
