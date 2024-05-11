"use client";
import { ArrowCircleRightIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { User } from "../models/user";
import { useRouter } from "next/navigation";

export default function RegistrationForm() {
  const [formData, setFormData] = useState<User>({
    firstName: '',
    lastName: '',
    city: '',
    county: '',
    email: '',
    facultyName: '',
    phone: ''
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData(prevState => ({...prevState, [name]: value }));
  }

  const handleSubmit = async (e: FormEvent) => {
    // e.preventDefault();
    // try {
    //   const response = await fetch('/api/register', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(formData)
    //   })
    // } catch (error) {
      
    // }
  }

  const routeToPage = () => {
    router.push('/choose-department');
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#D43743] font-teachers">
        <Image
          src="/ASII - alb.png"
          alt="Logo"
          width={200}
          height={96}
          className="mb-4"
        />
        <h1 className="text-white text-4xl mb-4 font-semibold uppercase text-center">
          Hai să ne cunoaștem!
        </h1>
        <form className="w-full max-w-lg p-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              id="nume"
              name="name"
              type="text"
              placeholder="Nume Prenume"
              required
              className="input bg-white p-2 rounded"
            />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
              className="input bg-white p-2 rounded"
            />
            <input
              id="telefon"
              name="phoneNumber"
              type="tel"
              placeholder="Numar de telefon"
              required
              className="input bg-white p-2 rounded"
            />
            <input
              id="oras"
              name="city"
              type="text"
              placeholder="Oras"
              required
              className="input bg-white p-2 rounded"
            />
            <input
              id="judet"
              name="county"
              type="text"
              placeholder="Judet"
              required
              className="input bg-white p-2 rounded"
            />
            <input
              id="facultate"
              name="facultyName"
              type="text"
              placeholder="Facultate"
              required
              className="input bg-white p-2 rounded"
            />
          </div>
          <div className="w-100 flex items-center justify-center">
            <button
              type="submit"
              className="mt-3 w-12 h-12 bg-white p-3 rounded-full shadow flex items-center justify-center"
              onClick={routeToPage}
            >
              <ArrowCircleRightIcon className="h-10 w-10 text-red-500" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
