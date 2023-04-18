import React, { createContext, useState, useMemo } from 'react';

export const UserContext = createContext({});

export function UserProvider ({ children }) {
  const [user, setUser] = useState('');
  const [clubs, setClubs] = useState([]);

  const value = useMemo(() => ({
    user, setUser, clubs, setClubs
  }), [user, clubs]);

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}
