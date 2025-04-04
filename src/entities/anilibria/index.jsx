import { useState, useEffect } from "react";
import { getAnimeList } from "./api/animeService"; 

export const Anilibria = () => {
    const [anime, setAnime] = useState([]);

    useEffect(() => {
        getAnimeList()
            .then(data => setAnime(data))
            .catch(error => console.error("Ошибка при загрузке аниме:", error));
    }, []);

    return (
        <div>
            <h1>Anilibria</h1>
            {/* {anime.length > 0 ? (
                <ul>
                    {anime.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            ) : (
                <p>Загрузка...</p>
            )} */}
        </div>
    );
};
