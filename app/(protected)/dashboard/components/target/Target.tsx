import React from 'react'
import { ShoppingCartIcon, WalletIcon, SparklesIcon, PresentationChartBarIcon } from "@heroicons/react/24/outline"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"


interface Target {
    category: string,
    target: string,
    percentage: string,
    message: string
}


interface Props {
    target: Target
}

export default function Target({target}: Props) {
  return (
    <Card key={target.percentage} className="p-4">
        <div className="flex items-center gap-2 text-gray-500">
            <CardTitle>{target.category}</CardTitle>
        </div>
        <p className="font-black text-2xl py-4">{target.target}</p>
        <CardDescription className="text-sm">{target.message}</CardDescription>
    </Card>
  )
}
