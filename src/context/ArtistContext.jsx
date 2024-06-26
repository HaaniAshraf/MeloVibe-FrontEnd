import React, { createContext, useContext, useState, useEffect } from "react";

const ArtistContext = createContext();

export const ArtistProvider = ({ children }) => {
  const [artistId, setArtistId] = useState(() => {
    return localStorage.getItem('artistId') || null;
  });

  useEffect(() => {
    if (artistId) {
      localStorage.setItem('artistId', artistId);
    } else {
      localStorage.removeItem('artistId');
    }
  }, [artistId]);

  const login = (id) => {
    setArtistId(id);
  };

  const logout = () => {
    setArtistId(null);
  };

  return (
    <ArtistContext.Provider value={{ artistId, login, logout, setArtistId }}>
      {children}
    </ArtistContext.Provider>
  );
};

export const useArtist = () => useContext(ArtistContext);