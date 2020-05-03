import React from "react";
import styles from "./index.module.scss";
import fish1 from "./assets/fish-1.jpg";
import fish2 from "./assets/fish-2.jpg";
import fish3 from "./assets/fish-3.jpg";
import fish4 from "./assets/fish-4.jpg";
import fish5 from "./assets/fish-5.jpg";

const cards = [
  fish1,
  fish2,
  fish3,
  fish4,
  fish5,
  fish1,
  fish2,
  fish3,
  fish4,
  fish5,
];

const CardList = () => {
  return (
    <ul className={styles.cardList}>
      {cards.map((src) => (
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            alert('please check back later for this fish')
          }}
        >
          <li>
            <img src={src} alt="a fish" />
          </li>
        </a>
      ))}
    </ul>
  );
};

export default CardList;