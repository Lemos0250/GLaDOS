'use client';

import React, { createContext } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";

export default function Home() {
  return (
   <div className="flex min-h-screen items-center justify-center">
      <Card className="w-[440px] h-[700px] grid grid-rows-[min-content-1fr-min-content]">
        <CardHeader>
          <CardTitle>GLaDOS</CardTitle>
            <CardDescription>Using Vercel SDK to create a chat box.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>DF</AvatarFallback>
              <AvatarImage className="w-[full] rounded-full" src="https://pm1.aminoapps.com/6470/4c77083e5966150e1a8cccf1c1ffa43bd5fce8cd_00.jpg"/>
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-800">Humano</span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem blanditiis recusandae deserunt provident, eius, porro, voluptates distinctio hic minima qui suscipit nemo aut cupiditate rerum natus similique repellat totam ut.
            </p>
          </div>

          <div className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>DF</AvatarFallback>
              <AvatarImage className="w-[full] rounded-full" src="https://pm1.aminoapps.com/6470/4c77083e5966150e1a8cccf1c1ffa43bd5fce8cd_00.jpg"/>
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-800">Humano</span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem blanditiis recusandae deserunt provident, eius, porro, voluptates distinctio hic minima qui suscipit nemo aut cupiditate rerum natus similique repellat totam ut.
            </p>
          </div>
        </CardContent>
        <CardFooter className="space-x-2">
          <Input placeholder="How can I help you ?"/>
          <Button type="submit">Send</Button>
        </CardFooter>
      </Card>
   </div>
  );
}
