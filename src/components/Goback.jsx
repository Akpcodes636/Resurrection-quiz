import { useQuiz } from "../contexts/QuizContext";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
// const { dispatch, answer, index, numQuestions } = useQuiz();

export default function GoBack() {
  const navigate = useNavigate(); // Initialize the navigate function


  return (
    <button onClick={()=> navigate(-1)} className="btn flex items-center">
    {/* // <button onClick={() => console.log("This works!! fine!")} className="btn flex items-center"> */}
      <ArrowLeft size={14} />
      <span className="ml-1">Back</span>
    </button>
  );
}


