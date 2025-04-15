import React from "react";

function Disclaimer() {
  return (
    <section className="max-w-3xl mx-auto p-6 shadow rounded-lg my-6 bg-[#f4f5ff]/80 text-primary primary-font mt-[120px]">
      <h1 className="text-3xl font-bold mb-4 font-secondary text-primary">
        Disclaimer
      </h1>
      <p className="text-sm mb-6" style={{ color: "#505080" }}>
        <strong>Last Updated:</strong> 15th April, 2025
      </p>
      <p className="mb-4">
        The information provided on Mindblue's website is for general
        informational purposes only. While we strive to keep the information up
        to date and correct, we make no representations or warranties of any
        kind, express or implied, about the completeness, accuracy, reliability,
        suitability, or availability with respect to the Site or the
        information, products, services, or related graphics contained on the
        Site for any purpose. Any reliance you place on such information is
        therefore strictly at your own risk.
      </p>
      <p>
        In no event will Mindblue be liable for any loss or damage including
        without limitation, indirect or consequential loss or damage, or any
        loss or damage whatsoever arising from loss of data or profits arising
        out of, or in connection with, the use of this Site. The content
        provided herein is not intended to be a substitute for professional
        legal, financial, or other expert advice. Always seek the advice of a
        qualified professional with any questions you may have regarding any
        legal matters.
      </p>
    </section>
  );
}

export default Disclaimer;
