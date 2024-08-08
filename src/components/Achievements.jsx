import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../css/achievement.css";

function createData(date, achievement, link) {
  return { date, achievement, link };
}

const rows = [
  createData(
    "Jan 2024",
    "Understanding Personal Type at Work",
    "https://www.udemy.com/certificate/UC-797cd734-6c7e-4bc8-aff6-b078b6888f50/"
  ),
  createData(
    "Jan 2024",
    "Introduction of Machine Learning for Data Science",
    "https://www.udemy.com/certificate/UC-500a461f-0000-45c0-aeea-2bbfe0c3f9dc/"
  ),
  createData(
    "Sep 2023",
    "AWS certified Solution Architect - Associate",
    "https://www.credly.com/badges/a722a775-641c-4630-bb1a-8933840f2a3c/linked_in_profile"
  ),
  createData(
    "July 2022",
    "Vue - The Complete Guide (incl. Router & Composition API)",
    "https://www.udemy.com/certificate/UC-9a7d4eff-b3f9-4ae9-a22d-0913cc13d346/"
  ),
  createData(
    "Jun 2022",
    "Complete Web & Mobile Designer in 2022: UI/UX, Figma, +more",
    "https://www.udemy.com/certificate/UC-acc54eb7-4348-4da6-bda0-a62bf7bbd0fd/"
  ),
  createData(
    "Jun 2022",
    "Adobe Illustrator CC - Essential Training Course",
    "https://www.udemy.com/certificate/UC-23275dc8-9843-4c75-a7bc-77b4189c9f8a/"
  ),
  createData(
    "Apr 2022",
    "Google Project Management: Specialization",
    "https://www.coursera.org/account/accomplishments/specialization/certificate/EYTLW3M477MR"
  ),
  createData(
    "Feb 2022",
    "Foundations of User Experience (UX) Design",
    "https://www.coursera.org/account/accomplishments/certificate/PAP8TZ5UPFB3"
  ),
  createData(
    "Feb 2022",
    "Digital Transformation Using AI/ML with Google Cloud Specialization",
    "https://www.coursera.org/account/accomplishments/specialization/certificate/FB4CFS7J3JAC"
  ),
];

function Achievements() {
  return (
    <div className="achievement-container">
      <h4 className="achievement-title">Achievements</h4>
      <TableContainer component={Paper} className="table-container">
        <Table
          sx={{ minWidth: 650 }}
          aria-label="simple table"
          className="table"
        >
          <TableHead className="table-head">
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Gupter, serif",
                  fontSize: "large",
                }}
              >
                Date
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Gupter, serif",
                  fontSize: "large",
                }}
              >
                Achievements
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.date}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&:hover": { backgroundColor: "#d5b5f4" },
                }}
              >
                <TableCell
                  sx={{ fontFamily: "Gupter, serif", fontSize: "large" }}
                >
                  {row.date}
                </TableCell>
                <TableCell
                  sx={{ fontFamily: "Gupter, serif", fontSize: "large" }}
                >
                  {" "}
                  <a href={row.link} target="_blank" rel="noopener noreferrer">
                    {row.achievement}
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Achievements;
