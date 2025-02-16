import { useQuiz } from "../contexts/QuizContext";

function StartScreen() {
  const { numQuestions, dispatch } = useQuiz();

  return (
    <div className="start">
      <h2>Welcome to The Resurrection Youth Quiz!</h2>
      <h3>{numQuestions} questions </h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's start
      </button>
      <p className="top">built with ♥ by Resurrection Youths</p>
    </div>
  );}
export default StartScreen;
