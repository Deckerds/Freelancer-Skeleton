import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { Col } from "reactstrap";

const HiresView = () => {
  const [tab, setTab] = useState("search");
  return (
    <Col md={12} className="border-container">
      <Col xs={12} md={12}>
        <Tabs
          activeKey={tab}
          onSelect={(tab) => setTab(tab)}
          defaultActiveKey="search"
          className="default-text mb-4 mx-3 my-3"
        >
          <Tab eventKey="search" title="Offers">
            <Col md={12} className="no-data">
              <p className="text-center">You don't have any offers yet</p>
              <p className="text-center light-gray default-text">
                Interview promising candidates and make them an offer.
              </p>
            </Col>
          </Tab>
          <Tab eventKey="hire" title="Hired">
            <Col md={12} className="no-data">
              <p className="text-center">You don't have any hires yet</p>
              <p className="text-center light-gray default-text">
                Interview promising candidates and make them an offer.
              </p>
            </Col>
          </Tab>
        </Tabs>
      </Col>
    </Col>
  );
};

export default HiresView;
