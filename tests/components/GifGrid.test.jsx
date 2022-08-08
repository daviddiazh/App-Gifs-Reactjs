const { render, screen } = require("@testing-library/react");
const { GifGrid } = require("../../src/components");
const { useFetchGifs } = require("../../src/hooks/useFetchGifs");

jest.mock('../../src/hooks/useFetchGifs');


describe('Testing <GifGrid /> Component', () => {

    const category = 'Coding testing';

    test('Should look first loading', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render( <GifGrid category={ category } /> );

        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ) ); 

    });

    test('Should look items when it load images useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Coding testing',
                url: 'http://localhost/coding-testing.jpg',
            }, 
            {
                id: '123',
                title: 'Coding js',
                url: 'http://localhost/coding-js.jpg',
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render( <GifGrid category={ category } /> );

        expect( screen.getAllByRole('img').length ).toBe(2);

    });

});
