import Navbar from "../ui/shared/Navbar";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup } from "@/components/ui/radio-group";
import { useState } from "react";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
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
          <h1 className="font-bold text-xl mb-5">Login</h1>
          <div className="my-4">
            <Label className="my-2">Email</Label>
            <Input
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="pritamsecond123@gmail.com"
            />
          </div>
          <div className="my-4">
            <Label className="my-2">Password</Label>
            <Input
              type="password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              placeholder="Pritam Sinha"
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
          </div>
          <Button type="submit" className="w-full my-4 cursor-pointer">
            Login
          </Button>
          <span>
            Already have an account?{" "}
            <Link to={"/signup"} className="text-[#6a38c2] cursor-pointer">
              Signup
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
