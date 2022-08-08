import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Testing useFetchGifs hook', () => {

    test('Should return initial state (HOOK)', () => {

        const { result } = renderHook( () => useFetchGifs('Coding testing') );
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

    });

    test('Should return an array [images, isLoading = false] (HOOK)', async () => {

        const { result } = renderHook( () => useFetchGifs('Coding testing') );

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

    });

});
