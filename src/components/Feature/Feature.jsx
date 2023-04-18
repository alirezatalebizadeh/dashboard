import React from "react";
import "./Feature.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
export default function Feature() {
  return (
    <>
      <div className="features">
        <div className="featuresItem">
          <span className="featuresTitle">Revanue</span>
          <div className="featuresContainer">
            <span className="featureMoney">$3125</span>
            <span className="featureRate">
              -11.4 <ArrowDownwardIcon className="featueIcon  negetive" />
            </span>
          </div>
          <span className="featureSub">Compared to last month</span>
        </div>

        <div className="featuresItem">
          <span className="featuresTitle">Sales</span>
          <div className="featuresContainer">
            <span className="featureMoney">$2510</span>
            <span className="featureRate">
              +8.25 <ArrowUpwardIcon className="featueIcon " />
            </span>
          </div>
          <span className="featureSub">Compared to last month</span>
        </div>

        <div className="featuresItem">
          <span className="featuresTitle">Cost</span>
          <div className="featuresContainer">
            <span className="featureMoney">$2451</span>
            <span className="featureRate">
              -11.4 <ArrowDownwardIcon className="featueIcon  negetive" />
            </span>
          </div>
          <span className="featureSub">Compared to last month</span>
        </div>
      </div>
    </>
  );
}
