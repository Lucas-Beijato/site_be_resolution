"use client"
import { Button } from "@/components/ui/button"
import { ReactNode } from "react"

interface YellowBTNProps {
    children: ReactNode
}

const YellowBTN = ({ children } : YellowBTNProps) => {
    return <Button className="font-bold bg-ber-yellow uppercase hover:bg-ber-darkyellow">{children}</Button>
}

export { YellowBTN }