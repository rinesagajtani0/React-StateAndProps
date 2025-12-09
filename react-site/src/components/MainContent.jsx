import { useState } from 'react';
import Article from './Article';
import Sidebar from './Sidebar';

function MainContent() {
  const [articles, setArticles] = useState([
    { id: 1, title: 'First Article' },
    { id: 2, title: 'Second Article' },
  ]);

  const handleLoadMore = () => {
    const nextId = articles.length + 1;
    setArticles([
      ...articles,
      { id: nextId, title: `Article ${nextId}` },
    ]);
  };

  return (
    <main style={{ display: 'flex', gap: '2rem', padding: '1rem' }}>
      <div style={{ flex: 3 }}>
        {articles.map((article) => (
          <Article key={article.id} title={article.title} />
        ))}
        <button onClick={handleLoadMore} style={{ marginTop: '1rem' }}>
          Load More Articles
        </button>
      </div>
      <div style={{ flex: 1 }}>
        <Sidebar />
      </div>
    </main>
  );
}

export default MainContent;
