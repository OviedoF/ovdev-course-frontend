import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './HeroLinkCard.module.scss';
import Link from "next/link";

const HeroLinkCard = ({linkInfo, index}) => {
    const velocities = {
        3: 0.2,
        4: 0.4,
        5: 0.7
    };

  return (
    <Link href='/course/intro-webdev'>
        <div className={styles.card}>
            <FontAwesomeIcon icon={linkInfo.icon} className={styles.link_icon} />
            <h2>{linkInfo.name}</h2>

            <style jsx>{`
                div{
                    animation: appear ${velocities[index]}s ease-in;
                }

                @keyframes appear{
                    0%{
                        right: -100%;
                    }

                    100%{
                        right: 0;
                    }
                }
            `}</style>
        </div>
    </Link>
  );
};

export default HeroLinkCard;
