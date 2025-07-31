import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export default function Login() {
    return <>
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-sm">
                <div className={cn("flex flex-col gap-6")}>
                    <Card className="overflow-hidden p-0">
                        <CardContent className="grid p-0">
                            <form className="p-6 md:p-8">
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col items-center text-center">
                                        <h1 className="text-2xl font-bold">Xush kelibsiz</h1>
                                        <p className="text-muted-foreground text-balance">
                                            Practicum hisobingizga kiring.
                                        </p>
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="username">Foydalanuvchi nomi/Hemis ID</Label>
                                        <Input
                                            id="username"
                                            type="username"
                                            placeholder=""
                                            required
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <div className="flex items-center">
                                            <Label htmlFor="password">Kalit so'z</Label>
                                        </div>
                                        <Input id="password" type="password" required />
                                    </div>
                                    <Button type="submit" className="w-full">
                                        Kirish
                                    </Button>
                                    <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                                        <span className="bg-card text-muted-foreground relative z-10 px-2">
                                            Yoki
                                        </span>
                                    </div>
                                    <div className="grid gap-4">
                                        <Button variant="outline" type="button" className="w-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                            <span>Hemis bilan kirish</span>
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                    <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
                        Platform powered by Ali
                    </div>
                </div>
            </div>
        </div>
    </>
}