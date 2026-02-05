import Navbar from "../ui/shared/Navbar";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup } from "@/components/ui/radio-group";
import { useState } from "react";

function Signup() {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto mt-4">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-1"
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-4">
            <Label className="my-2">Full Name</Label>
            <Input
              type="text"
              name="fullname"
              value={input.fullname}
              placeholder="Pritam Sinha"
              onChange={changeEventHandler}
            />
          </div>
          <div className="my-4">
            <Label className="my-2">Email</Label>
            <Input
              name="email"
              type="email"
              value={input.email}
              placeholder="pritamsecond123@gmail.com"
              onChange={changeEventHandler}
            />
          </div>
          <div className="my-4">
            <Label className="my-2">Phone Number</Label>
            <Input
              type="email"
              name="phoneNumber"
              value={input.phoneNumber}
              placeholder="7099440924"
              onChange={changeEventHandler}
            />
          </div>
          <div className="my-4">
            <Label className="my-2">Password</Label>
            <Input
              type="password"
              name="password"
              value={input.password}
              placeholder="Pritam Sinha"
              onChange={changeEventHandler}
            />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex gap-4 my-5 items-center">
              <div className="flex items-center gap-3">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role == "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center gap-3">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role == "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input
                accept="image/*"
                type="file"
                className="cursor-pointer"
                onChange={changeFileHandler}
              />
            </div>
          </div>
          <Button type="submit" className="w-full my-4 cursor-pointer">
            Sign Up
          </Button>
          <span>
            Already have an account?{" "}
            <Link to={"/login"} className="text-[#6a38c2] cursor-pointer">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Signup;
