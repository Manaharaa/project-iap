import { useState } from "react";
import styles from './toastStyle.css';

import Toast from "./Toast";
import useBearStore from "./State";
import { Link, useNavigate } from "react-router-dom";

const Login = (props) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // const [message, setMessage] = useState("");
  const [toast, setToast] = useState({
    showToast: false,
    message: "",
    type: "",
  });

  const onChange = (e) => {
    setFormData((prev) => {
      let helper = { ...prev };
      helper[`${e.target.id}`] = e.target.value;
      return helper;
    });
  };

  const navigate = useNavigate();
  const setIsUserValid = useBearStore((state) => state.setIsUserValid);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("FORM DATA ", formData);
  
    const users = [
      { username: "test", password: "test1@23" },
      { username: "john", password: "john123" },
      { username: "jane", password: "jane456" },
    ];
  
    const user = users.find((u) => u.username === formData.username);
  
    if (user && user.password === formData.password) {
      setIsUserValid(true);
      navigate("/dashboard");
    }  else if  (formData.username.length < 4) {
      // setMessage("username or email should atleast be 4 characters long.");
      setToast({
        showToast: true,
        message: "username or email should atleast be 4 characters long.",
        type: "danger",
      });
      return;
    } else if (formData.password.length < 8) {
      // setMessage("password should atleast be 8 characters long.");
      setToast({
        showToast: true,
        message: "password should atleast be 8 characters long.",
        type: "danger",
      });
      return;
    }
    else setToast({
      showToast: true,
      message: "invalid username or password.",
      type: "danger",
    });
  
  };

  return (
    <div className="main">
      <form className="form" onSubmit={onSubmitHandler}>
        <div className="user-image">
          <div className="head" />
          <div className="body"/>
        </div>
        <p className="heading">Login</p>
        <div className="inputs-div">
          <input
            onChange={onChange}
            value={formData.username}
            type={"text"}
            id='username'
            name='username'
            placeholder='username or email'
          />
          <input
            onChange={onChange}
            value={formData.password}
            type={"password"}
            id='password'
            name='password'
            placeholder='password'
          />
        <button>submit</button>
          {/* <div className={styles["err-msg-div"]}>{message}</div> */}
        </div>
        {/* <Link to="/login"><a href="#contact" className="w3-bar-item w3-button">Login</a></Link> */}
        <p className="p-link">
          New User?{" "}
          <Link to="/dashboard">
            sign up
          </Link>
        </p>
      </form>
      {toast.showToast ? (
        <Toast setToast={setToast} message={toast.message} type={toast.type} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Login;
