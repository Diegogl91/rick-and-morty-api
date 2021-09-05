import React, {useState, useEffect} from 'react';



const Home =()=>{
    
    const [characters, setCharacters] = useState(null)


    useEffect(()=>{
        getCharacters();
    })
    const getCharacters=()=>{
        fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setCharacters(data);
            });
    }

    return(
        <div className="title">Rick and Morty Characters</div>
    )
}

export default Home;