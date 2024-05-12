import { UserIcon } from "@heroicons/react/outline";
import { MyCustomCard } from "../components/card";
import Navbar from "../components/navbar";
import { fetchUsers } from "../lib/data";

export default async function Dashboard() {
  const usersResult = await fetchUsers();
  console.log(usersResult);
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2 mt-5 h-100 divide-x-2 divide-black-400 h-100">
        <div className="px-24 pt-10">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="grid grid-cols-3 gap-x-20 gap-y-10 mt-4">
            {usersResult.map((user) => (
              <MyCustomCard
                key={user.id}
                title={user.firstname}
                Icon={UserIcon}
                content={user.department}
              />
            ))}
          </div>
        </div>
        <div className="px-20 pt-10">
          <h1 className="text-3xl font-bold pb-3">Quick Actions</h1>
          <p>Add new member</p>
          <p>Add questions</p>
        </div>
      </div>
    </>
  );
}
