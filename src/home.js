import React, { useState, useEffect } from 'react';



const Home = () => {

    const [characters, setCharacters] = useState(null)


    useEffect(() => {
        getCharacters();
    })
    const getCharacters = () => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setCharacters(data.results);
            });
    }

    return (
        <div className="container">
            <div className="title">Rick and Morty Characters</div>
            <div className="row">
                {
                    characters === null ? (
                        <div className="spinner-grow text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) :
                        !!characters &&
                        characters.map((character, index) => {
                            const { name, status, species, gender, image } = character;
                            return (
                                < div className="card mb-3" key={index} >
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src="..." className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">
                                                    This is a wider card with supporting text below as a natural lead-in
                                                    to additional content. This content is a little bit longer.
                                                </p>
                                                <p className="card-text">
                                                    <small className="text-muted">Last updated 3 mins ago</small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                }
            </div>
        </div >
    )
}

export default Home;