"use client"
import { Button } from "@/components/ui/button"
import { ReactNode } from "react"

interface HeaderGreenBTNProps {
    children: ReactNode
}

const HeaderGreenBTN = ({ children } : HeaderGreenBTNProps) => {
    return <Button variant={"link"} className="hover:text-ber-green text-white">{children}</Button>
}

export { HeaderGreenBTN }