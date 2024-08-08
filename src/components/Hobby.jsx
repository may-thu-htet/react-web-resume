import React from "react";
import PaletteIcon from "@mui/icons-material/Palette";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import Tooltip from "@mui/material/Tooltip";
import "../css/hobby.css";
import { styled } from "@mui/material/styles";

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .MuiTooltip-tooltip`]: {
    backgroundColor: "#c1d7f9",
    boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
    color: "black",
    fontSize: theme.typography.pxToRem(14),
    border: "none",
    borderRadius: "5px",
    fontFamily: "Gupter",
    textAlign: "justify",
  },
}));

function Hobby() {
  return (
    <div className="hobby-container">
      <h4 className="hobby-title">Hobbies & Interests</h4>
      <div className="hobby-icons">
        <CustomTooltip
          title="Love to draw portraits, landscapes using different mediums"
          variant="outlined"
        >
          <PaletteIcon className="palette-icon" />
        </CustomTooltip>
        <CustomTooltip
          title="Listening to them makes me calm and focus"
          variant="outlined"
        >
          <MusicNoteIcon className="musicnote-icon" />
        </CustomTooltip>
        <CustomTooltip
          title="It broaden my perspectives, strengthen adaptability and resilience"
          variant="outlined"
        >
          <LocalAirportIcon className="airport-icon" />
        </CustomTooltip>
      </div>
    </div>
  );
}

export default Hobby;
