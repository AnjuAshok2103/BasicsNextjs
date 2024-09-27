import React from "react";
import { notFound } from "next/navigation";

function ProductReview({ params }: { params: { productId: number; reviewId: number } }) {
    if (params.reviewId > 100) {
        notFound();
    }
    return (
        <div>
            Review {params.reviewId} for product {params.productId}
        </div>
    );
}

export default ProductReview;
