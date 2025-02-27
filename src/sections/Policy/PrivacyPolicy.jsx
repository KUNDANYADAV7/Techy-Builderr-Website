import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    // Ensure the page scrolls to the top when the component
    window.scrollTo(0, 0);
  }, []);


  const openGmail = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    // For Android devices, use the Gmail intent URL scheme.
    if (/android/i.test(userAgent)) {
      window.location.href = "intent://compose?to=techybuilderr@gmail.com#Intent;package=com.google.android.gm;scheme=mailto;end;";
    }
    // For iOS devices, use the Gmail URL scheme.
    else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      window.location.href = "googlegmail://co?to=techybuilderr@gmail.com";
    }
    // Fallback for desktop or when detection fails.
    else {
      window.open("https://mail.google.com/mail/?view=cm&fs=1&to=techybuilderr@gmail.com", "_blank");
    }
  };
  

  return (
    <div className="max-w-4xl mx-auto mt-4 px-6 py-8 bg-white shadow-lg rounded-lg mb-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Privacy Policy</h1>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">1. Introduction</h2>
        <p className="text-gray-600">
  Welcome to <strong>TECHY BUILDER</strong>. Your privacy is important to us, and we are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>
    <a href="https://www.techybuilder.in/" target="_blank" rel="noopener noreferrer" className='text-blue-700 underline hover:text-blue-800'>
      https://www.techybuilder.in/
    </a>
  </strong>.
</p>

      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">2. Information We Collect</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li><strong>Personal Information:</strong> <span className='font-bold'>TECHY BUILDER, <a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    openGmail();
  }}
  className="text-blue-700 hover:text-blue-800 hover:underline inline-block"
>techybuilderr@gmail.com</a>, +91 88666 46691</span>, and other information you provide when contacting us.</li>
          <li><strong>Usage Data:</strong> Information about your interaction with our website, including IP address, browser type, pages visited, and time spent on the site.</li>
          <li><strong>Cookies and Tracking Technologies:</strong> We use cookies to improve your experience on our website. You can manage your cookie preferences through your browser settings.</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">3. How We Use Your Information</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>To provide and maintain our website</li>
          <li>To improve user experience and personalize content</li>
          <li>To respond to inquiries or customer service requests</li>
          <li>To comply with legal obligations</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">4. Sharing Your Information</h2>
        <p className="text-gray-600">We do not sell, trade, or rent your personal information. However, we may share your data with:</p>
        <ul className="list-disc list-inside text-gray-600">
          <li><strong>Service Providers:</strong> Third-party vendors who assist us in website maintenance and analytics.</li>
          <li><strong>Legal Authorities:</strong> If required by law, we may disclose your information to comply with legal processes.</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">5. Data Security</h2>
        <p className="text-gray-600">We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">6. Your Rights</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Access, correct, or delete your personal information</li>
          <li>Withdraw consent for data processing</li>
          <li>Opt-out of cookies and tracking technologies</li>
        </ul>
        <p className="text-gray-600">To exercise these rights, contact us at <strong>techybuilderr@gmail.com</strong>.</p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">7. Third-Party Links</h2>
        <p className="text-gray-600">Our website may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to read their privacy policies.</p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">8. Changes to This Policy</h2>
        <p className="text-gray-600">We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date.</p>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold text-gray-700">9. Contact Us</h2>
        <p className="text-gray-600">If you have any questions about this Privacy Policy, please contact us at:</p>
        <p className="text-gray-600 font-bold">TECHY BUILDER</p>
        <p className="text-gray-600 font-bold">+91 88666 46691</p>
        <a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    openGmail();
  }}
  className="text-blue-700 hover:text-blue-800 hover:underline inline-block"
>techybuilderr@gmail.com</a>
        <p className="text-gray-600 font-bold">34, 3rd floor, Sanket park, Iskcon mandir, Harinagar, Vadodara-390007, India</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;