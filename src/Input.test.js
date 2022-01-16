import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from "../test/testUtils";
import Input from './Input';
import React from 'react';


/**
 
 * @returns {ShallowWrapper}
 * 
 */



const setup = (secretWord='party') => {
    return shallow(<Input secretWord={secretWord}/>);
}

test('Input renders without error', () => {
    const wrapper = setup();
    const inputComponent = findByTestAttr(wrapper, 'component-input');
    expect(inputComponent.length).toBe(1);
    
})

test('does not throw warning with expected props', () => {
    checkProps(Input, {secretWord: 'party'})
})

describe('state controlled input field', () => {
    let mockSetCurrentGuess  = jest.fn();
    let wrapper;
    let originalUseState;

    beforeEach(() => {
        mockSetCurrentGuess.mockClear();
        originalUseState = React.useState;
        React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
        wrapper = setup();
    })
    afterEach(() => {
        React.useState = originalUseState;
    });
    test('state updates with value of input box upon change', () => {

        const inputBox = findByTestAttr(wrapper, 'input-box');
        
        const mockEvent = { target: { value: 'train' } };
        inputBox.simulate("change", mockEvent);
        
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    })
    test('field is cleared upon submit button click', () => {
       const submitButton = findByTestAttr(wrapper, 'submit-button');

        submitButton.simulate('click', {preventDefault() {}});

        expect(mockSetCurrentGuess).toHaveBeenCalledWith("");

    })
})