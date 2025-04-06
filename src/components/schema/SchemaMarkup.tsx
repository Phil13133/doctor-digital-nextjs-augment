import React from 'react';

interface SchemaMarkupProps {
  schema: object;
}

/**
 * A component that renders JSON-LD schema markup in the HTML head
 */
export default function SchemaMarkup({ schema }: SchemaMarkupProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
