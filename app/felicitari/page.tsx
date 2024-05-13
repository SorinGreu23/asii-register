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
          <div className="text-white text-6xl mb-5 font-semibold">FELICITĂRI!</div>
          <div className="text-white text-2xl relative -top-5">Ai completat cu succes formularul de inscriere in asociatia noastra. Vom reveni curand cu un raspuns.</div>
          <div>
            <Link href='/' className="text-2xl text-white border-2 border-white rounded-lg 
              hover:bg-white hover:text-red-primary transition duration-300 px-4 py-2 cursor-pointer">
              Acasa
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
