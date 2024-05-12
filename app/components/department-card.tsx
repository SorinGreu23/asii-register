export function CustomDepartmentCard({ Icon, title, onClick }) {
  return (
    <button className="w-64 p-4 bg-white rounded-lg shadow-lg flex flex-col items-center cursor-pointer hover:bg-gray-100 transition duration-300" onClick={onClick}>
      <Icon className="h-10 w-10 text-gray-900" aria-hidden="true" />
      <p className="text-center text-xl mt-2">{title}</p>
    </button>
  );
}