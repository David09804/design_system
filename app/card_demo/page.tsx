import {Button} from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

export default function CardDemo() {
    return (
        <div className="flex flex-row min-h-screen items-center justify-center">
            <CardHeader className="W-full max-w-san">
                This is a card
            </CardHeader>

        </div>
    )
}

