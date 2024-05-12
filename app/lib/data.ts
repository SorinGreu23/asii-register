'use server';
import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { Question, User } from "./definitions";
import { redirect } from "next/navigation";

export async function fetchUsers() {
  noStore();
  try {
    console.log("Fetching data");
    const data = await sql<User>`SELECT * FROM users where department is not null`;
    console.log("Data fetch completed");
    return data.rows;
  } catch (error) {
    console.error("DB error: ", error);
    throw new Error("Failed to fetch users data");
  }
}

export async function fetchGeneralQuestions() {
  noStore();
  try {
    console.log("Fetching questions for Evaluari");
    const data = await sql<Question>`SELECT * FROM questions where department='Gen'`;
    console.log("Data fetch completed");
    return data.rows;
  } catch (error) {
    console.error("DB error: ", error);
    throw new Error("Failed to fetch users data");
  }
}

export async function fetchDepartmentQuestions(department: string) {
  noStore
  try {
    console.log("Fetching questions for Evaluari");
    const data = await sql<Question>`SELECT * FROM questions where department=${department}`;
    console.log("Data fetch completed");
    return data.rows;
  } catch (error) {
    console.error("DB error: ", error);
    throw new Error("Failed to fetch users data");
  }
}