import { ImageResponse } from 'next/og';
import { siteConfig } from './config';

/** Tamaño recomendado para Facebook, WhatsApp, LinkedIn y X */
export const ogImageSize = { width: 1200, height: 630 };

type OgImageOptions = {
  title: string;
  /** Texto pequeño sobre el título (categoría, sección...) */
  eyebrow?: string;
};

/**
 * Imagen de previsualización con la marca, generada en el build.
 * Se usa desde los archivos opengraph-image.tsx de cada ruta.
 */
export function renderOgImage({ title, eyebrow }: OgImageOptions) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: 'linear-gradient(135deg, #0f3366 0%, #16498C 55%, #2E6EA6 100%)',
          color: 'white',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 16, height: 48, background: '#4BBF52', borderRadius: 8 }} />
          <div style={{ fontSize: 34, fontWeight: 700 }}>{siteConfig.brand}</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {eyebrow && (
            <div style={{ fontSize: 28, color: '#5fd366', fontWeight: 700, textTransform: 'uppercase' }}>
              {eyebrow}
            </div>
          )}
          <div style={{ fontSize: title.length > 60 ? 56 : 68, fontWeight: 800, lineHeight: 1.1 }}>
            {title}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 26, color: 'rgba(255,255,255,0.8)' }}>
          <div>Reparación de crédito para latinos en USA</div>
          <div>{siteConfig.url.replace('https://', '')}</div>
        </div>
      </div>
    ),
    ogImageSize
  );
}
