import React from "react";

const Heading = ({ number }: { number: number }) => <h1>Product {number}</h1>;

function Products() {
    const count = 3;
    return (
        <>
            <h1>Products</h1>
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
