import React from "react";
import styles from "./Button.module.css";

export default function Button({
  children = "Give Feedback",
  onClick,
  type = "button",
  disabled = false,
  className = "",
  ...rest
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${styles.button} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
