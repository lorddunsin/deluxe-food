import React from "react";
import Navbar from "../../Navbar";
import { useNavigate } from "react-router-dom";

function Privacy() {
  const navigate=useNavigate()
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-red-600">Privacy Policy</h1>

      <p className="mb-6 text-lg">
        At <strong>Deluxe Food</strong>, we take your privacy seriously. This
        Privacy Policy explains how we collect, use, and protect your personal
        information when you use our app and services.
      </p>

      {/* Information We Collect */}
      <h2 className="text-2xl font-semibold mb-2 text-red-500">
        1. Information We Collect
      </h2>
      <ul className="list-disc list-inside text-lg space-y-2 mb-6">
        <li>
          <strong>Personal Information:</strong> Name, email address, phone
          number, delivery address, and payment details.
        </li>
        <li>
          <strong>Usage Data:</strong> Pages visited, search queries, order
          history, and app activity.
        </li>
        <li>
          <strong>Location Data:</strong> With your permission, we may collect
          your location to improve delivery and search results.
        </li>
      </ul>

      {/* How We Use Your Information */}
      <h2 className="text-2xl font-semibold mb-2 text-red-500">
        2. How We Use Your Information
      </h2>
      <ul className="list-disc list-inside text-lg space-y-2 mb-6">
        <li>To process and deliver your orders.</li>
        <li>
          To personalize your experience and show relevant restaurant options.
        </li>
        <li>To improve our services, features, and customer support.</li>
        <li>To send you updates, promotions, and service-related messages.</li>
      </ul>

      {/* Sharing Your Information */}
      <h2 className="text-2xl font-semibold mb-2 text-red-500">
        3. Sharing Your Information
      </h2>
      <p className="text-lg mb-4">
        We do not sell your personal information. We only share your data with:
      </p>
      <ul className="list-disc list-inside text-lg space-y-2 mb-6">
        <li>Restaurants and delivery partners to fulfill your order.</li>
        <li>
          Trusted third-party service providers (e.g., payment processors,
          analytics tools).
        </li>
        <li>
          Legal authorities, when required by law or to protect our rights and
          users.
        </li>
      </ul>

      {/* Data Security */}
      <h2 className="text-2xl font-semibold mb-2 text-red-500">
        4. Data Security
      </h2>
      <p className="text-lg mb-6">
        We implement strong security measures to protect your data. However, no
        method of transmission over the Internet is 100% secure, and we cannot
        guarantee absolute security.
      </p>

      {/* Your Rights */}
      <h2 className="text-2xl font-semibold mb-2 text-red-500">
        5. Your Rights
      </h2>
      <ul className="list-disc list-inside text-lg space-y-2 mb-6">
        <li>
          You can update or delete your personal information in your account
          settings.
        </li>
        <li>You may request access to the data we store about you.</li>
        <li>You can opt out of marketing communications at any time.</li>
      </ul>

      {/* Changes to This Policy */}
      <h2 className="text-2xl font-semibold mb-2 text-red-500">
        6. Changes to This Policy
      </h2>
      <p className="text-lg mb-6">
        We may update this Privacy Policy occasionally. Any changes will be
        posted here, and major updates will be communicated through the app.
      </p>

      {/* Contact */}
      <h2 className="text-2xl font-semibold mb-2 text-red-500">
        7. Contact Us
      </h2>
      <p className="text-lg mb-6">
        If you have any questions or concerns about your privacy, please reach
        out to us at: <br />
        📧{" "}
        <a
          href="mailto:privacy@deluxefood.com"
          className="text-red-600 underline"
        >
          privacy@deluxefood.com
        </a>
      </p>

      <p className="text-lg">
        Thank you for trusting <strong>Deluxe Food</strong>. We’re committed to
        keeping your data safe and your experience secure.
      </p>
      <button
        onClick={() => navigate("/")}
        className="  text-xl rounded-lg text-white mt-10 px-20 bg-red-500 "
      >
        Back
      </button>
    </div>
  );
}

export default Privacy;
