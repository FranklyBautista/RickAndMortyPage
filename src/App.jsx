import { use, useEffect, useState } from "react";
import CharacterCardGrid from "./components/CharacterCardGrid";
import Pager from "./components/Pager";
import Header from "./components/Header";
import CaracterCardModal from "./components/CaracterCardModal";
import Footer from "./components/Footer";
import FavoritesPage from "./components/FavoritesPage";

import "./App.css";

function App() {
  const API = "https://rickandmortyapi.com/api";
  const [Personajes, setPersonajes] = useState([]);
  const [page, setPage] = useState(1);
  const [name, setName] = useState([]);
  const [status, setStatus] = useState([]);
  const [nPages, setNpages] = useState(0);
  const [favorites, setFavorites] = useState([]);

  //Para el modal
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (searchValue) => {
    setName(searchValue);
    setPage(1);
  };

  const handleStatusChange = (statusValue) => {
    setStatus(statusValue);
    setPage(1);
  };

  const handleSelectCharacter = (character) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePage = (numberPage) => {
    setPage(numberPage);
  };

  const handleFavorite = (favoriteCharacter) => {
    setFavorites((prevFavorites) => [...prevFavorites, favoriteCharacter]);
  };

  const hanldeNothig = () => {
    return;
  };

  const personajes = async ({ page = 1, name = "", status = "" }) => {
    const params = new URLSearchParams();

    params.append("page", page);
    if (name) params.append("name", name);
    if (status) params.append("status", status);

    const res = await fetch(`${API}/character/?${params.toString()}`);
    if (!res.ok) {
      if (res.status === 404) {
        setPersonajes([]);
        return;
      }
      throw new Error("Error en la API");
    }
    const data = await res.json();
    setPersonajes(data.results);
    setNpages(data.info.pages);
  };

  useEffect(() => {
    personajes({ page, name, status });
  }, [page, name, status]);

  const onPrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const onNext = () => {
    if (page < nPages) setPage(page + 1);
  };

  return (
    <>
      <Header
        Buscarpersonajes={personajes}
        onSearch={handleSearch}
        onStatusChange={handleStatusChange}
      />
      <CharacterCardGrid
        Personajes={Personajes}
        onSelect={handleSelectCharacter}
      />
      <Pager
        onNext={onNext}
        onPrev={onPrev}
        NPages={nPages}
        onPage={handlePage}
      />

      {isModalOpen && (
        <CaracterCardModal
          data={selectedCharacter}
          onCloser={handleCloseModal}
          onFavorite={handleFavorite}
          isFavorite={favorites.some((fav) => fav.id === selectedCharacter.id)}
        />
      )}

      <FavoritesPage Favorites={favorites} onFavorite={hanldeNothig} />
      <Footer />
    </>
  );
}

export default App;
