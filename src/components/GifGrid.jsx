import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3>{category}</h3>

            { isLoading && (<h2>Cargando...</h2>) }

            <div className='card-grid'>
                {
                    images.map( gif => (
                        <GifItem 
                            key={gif.id}
                            { ...gif } //Here spread all props
                        />
                    ))
                }
            </div>
        </>
    )
}
