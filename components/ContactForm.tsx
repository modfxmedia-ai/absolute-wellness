"use client";

import { useEffect } from "react";

const BRAND = "#7E9146";

export default function ContactForm({
  title = "Request an Appointment",
  subtitle = "We'll get back to you shortly — same-week appointments available.",
}: {
  title?: string;
  subtitle?: string;
  submitLabel?: string;
}) {
  useEffect(() => {
    // Load the form embed script
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="relative">
      {/* Animated gradient glow background */}
      <div
        aria-hidden
        className="absolute -inset-4 rounded-xl opacity-40 blur-3xl animate-pulse"
        style={{ 
          background: `linear-gradient(135deg, ${BRAND} 0%, #5a6a30 50%, ${BRAND} 100%)`,
          animationDuration: '3s'
        }}
      />
      
      {/* Main container with enhanced sharp styling */}
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-white via-white to-[#f7f9f2] shadow-2xl border-4 border-[#7E9146]">
        {/* Decorative thick top border with gradient */}
        <div 
          className="h-3 w-full" 
          style={{ 
            background: `linear-gradient(90deg, ${BRAND} 0%, #5a6a30 50%, ${BRAND} 100%)`
          }}
        />
        
        {/* Secondary border accent */}
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#5a6a30] to-transparent opacity-50" />
        
        {/* Header section with improved spacing */}
        <div className="px-8 pt-8 pb-6 sm:px-10">
          <div className="flex items-start gap-4">
            {/* Decorative icon with sharp borders */}
            <div 
              className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-md shadow-xl border-3 border-[#5a6a30]"
              style={{ backgroundColor: BRAND }}
            >
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="white" 
                strokeWidth="2.5" 
                className="h-7 w-7"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z" />
              </svg>
            </div>
            
            <div className="flex-1">
              <h3 className="font-[family-name:var(--font-raleway)] text-2xl font-black tracking-tight text-gray-900 sm:text-3xl">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{subtitle}</p>
            </div>
          </div>
        </div>

        {/* Form container with sharp enhanced borders */}
        <div className="px-8 pb-8 sm:px-10 sm:pb-10">
          <div 
            className="relative overflow-hidden rounded-md shadow-2xl border-4"
            style={{ 
              minHeight: "947px",
              borderColor: BRAND,
              boxShadow: `0 20px 50px -12px rgba(126, 145, 70, 0.4), inset 0 2px 8px rgba(126, 145, 70, 0.1)`
            }}
          >
            {/* Corner accent borders */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#5a6a30] rounded-tl-md" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-[#5a6a30] rounded-tr-md" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-[#5a6a30] rounded-bl-md" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#5a6a30] rounded-br-md" />
            
            {/* Inner glow effect */}
            <div 
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                background: `radial-gradient(circle at top left, ${BRAND} 0%, transparent 50%)`
              }}
            />
            
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/flo7dcg5mTX6oZqddV3w"
              style={{ 
                width: "100%", 
                height: "100%", 
                minHeight: "947px",
                border: "none", 
                borderRadius: "4px",
                backgroundColor: "white"
              }}
              id="inline-flo7dcg5mTX6oZqddV3w"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Website NP Form"
              data-height="947"
              data-layout-iframe-id="inline-flo7dcg5mTX6oZqddV3w"
              data-form-id="flo7dcg5mTX6oZqddV3w"
              title="Website NP Form"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
