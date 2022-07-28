import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";


describe('Testing of <GifItem />', () => {

    const title = 'Hello World';
    const url = 'https://image.com.co';
    //? For look as console.log, use screen.debug();

    test('Should create a snapshot', () => {
        const { cotainer } = render(<GifItem title={title} url={url} />);
        expect( cotainer ).toMatchSnapshot(); 
    });

    test('Should look the image with URL and property ALT ', () => {
        render(<GifItem title={title} url={url} />);
        //screen.debug();
        //expect( screen.getByRole('img').src ).toBe(url);
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    });

});