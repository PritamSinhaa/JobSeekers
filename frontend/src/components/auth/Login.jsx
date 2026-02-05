import Navbar from "../ui/shared/Navbar";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup} from "@/components/ui/radio-group";

function Login() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto mt-4">
        <form
          action=""
          className="w-1/2 border border-gray-200 rounded-md p-4 my-1"
        >
          <h1 className="font-bold text-xl mb-5">Login</h1>
          <div className="my-4">
            <Label className="my-2">Full Name</Label>
            <Input type="text" value="" placeholder="Pritam Sinha" />
          </div>
          <div className="my-4">
            <Label className="my-2">Email</Label>
            <Input
              type="email"
              value=""
              placeholder="pritamsecond123@gmail.com"
            />
          </div>
          <div className="my-4">
            <Label className="my-2">Phone Number</Label>
            <Input type="email" value="" placeholder="7099440924" />
          </div>
          <div className="my-4">
            <Label className="my-2">Password</Label>
            <Input type="password" value="" placeholder="Pritam Sinha" />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup  className="flex gap-4 my-5 items-center">
              <div className="flex items-center gap-3">
                <Input
                type="radio"
                name="role"
                value="student"
                className="cursor-pointer"/>
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center gap-3">
                <Input
                type="radio"
                name="role"
                value="recruiter"
                className="cursor-pointer"/>
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
                <Label>Profile</Label>
                <Input
                accept="image/*"
                type="file"
                className="cursor-pointer"
                />
            </div>
          </div>
          <Button type="submit" className="w-full my-4 cursor-pointer" >Login</Button>
          <span>Don't have any account? <Link to={"/signup"}className="text-[#6a38c2] cursor-pointer">Signup</Link></span>
        </form>
      </div>
    </div>
  );
}

export default Login;
