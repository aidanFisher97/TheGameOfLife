
export const clubFilter = (clubs, user, param) => {
  if (param === 'members') {
    return clubs.filter((club) => {
      return club[param].includes(user.user);
    });
  }

  if (param === 'owner') {
    return clubs.filter((club) => {
      return club[param] === user.user;
    });
  }

  if (param === 'other') {
    return clubs.filter((club) => {
      return !club.members.includes(user.user) && club.owner !== user.user;
    });
  }
};

export const checkForm = (form) => {
  for (let key in form) {
    if (form[key] === '') {
      return false;
    }
  }
  return true;
};
