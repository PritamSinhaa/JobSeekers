import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useSelector } from "react-redux";
import store from "@/redux/store";

function UpdateProfileDialog({ open, setOpen }) {
  const [loading, setLoading] = useState(false);
  const {user} = useSelector(store=>store.auth);

  const [input, setInput] = useState({
    fullname:user?.fullname,
    email:user?.email,
    phoneNumber:user?.phoneNumber,
    bio:user?.profile?.bio,
    skills:user?.profile?.map(skill=>skill),
    file:user?.profile?.resume
  })

  const changeEventHandler =(e)=> {
    setInput({...input,[e.target.name]:[e.target.value]})
  }

  const fileChangeHandler = (e) => {
    const file = e.target.files?.[0]
    setInput({...input, file})
  }
  const submitHandler =(e) =>{
    e.preventDefault;
    console.log(input);
  }

  return (
    <div>
      <Dialog open={open}>
        <DialogContent
          className="sm:max-w-[425px]"
          onInteractOutside={() => {
            setOpen(false);
          }}
        >
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form onSubmit={submitHandler}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input 
                id="name" 
                name="name" 
                type="text"
                value={input.fullname}
                onChange={changeEventHandler}
                className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input 
                id="email"
                name="email" 
                type="email"
                value={input.email}
                onChange={changeEventHandler}
                className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="number" className="text-right">
                  Number
                </Label>
                <Input 
                id="number" 
                name="number" 
                type="number"
                value={input.phoneNumber}
                onChange={changeEventHandler}
                className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className="text-right">
                  Bio
                </Label>
                <Input 
                id="bio" 
                name="bio" 
                value={input.bio}
                onChange={changeEventHandler}
                className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="skills" className="text-right">
                  Skills
                </Label>
                <Input 
                id="skills" 
                name="skills" 
                value={input.skills}
                onChange={changeEventHandler}
                className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="file" className="text-right">
                  Resume
                </Label>
                <Input
                  id="file"
                  name="file"
                  type="file"
                  value={input.file}
                  onChange={fileChangeHandler}
                  accept="application/pdf"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              {loading ? (
                <Button className="w-full my-4">
                  <Loader2 className="mr-4 h-4 w-4  animate-spin" /> Please wait
                </Button>
              ) : (
                <Button type="submit" className="w-full my-4 cursor-pointer">
                  Update
                </Button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default UpdateProfileDialog;
