"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        console.log("Placing your order");
        router.push("/"); //can also use router.replace("/").  replace the current URL with /new-page and won’t leave the user with a back button option to return to the previous page.
        //also router.back()
        //also router.forward()
    };
    return (
        <div className="flex flex-col">
            <h1>Order Your Product</h1>
            <div>
                <button className="rounded-md bg-blue-500 px-10" onClick={handleClick}>
                    Order
                </button>
            </div>
        </div>
    );
}
