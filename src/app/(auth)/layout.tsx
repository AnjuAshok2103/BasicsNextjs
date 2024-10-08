"use client";
import { NavLink } from "@/utils/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const navLinks: NavLink[] = [
        {
            name: "Register",
            href: "/register",
        },
        {
            name: "Login",
            href: "/login",
        },
        {
            name: "Forgot Password",
            href: "/forgot-password",
        },
    ];

    return (
        <div>
            <div className="gap-10 flex flex-row">
                {navLinks.map(link => {
                    const isActive = pathname.startsWith(link.href);
                    return (
                        <Link key={link.name} href={link.href} className={isActive ? "text-blue-500 font-bold" : "text-gray-500"}>
                            {link.name}
                        </Link>
                    );
                })}
            </div>
            {children}
        </div>
    );
}
