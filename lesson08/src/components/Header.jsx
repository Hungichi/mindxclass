import React from "react";

const Header = () => {
    return(
    <div className="bg-blue-700 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Contact Keeper</h1>
        <nav className="flex gap-6">
        <a href="#" className="text-white hover:underline">Home</a>
        <a href="#" className="text-white hover:underline">About</a>
    </nav>
    </div>
    )
}

export default Header;