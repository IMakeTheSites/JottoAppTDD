import { getLetterMatch, getLetterMatchCount} from '../helpers';
import axios from 'axios';

export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS',
    GUESS_WORD: 'GUESS_WORD',
}

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action and (conditionally) CORRECT_GUESS action
 * @function guessWord
 * @param  {string} guessedWord 
 * @returns {function}
 */

export const guessWord = (guessedWord) => {
    return function(dispatch, getState) {
        const secretWord = getState().secretWord;
        const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

        dispatch({
            type: actionTypes.GUESS_WORD,
            payload: { guessedWord, letterMatchCount }
        });

        if  (guessedWord === secretWord) {
            dispatch({ type: actionTypes.CORRECT_GUESS })
        }
    };
};

export const getSecretWord = () => {
    // TODO: write actual action in Redux
    return axios.get('http://localhost:3030')
    .then(response => response.data);

}