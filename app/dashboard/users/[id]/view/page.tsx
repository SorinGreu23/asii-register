"use client";
import { useParams } from "next/navigation";
import Navbar from "../../../../components/navbar";
import { Question, User } from "../../../../lib/definitions";
import { fetchDepartmentQuestions, fetchGeneralQuestions, fetchUser } from "../../../../lib/data";
import { useEffect, useState } from "react";

export default function UserView() {
  const userId = useParams<{ id: string }>()?.id;
  const [departmentQuestions, setDepartmentQuestions] = useState<Question[]>();
  const [generalQuestions, setGeneralQuestions] = useState<Question[]>();
  const [user, setUser] = useState<User>();
  console.log(userId);

  useEffect(() => {
    const fetchUserById = async () => {
      const fetchedUser = await fetchUser(userId!);
      const mappedUser: User = {
        id: userId!,
        firstname: fetchedUser.firstname,
        lastname: fetchedUser.lastname,
        email: fetchedUser.email,
        phonenumber: fetchedUser.phonenumber,
        city: fetchedUser.city,
        county: fetchedUser.county,
        facultyname: fetchedUser.facultyname,
        department: fetchedUser.department,
        department_answers: JSON.parse(fetchedUser.department_answers),
        general_answers: JSON.parse(fetchedUser.general_answers),
      };
      setUser(mappedUser);
    };

    fetchUserById();
  }, [userId]);

  useEffect(() => {
    if (user) {
      const fetchUserDepartmentQuestions = async () => {
        const userDepartmentQuestions = await fetchDepartmentQuestions(
          user.department
        );
        setDepartmentQuestions(userDepartmentQuestions);
      };
      fetchUserDepartmentQuestions();
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      const fetchUserGeneralQuestions = async () => {
        const userGeneralQuestions = await fetchGeneralQuestions();
        setGeneralQuestions(userGeneralQuestions);
      };

      fetchUserGeneralQuestions();
    }
  }, [user]);

  return (
    <>
      <Navbar />
      <div id="tabel-date-generale">
        <div className="mt-5 h-100 divide-x-2 divide-black-400 h-100 px-36 pt-10">
          <p className="text-xl my-4 font-semibold text-center text-gray-500">
            Despre candidat
          </p>
          <h1 className="text-5xl mb-8 font-bold text-center">
            {user?.firstname + " " + user?.lastname}
          </h1>
        </div>
        <div
          className="bg-white overflow-hidden shadow rounded-lg border"
          style={{
            marginLeft: '25%',
            marginRight: '25%',
          }}
        >
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Detaliile candidatului
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Mai jos gasesti detaliile despre candidat
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Nume Complet
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user?.firstname + " " + user?.lastname}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Departament
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user?.department}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user?.email}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Numar de Telefon
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user?.phonenumber}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Oras</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user?.city}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Judet</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user?.county}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Facultate</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user?.facultyname}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div id="tabel-intrebari-generale">
        <div
          className="bg-white my-6 overflow-hidden shadow rounded-lg border"
          style={{
            marginLeft: '25%',
            marginRight: '25%',
          }}
        >
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Intrebari Generale
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Mai jos gasesti raspunsurile pentru intrebarile generale
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              {generalQuestions?.map((question, index) => (
                <div key={index} className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    {question.question}
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {user?.general_answers[index]}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div id="tabel-intrebari-departament">
        <div
          className="bg-white my-6 overflow-hidden shadow rounded-lg border"
          style={{
            marginLeft: '25%',
            marginRight: '25%',
          }}
        >
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Intrebari de Departament
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Mai jos gasesti raspunsurile pentru intrebarile de departament
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              {departmentQuestions?.map((question, index) => (
                <div key={index} className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    {question.question}
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {user?.department_answers[index]}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
