import React, { useEffect, useState } from 'react'

function App() {
    const [dog, setDog] = useState('');
    const [loaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then( res => res.json())
        .then((result) => {
        // console.log(result, 'response'),
        setDog(result.message)
        setIsLoaded(true)
        });
    }, []);

    if (!loaded) return <p>Loading...</p>

    return (
        <div>
           <img src={dog} alt="A Random Dog" /> 
        </div>
    )
}

export default App

