import React, { useEffect, useState } from 'react';

const NewsDetail = ({ articleId }) => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (articleId) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${articleId}`)
        .then(res => res.json())
        .then(data => setArticle(data));
    }
  }, [articleId]);

  if (!articleId) return <p>Select an article to view</p>;
  if (!article) return <p>Loading article...</p>;

  return (
    <div>
      <h3>{article.title}</h3>
      <p>{article.body}</p>
    </div>
  );
};

const Project4 = () => {
  const [articles, setArticles] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(res => res.json())
      .then(data => setArticles(data));
  }, []);

  return (
    <div>
      <h2>Project 4: News Website</h2>
      <div style={{ display: 'flex' }}>
        <ul style={{ flex: 1 }}>
          {articles.map(article => (
            <li key={article.id}>
              <button onClick={() => setSelectedId(article.id)}>
                {article.title}
              </button>
            </li>
          ))}
        </ul>
        <div style={{ flex: 2, marginLeft: '20px' }}>
          <NewsDetail articleId={selectedId} />
        </div>
      </div>
    </div>
  );
};

export default Project4;
