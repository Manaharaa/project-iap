import { useEffect, useState } from "react";
import styles from './toastStyle.css';


const Toast = ({ setToast, message, type }) => {
  const [opacity, setOpacity] = useState("opacity-0");

  useEffect(() => {
    setOpacity("opacity-1");

    const timeout2 = setTimeout(() => {
      setOpacity("opacity-0");
    }, 4000);
    const timeout3 = setTimeout(() => {
      setToast({
        showToast: false,
      });
    }, 4200);

    return () => {
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  const close = () => {
    setOpacity("opacity-0");

    setTimeout(() => {
      setToast({
        showToast: false,
      });
    }, 200);
  };

  return (
    <div className="toast opacity type">
      {" "}
      <div>{message}</div>{" "}
      <button onClick={close} className="close">
        X
      </button>
    </div>
  );
};

export default Toast;