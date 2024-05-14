import { EyeIcon } from "@heroicons/react/outline";
import Link from "next/link";

export function MyCustomCard({ Icon, title, content, link }) {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
    <div className="flex flex-col items-center pb-10">
        <div className="w-24 h-24 mt-4 mb-3 rounded-full shadow-lg flex items-center justify-center">
        <Icon className="h-10 w-10 text-gray-900" aria-hidden="true" />
        </div>
        <h5 className="mt-3 mb-1 text-2xl font-bold text-gray-900">{title}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{content}</span>
        <div className="flex mt-4 md:mt-6">
          <Link
          className="inline-flex items-center text-red-primary border-2 border-red-primary rounded-lg 
                hover:bg-red-primary hover:text-white transition duration-300 px-4 py-2 cursor-pointer flex items-center"
          href={link}
        >
          <EyeIcon className="h-6 mr-1"></EyeIcon> Verifică
        </Link>
            
        </div>
    </div>
</div>
    // <div className="w-56 p-6 bg-white rounded-lg shadow-lg flex flex-col items-center cursor-pointer hover:bg-gray-100 transition duration-300">
    //   <Icon className="h-10 w-10 text-gray-900" aria-hidden="true" />
    //   <p className="text-center text-xl mt-2">{title}</p>
    //   <p className="text-center my-2 italic">{content}</p>
    //   <Link
    //     className="text-red-primary border-2 border-red-primary rounded-lg 
    //           hover:bg-red-primary hover:text-white transition duration-300 px-4 py-2 cursor-pointer flex items-center"
    //     href={link}
    //   >
    //     <EyeIcon className="h-6 mr-1"></EyeIcon> Verifică
    //   </Link>
    // </div>
  );
}
