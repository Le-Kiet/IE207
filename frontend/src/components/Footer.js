import React from "react";
import "./Footer.css";
import Button from "./Button.js";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <table className="footer-table">
          <tbody className="footer-content">
            <tr>
              <td className="footer-column-title">Giới thiệu</td>
              <td className="footer-column-title">Dành cho học sinh</td>
              <td className="footer-column-title">Dành cho giáo viên</td>
              <td className="footer-column-title">Tài nguyên</td>
            </tr>
            <tr>
              <td>
                <a href="null">Giới thiệu về Quizlet</a>
              </td>
              <td>
                <a href="null">Thẻ ghi nhớ</a>
              </td>
              <td>
                <a href="null">Live</a>
              </td>
              <td>
                <a href="null">Trung tâm hỗ trợ</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="null">Cách Quizlet hoạt động</a>
              </td>
              <td>
                <a href="null">Kiểm tra</a>
              </td>
              <td>
                <a href="null">Cột mốc</a>
              </td>
              <td>
                <a href="null">Quy tắc danh dự</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="null">Tuyển dụng</a>
              </td>
              <td>
                <a href="null">Học</a>
              </td>
              <td>
                <a href="null">Blog</a>
              </td>
              <td>
                <a href="null">Nguyên tắc cộng đồng</a>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <a href="null">Lời giải</a>
              </td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div className="footer-social-link">
          <div className="footer-social-button">
            <Button iconType="tiktok"></Button>
          </div>
          <div className="footer-social-button">
            <Button iconType="twitter"></Button>
          </div>
          <div className="footer-social-button">
            <Button iconType="facebook"></Button>
          </div>
          <div className="footer-social-button">
            <Button iconType="instagram"></Button>
          </div>
          <div className="footer-social-button">
            <Button iconType="youtube"></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
