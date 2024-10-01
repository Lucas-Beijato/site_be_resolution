"use client"
import { Button } from "@/components/ui/button"
import { ReactNode } from "react"

interface GrayBTNProps {
    children: ReactNode
}

const GrayBTN = ({ children } : GrayBTNProps) => {
    return <Button className="font-bold text-[16px] bg-ber-gray uppercase hover:bg-zinc-800 p-6">{children}</Button>
}

export { GrayBTN }