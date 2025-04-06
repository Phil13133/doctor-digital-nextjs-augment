import SchemaMarkup from './SchemaMarkup';

interface Question {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  questions: Question[];
}

export default function FAQSchema({ questions }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return <SchemaMarkup schema={schema} />;
}
