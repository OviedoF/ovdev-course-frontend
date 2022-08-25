import React from "react";
import styles from "./HeroLinks.module.scss";
import {
  faBookOpen,
  faHeart,
  faComments,
  faHeartCirclePlus,
  faUserAltSlash,
  faClipboardQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeroLinkCard from "./HeroLinkCard";

const HeroLinks = () => {
  const items = [
    {
      name: "Mis cursos",
      icon: faBookOpen,
    },
    {
      name: "Mis favoritos",
      icon: faHeart,
    },
    {
      name: "Foro y consultas",
      icon: faComments,
    },
    {
      name: "Necesito ayuda",
      icon: faClipboardQuestion,
    },
    {
      name: "Desconectarse",
      icon: faUserAltSlash,
    },
    {
      name: "Donar :)",
      icon: faHeartCirclePlus,
    },
  ];

  return (
    <div className={styles.container}>
      {items.map((el, index) => {
        return (
          <HeroLinkCard linkInfo={el} index={index >= 3 ? index : index + 3} key={el.name}/>
        );
      })}
    </div>
  );
};

export default HeroLinks;
