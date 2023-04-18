import Layout from './Layout.js';
import Link from 'next/link';
import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../contexts/Contexts.jsx';
import * as data from 'sample_data.js';
import ClubCard from './clubCard.jsx';

function Clubs () {
  const [clubs, setClubs] = useState(data);
  const { user } = useContext(UserContext);

  // useEffect(() => {
  //   console.log('data', data);
  //   setClubs([...data]);
  //   setTimeout(() => {
  //     console.log('clubs data', clubs);
  //   }, 5000);
  // }, []);

  const clubFilter = (param) => {
    if (param === 'Members') {
      return clubs.filter((club) => {
        return club[param].includes(user);
      });
    }

    if (param === 'Owner') {
      return clubs.filter((club) => {
        return club[param] === user;
      });
    }

    if (param === 'Other') {
      return clubs.filter((club) => {
        return !club.Members.includes(user) && club.Owner !== user;
      });
    }
  };

  return (
    <Layout >
      <div>
        <h2>Clubs You're In</h2>
          <div className="cardContainer">
            {clubFilter('Members').map((club) => {
              return (<ClubCard filteredClubs={club}/>);
            })}
          </div>
        <h2>Clubs You Own</h2>
          <div className="cardContainer">
          {clubFilter('Owner').map((club) => {
            return (<ClubCard filteredClubs={club}/>);
          })}
          </div>
        <h2 className="justify-self-center">Other Clubs</h2>
          <div className="cardContainer">
          {clubFilter('Other').map((club) => {
            return (<ClubCard filteredClubs={club}/>);
          })}
          </div>
      </div>
    </Layout>
  );
}

export default Clubs;
