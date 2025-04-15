import React from "react";

function Privacypolicy() {
  return (
    <div className="max-w-3xl mx-auto p-6 shadow rounded-lg my-6 bg-[#f4f5ff]/80 text-primary primary-font mt-[120px]">
      <h1 className="text-3xl font-bold mb-4 font-secondary text-primary">
        Privacy Policy
      </h1>
      <p className="text-sm mb-6" style={{ color: "#505080" }}>
        <strong>Last Updated:</strong> 15th April, 2025
      </p>
      <p className="mb-4">
        At Mindblue, we are committed to protecting your privacy and ensuring
        the security of your personal information. This Privacy Policy outlines
        how we collect, use, and share your information when you access our
        website and use our Services.
      </p>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2 font-secondary text-primary">
            1. Information We Collect
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Personal Information:</strong> When you create an account,
              complete our KYC verification, or make a payment, we collect
              personal details including your name, address, email, phone
              number, government-issued identification, and other necessary
              documents.
            </li>
            <li>
              <strong>Payment Information:</strong> Payment data processed via
              Razorpay, such as credit/debit card information or bank details,
              is handled directly by Razorpay. We do not store full payment
              details on our servers.
            </li>
            <li>
              <strong>Usage Data:</strong> We collect information about your
              interactions with our website, such as IP address, browser type,
              device information, and pages visited.
            </li>
            <li>
              <strong>Cookies:</strong> We use cookies and similar tracking
              technologies to enhance your user experience and gather usage
              data. You can adjust your browser settings to refuse cookies,
              though this may limit some functionality.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2 font-secondary text-primary">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Service Delivery:</strong> To provide and improve our
              Services, process transactions, and perform KYC verification.
            </li>
            <li>
              <strong>Communication:</strong> To communicate with you about your
              account, transactions, updates, and marketing (subject to your
              consent where required).
            </li>
            <li>
              <strong>Compliance:</strong> To comply with legal obligations,
              including anti-fraud measures, KYC/AML regulations, and financial
              reporting.
            </li>
            <li>
              <strong>Analytics:</strong> To analyze trends, administer the
              site, and gather demographic information for aggregate use.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2 font-secondary text-primary">
            3. Sharing and Disclosure
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Third-Party Processors:</strong> We share your information
              with trusted third-party service providers (such as Razorpay)
              strictly for processing payments and performing KYC verification.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose your
              information if required by law, regulation, or legal process.
            </li>
            <li>
              <strong>Business Transfers:</strong> In the event of a merger,
              acquisition, or sale of assets, your information may be
              transferred as part of the transaction. We will notify you of any
              significant changes regarding the use of your personal data.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2 font-secondary text-primary">
            4. Payment Processing via Razorpay
          </h2>
          <p>
            All payment transactions are securely handled by Razorpay. By making
            a payment, you agree to Razorpay's own privacy policy and terms of
            service. We encourage you to review their policies to understand how
            they process and protect your payment information.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2 font-secondary text-primary">
            5. KYC Verification
          </h2>
          <p>
            To comply with regulatory requirements, we may require you to
            complete a KYC verification process. This process involves
            collecting government-issued identification and other documents. We
            use this information solely for identity verification and fraud
            prevention purposes and maintain strict confidentiality and security
            measures.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2 font-secondary text-primary">
            6. Data Security
          </h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal data from unauthorized access, disclosure,
            alteration, and destruction. However, no method of transmission over
            the Internet is 100% secure, and we cannot guarantee absolute
            security.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2 font-secondary text-primary">
            7. Your Rights
          </h2>
          <p className="mb-2">
            Depending on your jurisdiction, you may have rights regarding your
            personal data, including:
          </p>
          <ul className="list-disc list-inside">
            <li>Access to your data</li>
            <li>Correction of inaccurate or incomplete data</li>
            <li>Deletion of your data (subject to certain conditions)</li>
            <li>Objection to or restriction of data processing</li>
            <li>Data portability</li>
          </ul>
          <p className="mt-2">
            To exercise these rights, please contact us using the contact
            details provided below.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2 font-secondary text-primary">
            8. Changes to This Privacy Policy
          </h2>
          <p>
            We may update our Privacy Policy from time to time. The updated
            version will be posted on this page with an updated "Last Updated"
            date. We encourage you to review this page periodically for any
            changes.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2 font-secondary text-primary">
            9. Contact Us
          </h2>
          <p className="mb-2">
            If you have any questions or concerns regarding this Privacy Policy
            or our data practices, please contact us at:
          </p>
          <ul className="list-disc list-inside">
            <li>
              <strong>Email:</strong> connect@mindblue.in
            </li>
            <li>
              <strong>Address:</strong> Floor 6, Jain Heights Solus, No. 2, 1st
              A Cross J C Rd, Bengaluru, Karnataka 560027
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Privacypolicy;
