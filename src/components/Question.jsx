import { useQuiz } from "../contexts/QuizContext";
import GoBack from "./Goback";
import Options from "./Options";

function   Question() {
  const { questions, index } = useQuiz();
    const question = questions.at(index);

    console.log(question);

  return (
    <div>
    {/* <GoBack /> */}
    <div className="">
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
    </div>
  );
}

export default Question;
