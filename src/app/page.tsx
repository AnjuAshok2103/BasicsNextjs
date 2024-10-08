import Link from "next/link";

export default function Home() {
    return (
        <>
            <h1 className="text-center text-3xl text-red-500">Home</h1>
            <Link href={"/blog"}>Blog</Link>
            <Link href={"/products/"}>Products</Link>
        </>
    );
}
