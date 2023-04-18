import React from 'react';
import Image from 'next/image';

function ClubCard ({ filteredClubs }) {
  console.log('filtered clubs', filteredClubs);
  return (
    <div className="clubCard">
      <Image
        src="/images/best-san-diego-nightclubs.jpg"
        height={78}
        width={50}
        alt="Club Image"
      />
      <div>{filteredClubs.Title}</div>
      <div>{filteredClubs.Description}</div>
      <div>Owner: {filteredClubs.Owner}</div>
      <div>Members: {filteredClubs.Members.length}</div>
      <div>{filteredClubs.Date}</div>
      <div>
        <p>{filteredClubs.City}, {filteredClubs.State}</p>
        <p>{filteredClubs.Neighborhood}</p>
      </div>
      <div>Meet @ {filteredClubs.Location}</div>
      <div></div>
    </div>
  );
}

export default ClubCard;
