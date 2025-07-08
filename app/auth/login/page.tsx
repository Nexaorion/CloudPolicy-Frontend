import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginForm() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl text-center">登录云控中心</CardTitle>
                    <CardDescription className="text-center mt-2">
                        此系统仅限授权用户访问
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="username">用户名</Label>
                                <Input
                                    id="username"
                                    type="text"
                                    placeholder="username"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">密码</Label>
                                    <a
                                        href="/auth/forgotpassword/"
                                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                    >
                                        忘记密码?
                                    </a>
                                </div>
                                <Input id="password" type="password" placeholder="password" required />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full">
                        登录
                    </Button>
                    <Button variant="outline" className="w-full">
                        通过 Github 登录
                    </Button>
                </CardFooter>
            </Card>
        </div>

    )
}
