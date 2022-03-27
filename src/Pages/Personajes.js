import { useState, useEffect } from "react";

const Personajes = () => {
  const url =
    "https://gateway.marvel.com:443/v1/public/characters?apikey=a43be6b867ad020827d392f39ebab884";
  const [personajes, setPersonajes] = useState([]);
  const fetchApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.data.results);
    setPersonajes(data.data.results);
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className="container">
      <div className="card">
        <ul>
          {personajes.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Personajes;
