import { useFetchGifs } from "../hooks/useFetchGifs";

export const getGifs = async (category) => {

    //console.log(process.env.REACT_APP_API_KEY)

    const url = `https://api.giphy.com/v1/gifs/search?api_key=NA341Wj3KdSDDPYFGqGrXfOs36EaEcZv&q=${category}&limit=15`

    const resp = await fetch( url )
    const { data } = await resp.json();
    
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    //console.log(gifs)
    return gifs;

}