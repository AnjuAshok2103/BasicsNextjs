import { Metadata } from "next";
import React from "react";

//static metadata object
//Both layout.tsx and page.tsx can exprt metadata.If defined inthe layout.tsx, it applies to all pages in thelayout i.e RootLayout
//If defined in the page.tsx like this, it applies only to this page
//Title metadata changes but description gets merged
export const metadata: Metadata = {
    title: "About",
};

function About() {
    return (
        <div>
            <h1 className="text-center text-3xl text-red-500">About</h1>
        </div>
    );
}

export default About;
