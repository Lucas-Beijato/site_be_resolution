"use client"
import { Button } from "@/components/ui/button"
import { ReactNode } from "react"

interface IconBTNProps {
    children?: ReactNode
}

const IconBTN = ({ children } : IconBTNProps) => {
    return <Button size={"icon"} className="font-black bg-ber-green hover:bg-ber-darkgreen">{children}</Button>
}

export { IconBTN }