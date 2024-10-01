"use client"
import { Button } from "@/components/ui/button"
import { ReactNode } from "react"

interface GreenBTNProps {
    children: ReactNode
}

const GreenBTN = ({ children } : GreenBTNProps) => {
    return <Button className="font-black uppercase bg-ber-green hover:bg-ber-darkgreenm hover:bg-ber-darkgreen drop-shadow-xl">{children}</Button>
}

export { GreenBTN }