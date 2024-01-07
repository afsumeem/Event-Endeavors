import React from "react";
import QRCode from "react-qr-code";

const Ticket = () => {
  const value = "afsana";
  return (
    <div>
      <h2>Print this page</h2>
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100px", width: "100px" }}
        value={value}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
};

export default Ticket;
