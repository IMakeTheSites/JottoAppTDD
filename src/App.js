import './App.css';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from './Input';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSecretWord } from './actions';

function App() {
  const success = useSelector(state => state.success);
  const guessedWords = useSelector(state => state.guessedWords);
  const secretWord = useSelector(state => state.secretWord);


  // TODO: get props from shared state
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSecretWord());    
  }, [])
  
  return (
    <div data-test="component-app" className="container">
      <h1>Jotto</h1>
        <Congrats success={true} />
        <Input success={success} secretWord={secretWord} />
        <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
