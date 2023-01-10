import { useEffect, useState } from "react";
import { getDatabase, orderByKey, query, ref, get} from "firebase/database";

export default function useQuestions(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    //database related work
    async function fetchQuestions() {
      const db = getDatabase();
      const questionsRef = ref(db, "quiz/" + videoID + "/questions");
      const quizQuery = query(questionsRef, orderByKey());
      try {
        setError(false);
        setLoading(true);
        //request firebase database
        const sanpshot = await get(quizQuery);
        setLoading(false);
        if (sanpshot.exists()) {
          setQuestions((prevQuestions) => {
            return [...prevQuestions, ...Object.values(sanpshot.val())];
          });
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    }
    fetchQuestions();
  }, [videoID]);

  return {
    loading,
    error,
    questions,

  };
}
