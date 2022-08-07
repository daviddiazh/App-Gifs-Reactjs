import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Testing in <AddCategory /> Component', () => {

    test('Should change the value into text box', () => {

        render( <AddCategory onNewCategory={ () => {} } /> );
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'Coding JS' } });

        expect( input.value ).toBe('Coding JS');
    });

});
