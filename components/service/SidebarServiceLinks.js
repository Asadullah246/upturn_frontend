import React from "react";
import { useRouter } from 'next/router';

const SidebarServiceLinks = () => {
  const router = useRouter();
  const { service } = router.query;
  console.log("servi", service) ;
  return (
    <div className="sidebar-widget">
      <ul className="service-list">
        <li>
          <a href="/services">
            <span className="color-layer" />
            All Services
          </a>
        </li>
        <li className="current">
          <a href="/services/seo">
            <span className="color-layer" />
            Search Engine Optimization (SEO)
          </a>
        </li>
        <li>
          <a href="/services/smm">
            <span className="color-layer" />
            Social Media Marketing (SMM)
          </a>
        </li>
        <li>
          <a href="/services/email-marketing">
            <span className="color-layer" />
            Email Marketing
          </a>
        </li>
        <li>
          <a href="/services/ppc">
            <span className="color-layer" />
            Pay Per Click (PPC)
          </a>
        </li>
        <li>
          <a href="/services/marketing-analytics">
            <span className="color-layer" />
            Marketing Analytics
          </a>
        </li>
        <li>
          <a href="/services/video-editing">
            <span className="color-layer" />
            Video Editing
          </a>
        </li>
        <li>
          <a href="/services/clipping-path">
            <span className="color-layer" />
            Clipping Path
          </a>
        </li>
        <li>
          <a href="/services/youtube-marketing">
            <span className="color-layer" />
            YouTube Marketing
          </a>
        </li>
        <li>
          <a href="/services/graphics-design">
            <span className="color-layer" />
            Graphics Design
          </a>
        </li>
        <li>
          <a href="/services/media-buying-services">
            <span className="color-layer" />
            Media Buying Services
          </a>
        </li>
        <li>
          <a href="/services/google-shopping-search-ad">
            <span className="color-layer" />
            Google Shopping Ad & Search Ad
          </a>
        </li>
        <li>
          <a href="/services/smal-business">
            <span className="color-layer" />
            Small Business 360 Marketing Services:{" "}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SidebarServiceLinks;
