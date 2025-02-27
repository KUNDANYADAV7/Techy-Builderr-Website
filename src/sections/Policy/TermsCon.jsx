import React, { useEffect } from "react";

const TermsAndCon = () => {

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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6 md:p-10">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Terms and Conditions</h1>
        {/* <p className="text-gray-600 text-sm text-center mb-6">Effective Date: 26-FEB-2025</p> */}
        
        <div className="space-y-6 text-gray-700">
          <div>
            <h2 className="text-xl font-semibold">1. Introduction</h2>
            <p>Welcome to <span className="font-bold">TECHY BUILDER.</span> By accessing or using our website <a href="https://www.techybuilder.in/" target="_blank" rel="noopener noreferrer" className='text-blue-700 underline hover:text-blue-800'>
      https://www.techybuilder.in/
    </a>, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should not use our website.</p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold">2. Use of the Website</h2>
            <ul className="list-disc list-inside">
              <li>You agree not to use the website for any unlawful or prohibited purpose.</li>
              <li>Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold">3. Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, and images, is owned by or licensed to us and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without prior written consent.</p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold">4. User Accounts</h2>
            <ul className="list-disc list-inside">
              <li>If you create an account on our website, you are responsible for maintaining the confidentiality of your account information.</li>
              <li>You must notify us immediately of any unauthorized use of your account.</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold">5. Limitation of Liability</h2>
            <p>We do not guarantee that the website will be error-free or uninterrupted. We shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our website.</p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold">6. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of these external sites.</p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold">7. Changes to These Terms</h2>
            <p>We reserve the right to update or modify these Terms and Conditions at any time. Changes will be effective upon posting on this page.</p>
          </div>
          
           <div>
            <h2 className="text-xl font-semibold">9. Contact Us</h2>
            <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
            <p className="font-semibold">TECHY BUILDER</p>
            <p className="font-semibold">+91 88666 46691</p>
            <a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    openGmail();
  }}
  className="text-blue-700 hover:text-blue-800 hover:underline inline-block"
>techybuilderr@gmail.com</a>
            <p className="font-semibold">34, 3rd floor, Sanket park, Iskcon mandir, Harinagar, Vadodara-390007, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndCon;