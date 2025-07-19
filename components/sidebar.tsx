"use client"
import * as React from "react"

import { NavMain } from "@/components/nav"

import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarMenuButton,
    SidebarMenu,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

import {
    KeyRound,
    UsersRound,
    Command,
    Settings2,
    SquareTerminal,
} from "lucide-react"

const data = {
    navMain: [
        {
            title: "应用配置",
            icon: SquareTerminal,
            isActive: true,
            url: "/app",
            items: [
                {
                    title: "分发配置",
                    url: "/app/policy",
                },
                {
                    title: "权限管理",
                    url: "/app/access",
                },
            ],
        },
        {
            title: "用户管理",
            url: "/users",
            icon: UsersRound,
        },
        {
            title: "权限配置",
            url: "/access",
            icon: KeyRound,
        },
        {
            title: "设置",
            url: "/settings",
            icon: Settings2,
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar variant="inset" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <a href="#">
                                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                                    <Command className="size-4" />
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-medium">Cloud Policy</span>
                                    <span className="truncate text-xs">Open Source</span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
        </Sidebar>
    )
}