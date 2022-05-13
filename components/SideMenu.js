import Head from "next/head";
import Image from "next/image";
import styles from "../styles/SideMenu.module.css";

import { BsPlusCircleFill, BsGraphUp } from "react-icons/bs";
import { FaIndustry } from "react-icons/fa";

export default function SideMenu() {
  return (
    <div className={styles.container_sidemu}>
      <BsPlusCircleFill className="icon_bar"></BsPlusCircleFill>
      <FaIndustry className="icon_bar"></FaIndustry>
      <BsGraphUp className="icon_bar"></BsGraphUp>
    </div>
  );
}
