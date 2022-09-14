import { useState, useEffect } from "react";
import { Character } from "./types";

export const useCharacters = (): [Character[], boolean] => {
  const [charactersList, setCharactersList] = useState<Character[]>([]);
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
