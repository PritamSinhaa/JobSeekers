import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { Link } from "react-router-dom";

function Navbar() {
  let user = false;

  return (
    <div className="bg-white">
      <div className=" flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#F83002]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            
            <Link to="/"><li>Home</li></Link>
            <Link to="/jobs"><li>Jobs</li></Link>
            <Link to="/"><li>Browse</li></Link>
          </ul>

          {!user ? (
            <div>
              <Link to={"/login"} ><Button variant="outline" className="cursor-pointer">Login</Button></Link>
              &nbsp;
              <Link to={"/signup"}><Button className="bg-[#6a38c2] hover:bg-[#5b30a6] cursor-pointer">SignUp</Button></Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    className="grayscale"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex gap-4 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                      className="grayscale"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Pritam Sinha</h4>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet consect
                    </p>
                  </div>
                </div>
                <div className="flex flex-col text-gray-600">
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <IoPersonCircleSharp className="text-2xl" />
                    <Button variant="link">View Profile</Button>
                  </div>
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <MdOutlineLogout className="text-2xl" />
                    <Button variant="link">Log Out</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
