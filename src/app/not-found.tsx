import React from "react";
function NotFound() {
    return (
        <div className="flex-col flex justify-center items-center gap-10">
            <h1 className="text-6xl">404</h1>
            <h3 className="text-gray-300">Page not found</h3>
            <h1>Resource you requested is not found!</h1>
        </div>
    );
}

export default NotFound;
