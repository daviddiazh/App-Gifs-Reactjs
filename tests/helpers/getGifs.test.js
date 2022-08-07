import { any } from "prop-types";
import { getGifs } from "../../src/helpers/getGifs";

describe('Testing to getGifs()', () => {

    test('Should return an Array of gifs', async () => {

        const gifs = await getGifs('Code');

        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        });

    });

});
