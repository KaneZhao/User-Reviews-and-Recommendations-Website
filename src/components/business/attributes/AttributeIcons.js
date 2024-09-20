import React from "react";
import { Box } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import GroupIcon from "@mui/icons-material/Group";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import Grid from "@mui/material/Grid2";
import "./AttributeIcons.css";

// Map of attribute keys to icons
const iconMapping = {
  "Good for Kids": FamilyRestroomIcon,
  "Good For Groups": GroupIcon,
  "Outdoor Seating": OutdoorGrillIcon,
  "Takes Reservations": CheckIcon,
  "Accepts Credit Cards": CreditCardIcon,
};

const AttributeIcons = ({ attributes }) => {
  return (
    <Grid container spacing={2}>
      {Object.keys(attributes).map((attributeKey, index) => {
        const attributeValue = attributes[attributeKey];
        const IconComponent = iconMapping[attributeKey];

        return (
          <Grid size={6} key={index}>
            <Box display="flex" alignItems="center">
              {/* Attribute Icon or ClearIcon */}
              {attributeValue === true && IconComponent ? (
                <IconComponent style={{ marginLeft: "8px" }} />
              ) : (
                <ClearIcon style={{ marginLeft: "8px", color: "gray" }} />
              )}

              {/* Attribute Text */}
              <span
                className={
                  attributeValue === true
                    ? "business-attributes-yes"
                    : "business-attributes-no"
                }
              >
                {attributeKey}
              </span>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default AttributeIcons;
