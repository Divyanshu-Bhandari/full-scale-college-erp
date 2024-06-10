import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import FacultyImage from "../../assets/FacultyImage.png";
import StudentImage from "../../assets/StudentImage.png";
import FeesImage from "../../assets/FeesImage.png";
import CourseImage from "../../assets/CourseImage.png";

function AdminBody() {
  const [totalFaculties, setTotalFaculties] = useState(0);
  const [totalStudents, setTotalStudents] = useState(0);
  const [totalCourse, setTotalCourse] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5173/api/faculty/")
      .then((response) => response.json())
      .then((data) => {
        setTotalFaculties(data.length);
      })
      .catch((error) => console.error("Error fetching faculties:", error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5173/api/students/")
      .then((response) => response.json())
      .then((data) => {
        setTotalStudents(data.length);
      })
      .catch((error) => console.error("Error fetching students:", error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5173/api/courses/")
      .then((response) => response.json())
      .then((data) => {
        setTotalCourse(data.length);
      })
      .catch((error) => console.error("Error fetching faculties:", error));
  }, []);

  return (
    <div className="d-flex align-items-center justify-content-center">
      <div>
        <div className="d-flex mt-5 mx-5">
          {/* Students Card */}
          <Link
            to={"/admin/dashboard/manage-students"}
            data-mdb-tooltip-init
            title="Manage Students"
            className="text-decoration-none"
          >
            <Card
              className="m-3 p-4 shadow"
              style={{ width: "18rem" }}
              onMouseEnter={(e) => e.target.classList.add('shadow-lg')}
              onMouseLeave={(e) => e.target.classList.remove('shadow-lg')}
            >
              <div className="d-flex">
                <Card.Img
                  className="p-0"
                  variant="top"
                  src={StudentImage}
                  style={{ width: "7rem", height: "7rem", borderRadius: "50%" }}
                />
                <Card.Body className="d-flex align-items-center">
                  <div>
                    <Card.Title>Students</Card.Title>
                    <Card.Text>{totalStudents}</Card.Text>
                  </div>
                </Card.Body>
              </div>
            </Card>
          </Link>

          {/* Faculty Card */}
          <Link to={"/admin/dashboard/manage-faculty"}
            data-mdb-tooltip-init
            title="Manage Faculty"
            className="text-decoration-none"
          >
            <Card
              className="m-3 p-4 shadow"
              style={{ width: "18rem" }}
              onMouseEnter={(e) => e.target.classList.add('shadow-lg')}
              onMouseLeave={(e) => e.target.classList.remove('shadow-lg')}
            >
              <div className="d-flex">
                <Card.Img
                  className="p-0"
                  variant="top"
                  src={FacultyImage}
                  style={{ width: "7rem", height: "7rem", borderRadius: "50%" }}
                />
                <Card.Body className="d-flex align-items-center">
                  <div>
                    <Card.Title>Faculty</Card.Title>
                    <Card.Text>{totalFaculties}</Card.Text>
                  </div>
                </Card.Body>
              </div>
            </Card>
          </Link>
        </div>

        <div className="d-flex mx-5">
          <Card
            className="m-3 p-4 shadow"
            style={{ width: "18rem" }}
            role="button"
            onMouseEnter={(e) => e.target.classList.add('shadow-lg')}
            onMouseLeave={(e) => e.target.classList.remove('shadow-lg')}

          >
            <div className="d-flex">
              <Card.Img
                className="p-0"
                variant="top"
                src={FeesImage}
                style={{ width: "7rem", height: "7rem", borderRadius: "50%" }}
              />
              <Card.Body className="d-flex align-items-center">
                <div>
                  <Card.Title>Fees</Card.Title>
                  <Card.Text>9845 $</Card.Text>
                </div>
              </Card.Body>
            </div>
          </Card>

          <Link to={"/admin/dashboard/manage-courses"}
            data-mdb-tooltip-init
            title="Manage Course"
            className="text-decoration-none"
          >
            <Card
              className="m-3 p-4 shadow"
              style={{ width: "18rem" }}
              role="button"
              onMouseEnter={(e) => e.target.classList.add('shadow-lg')}
              onMouseLeave={(e) => e.target.classList.remove('shadow-lg')}
            >
              <div className="d-flex">
                <Card.Img
                  className="p-0"
                  variant="top"
                  src={CourseImage}
                  style={{ width: "7rem", height: "7rem", borderRadius: "2%" }}
                />
                <Card.Body className="d-flex align-items-center">
                  <div>
                    <Card.Title>Courses</Card.Title>
                    <Card.Text>{totalCourse}</Card.Text>
                  </div>
                </Card.Body>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminBody;
