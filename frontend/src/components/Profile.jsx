import React, { useState } from "react";
import Navbar from "./ui/shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Contact, Mail, Pen } from "lucide-react";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";

const skills = ["Html", "Css", "JavaScript", "ReactJs"];
  const isResume = true;

function Profile() {

  const [open, setOpen] = useState(false);


  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src="https://imgs.search.brave.com/Ow2uSqmXpyeWMRQx15eYf0Wb5BVahkLZ-1qRZW_TDz4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtY3NlLmNhbnZh/LmNvbS9ibG9iLzI0/NDg4NzAvMTYwMHct/RVc0Y2dnWGtnYmMu/anBn"
                alt="Profile"
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                suscipit repudiandae officia accusamus voluptas fugiat nobis.
              </p>
            </div>
          </div>
          <Button onClick={()=> setOpen(true)} className="text-right " variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>pritam@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>7099339587</span>
          </div>
        </div>
        <div className="my-5">
          <h1 className="font-medium text-lg">Skills</h1>
          <div className="flex items-center gap">
            {skills.length != 0 ? (
              skills.map((item, index) => <Badge key={index}>{item}</Badge>)
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <a
              className="text-blue-500 w-full hover:underline"
              target="blank"
              href="https://youtube.com"
            >
              Pritam's Resume
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
        <AppliedJobTable />
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
}

export default Profile;
