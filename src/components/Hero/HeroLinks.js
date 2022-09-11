import React from "react";
import styles from "./HeroLinks.module.scss";
import {
  faBookOpen,
  faHeart,
  faComments,
  faHeartCirclePlus,
  faUser,
  faClipboardQuestion,
} from "@fortawesome/free-solid-svg-icons";
import HeroLinkCard from "./HeroLinkCard";
import { useSelector } from "react-redux";

const HeroLinks = () => {
  const {user} = useSelector(state => state.auth);

  const items = [
    {
      name: "Mis cursos",
      icon: faBookOpen,
      redirect: `/user/${user._id}/courses`,
    },
    {
      name: "Mis favoritos",
      icon: faHeart,
      redirect: `/user/${user._id}/favorites`,
    },
    {
      name: "Foro y consultas",
      icon: faComments,
      redirect: "/forum",
    },
    {
      name: "Necesito ayuda",
      icon: faClipboardQuestion,
      redirect: "/help",
    },
    {
      name: "Mi perfil",
      icon: faUser,
      redirect: "/my-profile",
    },
    {
      name: "Conóceme :)",
      icon: faHeartCirclePlus,
      redirect: "https://ovdev-portfolio.vercel.app/",
      blank: true
    },
  ];

  return (
    <div className={styles.container}>
      {items.map((el, index) => {
        return (
          <HeroLinkCard
            linkInfo={el}
            index={index >= 3 ? index : index + 3}
            key={el.name}
            redirect={el.redirect}
            blank={el.blank}
          />
        );
      })}
    </div>
  );
};

export default HeroLinks;
