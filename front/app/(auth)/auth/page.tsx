"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import * as React from "react";

import SignIn from "../SignIn";
import SignUp from "../SignUp";

export default function AuthPage() {
  return (
    <Tabs defaultValue="signin" className="w-full sm:w-3/5 m-auto mb-6 mt-4">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signin">SignIn</TabsTrigger>
        <TabsTrigger value="Signup">SignUp</TabsTrigger>
      </TabsList>
      <TabsContent value="signin">
        <SignIn />
      </TabsContent>
      <TabsContent value="Signup">
        <SignUp />
      </TabsContent>
    </Tabs>
  );
}
