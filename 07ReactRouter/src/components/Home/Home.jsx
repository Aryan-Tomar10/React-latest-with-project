import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Download Now
              <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
            </h2>

            <Link
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
              to="/"
            >
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              &nbsp; Download now
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
          <img
            className="w-96"
            src="https://5.imimg.com/data5/ANDROID/Default/2023/3/RU/CK/JA/186276067/product-jpeg-500x500.jpg"
            alt="image1"
          />
        </div>
      </aside>

      <div className="grid  place-items-center sm:mt-20">
        <img
          className="sm:w-96 w-48"
          src="data:image/jpeg;base64,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"
          alt="image2"
        />
      </div>

      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
        Lorem Ipsum Yojo
      </h1>
    </div>
  );
}
