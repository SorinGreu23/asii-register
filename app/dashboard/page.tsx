import { UserIcon } from "@heroicons/react/outline";
import { MyCustomCard } from "../components/card";
import Navbar from "../components/navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2 mt-5 divide-x-2 divide-black-400 h-100">
        <div className="px-24 pt-10">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="grid grid-cols-3 gap-x-20 gap-y-10 mt-4">
            <MyCustomCard title="Jon" Icon={UserIcon} content={"PR&Media"} />
            <MyCustomCard title="Usher" Icon={UserIcon} content={"IT"} />
            <MyCustomCard title="Petru" Icon={UserIcon} content={"Test"} />
            <MyCustomCard title="Ion" Icon={UserIcon} content={"Test"} />
            <MyCustomCard title="Ioana" Icon={UserIcon} content={"Test"} />
            <MyCustomCard title="Idk" Icon={UserIcon} content={"Test"} />
            <MyCustomCard title="Alt nume" Icon={UserIcon} content={"Test"} />
            <MyCustomCard title="User" Icon={UserIcon} content={"Test"} />
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
