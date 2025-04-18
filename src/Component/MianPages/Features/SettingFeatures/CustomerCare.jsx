import React from "react";

function CustomerCare() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-red-600">Customer Care</h1>

      <p className="text-lg mb-6">
        At <strong>Deluxe Food</strong>, your satisfaction is our top priority.
        Whether you're ordering your favorite dish, selling meals, or exploring
        new restaurants, we're here to make your experience smooth and
        enjoyable.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-red-500">
        How Can We Help?
      </h2>

      <ul className="list-disc list-inside text-lg space-y-3 mb-8">
        <li>Having trouble with an order?</li>
        <li>Need help managing your restaurant listing?</li>
        <li>Payment or delivery issues?</li>
        <li>Want to report a bug or give feedback?</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 text-red-500">Contact Us</h2>

      <p className="text-lg mb-2">
        📧 <strong>Email:</strong>{" "}
        <a
          href="mailto:support@deluxefood.com"
          className="text-blue-600 underline"
        >
          support@deluxefood.com
        </a>
      </p>
      <p className="text-lg mb-2">
        📞 <strong>Phone:</strong> +1 (800) 123-4567
      </p>
      <p className="text-lg mb-8">
        💬 <strong>Live Chat:</strong> Available in-app from 9 AM to 9 PM daily
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-red-500">FAQs</h2>
      <p className="text-lg mb-2 font-semibold">How do I track my order?</p>
      <p className="text-lg mb-4">
        Go to your orders section in the app and click on the current order to
        view its live status.
      </p>

      <p className="text-lg mb-2 font-semibold">Can I cancel my order?</p>
      <p className="text-lg mb-4">
        Yes, you can cancel your order within 5 minutes of placing it. After
        that, it depends on the restaurant's policy.
      </p>

      <p className="text-lg mb-2 font-semibold">
        How do I become a food vendor on Deluxe Food?
      </p>
      <p className="text-lg mb-4">
        Visit the "Sell on Deluxe Food" section in the app or reach out to us at{" "}
        <a
          href="mailto:partners@deluxefood.com"
          className="text-blue-600 underline"
        >
          partners@deluxefood.com
        </a>{" "}
        to get started.
      </p>

      <p className="text-lg mt-8">
        Thank you for choosing <strong>Deluxe Food</strong>. We're here to serve
        you — one bite at a time!
      </p>
    </div>
  );
}

export default CustomerCare;
