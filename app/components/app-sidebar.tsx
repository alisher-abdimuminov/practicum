import * as React from "react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
    versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
    navMain: [
        {
            title: "Asosiy",
            url: "",
            items: [
                {
                    title: "Talabalar",
                    url: "/students",
                },
                {
                    title: "Dars jadvali",
                    url: "/schedules",
                },
                {
                    title: "Davomat",
                    url: "/reports",
                },
            ],
        },
        {
            title: "Guruhlar",
            url: "#",
            items: [
                {
                    title: "21_Bosh_talim_20",
                    url: "#",
                },
                {
                    title: "21_Mat_inf_47",
                    url: "#",
                    isActive: true,
                },
                {
                    title: "Tillar_2023_02",
                    url: "#",
                },
                {
                    title: "24_Bosh_talim_01",
                    url: "#",
                },
                {
                    title: "21_Mat_inf_01",
                    url: "#",
                },
                {
                    title: "21_Bosh_talim_08",
                    url: "#",
                },
                {
                    title: "21_Bosh_talim_21",
                    url: "#",
                },
                {
                    title: "21_Mat_inf_41",
                    url: "#",
                },
                {
                    title: "Tillar_2023_04",
                    url: "#",
                },
                {
                    title: "24_Bosh_talim_02",
                    url: "#",
                },
                {
                    title: "21_Mat_inf_11",
                    url: "#",
                },
                {
                    title: "21_Bosh_talim_18",
                    url: "#",
                },
            ],
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar {...props} className="bg-background">
            <SidebarHeader className="border-b">
                <p className="font-bold text-2xl">Practicum</p>
            </SidebarHeader>
            <SidebarContent>
                {/* We create a SidebarGroup for each parent. */}
                {data.navMain.map((item) => (
                    <SidebarGroup key={item.title}>
                        <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {item.items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild isActive={item.isActive}>
                                            <a href={item.url}>{item.title}</a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    )
}
