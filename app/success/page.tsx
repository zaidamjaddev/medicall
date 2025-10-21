import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-3xl font-semibold text-green-600 mb-4">
        ✅ Payment Successful!
      </h1>
      <p className="text-gray-600 mb-6">
        Thank you for your purchase. Your payment has been processed successfully.
      </p>
      <Link
        href="/"
        className="text-blue-500 hover:underline"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
