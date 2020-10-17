import React from "react";

const Ship = (props) => {
  const styleUpper =
    props.class[0] === "1"
      ? "compartments-upper primera"
      : "compartments-upper";
  const styleLower =
    props.class[0] === "2"
      ? "compartments-lower segunda"
      : "compartments-lower";
  const styleHull = props.class[0] === "3" ? "hull tercera" : "hull";

  return (
    <div className="boat">
      <div id="wholeship">
        <div id="ship-container">
          <div className="ship">
            <div className="smokestack ss1">
              <div className="smoke smoke1"></div>
            </div>
            <div className="smokestack ss2">
              <div className="smoke smoke2"></div>
            </div>
            <div className="smokestack ss3">
              <div className="smoke smoke3"></div>
            </div>
            <div className="smokestack ss4">
              <div className="smoke smoke4"></div>
            </div>
            <div className="deck">
              <div className={styleLower}>
                <div className="door d1"></div>
                <div className="door d2"></div>
                <div className="door d3"></div>
                <div className="door d4"></div>
                <div className="door d5"></div>
                <div className="door d6"></div>
                <div className="door d7"></div>
                <div className="door d8"></div>
                <div className="door d9"></div>
                <div className="door d10"></div>
                <div className="door d11"></div>
                <div className="door d12"></div>
                <div className="door d13"></div>
              </div>
              <div className={styleUpper}>
                <div className="cph cp1"></div>
                <div className="cph cp2"></div>
                <div className="cph cp3"></div>
                <div className="cph cp4"></div>
                <div className="cph cp5"></div>
                <div className="cph cp6"></div>
                <div className="cph cp7"></div>
                <div className="cph cp8"></div>
                <div className="cph cp9"></div>
                <div className="cph cp10"></div>
                <div className="cph cp11"></div>
                <div className="cph cp12"></div>
              </div>
              <div className="roof"></div>
            </div>
            <div className={styleHull}>
              <div className="hull-top">
                <div className="porthole p1"></div>
                <div className="porthole p2"></div>
                <div className="porthole p3"></div>
                <div className="porthole p4"></div>
                <div className="porthole p5"></div>
                <div className="porthole p6"></div>
                <div className="porthole p7"></div>
                <div className="porthole p8"></div>
                <div className="porthole p9"></div>
                <div className="porthole p10"></div>
                <div className="porthole p11"></div>
                <div className="porthole p12"></div>
                <div className="porthole p13"></div>
                <div className="porthole p14"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ship;
