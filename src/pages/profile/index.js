import Link from 'next/link';
import Image from 'next/image';
import Layout from './Layout.js';
import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/Contexts.jsx';
import Friends from './Friends.jsx';
import { clubFilter } from '../../helper_functions/helper_functions.js';
import ClubCard from '../events/clubCard.jsx';
import styles from './profile.module.css';
import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import UserCalendar from './Calendar.jsx';
import BasicModal from './Modal.jsx';

// this will be a profile page for the user

function Homepage () {
  const { user, setUser, clubs, setClubs } = useContext(UserContext);
  const [modal, setModal] = useState(false);

  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.profileContainer}>
          <Friends />
          <div className={styles.profileInfo}>
            <h1 className={styles.title}>The Life of {user.user}</h1>
            <div className={styles.profilePic}>
              <Image
                src='/images/DSC_0340.JPG'
                height={300}
                width={200}
                alt="Club Image"
                className={styles.image}
              />
            </div>
            <div className={styles.description}>
              <p className={styles.text}>{user.description}</p>
              <button
                className={styles.btn}
                onClick={() => {
                  setModal(true);
                }}
              >Create Event</button>
            </div>
            <div className={styles.clubs}>
              <h1 className="text-center">Events You're Hosting</h1>
                <div className={styles.cardContainer}>
                  <Glider
                    draggable
                    slidesToShow={1}
                    slidesToScroll={1}
                  >
                    {clubFilter(clubs, user, 'owner').map((club, i) => (
                      <ClubCard key={i} filteredClubs={club}/>
                    ))}
                  </Glider>
                </div>
            </div>
            <div className={styles.points}>
              {user.points}
              <p className={styles.pointsText}>Points</p>
            </div>
            <div className={styles.calendar}>
              <UserCalendar />
            </div>
          </div>
        </div>
        { modal && <BasicModal modal={modal} setModal={setModal}/>}
      </div>
    </Layout>
  );
}

export default Homepage;
