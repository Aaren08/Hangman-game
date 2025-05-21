import { useState, useEffect, useCallback } from "react";
import words from "./wordList.json";
import { HangmanDrawing } from "./Components/HangmanDrawing";
import { HangmanWord } from "./Components/HangmanWord";
import { Keyboard } from "./Components/Keyboard";
import Modal from "./Components/Modal";

function App() {
  const [wordToGuess] = useState(() => {
    // get a random word from the wordList.json file
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // filter the guessed letters that are not in the wordToGuess
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  // check if the user has lost or won
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  // add a guessed letter to the guessedLetters array
  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;
      setGuessedLetters([...guessedLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  // handle keyboard input
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);
    return () => document.removeEventListener("keypress", handler);
  }, [guessedLetters, addGuessedLetter]);

  // Open the modal when the user wins or loses
  useEffect(() => {
    if (isWinner) {
      setModalMessage("You Win! Continue Playing?");
      setModalOpen(true);
    } else if (isLoser) {
      setModalMessage("You Lose! Continue Playing?");
      setModalOpen(true);
    }
  }, [isWinner, isLoser]);

  const handleConfirm = () => {
    // Reset the game
    window.location.reload(); // Simple way to reset the game
  };

  const handleCancel = () => {
    // Close the modal without resetting
    setModalOpen(false);
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>
        {isWinner && "Winner! - Refresh to try again"}
        {isLoser && "Nice Try! - Refresh to try again"}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
        reveal={isLoser}
      />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
      <Modal
        isOpen={isModalOpen}
        message={modalMessage}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>
  );
}

export default App;
