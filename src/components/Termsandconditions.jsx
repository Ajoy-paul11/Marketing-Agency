import React from "react";
import ScrollToTop from "./ScrollToTop";

function Termsandconditions() {
  return (
    <>
      <ScrollToTop />
      <section className="max-w-3xl mx-auto p-6 shadow rounded-lg my-6 bg-[#f4f5ff]/80 text-primary primary-font mt-[120px]">
        <h1 className="text-3xl font-bold mb-4 font-secondary text-primary">
          Terms and Conditions
        </h1>
        <p className="text-sm mb-6" style={{ color: "#505080" }}>
          <strong>Last Updated:</strong> 15th April, 2025
        </p>
        <p className="mb-4">
          Welcome to Mindblue. By accessing or using our website and services,
          you agree to be bound by the following Terms and Conditions. Please
          read these terms carefully.
        </p>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2 font-secondary text-primary">
              1. Acceptance of Terms
            </h2>
            <p>
              By using our Services, you agree to these Terms and Conditions and
              our Privacy Policy. If you do not agree, please do not use our
              Services.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 font-secondary text-primary">
              2. Eligibility
            </h2>
            <p>
              You must be at least 18 years of age and capable of entering into
              a legally binding agreement to use our Services.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 font-secondary text-primary">
              3. User Account and KYC Verification
            </h2>
            <p className="mb-2">
              <strong>Account Registration:</strong> You may be required to
              create an account to access certain features of our Services. You
              agree to provide accurate and complete information during
              registration.
            </p>
            <p>
              <strong>KYC Compliance:</strong> As part of our commitment to
              regulatory compliance and fraud prevention, we require users to
              complete a Know Your Customer (KYC) verification process. Failure
              to provide accurate KYC information may result in the suspension
              or termination of your account.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 font-secondary text-primary">
              4. Payment Terms and Razorpay Integration
            </h2>
            <p className="mb-2">
              <strong>Payment Processing:</strong> Payments for our services are
              processed securely through Razorpay. By making a payment, you
              agree to Razorpay's terms and conditions in addition to these
              Terms.
            </p>
            <p className="mb-2">
              <strong>Billing Information:</strong> You agree to provide
              current, complete, and accurate billing and payment information.
            </p>
            <p className="mb-2">
              <strong>Authorization:</strong> By submitting payment details, you
              authorize us and Razorpay to charge the applicable fees to your
              designated payment method.
            </p>
            <p>
              <strong>Refunds and Disputes:</strong> Refunds will be provided in
              accordance with our Refund Policy, and any disputes regarding
              charges must be raised with our customer support team immediately.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 font-secondary text-primary">
              5. Use of Services
            </h2>
            <p className="mb-2">
              <strong>Permissible Use:</strong> You agree to use our Services
              only for lawful purposes and in accordance with these Terms. You
              must not use the Services in any way that could damage, disable,
              overburden, or impair our website or interfere with any other
              party's use of the Services.
            </p>
            <p>
              <strong>Prohibited Activities:</strong> Unauthorized commercial
              use, data scraping, or other activities that disrupt our services
              are strictly prohibited.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 font-secondary text-primary">
              6. Intellectual Property
            </h2>
            <p>
              All content, trademarks, and data on this Site, including but not
              limited to text, graphics, logos, icons, images, and software, are
              the property of Mindblue or its licensors and are protected by
              applicable intellectual property laws.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 font-secondary text-primary">
              7. Limitation of Liability
            </h2>
            <p>
              In no event shall Mindblue be liable for any direct, indirect,
              incidental, special, consequential, or punitive damages, or any
              other damages whatsoever, arising out of or related to your use of
              or inability to use the Services.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 font-secondary text-primary">
              8. Indemnification
            </h2>
            <p>
              You agree to indemnify, defend, and hold harmless Mindblue and its
              affiliates from any claims, damages, obligations, losses,
              liabilities, costs, or debt arising from your use of the Services
              or violation of these Terms.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 font-secondary text-primary">
              9. Governing Law and Jurisdiction
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of Karnataka IT Law. Any disputes arising in connection
              with these Terms shall be subject to the exclusive jurisdiction of
              the courts in Karnataka Government.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 font-secondary text-primary">
              10. Modifications
            </h2>
            <p>
              We reserve the right to modify or replace these Terms at any time.
              Any changes will be posted on this page with an updated revision
              date. Your continued use of the Services following any changes
              signifies your acceptance of the new Terms.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 font-secondary text-primary">
              11. Contact Information
            </h2>
            <p className="mb-2">
              If you have any questions regarding these Terms, please contact us
              at:
            </p>
            <ul className="list-disc list-inside">
              <li>
                <strong>Email:</strong> connect@mindblue.in
              </li>
              <li>
                <strong>Address:</strong> Floor 6, Jain Heights Solus, No. 2,
                1st A Cross J C Rd, Bengaluru, Karnataka 560027
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Termsandconditions;
