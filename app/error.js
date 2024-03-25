"use client";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-[64vh] text-center">
      <h2 className="text-lg mt-20 text-gray-500">Something went wrong!</h2>
      <p className="mt-5 text-gray-600">{error.message}</p>
      <button
        className="bg-green-500 text-white p-2 rounded mt-20"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
