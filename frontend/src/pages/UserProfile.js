import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./UserProfile.css";
import Combobox from "../components/Combobox";
import axiosInstance from "../utils/axiosInstance";
import { useLocation } from "react-router-dom";
const UserProfile = () => {
  const { state } = useLocation();
  console.log("user", state);
  const [userInfo, setUserInfo] = useState(null);
  const getUserInfo = async () => {
    try {
      const response = await axiosInstance.get("/get-user");
      if (response.data && response.data.user) {
        setUserInfo(response.data.user);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getUserInfo();
    return () => {};
  }, []);
  const handleLogout = () => {};
  return (
    <div>
      <Navbar />
      <div className="profile-title">
        <h1> Cài đặt</h1>

        <div>
          <div className="edit-profile">
            <p className="title">Thông tin cá nhân</p>
            <div className="editer">
              <div className="editbox">
                <div className="editbox-context">
                  <div>
                    <strong>
                      <p>Tên người dùng</p>
                    </strong>
                    <p>{userInfo?.fullName}</p>
                  </div>
                  <div className="edit">Sửa</div>
                </div>
              </div>
              <div className="editbox">
                <div className="editbox-context">
                  <div>
                    <strong>
                      <p>Email</p>
                    </strong>
                    <p>{userInfo?.email}</p>
                  </div>
                  <div className="edit">Sửa</div>
                </div>
              </div>
              <div className="editbox">
                <div className="editbox-context">
                  <div>
                    <strong>
                      <p>Password</p>
                    </strong>
                    <p>{userInfo?.password}</p>
                  </div>
                  <div className="edit">Sửa</div>
                </div>
              </div>
            </div>
          </div>
          <div className="logout-div">
            <button className="logout">Đăng xuất</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
