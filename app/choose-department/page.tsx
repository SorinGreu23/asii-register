import Head from "next/head";
import Image from "next/image";
import { DesktopComputerIcon, CameraIcon, ClipboardListIcon, UserIcon, CurrencyDollarIcon } from '@heroicons/react/outline';
import { CustomDepartmentCard } from "../components/department-card";

export default function DepartmentSelection() {
  return (
    <>
      <Head>
        <title>Alege departamentul</title>
      </Head>
      <div className="flex flex-col justify-center items-center min-h-screen bg-[#D43743] font-teachers">
        <img src="/ASII - alb.png" className="h-24" />
        <div className="text-white text-4xl text-center font-semibold my-5 uppercase">Alege departamentul</div>
        <div className="grid grid-cols-3 gap-4">
          <CustomDepartmentCard Icon={DesktopComputerIcon} title="IT" />
          <CustomDepartmentCard Icon={CameraIcon} title="PR&M" />
          <CustomDepartmentCard Icon={ClipboardListIcon} title="PRO" />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-5">
          <CustomDepartmentCard Icon={CurrencyDollarIcon} title="RE" />
          <CustomDepartmentCard Icon={UserIcon} title="RI" />
        </div>
      </div>
    </>
  );
}


