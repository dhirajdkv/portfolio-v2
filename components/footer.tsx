import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2023 Dhiraj Dommaraju.
      </small>
      <p className="text-xs">
        <span className="block text-sm text-gray-500 sm:text-center flex justify-center items-center">
          Made with{" "}
          <HeartIcon className="text-red-500 fill-red-500 h-4 w-4 ml-0.5 mr-0.5" />{" "}
          by Dhiraj.
        </span>
      </p>
    </footer>
  );
}
