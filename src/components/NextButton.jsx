import { useQuiz } from "../contexts/QuizContext";

function NavigationButtons() {
  const { dispatch, answer, index, numQuestions } = useQuiz();

  if (answer === null) return null;

  return (
    <div>
      {index > 0 && (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "previousQuestion" })}
        >
          Back
        </button>
      )}

      {index < numQuestions - 1 ? (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      ) : (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "finish" })}
        >
          Finish
        </button>
      )}
    </div>
  );
}

export default NavigationButtons;
