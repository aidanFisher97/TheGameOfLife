import React, { useContext } from 'react';
import { UserContext } from '../../contexts/Contexts.jsx';
import OneFriend from './OneFriend.jsx';
import styles from './profile.module.css';

function Friends () {
  const { user } = useContext(UserContext);

  return (
    <div className={styles.friends}>
      <h1 className="text-center border-b-2 border-black">Friends</h1>
      {user.friends.map((friend, i) => {
        return (<OneFriend key={i} friend={friend}/>);
      })}
    </div>
  );
}

export default Friends;
