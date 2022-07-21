import React, { useEffect, useState } from "react";
import { ImOffice } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { AiTwotoneLock } from "react-icons/ai";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [companyCode, setCompanyCode] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    console.log({ companyCode, username, password });
  }, [companyCode, username, password]);
  return (
    <div className="form-box">
      <form
        className="c-form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Submitting");
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="input-box">
            <div
              style={{
                display: "inline",
                border: "1px solid rgb(201, 201, 201)",
                verticalAlign: "middle",
                padding: "2px",
              }}
            >
              <ImOffice />
            </div>
            <input
              type="text"
              className="form-input"
              onChange={(e) => {
                setCompanyCode(e.target.value);
              }}
              value={companyCode}
            />
          </div>

          <div className="input-box">
            <div
              style={{
                display: "inline",
                border: "1px solid rgb(201, 201, 201)",
                verticalAlign: "middle",
                padding: "2px",
              }}
            >
              <FaUserAlt />
            </div>
            <input
              type="text"
              className="form-input"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              value={username}
            />
          </div>

          <div className="input-box">
            <div
              style={{
                display: "inline",
                border: "1px solid rgb(201, 201, 201)",
                verticalAlign: "middle",
                padding: "2px",
              }}
            >
              <AiTwotoneLock />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              className="form-input"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
          </div>
          <div style={{ marginLeft: "10px" }}>
            {" "}
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => {
                setShowPassword(!showPassword);
              }}
            />
            Show Password
          </div>
          <button
            type="submit"
            style={{ width: "100px", marginLeft: "auto", marginRight: "10px" }}
            onSubmit={() => {
              console.log("submit");
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
