'use client';

import Script from 'next/script';

declare global {
  interface Window {
    ktt10?: {
      setup: (config: { id: string; accountId: string; color: string }) => void;
    };
  }
}

export function ChatbotWidget() {
  return (
    <Script
      src="https://ap.whapify.ai/webchat/plugin.js?v=6"
      strategy="afterInteractive"
      onLoad={() => {
        window.ktt10?.setup({
          id: 'YS58boq3QG18Wx81r4f',
          accountId: '1843413',
          color: '#006dff',
        });
      }}
    />
  );
}
