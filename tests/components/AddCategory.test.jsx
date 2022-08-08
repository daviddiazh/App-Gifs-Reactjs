import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Testing in <AddCategory /> Component', () => {

    test('Should change the value into text box', () => {

        render( <AddCategory onNewCategory={ () => {} } /> );
        const input = screen.getByRole('textbox'); //This is as form element in HTML

        fireEvent.input(input, { target: { value: 'Coding JS' } }); //Event of e.target.value form 

        expect( input.value ).toBe('Coding JS');
    });

    test('Should call onNewCategory only if input contains a value', () => {

        const inputValue = 'Coding testing'

        render( <AddCategory onNewCategory={ () => {} } /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form ); // Throw event submit (form)
        
        expect( input.value ).toBe(''); // Validate setInputValue = '' after final onSubmit
    });

});
