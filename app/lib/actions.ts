'use server'
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
import { z } from "zod";

const UsersFormSchema = z.object({
  id: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  email: z.string(),
  phonenumber: z.string(),
  city: z.string(),
  county: z.string(),
  facultyname: z.string(),
});

const UserDepartmentSchema = z.object({
  userId: z.string(),
  department: z.string()
});

const UpdateAnswersSchema = z.object({
  userId: z.string(),
  answers: z.array(z.string()) // now expecting an array of strings
});

const CreateUser = UsersFormSchema.omit({ id: true });
const UpdateUserDepartment = UserDepartmentSchema.omit({});

export async function createUser(formData: FormData) {
  const { firstname, lastname, email, phonenumber, city, county, facultyname } =
    CreateUser.parse({
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
      email: formData.get("email"),
      phonenumber: formData.get("phonenumber"),
      city: formData.get("city"),
      county: formData.get("county"),
      facultyname: formData.get("facultyname"),
    });

  const data =
    await sql`INSERT INTO users (firstname, lastname, city, county, phonenumber, email, facultyname)
  VALUES (${firstname}, ${lastname}, ${city}, ${county}, ${phonenumber}, ${email}, ${facultyname})
  RETURNING id`;

  if (data.rows.length > 0) {
    const userId = String(data.rows[0].id);
    console.log(userId);
    redirect(`/questions?userId=${userId}&department=Gen`);
  }
}

export async function updateUserDepartment(formData: FormData) {
  const {userId, department} = UpdateUserDepartment.parse({
    userId: formData.get('userId'),
    department: formData.get('department')
  });

  await sql`UPDATE users
        SET department = ${department}
        WHERE id = ${userId}`;
  
  redirect(`/questions?userId=${userId}&department=${department}`)
}

export async function updateAnswers(formData: FormData) {
  const answers = Array.from(formData.entries()).reduce((acc: string[], [key, value]) => {
    if (key.startsWith('answer-')) {
      acc.push(value.toString()); // Collect answers as an array of strings
    }
    return acc;
  }, []);

  const parsedData = UpdateAnswersSchema.parse({
    userId: formData.get('userId'),
    answers
  });

  const answersJson = JSON.stringify(parsedData.answers);
  await sql`UPDATE users SET general_answers = ${answersJson}::jsonb WHERE id = ${parsedData.userId}`;

  redirect(`/choose-department?userId=${parsedData.userId}`);
}