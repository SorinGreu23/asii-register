export interface User {
  _id?: string,
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  city: string,
  county: string,
  facultyName: string
  answers?: string[];
  department?: "IT" | "RE" | "RI" | "PRM" | "PRO";
}