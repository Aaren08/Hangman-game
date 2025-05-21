// These constants represent the different body parts of the hangman figure
// Each part is a div element with specific styling to create the visual representation

const { HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG } = {
  HEAD: (
    <div
      style={{
        height: "50px",
        width: "50px",
        backgroundColor: "white",
        border: "10px solid black",
        borderRadius: "100%",
        position: "absolute",
        top: "50px",
        right: "-30px",
      }}
    ></div>
  ),

  BODY: (
    <div
      style={{
        height: "100px",
        width: "10px",
        backgroundColor: "black",
        position: "absolute",
        top: "120px",
        right: "0",
      }}
    ></div>
  ),

  RIGHT_ARM: (
    <div
      style={{
        height: "10px",
        width: "100px",
        backgroundColor: "black",
        position: "absolute",
        top: "150px",
        right: "-100px",
        rotate: "-30deg",
        transformOrigin: "left bottom",
      }}
    ></div>
  ),

  LEFT_ARM: (
    <div
      style={{
        height: "10px",
        width: "100px",
        backgroundColor: "black",
        position: "absolute",
        top: "150px",
        right: "10px",
        rotate: "30deg",
        transformOrigin: "right bottom",
      }}
    ></div>
  ),

  RIGHT_LEG: (
    <div
      style={{
        height: "10px",
        width: "100px",
        backgroundColor: "black",
        position: "absolute",
        top: "210px",
        right: "-90px",
        rotate: "60deg",
        transformOrigin: "left bottom",
      }}
    ></div>
  ),

  LEFT_LEG: (
    <div
      style={{
        height: "10px",
        width: "100px",
        backgroundColor: "black",
        position: "absolute",
        top: "210px",
        right: "0px",
        rotate: "-60deg",
        transformOrigin: "right bottom",
      }}
    ></div>
  ),
};

//  Order matters
const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {/* the body parts starts from the head and goes down according to the number of guesses */}
      {BODY_PARTS.slice(0, numberOfGuesses)}

      {/* THE STAND */}
      <div
        style={{
          height: "50px",
          width: "10px",
          backgroundColor: "black",
          position: "absolute",
          top: "0",
          right: "0",
        }}
      ></div>
      <div
        style={{
          height: "10px",
          width: "200px",
          backgroundColor: "black",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{
          height: "400px",
          width: "10px",
          backgroundColor: "black",
          //   250/2 = 125 & 10/2 = 5 ---> 125-5 = 120
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{ height: "10px", width: "250px", backgroundColor: "black" }}
      ></div>
    </div>
  );
}
