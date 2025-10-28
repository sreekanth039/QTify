import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Buttion";
import FeedbackModal from "../FeedbackModal/FeedbackModal";
import { NavLink } from "react-router";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleModalOpen = () => {
    console.log("Opening modal...");
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <NavLink to="/" className={styles.left}>
          <Logo />
        </NavLink>

        <div className={styles.center}>
          <Search />
        </div>

        <div className={styles.right} onClick={handleModalOpen}>

          <Button>Give Feedback</Button>
        </div>
      </nav>

      {open && <FeedbackModal open={open} onClose={onClose} />}
    </>
  );
}

export default Navbar;
