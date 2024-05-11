export function MyCustomCard({ Icon, title, content }) {
  return (
    <div className="w-56 p-6 bg-white rounded-lg shadow-lg flex flex-col items-center cursor-pointer hover:bg-gray-100 transition duration-300">
      <Icon className="h-10 w-10 text-gray-900" aria-hidden="true" />
      <p className="text-center text-xl mt-2">{title}</p>
      <p className="text-center my-2 italic">{content}</p>
      <button className="text-red-primary border-2 border-red-primary rounded-lg 
              hover:bg-red-primary hover:text-white transition duration-300 px-4 py-2 cursor-pointer">See more
      </button>
    </div>
  );
}