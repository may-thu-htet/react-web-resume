import React from "react";
import PaletteIcon from "@mui/icons-material/Palette";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import Tooltip from "@mui/material/Tooltip";
import "../css/hobby.css";
import { styled } from "@mui/material/styles";
import { useState } from "react";

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
  const [open, setOpen] = useState({
    palette: false,
    music: false,
    airport: false,
  });

  const handleToggle = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  return (
    <div className="hobby-container">
      <h4 className="hobby-title">Hobbies & Interests</h4>
      <div className="hobby-icons">
        <CustomTooltip
          title="Love to draw portraits, landscapes using different mediums"
          open={open.palette}
          onOpen={() => handleToggle("palette")}
          onClose={() => handleToggle("palette")}
          onClick={() => handleToggle("palette")}
          onTouchStart={() => handleToggle("palette")}
        >
          <PaletteIcon className="palette-icon" />
        </CustomTooltip>
        <CustomTooltip
          title="Listening to them makes me calm and focus"
          open={open.music}
          onOpen={() => handleToggle("music")}
          onClose={() => handleToggle("music")}
          onClick={() => handleToggle("music")}
          onTouchStart={() => handleToggle("music")}
        >
          <MusicNoteIcon className="musicnote-icon" />
        </CustomTooltip>
        <CustomTooltip
          title="It broadens my perspectives, strengthens adaptability and resilience"
          open={open.airport}
          onOpen={() => handleToggle("airport")}
          onClose={() => handleToggle("airport")}
          onClick={() => handleToggle("airport")}
          onTouchStart={() => handleToggle("airport")}
        >
          <LocalAirportIcon className="airport-icon" />
        </CustomTooltip>
      </div>
    </div>
  );
}

export default Hobby;
