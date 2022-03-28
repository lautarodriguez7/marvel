import { useState, useEffect } from "react";

const Personajes = () => {
  const url =
    "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=a43be6b867ad020827d392f39ebab884&hash=88fe2e99cb6bba17a6434281f3e0345e";
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
    <div
      className="container-p"
      style={{ height: "100%", width: "100%", overflow: "scroll" }}
    >
      <h1 className="title text-center m-4">Personajes de Marvel</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {personajes.map((item) => (
          <div className="col">
            <div className="card align-center">
              <img
                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                className="card-img-top"
                alt=""
                style={{ width: "18rem", height: "18rem" }}
              />
              <div className="card-body">
                <h5 className="card-text">{item.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Personajes;
