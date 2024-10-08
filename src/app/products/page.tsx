import Link from "next/link";
import React from "react";

const Heading = ({ number }: { number: number }) => (
    <h1>
        <Link href={`/products/${number}`} replace={number > 2}>
            Product {number}
        </Link>
    </h1>
);

function Products() {
    const count = 3;
    return (
        <>
            <h1>Products List</h1>
            {(() => {
                const headings = [];
                for (let i = 1; i <= count; i++) {
                    headings.push(<Heading key={i} number={i} />);
                }
                return headings;
            })()}
        </>
    );
}

export default Products;
