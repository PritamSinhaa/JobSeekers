import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

function JobDescription() {

    const isApplied = false;

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">Frontend Devloper</h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge className="text-blue-700 font-bold" variant="ghost">
              {" "}
              12 Positions
            </Badge>
            <Badge className="text-[#f83802] font-bold" variant="ghost">
              Part Time
            </Badge>
            <Badge className="text-[#7209b7] font-bold" variant="ghost">
              24 LPA
            </Badge>
          </div>
        </div>
        <Button disabled={isApplied} className={`rounded-lg ${isApplied?'bg-gray-600 cursor-not-allowed':'bg-[#7209b7] hover:bg-[#5f32ad] cursor-pointer'}`}>{isApplied?'Already Applied':'Apply Now'}</Button>
      </div>
      <h1 className="border-b-2 border-gray-300 font-medium py-4">Job descrition</h1>
      <div className="my-4">
        <h1 className="font-bold my-1">Role: <span className="pl-4 font-normal text-gray-800">Frontend Developer</span></h1>
        <h1 className="font-bold my-1">Locatio: <span className="pl-4 font-normal text-gray-800">Hydrabad</span></h1>
        <h1 className="font-bold my-1">Description: <span className="pl-4 font-normal text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span></h1>
        <h1 className="font-bold my-1">Experience: <span className="pl-4 font-normal text-gray-800">2 yrs</span></h1>
        <h1 className="font-bold my-1">Salary: <span className="pl-4 font-normal text-gray-800">23LPA</span></h1>
        <h1 className="font-bold my-1">Total Application: <span className="pl-4 font-normal text-gray-800">6</span></h1>
        <h1 className="font-bold my-1">Posted Date: <span className="pl-4 font-normal text-gray-800">12-09-2025</span></h1>

      </div>
    </div>
  );
}

export default JobDescription;
