import React, { useState, useEffect, useContext } from "react";
import "./index.scss";
// import Logo from "../../assets/logo.svg";
import { Button, Input, message } from "antd";
import { login } from "../../api/auth.js";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import { Plugins } from "@capacitor/core";

// const { App } = Plugins;

const Login = () => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [loadbutton, setButtonLoad] = useState(false);

  // const user_token = localStorage.getItem("user_token");

  let history = useHistory();

  useEffect(() => {
    // App.addListener("appRestoredResult", async (data) => {
    //   await setStorageItem("cameraData", JSON.stringify(data));
    //   history.push("/create");
    // });
    //to block the back button to go to history
    // window.history.pushState(null, null, window.location.pathname);
  }, []);

  const signin = () => {
    setButtonLoad(true);

    console.log(mobile, "name");
    console.log(password, "password");
    login({ mobile, password })
      .then((res) => {
        setButtonLoad(false);
        console.log(JSON.stringify(res));
        if (res.status) {
          localStorage.setItem("user_token", res?.token);
          // setToken(res?.data?.token);
          history.push({
            pathname: '/home',
            search: '?query=abc',
            state: { detail: res.data }
          });
        } else {
          console.log("first failed");
          message.warning("Something went wrong");
        }
      })
      .catch((er) => {
        setButtonLoad(false);
        console.log(er);
      });
  };

  // useEffect(() => {
  //   if (token !== null) {
  //     history.push("/home");
  //   }
  // }, [history, token]);

  return (
    <div className="loginMain">
      <div className="logoContainer">
        {/* <img src={Logo} alt="logo" /> */}
        {/* <h2>Fari Campus</h2>
        <p>Maldives</p> */}
      </div>
      <div className="space"></div>
      <div className="fields">
        <Input
          placeholder="Mobile Number"
          className="customInput"
          onChange={(e) => {
            setMobile(e.target.value);
          }}
        />
        <Input
          placeholder="Password"
          className="customInput"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <a style={{ width: "80%", margin: 5 }}>
          <Button
            loading={loadbutton}
            onClick={signin}
            disabled={loadbutton}
            className="signBtn"
            style={{ marginTop: 20, width: "100%", margin: "0" }}
          >
            Sign In
          </Button>
        </a>
        <Link style={{ width: "80%", margin: 5 }} to="/register">
          <Button className="signBtn" style={{ width: "100%", margin: "0" }}>
            Sign Up
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
