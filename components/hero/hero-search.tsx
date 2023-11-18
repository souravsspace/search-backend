"use client"

import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"
import { MailCheck, Search } from "lucide-react"
import { Dispatch, FormEvent, SetStateAction } from "react"

interface HeroSearchProps {
   value: number
   setValue: Dispatch<SetStateAction<number>>
}

export default function HeroSearch({ value, setValue }: HeroSearchProps) {
   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
   }
   return (
      <main className="space-y-5">
         <div>
            <h1 className="text-5xl font-extrabold">
               Email Verification Prices
            </h1>
            <p>How many emails do you want to verify:</p>
         </div>
         <form className="flex items-center gap-2" onSubmit={handleSubmit}>
            <Input
               type="number"
               value={value}
               onChange={(e) => setValue(Number(e.target.value))}
               className="pl-10"
               min={100}
               max={1000000}
            />
            <Button variant="ghost" disabled className="absolute">
               <Search className="h-4 w-4" />
            </Button>
            <Button type="submit" variant="outline">
               Calculate price
            </Button>
         </form>
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            <Button
               variant="outline"
               onClick={() => setValue(100)}
               className="rounded-lg"
            >
               <MailCheck className="h-5 w-5" />
               <span className="ml-3">100</span>
            </Button>
            <Button
               variant="outline"
               onClick={() => setValue(200)}
               className="rounded-lg"
            >
               <MailCheck className="h-5 w-5" />
               <span className="ml-3">200</span>
            </Button>
            <Button
               variant="outline"
               onClick={() => setValue(400)}
               className="rounded-lg"
            >
               <MailCheck className="h-5 w-5" />
               <span className="ml-3">400</span>
            </Button>
            <Button
               variant="outline"
               onClick={() => setValue(800)}
               className="rounded-lg"
            >
               <MailCheck className="h-5 w-5" />
               <span className="ml-3">800</span>
            </Button>
         </div>
      </main>
   )
}
