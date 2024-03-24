"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[64vh] text-center">
      <h2 className="text-lg mt-20 text-gray-500">Something went wrong!</h2>
      <p className="mt-5 text-gray-600">{error.message}</p>
      <button
        className="bg-green-500 text-white p-2 rounded mt-20"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
