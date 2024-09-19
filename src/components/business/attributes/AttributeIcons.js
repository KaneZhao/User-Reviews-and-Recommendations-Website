import React from "react";
import { Typography, Box } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import GroupIcon from "@mui/icons-material/Group";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import TvIcon from "@mui/icons-material/Tv";
import Grid from "@mui/material/Grid2";
import "./AttributeIcons.css";

// Map of attribute keys to icons
const iconMapping = {
  "Good for Kids": FamilyRestroomIcon,
  "Good for Groups": GroupIcon,
  "Has TV": TvIcon,
  "Outdoor Seating": OutdoorGrillIcon,
  Alcohol: LocalBarIcon,
  "Takes Reservations": CheckIcon,
};

const AttributeIcons = ({ attributes }) => {
  return (
    <Grid container spacing={2}>
      {Object.keys(attributes).map((attributeKey, index) => {
        const attributeValue = attributes[attributeKey];
        const IconComponent = iconMapping[attributeKey];
        // console.log("start");
        // console.log(attributeValue);
        // console.log("end");

        return (
          <Grid size={6} key={index}>
            <Box display="flex" alignItems="center">
              {/* Attribute Icon or ClearIcon */}
              {attributeValue === true && IconComponent ? (
                <IconComponent style={{ marginLeft: "8px" }} />
              ) : (
                <ClearIcon style={{ marginLeft: "8px" }} />
              )}

              {/* Attribute Text */}
              <Typography
                className={
                  attributeValue === true
                    ? "business-attributes-yes"
                    : "business-attributes-no"
                }
              >
                {attributeKey}
              </Typography>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default AttributeIcons;
