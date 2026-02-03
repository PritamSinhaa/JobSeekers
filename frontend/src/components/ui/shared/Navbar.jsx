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

function Navbar() {
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
            <li>Home</li>
            <li>Jobs</li>
            <li>Brows</li>
          </ul>
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
                    <user2/>
                  <Button variant="link">View Profile</Button>
                </div>
                <div className="flex w-fit items-center gap-2 cursor-pointer">
                  <Button variant="link">Log Out</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
