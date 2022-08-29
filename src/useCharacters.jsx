import { useState, useEffect } from "react";

export const useCharacters = () => {
  const [charactersList, setCharactersList] = useState([]);
  const [status, setStatus] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/chars.json");
        const data = await response.json();
        setCharactersList(data);
        if (data.length) setStatus(true);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return [charactersList, status];
};
