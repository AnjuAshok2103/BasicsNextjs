import React from "react";

function ProductReviewNotFound({ params }: { params: { reviewId: number; productId: number } }) {
    return (
        <div>
            <h1>Review not found</h1>
        </div>
    );
}

export default ProductReviewNotFound;
