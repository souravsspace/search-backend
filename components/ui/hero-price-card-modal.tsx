import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

interface HeroPriceCardModalProps {
   headerTitle: string
   headerSubtitle: string
   contentTitle: string
   priceTitle: string
   priceSubtitle: string

   price: string
   children: React.ReactNode
}

export default function HeroPriceCardModal({
   headerTitle,
   headerSubtitle,
   contentTitle,
   priceTitle,
   priceSubtitle,
   price,
   children,
}: HeroPriceCardModalProps) {
   const [isMounted, setIsMounted] = useState(false)

   useEffect(() => {
      setIsMounted(true)
   }, [])

   if (!isMounted) return null

   return (
      <Card className="flex-1 w-[380px]">
         <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">{headerTitle}</CardTitle>
            <CardDescription>{headerSubtitle}</CardDescription>
         </CardHeader>
         <CardContent>
            <div className="space-y-5">
               <div className="text-center">
                  <h3 className="text-base font-semibold">{priceSubtitle}</h3>
                  <CardTitle className="text-3xl font-bold">
                     {priceTitle} <span>${price}</span>
                  </CardTitle>
               </div>
               <div className="mt-4 text-center">
                  <h3 className="text-base font-semibold">{contentTitle}</h3>

                  <div className="mt-2">{children}</div>
               </div>
            </div>
         </CardContent>
         <CardFooter className="flex justify-between items-center gap-3">
            <Button variant="secondary" className="flex-1">
               More Details
            </Button>
            <Button className="flex-1">Buy Now</Button>
         </CardFooter>
      </Card>
   )
}
