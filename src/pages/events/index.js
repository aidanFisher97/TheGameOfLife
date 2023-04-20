import Layout from './Layout.js';
import Link from 'next/link';
import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../contexts/Contexts.jsx';
import * as data from 'sample_data.js';
import ClubCard from './clubCard.jsx';
import styles from './clubs.module.css';
import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import { clubFilter } from '../../helper_functions/helper_functions.js';

function Clubs () {
  const { clubs } = useContext(UserContext);
  const { user } = useContext(UserContext);

  // useEffect(() => {
  //   console.log('data', data);
  //   setClubs([...data]);
  //   setTimeout(() => {
  //     console.log('clubs data', clubs);
  //   }, 5000);
  // }, []);

  return (
    <Layout >
      <div className={styles.clubsContainer}>
        <h2 className={styles.section1}>Events You're Going To</h2>
          <div className="cardContainer">
            <Glider
              draggable
              hasDots
              slidesToShow={2}
              slidesToScroll={1}
            >
              {clubFilter(clubs, user, 'members').map((club, i) => {
                return (<ClubCard key={i} filteredClubs={club}/>);
              })}
            </Glider>
          </div>
        <h2 className={styles.section2}>Events You're Hosting</h2>
          <div className="cardContainer">
            <Glider
                draggable
                hasDots
                slidesToShow={2}
                slidesToScroll={1}
            >
              {clubFilter(clubs, user, 'owner').map((club, i) => {
                return (<ClubCard key={i} filteredClubs={club}/>);
              })}
            </Glider>
          </div>
        <h2 className={styles.section3} >Other Events</h2>
          <div className="cardContainer">
            <Glider
              draggable
              hasDots
              slidesToShow={2}
              slidesToScroll={1}
            >
              {clubFilter(clubs, user, 'other').map((club, i) => {
                return (<ClubCard key={i} filteredClubs={club}/>);
              })}
            </Glider>
          </div>
      </div>
    </Layout>
  );
}

export default Clubs;
