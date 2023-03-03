import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
    const [searchOpen, setSearchOpen] = useState(false);
    const ToggleSearchbar = () => {
        searchOpen === true ? setSearchOpen(false) : setSearchOpen(true);
    };
    return (
        <>
            <header className="flex flex-col">
                <nav className="navbar flex justify-between items-center border-b p-3">
                    <Link
                        className={` ${searchOpen == true ? "hidden" : " inline-block"
                            }`}
                        href=""
                    >
                        <svg
                            id="logo-15"
                            width="49"
                            height="48"
                            viewBox="0 0 49 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z"
                                className="ccustom"
                                fill="#17CF97"
                            ></path>{" "}
                            <path
                                d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z"
                                className="ccustom"
                                fill="#17CF97"
                            ></path>
                            <path
                                d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z"
                                className="ccustom"
                                fill="#17CF97"
                            ></path>
                            <path
                                d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z"
                                className="ccustom"
                                fill="#17CF97"
                            ></path>
                        </svg>
                    </Link>

                    <div className="mobile_icons flex gap-5">
                        <Link
                            className={`navmobile_links ${searchOpen == true ? "hidden" : "inline-block"
                                }`}
                            href=""
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z" />
                            </svg>
                        </Link>
                        <Link
                            className={`navmobile_links ${searchOpen == true ? "hidden" : "inline-block"
                                }`}
                            href=""
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 22h14c1.103 0 2-.897 2-2V9a1 1 0 0 0-1-1h-3V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H4a1 1 0 0 0-1 1v11c0 1.103.897 2 2 2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-4 3h2v2h2v-2h6v2h2v-2h2l.002 10H5V10z" />
                            </svg>
                        </Link>
                        <span
                            className={` ${searchOpen == true ? "hidden" : "inline-block"}`}
                            onClick={ToggleSearchbar}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
                            </svg>
                        </span>
                        <button
                            className={`hamburger border-0 ${searchOpen == true ? "hidden" : "block"
                                }`}
                        >
                            {" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                            </svg>
                        </button>
                    </div>
                    {searchOpen == true ? (
                        <span className="flex items-center w-full gap-2 ">
                            <input
                                className="border rounded w-full py-2 px-3 mx-auto transition duration-150 ease-out"
                                type="text"
                                placeholder="Search products..."
                                name="search"
                                id="search"
                            />
                            <button
                                className="close w-6 h-6 border-0"
                                onClick={ToggleSearchbar}
                            >
                                <svg
                                    className="fill-gray-900"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                >
                                    <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z" />
                                </svg>
                            </button>
                        </span>
                    ) : (
                        ""
                    )}
                </nav>
            </header>
        </>
    );
}

export default Navbar;
