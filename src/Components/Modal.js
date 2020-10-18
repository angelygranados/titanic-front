import React from "react";
import closeIcon from "../assets/images/close-icon.png";
import shipIcon from "../assets/images/ship.png";
import twitterIcon from "../assets/images/twitter-icon.png";
import facebookIcon from "../assets/images/facebook.png";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div id="Modal" className={showHideClassName}>
      <div className="modal-main">
        <div onClick={handleClose} className="closeIcon">
          <img src={closeIcon} alt="close" />
        </div>
        <div className="modal__content">
          <img src={shipIcon} alt="barco" />
          {children}
          <div className="social">
            <button
              id="twitter"
              className="modal-btn twitter"
              data-sharer="twitter"
              data-title="I traveled on the Titanic, try yourself"
              data-hashtags="awesome, machinelearning, app"
              data-url="https://titanic-front.vercel.app/"
            >
              <img src={twitterIcon} alt="Twitter" />
            </button>
            <button
              id="facebook"
              className="modal-btn facebook"
              data-sharer="facebook"
              data-hashtag="machinelearning, app"
              data-url="https://titanic-front.vercel.app/"
            >
              <img src={facebookIcon} alt="Facebook" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
