import { use, useEffect } from "react"


export const Anilibria = () => {
    const [anime, setAnime] = useState([])

    useEffect(() => {
        AnimeService().getAnimeList()
    }, [])
    
    // return(
    //     <>
    //         Anilibria
    //     </>
    
}