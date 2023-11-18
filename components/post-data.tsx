"use client"

import { FormEvent } from "react"
import { Button } from "./ui/button"
import { postData } from "@/lib/post-data"

export default function PostData() {
   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      try {
         await postData()
         alert("Data posted!")
      } catch (error) {
         console.error(error)
      }
   }

   return (
      <form className="p-10" onSubmit={handleSubmit}>
         <Button type="submit">Post Data</Button>
      </form>
   )
}
