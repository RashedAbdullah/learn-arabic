const getDocsByCategory = (docs, category) => {
  return docs.filter((doc) => doc.category === category);
};

const getDocsByAuthor = (docs, author) => {
  // What is encode URI?
  return docs.filter((doc) => encodeURI(doc.author === author));
};

const getDocsByTags = (docs, tag) => {
  return docs.filter((doc) => doc.tags.some((inputTag) => inputTag === tag));
};

export { getDocsByAuthor, getDocsByCategory, getDocsByTags };
