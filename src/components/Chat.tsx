'use client';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
  import { Input } from "@/components/ui/input";
  import { Button } from "@/components/ui/button";
  import { useChat } from "ai/react";

export function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
      api: "/api/chat",
    });

    return (
        <Card className="w-[440px] h-[700px] grid grid-rows-[min-content-1fr-min-content]">
            <CardHeader>
            <CardTitle>GLaDOS</CardTitle>
                <CardDescription>Using Vercel SDK to create a chat box.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
            { messages.map(message => {
                return (
                    <div 
                    key={message.id} 
                    className="flex gap-3 text-slate-600 text-sm"
                    >
                        {message.role === 'user' && (
                        <Avatar>
                            <AvatarFallback>DF</AvatarFallback>
                            <AvatarImage className="w-[100px] rounded-full" src="https://pm1.aminoapps.com/6470/4c77083e5966150e1a8cccf1c1ffa43bd5fce8cd_00.jpg"/>
                        </Avatar>
                        )}

                        {message.role === 'assistant' && (
                        <Avatar>
                            <AvatarImage className="w-[100px] rounded-full" src="https://pm1.aminoapps.com/6470/4c77083e5966150e1a8cccf1c1ffa43bd5fce8cd_00.jpg"/>
                        </Avatar>
                        )}

                        <p className="leading-relaxed">
                            <span className="block font-bold text-slate-700">
                                {message.role === 'user' ? 'Usuário' : 'AI'}
                            </span>
                           {message.content}
                        </p>
                    </div>
                );
            }) }
           
            </CardContent>
                <CardFooter className="space-x-2">
                <form className="w-full flex gap-2" onSubmit={handleSubmit}>
                    <Input 
                        placeholder="How can I help you ?" 
                        value={input} 
                        onChange={handleInputChange}/>
                    <Button type="submit">Send</Button>
                </form>
            </CardFooter>
        </Card>
    )
}