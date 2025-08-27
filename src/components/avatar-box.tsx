import React from "react";
import { Box } from "@mui/material";

interface AvatarBoxProps {
  imageUrl?: string; // dynamic image url (optional)
  width?: string;
  height?: string;
  borderRadius?: string;
  className?: string;
}

const AvatarBox: React.FC<AvatarBoxProps> = ({ imageUrl, width, height, borderRadius, className }) => {
  return (
    <Box
      className={className || ""}
      sx={{
        width: width || "40px",
        height: height || "40px",
        borderRadius: borderRadius || "0.25rem",
        backgroundImage: `url(${imageUrl || "/img/default-avatar.png"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

export default AvatarBox;
