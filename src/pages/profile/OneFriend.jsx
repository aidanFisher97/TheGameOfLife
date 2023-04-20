import Image from 'next/image';
import styles from './profile.module.css';

function OneFriend ({ friend }) {
  return (
    <div className={styles.friendContainer}>
      <Image
        src='/images/default-user.png'
        height={50}
        width={50}
        alt='profile pic'
        className={styles.photo}
      />
      <div className={styles.name}>{friend}</div>
      <div className={styles.score}>Score: 100</div>
    </div>
  );
}

export default OneFriend;
