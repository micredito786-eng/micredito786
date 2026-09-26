type JsonLdProps = {
  /** Uno o varios esquemas de @/lib/seo; se agrupan en un @graph */
  schemas: Record<string, unknown>[];
};

export function JsonLd({ schemas }: JsonLdProps) {
  const data = {
    '@context': 'https://schema.org',
    '@graph': schemas,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
