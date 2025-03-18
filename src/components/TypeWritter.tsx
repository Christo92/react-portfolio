import ReactRotatingText from "react-rotating-text";

/**
 * TypeWritter Component
 *
 * This component displays a rotating text animation with predefined sentences.
 * It utilizes the `react-rotating-text` package to cycle through messages.
 *
 * @returns {JSX.Element} The TypeWritter component
 */
function TypeWritter() {
  // Array of sentences to be displayed in rotation
  const sentences = [
    "Bonjour à tous !",
    "Je suis Christopher",
    "Je suis Développeur Front ReactJS",
    "Voici mon portfolio",
  ];

  return (
    <div className="typewritter">
      <ReactRotatingText
        className="typewritter__sentences"
        emptyPause={2000} // Pause duration before repeating
        items={sentences} // Sentences to rotate
      />
    </div>
  );
}

export default TypeWritter;
