export default function CancelPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-3xl font-semibold text-red-600 mb-4">
        ❌ Payment Canceled
      </h1>
      <p className="text-gray-600 mb-6">
        It looks like your payment was canceled. You can try again anytime.
      </p>
      <a
        href="/"
        className="text-blue-500 hover:underline"
      >
        ← Back to Home
      </a>
    </div>
  );
}
