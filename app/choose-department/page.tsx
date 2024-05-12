"use client";
import { ArrowCircleRightIcon } from "@heroicons/react/outline";
import { updateUserDepartment } from "../lib/actions";
import { useSearchParams } from "next/navigation";

export default function DepartmentSelection() {
  const searchParams = useSearchParams();
  const userId = searchParams?.get('userId');
  console.log(userId);
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-[#D43743] font-teachers">
        <img src="/ASII - alb.png" className="h-24" />
        <div className="text-white text-4xl text-center font-semibold my-5 uppercase">
          Alege departamentul
        </div>
        <form action={updateUserDepartment}>
          <select name="department" className="text-black text-xl p-2 rounded">
            <option value="IT">IT 💻</option>
            <option value="PRM">PR & Media 🖌️</option>
            <option value="PRO">Proiecte 📁</option>
            <option value="RE">Relații Externe 🤝</option>
            <option value="RI">Relații Interne 👥</option>
          </select>
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
    </>
  );
}
