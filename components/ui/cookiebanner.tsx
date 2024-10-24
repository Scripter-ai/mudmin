'use client';

import React, { useEffect, useState } from 'react';
import { Button } from './button';

const CookieBanner = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted cookies
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (!hasAcceptedCookies) {
      setIsBannerVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    // Set a flag in local storage to remember that cookies are accepted
    localStorage.setItem('cookiesAccepted', 'true');
    setIsBannerVisible(false);
  };

  const handleCookieSettings = () => {
    // Open cookie settings or redirect to a cookie policy page
    console.log('Open cookie settings');
  };

  if (!isBannerVisible) {
    return null; // Do not render the banner if it has been dismissed
  }

  return (
    <div className="fixed bottom-0 w-full bg-white shadow-lg p-4 flex items-center justify-between border border-gray-300">
      <div className="flex items-center space-x-4">
        <div>
          {/* Cookie Icon */}
          <span className="text-2xl">🍪</span>
        </div>
        <div className="text-gray-700">
          <p>We use cookies to enhance your browsing experience. By clicking &apos;Accept all,&apos; you agree to the use of cookies.</p>
        </div>
      </div>

      <div className="flex space-x-2">
        <Button
          onClick={acceptCookies}
          variant="secondary"
        >
          Accept all
        </Button>
        <Button
          onClick={handleCookieSettings}
          variant="default"        
        >
          Cookie Settings
        </Button>
      </div>
    </div>
  );
};

export default CookieBanner;
