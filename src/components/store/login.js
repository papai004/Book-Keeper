import React, { useState } from "react";
import styles from "./login.module.css";
import { userDatas } from "../API";
import Navbar from "../navs/Navbar";
import Footer from "../navs/Footer";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [logIn, setLogIn] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const { username, password } = formData;
    if (
      username.trim() === userDatas.userName &&
      password.trim() === userDatas.password
    ) {
      console.log("logged in");
      setLogIn(true);
      props.setData(logIn);
      navigate("/PostBooks");
    } else if (
      username.trim() !== userDatas.userName &&
      password.trim() === userDatas.password
    ) {
      console.log("unmatched username");
      navigate("/login");
      setFormData({ username: "", password: formData.password });
    } else if (
      username.trim() === userDatas.userName &&
      password.trim() !== userDatas.password
    ) {
      console.log("unmatched password");
      navigate("/login");
      setFormData({ username: formData.username, password: "" });
    } else {
      console.log("unmatched username & password", username, password);
      navigate("/login");
      setFormData({ username: "", password: "" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className={styles.loginContainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="username">
              Username:
            </label>
            <input
              className={styles.input}
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.lable} htmlFor="password">
              Password:
            </label>
            <input
              className={styles.input}
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button className={styles.button} type="submit">
            Login
          </button>
        </form>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Login;
