// components/ContentSchemaScript.js
const ContentSchemaScript = ({ content }) => {
  const formattedData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: content.title,
    image: content.imageUrl || "", // Assuming there is an image URL for the content
    datePublished: new Date(content.date),
    dateModified: new Date(content.modifiedDate || content.date),
    author: {
      "@type": "Person",
      name: content.author,
      url: `https://rashedabdullah.com/author/${content.author}`, // Author link
    },
    publisher: {
      "@type": "Organization",
      name: "Learn Arabic",
      logo: {
        "@type": "ImageObject",
        url: "https://example.com/logo.jpg", // Replace with your organization's logo URL
      },
    },
    articleBody: content.htmlContent,
    description: content.description || "", // Provide a short description of the content
    keywords: content.tags ? content.tags.join(", ") : "", // Keywords as a string
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(formattedData),
      }}
    />
  );
};

export default ContentSchemaScript;
