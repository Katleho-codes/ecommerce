import Link from 'next/link'
import React from 'react'

function Hero() {
    return (
        <>
            <section className="hero bg-blend-overlay hten bg-fixed bg-cover bg-center bg-no-repeat bg-[url('../../public/images/background.jpg')]">
                <div className="relative px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-36">
                        <div className="text-center">
                            <h1 className="text-2xl sm:text-6xl font-black tracking-tight text-white drop-shadow-lg">
                                The style you deserve, for less.
                            </h1>

                            <div className="mt-10 flex flex-col items-center justify-center gap-y-6">
                                <Link
                                    href="#"
                                    className="link_btns bg-green-700 text-white font-semibold hover:font-bold rounded hover:bg-green-900 active:bg-green-800 focus:outline-none"
                                >
                                    Shop Now <span aria-hidden="true">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
