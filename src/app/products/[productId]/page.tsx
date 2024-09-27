import React from "react";
import { Metadata } from "next";
import { resolve } from "path";

//dynamic metadata example

type Props = {
    params: {
        productId: string;
    };
};

// export const generateMetadata = ({ params }: Props): Metadata => {
//     return {
//         title: `Product ${params.productId}`,
//     };
// };

// The generateMetadata can be made async

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const title = await new Promise<string>(resolve => {
        setTimeout(() => {
            resolve(`iPhone ${params.productId}`);
        }, 100);
    });
    return {
        title: `Product ${title}`,
    };
};

function Details({ params }: Props) {
    return <div>Product Details {params.productId}</div>;
}

export default Details;
