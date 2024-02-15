import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { useFormState } from "react-dom";
import { onSubmitSignIn } from "../server/FormServer";
import SubmitButton from "./SubmitButton";
const initialState = {
  message: "",
};
const SignIn = () => {
  const [stateIn, signInAction] = useFormState(onSubmitSignIn, initialState);
  console.log("----stateIn-----:", stateIn);
  return (
    <form action={signInAction}>
      <Card>
        <CardHeader>
          <CardTitle>SignIn</CardTitle>
          <CardDescription>Signin With Your Account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="name">Username Or Email</Label>
            <Input
              name="login"
              type="text"
              id="name"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="pass">Password</Label>
            <Input
              name="password"
              id="pass"
              type="password"
              placeholder="Password"
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <SubmitButton state={stateIn} />
        </CardFooter>
      </Card>
    </form>
  );
};

export default SignIn;
