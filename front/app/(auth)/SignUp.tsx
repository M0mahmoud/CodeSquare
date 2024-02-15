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
import { onSubmitSignUp } from "../server/FormServer";
import SubmitButton from "./SubmitButton";
const initialState = {
  message: null,
};

const SignUp = () => {
  const [stateUp, signUpAction] = useFormState(onSubmitSignUp, initialState);
  console.log("------stateUp------:", stateUp);

  return (
    <form action={signUpAction}>
      <Card>
        <CardHeader>
          <CardTitle>SignUp</CardTitle>
          <CardDescription>Create Your Account.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="firstName">FirstName</Label>
            <Input name="firstName" id="firstName" type="text" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="lastName">LastName</Label>
            <Input name="lastName" id="lastName" type="text" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="username">Username</Label>
            <Input name="username" id="username" type="text" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input name="email" id="email" type="email" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input name="password" id="password" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <SubmitButton state={stateUp} />
        </CardFooter>
      </Card>
    </form>
  );
};

export default SignUp;
