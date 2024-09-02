import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import homeLogo from "./../Assets/profile.png";
import SubscriptionDropdown from "./SubscriptionDropdown";
import 'bootstrap/dist/css/bootstrap.min.css';

function Profile() {
  return (
    <div style={styles.pageContainer}>
      <Container fluid>
        <Row>
          <Col md={8} className="home-header" style={styles.leftColumn}>
            <h1 className="heading-name">
              Edit
              <strong className="main-name"> TelePort </strong> plan
            </h1>
            <Table bordered hover variant="dark" style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.featureHeader}>Feature</th>
                  <th style={styles.planHeader}>Free</th>
                  <th style={styles.planHeader}>Moderate</th>
                  <th style={styles.planHeader}>High</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={styles.featureRow}>Connections</td>
                  <td>1</td>
                  <td>Up to 50</td>
                  <td>Up to 100</td>
                </tr>
                <tr>
                  <td style={styles.featureRow2}>Description</td>
                  <td>Allows just 1 connection at the same time for each URL</td>
                  <td>Allows up to 50 connections</td>
                  <td>Allows up to 100 connections</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </Table>
            <div style={styles.description}></div>
          </Col>

          <Col md={4} className="right-column" style={styles.rightColumn}>
            <img src={homeLogo} alt="Profile" style={styles.rightImage} />
            <div className="selectsubs" style={styles.selectsubs}>
              <SubscriptionDropdown />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const styles = {
  pageContainer: {
    marginTop: 50,
    backgroundColor: '#121212', // Dark mode background
    color: '#e0e0e0', // Light text color
    height: '100vh',
    padding: '20px',
  },
  leftColumn: {
    padding: "20px",
  },
  rightColumn: {
    textAlign: 'right',
    padding: '20px',
  },
  selectsubs: {
    marginTop: 50,
    marginLeft: 10,
  },
  rightImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
  },
  table: {
    marginTop:'10%',
    color: '#e0e0e0', // Light text color for table
    backgroundColor: '#1e1e1e', // Dark background for table
    padding: '30px', // Add padding to the table
  },
  planHeader: {
    color: '#9c27b0', // Purple color for plan names
    padding: '20px', // Add padding to table headers
    textAlign: 'center', // Center-align text in header cells
  },
  featureHeader: {
    color: '#e0e0e0', // Light color for feature header
    padding: '20px', // Add padding to table headers
    textAlign: 'center', // Center-align text in header cells
  },
  featureRow: {
    color: '#9e9e9e', // Gray color for feature rows
    padding: '20px', // Add padding to table cells
  },
  featureRow2: {
    color: '#9e9e9e', // Gray color for feature rows
    padding: '30px', // Add padding to table cells
  },
};

export default Profile;
