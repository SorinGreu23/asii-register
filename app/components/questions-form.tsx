import { ArrowCircleRightIcon } from "@heroicons/react/outline";
import { fetchDepartmentQuestions, fetchGeneralQuestions } from "../lib/data";

interface Props {
  questionType: string;
  userId: string;
}

export default async function QuestionsForm({questionType, userId}: Props) {
  const questions =
    questionType === "Gen"
      ? await fetchGeneralQuestions()
      : await fetchDepartmentQuestions(questionType!);
  return(
    <div>
      <h1 className="text-4xl font-bold mb-4 uppercase">
          Întrebări {questionType === "Gen" ? "Generale" : `- ${questionType}`}
        </h1>
        <form className="w-full max-w-lg space-y-6">
          <div>
            {questions &&
              (await questions).map((question) => (
                <div key={question.id}>
                  <h2>{question.question}</h2>
                  <textarea
                    id="201"
                    name="201"
                    rows={3}
                    cols={55}
                    placeholder="Răspunsul tău aici..."
                    required
                    className="mt-2 p-2 w-full h-24 text-black rounded-md"
                  />
                </div>
              ))}
          </div>
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
  )
}