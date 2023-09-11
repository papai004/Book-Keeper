import React, { useState, useEffect } from "react";
import styles from "./login.module.css";
import { USER_DATA } from "../API";
import Navbar from "../navs/Navbar";
import Footer from "../navs/Footer";
import { useNavigate } from "react-router-dom";


function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [logIn, setLogIn] = useState(false);
  const [isName, setName] = useState('');
  const [isPassword, setPassword] = useState('');


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(USER_DATA);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const userId = await response.json();

        const val = [];

        for (const key in userId) {
          const user = {
            id: key,
            ...userId[key],
          };
          val.push(user);
        }
        // Store the password in a constant
        const name = val[0].userName;
        const password = val[0].password;

        // Set the 'password' state to trigger a re-render
        setName(name);
        setPassword(password);
      } catch (error) {
        console.error('An error occurred:', error);
      }
    }
    fetchData(); // Call the fetchData function
  }, []);


  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    const { username, password } = formData;
    if (
      username.trim() === isName &&
      password.trim() === isPassword
    ) {
      console.log("logged in");
      setLogIn(true);
      props.setData(logIn);
      navigate("/PostBooks");
    } else if (
      username.trim() !== isName &&
      password.trim() === isPassword
    ) {
      console.log("unmatched username");
      setFormData({ username: "", password: formData.password });
    } else if (
      username.trim() === isName &&
      password.trim() !== isPassword
    ) {
      console.log("unmatched password");
      setFormData({ username: formData.username, password: "" });
    } else {
      console.log("unmatched username & password", username, password);
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
            <label className={styles.label} htmlFor="password">
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
