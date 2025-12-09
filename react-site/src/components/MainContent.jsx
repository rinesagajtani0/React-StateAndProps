// import { useState } from 'react';
// import Article from './Article';
// import Sidebar from './Sidebar';

// function MainContent() {
//   const [articles, setArticles] = useState([
//     { id: 1, title: 'First Article' },
//     { id: 2, title: 'Second Article' },
//   ]);

//   const handleLoadMore = () => {
//     const nextId = articles.length + 1;
//     setArticles([
//       ...articles,
//       { id: nextId, title: `Article ${nextId}` },
//     ]);
//   };

//   return (
//     <main style={{ display: 'flex', gap: '2rem', padding: '1rem' }}>
//       <div style={{ flex: 3 }}>
//         {articles.map((article) => (
//           <Article key={article.id} title={article.title} />
//         ))}
//         <button onClick={handleLoadMore} style={{ marginTop: '1rem' }}>
//           Load More Articles
//         </button>
//       </div>
//       <div style={{ flex: 1 }}>
//         <Sidebar />
//       </div>
//     </main>
//   );
// }

// export default MainContent;


import { useState } from 'react';
import Article from './Article';
import Sidebar from './Sidebar';

function MainContent() {
  const [articles, setArticles] = useState([
    { id: 1, title: 'Welcome to My Blog', content: 'This is the first post on my personal site.' },
    { id: 2, title: 'About Me', content: 'I am learning React and this is my practice project!' },
  ]);

  const handleAddArticle = () => {
    const nextId = articles.length + 1;
    setArticles([
      ...articles,
      {
        id: nextId,
        title: `New Article ${nextId}`,
        content: `This is a dynamically added article number ${nextId}.`,
      },
    ]);
  };

  return (
    <main style={{ display: 'flex', gap: '2rem', padding: '1rem' }}>
      <div style={{ flex: 3 }}>
        {articles.map((article) => (
          <Article key={article.id} title={article.title} content={article.content} />
        ))}
        <button onClick={handleAddArticle} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
          + Add Article
        </button>
      </div>
      <div style={{ flex: 1 }}>
        <Sidebar />
      </div>
    </main>
  );
}

export default MainContent;
