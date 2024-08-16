import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../css/skills.css";
import { useMediaQuery } from "@mui/material";

function createData(sector, skills) {
  return { sector, skills };
}

const rows = [
  createData(
    "Frontend",
    "JavaScript, TypeScript, React.js, Vue.js, HTML, CSS, Bootstrap, MUI"
  ),
  createData(
    "Web Design",
    "UIUX Design, Figma, Adobe Illustrator, Material Design – Material UI, Customer Journey Map"
  ),
  createData("Backend", "Java, PostgreSQL, Spring Boot"),
  createData(
    "Infrastructure",
    "Amazon Web Services, EC2, S3, Lambda, Cloud Front CDN"
  ),
  createData("Leadership", "Project Management "),
  createData(
    "Languages",
    "English (Fluent), Japanese (Intermediate), Italian (Basic)"
  ),
  createData(
    "Engineering ",
    "AutoCAD, SolidWorks, Marine Structures, Hydrodynamics, Finite Element Analysis,Computational Fluid Dynamics, Maxsurf, Maestro, Ansys"
  ),
  createData(
    "Others",
    "Python, Microsoft office, Zoom, Slack, VS code, Eclipse, Jira, effective communication,teamwork, adaptability, flexibility"
  ),
];

function Skills() {
  const isSmallScreen = useMediaQuery("(max-width:768px)");
  return (
    <div className="skills-container">
      <h4 className="skills-title">Skills</h4>
      <TableContainer component={Paper}>
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
                  fontSize: isSmallScreen ? "medium" : "large",
                  "-webkit-text-size-adjust": "100%", // Prevent iOS scaling
                }}
              >
                Sector
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Gupter, serif",
                  fontSize: isSmallScreen ? "medium" : "large",
                  "-webkit-text-size-adjust": "100%", // Prevent iOS scaling
                }}
              >
                Skills
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.sector}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&:hover": { backgroundColor: "#d5b5f4" },
                }}
              >
                <TableCell
                  sx={{
                    fontFamily: "Gupter, serif",
                    fontSize: isSmallScreen ? "medium" : "large",
                    "-webkit-text-size-adjust": "100%", // Prevent iOS scaling
                  }}
                >
                  {row.sector}
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Gupter, serif",
                    fontSize: isSmallScreen ? "medium" : "large",
                    "-webkit-text-size-adjust": "100%", // Prevent iOS scaling
                  }}
                >
                  {" "}
                  {row.skills}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Skills;
