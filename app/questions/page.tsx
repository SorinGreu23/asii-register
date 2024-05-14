// Import necessary modules
'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { fetchDepartmentQuestions, fetchGeneralQuestions } from "../lib/data";
import { ArrowCircleRightIcon } from "@heroicons/react/outline";
import { Question } from "../lib/definitions";
import { updateDepartmentAnswers, updateGeneralAnswers } from "../lib/actions";

export default function QuestionsPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const searchParams = useSearchParams();
  const userId = searchParams?.get("userId");
  const questionType = searchParams?.get("department");
  const isDepartment = questionType === "Gen" ? false : true;

  useEffect(() => {
    const fetchQuestions = async () => {
      const fetchedQuestions = questionType !== "Gen"
        ? await fetchDepartmentQuestions(questionType!)
        : await fetchGeneralQuestions();

      setQuestions(fetchedQuestions);
    };

    fetchQuestions();
  }, [questionType]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-primary text-white">
      <div className="flex flex-col items-center">
        <Image
          src="/ASII - alb.png"
          alt="Logo"
          width={100}
          height={100}
          className="mb-4"
        />
        <h1 className="text-4xl font-bold mb-4 uppercase">
          Întrebări {questionType === "Gen" ? "Generale" : `- ${questionType}`}
        </h1>
        <form className="w-full max-w-lg space-y-6" action={isDepartment ? updateDepartmentAnswers : updateGeneralAnswers}>
          {questions.map((question) => (
            <div key={question.id}>
              <h2>{question.question}</h2>
              <textarea
                id={`response-${question.id}`}
                name={`response-${question.id}`}
                rows={3}
                cols={55}
                placeholder="Răspunsul tău aici..."
                required
                className="mt-2 p-2 w-full h-24 text-black rounded-md"
              />
            </div>
          ))}
          <input type="hidden" name="userId" value={userId!} />
          <div className="w-100 flex items-center justify-center">
            <button
              type="submit"
              className="mt-3 w-12 h-12 bg-white p-3 rounded-full shadow flex items-center justify-center"
            >
              <ArrowCircleRightIcon className="h-10 w-10 text-red-500" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
