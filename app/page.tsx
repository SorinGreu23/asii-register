import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center w-full min-h-screen bg-red-primary font-teachers p-0 m-0">
        <div className="text-center">
          <div className="mb-4">
            <Image
            width={200}
              height={96}
              className="inline-block -ml-5"
              src="/ASII - alb.png"
              alt="ASII Logo"
            />
          </div>
          <div className="text-white text-6xl mb-5 font-semibold">RECRUTEAZĂ!</div>
          <div>
            <Link href='/register' className="text-2xl text-white border-2 border-white rounded-lg 
              hover:bg-white hover:text-red-primary transition duration-300 px-4 py-2 cursor-pointer">
              Join us!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
