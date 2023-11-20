"use client";

import Image from "next/image";
import Link from "next/link"
import { useParams } from "next/navigation"

export default function Component() {

  const params = useParams();
  const tenant = params.subdomain;
  console.log(tenant)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center" href="#">
          <svg
            className=" h-6 w-6"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          <span className="sr-only">Welcome to {tenant}</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Shop
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to {tenant}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            The best place for your online shopping needs.
          </p>
          <Link href="#">
            <button>Shop Now</button>
          </Link>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4">
              <Image
                alt="Product"
                className="rounded-lg"
                height="200"
                src="https://www.orbis.com.ar/wp-content/themes/barberry/images/placeholder.jpg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <h3 className="text-lg font-bold">Product Name</h3>
              <p className="text-gray-600 dark:text-gray-400">$99.99</p>
              <button>Add to Cart</button>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Image
                alt="Product"
                className="rounded-lg"
                height="200"
                src="https://www.orbis.com.ar/wp-content/themes/barberry/images/placeholder.jpg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <h3 className="text-lg font-bold">Product Name</h3>
              <p className="text-gray-600 dark:text-gray-400">$99.99</p>
              <button>Add to Cart</button>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Image
                alt="Product"
                className="rounded-lg"
                height="200"
                src="https://www.orbis.com.ar/wp-content/themes/barberry/images/placeholder.jpg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <h3 className="text-lg font-bold">Product Name</h3>
              <p className="text-gray-600 dark:text-gray-400">$99.99</p>
              <button>Add to Cart</button>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Image
                alt="Product"
                className="rounded-lg"
                height="200"
                src="https://www.orbis.com.ar/wp-content/themes/barberry/images/placeholder.jpg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <h3 className="text-lg font-bold">Product Name</h3>
              <p className="text-gray-600 dark:text-gray-400">$99.99</p>
              <button>Add to Cart</button>
            </div>
          </div>
        </section>
        <section className="w-full py-8">
          <div className="container grid gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4">
              <Image
                alt="Product"
                className="rounded-lg"
                height="180"
                src="https://www.orbis.com.ar/wp-content/themes/barberry/images/placeholder.jpg"
                style={{
                  aspectRatio: "180/180",
                  objectFit: "cover",
                }}
                width="180"
              />
              <h3 className="text-lg font-bold">Product Name</h3>
              <p className="text-gray-600 dark:text-gray-400">$89.99</p>
              <button>Add to Cart</button>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Image
                alt="Product"
                className="rounded-lg"
                height="180"
                src="https://www.orbis.com.ar/wp-content/themes/barberry/images/placeholder.jpg"
                style={{
                  aspectRatio: "180/180",
                  objectFit: "cover",
                }}
                width="180"
              />
              <h3 className="text-lg font-bold">Product Name</h3>
              <p className="text-gray-600 dark:text-gray-400">$89.99</p>
              <button>Add to Cart</button>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Image
                alt="Product"
                className="rounded-lg"
                height="180"
                src="https://www.orbis.com.ar/wp-content/themes/barberry/images/placeholder.jpg"
                style={{
                  aspectRatio: "180/180",
                  objectFit: "cover",
                }}
                width="180"
              />
              <h3 className="text-lg font-bold">Product Name</h3>
              <p className="text-gray-600 dark:text-gray-400">$89.99</p>
              <button>Add to Cart</button>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Image
                alt="Product"
                className="rounded-lg"
                height="180"
                src="https://www.orbis.com.ar/wp-content/themes/barberry/images/placeholder.jpg"
                style={{
                  aspectRatio: "180/180",
                  objectFit: "cover",
                }}
                width="180"
              />
              <h3 className="text-lg font-bold">Product Name</h3>
              <p className="text-gray-600 dark:text-gray-400">$89.99</p>
              <button>Add to Cart</button>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <Image
                alt="Product"
                className="rounded-lg"
                height="180"
                src="https://www.orbis.com.ar/wp-content/themes/barberry/images/placeholder.jpg"
                style={{
                  aspectRatio: "180/180",
                  objectFit: "cover",
                }}
                width="180"
              />
              <h3 className="text-lg font-bold">Product Name</h3>
              <p className="text-gray-600 dark:text-gray-400">$89.99</p>
              <button>Add to Cart</button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t px-4 md:px-6">
        <p className="text-xs text-gray-600 dark:text-gray-400">© E-commerce Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

