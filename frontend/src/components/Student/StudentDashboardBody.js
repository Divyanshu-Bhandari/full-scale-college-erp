import { Link } from "react-router-dom";
import { useState } from "react";

import Card from "react-bootstrap/Card";
import ManageProfileImage from "../../assets/ManageProfileImage.png";
import StudentFeesImage from "../../assets/StudentFeesImage.png";
import ViewAttendanceImage from "../../assets/ManageAttendanceImage.png";
import NoticeImage from "../../assets/NoticeImage.png";
import NoticeModal from "./modals/NoticeModal";

function StudentDashboardBody() {
    const [showNoticeModal, setShowNoticeModal] = useState(false);

    const handleShowNoticeModal = () => { setShowNoticeModal(true) };
    const handleCloseNoticeModal = () => { setShowNoticeModal(false) };

    return (
        <div className="d-flex justify-content-center">
            <div>
                <div className="d-flex mt-5 mx-5">
                    <Link
                        to={"/student/dashboard/manage-profile"}
                        data-mdb-tooltip-init
                        title="Click to edit your profile"
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
                                    src={ManageProfileImage}
                                    style={{ width: "7rem", height: "7rem", borderRadius: "50%" }}
                                />
                                <Card.Body className="d-flex align-items-center">
                                    <div>
                                        <Card.Title>Profile</Card.Title>
                                    </div>
                                </Card.Body>
                            </div>
                        </Card>
                    </Link>

                    <Link to={"/student/dashboard/view-attendance"}
                        data-mdb-tooltip-init
                        title="View Attendance"
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
                                    src={ViewAttendanceImage}
                                    style={{ width: "7rem", height: "7rem", borderRadius: "50%" }}
                                />
                                <Card.Body className="d-flex align-items-center">
                                    <div>
                                        <Card.Title>Attendance</Card.Title>
                                    </div>
                                </Card.Body>
                            </div>
                        </Card>
                    </Link>
                </div>

                <div className="d-flex mx-5">
                    <Link
                        data-mdb-tooltip-init
                        title="Current Fees"
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
                                    src={StudentFeesImage}
                                    style={{ width: "7rem", height: "7rem", borderRadius: "50%" }}
                                />
                                <Card.Body className="d-flex align-items-center">
                                    <div>
                                        <Card.Title>Fees</Card.Title>
                                        <Card.Text>899 $</Card.Text>
                                    </div>
                                </Card.Body>
                            </div>
                        </Card>
                    </Link>

                    <Card
                        className="m-3 p-4 shadow"
                        style={{ width: "18rem" }}
                        onMouseEnter={(e) => e.target.classList.add('shadow-lg')}
                        onMouseLeave={(e) => e.target.classList.remove('shadow-lg')}
                        onClick={handleShowNoticeModal}
                        role="button"
                    >
                        <div className="d-flex">
                            <Card.Img
                                className="p-0"
                                variant="top"
                                src={NoticeImage}
                                style={{ width: "7rem", height: "7rem", borderRadius: "50%" }}
                            />
                            <Card.Body className="d-flex align-items-center">
                                <div>
                                    <Card.Title>Notices</Card.Title>
                                </div>
                            </Card.Body>
                        </div>
                    </Card>
                </div>
                <NoticeModal show={showNoticeModal} handleClose={handleCloseNoticeModal} />
            </div>
        </div>
    )
}

export default StudentDashboardBody