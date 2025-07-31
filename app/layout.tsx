"use client"

import { usePathname } from "next/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { AppSidebar } from "./components/app-sidebar";
import {
    Breadcrumb, BreadcrumbItem, BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import "@/app/globals.css"


export default function RootLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAuthPage = pathname.startsWith("/auth/login");

    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider defaultTheme="dark" attribute="class">
                    <SidebarProvider>
                        {!isAuthPage && <AppSidebar />}
                        <SidebarInset>
                            {!isAuthPage && (
                                <>
                                    <header className="sticky top-0 bg-background flex h-16 items-center gap-2 border-b px-4">
                                        <SidebarTrigger className="-ml-1" />
                                        <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
                                        <Breadcrumb>
                                            <BreadcrumbList>
                                                <BreadcrumbItem className="hidden md:block">
                                                    <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
                                                </BreadcrumbItem>
                                                <BreadcrumbSeparator className="hidden md:block" />
                                                <BreadcrumbItem>
                                                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                                                </BreadcrumbItem>
                                            </BreadcrumbList>
                                        </Breadcrumb>
                                    </header>
                                    <div className="p-5 md:p-10">{children}</div>
                                </>
                            )}
                            {isAuthPage &&
                                <div>{children}</div>
                            }
                        </SidebarInset>
                    </SidebarProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
