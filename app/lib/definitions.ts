export type User = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
  city: string;
  county: string;
  facultyname: string;
  department_answers: string[];
  general_answers: string
  department: string;
};

export type Question = {
  id: string;
  question: string;
  department: string;
}

export interface DepartmentUserData {
  userId: string;
  department: string;
}
