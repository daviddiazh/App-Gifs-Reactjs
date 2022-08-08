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

        const inputValue = 'Coding testing';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form ); // Throw event submit (form)
        
        expect( input.value ).toBe(''); // Validate setInputValue = '' after final onSubmit

        expect( onNewCategory ).toHaveBeenCalled(); // Verify that function is called.
        expect( onNewCategory ).toHaveBeenCalledTimes(1); // Verify that function is called only once.
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue ); // Verify that function is called with input value.
    });

    test("Shouldn't call onNewCategory if input value is empty", () => {

        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();
        
    });

});
