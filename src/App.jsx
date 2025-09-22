import { use, useEffect, useState } from "react";
import CharacterCardGrid from "./components/CharacterCardGrid";
import Pager from "./components/Pager";

import "./App.css";

function App() {
  const API = "https://rickandmortyapi.com/api";
  const [Personajes, setPersonajes] = useState([]);
  const [page, setPage] = useState(1);

  async function personajes() {
    const res = await fetch(`${API}/character/?page=${page}`);
    const data = await res.json();
    setPersonajes(data.results);
  }

  useEffect(() => {
    personajes();
  }, [page]);

  const onPrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const onNext = () => {
    setPage(page + 1);
  };

  return (
    <>
      <CharacterCardGrid Personajes={Personajes} />
      <Pager onNext={onNext} onPrev={onPrev} />
    </>
  );
}

export default App;
