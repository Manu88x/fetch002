import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");  // Tracks current page (Form or List)
  const [questions, setQuestions] = useState([]); // Holds fetched questions

  // Fetch questions when the "View Questions" button is clicked
  useEffect(() => {
    if (page === "List") {
      fetch("http://localhost:4000/questions")
        .then((response) => response.json())
        .then((data) => setQuestions(data));
    }
  }, [page]);  // Re-fetch when the page changes to "List"

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm setQuestions={setQuestions} />
      ) : (
        <QuestionList questions={questions} setQuestions={setQuestions} />
      )}
    </main>
  );
}

export default App;
