"use client"

import HeroSearch from "@/components/hero/hero-search"
import HeroPriceCardModal from "@/components/ui/hero-price-card-modal"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

function Hero() {
   const [value, setValue] = useState(100)
   const price = value * 0.02559

   const router = useRouter()

   useEffect(() => {
      router.push(`/?value=${value}`)
   }, [value, router])

   return (
      <main className="h-screen flex items-center justify-center max-w-5xl mx-auto">
         <div className="space-y-7">
            <HeroSearch value={value} setValue={setValue} />
            <div className="space-y-5">
               <h2 className="text-3xl font-extralight">OUR OFFER FOR YOU</h2>
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <HeroPriceCardModal
                     headerTitle="Verification Credits"
                     headerSubtitle={`${value} never expiring verification credits`}
                     priceSubtitle="ONE TIME PRICE:"
                     priceTitle="Only"
                     price={String(price.toFixed(2))}
                     contentTitle="YOU CAN USE FOR:"
                  >
                     <p>Email Checker</p>
                     <p>Email List Cleaning</p>
                     <p>Bulk Email Verification</p>
                     <p>ESP Integrations Import</p>
                     <p>Email Verification API</p>
                  </HeroPriceCardModal>
               </div>
            </div>
         </div>
      </main>
   )
}

export default Hero
