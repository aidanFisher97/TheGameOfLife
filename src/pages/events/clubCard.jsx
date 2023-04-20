import React from 'react';
import Image from 'next/image';
import styles from './clubs.module.css';

function ClubCard ({ filteredClubs }) {
  // console.log('filtered clubs', filteredClubs);
  return (
    <div className="clubCard">
      <Image
        src="/images/best-san-diego-nightclubs.jpg"
        height={312}
        width={200}
        alt="Club Image"
        className="col-start-1 row-start-2 pl-1 pt-2"
      />
      <div className="col-start-1 col-end-4 row-start-1 pl-2 pt-1 bg-[#a0c4ff] text-center rounded-lg">{filteredClubs.title}</div>
      <div className="col-start-2 col-end-4 row-start-4 pl-2">{filteredClubs.description}</div>
      <div className="col-start-2 row-start-2 pl-2 ">Owner: {filteredClubs.owner}</div>
      <div className="col-start-3 row-start-2">Participants: {filteredClubs.members.length}</div>
      <div className="col-start-1 row-start-6 pl-2 pt-2">{filteredClubs.date}</div>
      <div className="col-start-2 col-end-4 row-start-3 pl-2">
        <p>{filteredClubs.neighborhood}, {filteredClubs.city}, {filteredClubs.state}</p>
      </div>
      <div className="col-start-2 row-start-6 pt-2 pl-2">Meet @ {filteredClubs.location}</div>
      <div className="attending col-start-3 row-start-6">
        <h1 className="col-start-2 text-center">Attending</h1>
        <button className="col-start-1 row-start-2 text-center">Yes</button>
        <button className="col-start-3 row-start-2 text-center">No</button>
      </div>
    </div>
  );
}

export default ClubCard;
