// components/GTM.js
import { useEffect } from 'react';
import Script from 'next/script';

const GTM_ID = 'GTM-PZQM72CT';

const GTM = () => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js',
    });
  }, []);

  return (
    <>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
      />
    </>
  );
};

export default GTM; 
