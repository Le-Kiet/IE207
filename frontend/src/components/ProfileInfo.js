import React from "react";
import { getInitials } from "../utils/helper";
import { Link } from "react-router-dom";
const ProfileInfo = ({ userInfo, onLogout }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "48px",
          height: "48px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(123, 120, 120, 0.5)",
          borderRadius: "50%",
          color: "#333",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        {getInitials(userInfo?.fullName)}
      </div>
      <div>
        <p style={{ fontSize: "16px", margin: "8px", textDecoration: "none" }}>
          {userInfo?.fullName}
        </p>
        <Link
          to="../login"
          style={{ textDecoration: "none" }}
          onClick={onLogout}
        >
          <button style={{ textDecoration: "underline", background: "red" }}>
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
};
export default ProfileInfo;
