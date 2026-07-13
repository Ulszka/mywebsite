import React from "react";
import { certificateItems } from "./CertificatesListData";
import "./CertificatesList.scss";

const CertificatesList: React.FC = () => {
  return (
    <div className="certificate-div">
      {certificateItems.map((item, index) => (
        <div className="certificate-list-item" key={index}>
          <img src={item.image} alt={`icon-${index}`} className="certificate-pic" />
          <div className="certificateText">{item.text1}
            <div className="certificateText">{item.text2}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertificatesList;