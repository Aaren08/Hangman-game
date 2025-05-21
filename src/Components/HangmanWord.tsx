type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: "0.25em",
        fontFamily: "Arial, sans-serif",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: "-3px",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: "0.1em solid black" }} key={index}>
          {/* if the letter is guessed, show the letter, otherwise reveal it if the reveal prop is true */}
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
