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
import { FiGithub } from "react-icons/fi";

export function LoginForm() {
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
                            <Button type="submit" className="w-full">
                                登录
                            </Button>
                            <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                                <span className="bg-card text-muted-foreground relative z-10 px-2">
                                    或使用第三方登录
                                </span>
                            </div>
                            <Button variant="outline" className="w-full">
                                <FiGithub /> 通过 Github 登录
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>

    )
}
