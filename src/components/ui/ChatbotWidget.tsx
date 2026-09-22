'use client';

import Script from 'next/script';

declare global {
  interface Window {
    ktt10?: {
      setup: (config: { id: string; accountId: string; color: string; icon: string }) => void;
    };
  }
}

function attachUnreadBadge() {
  const container = document.querySelector('.ktt10-btn');
  if (!container || container.querySelector('.ktt10-unread-badge')) return;

  const badge = document.createElement('span');
  badge.className = 'ktt10-unread-badge';
  badge.textContent = '1';
  container.appendChild(badge);

  const removeBadge = () => {
    badge.remove();
    container.removeEventListener('click', removeBadge);
  };
  container.addEventListener('click', removeBadge, { once: true });
}

export function ChatbotWidget() {
  return (
    <>
      <style>{`
        .ktt10-btn { position: relative; }
        .ktt10-unread-badge {
          position: absolute;
          top: -4px;
          right: -4px;
          min-width: 20px;
          height: 20px;
          padding: 0 5px;
          border-radius: 999px;
          background: #FF3B30;
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          line-height: 20px;
          text-align: center;
          font-family: system-ui, sans-serif;
          box-shadow: 0 0 0 2px #fff;
          pointer-events: none;
          z-index: 2147483647;
        }
      `}</style>
      <Script
        src="https://ap.whapify.ai/webchat/plugin.js?v=6"
        strategy="afterInteractive"
        onLoad={() => {
          window.ktt10?.setup({
            id: 'YS58boq3QG18Wx81r4f',
            accountId: '1843413',
            color: '#25D366',
            icon: '/whatsapp-icon.svg',
          });

          let attempts = 0;
          const interval = setInterval(() => {
            attempts += 1;
            const el = document.querySelector('.ktt10-btn');
            if (el) {
              attachUnreadBadge();
              clearInterval(interval);
            } else if (attempts > 40) {
              clearInterval(interval);
            }
          }, 250);
        }}
      />
    </>
  );
}
