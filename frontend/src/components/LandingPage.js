import React from 'react';
import { Link } from 'react-router-dom';
import LandingPageImage from '../assets/LandingPage.png';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

function LandingPage() {
  return (
    <div className="m-5 landing-page-container">
      <Image src={LandingPageImage} alt="College ERP" className="responsive landing-page-image img-fluid" rounded />

      <div className="landing-page-content d-inline-block m-4 text-center">
        <h1 className="landing-page-title">Welcome to College ERP System</h1>
        <p className="landing-page-description">A comprehensive solution for managing college operations</p>
        <Link to="/admin-faculty/login">
          <Button variant="success" size='lg' className="m-2 landing-page-button">Login as Admin/Faculty</Button>
        </Link>
        <Link to="/student/login">
          <Button variant="secondary" size='lg' className="m-2 landing-page-button">Login as Student</Button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
