// function Article({ title }) {
//   return (
//     <article style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
//       <h2>{title}</h2>
//       <p>This is a sample article.</p>
//     </article>
//   );
// }

// export default Article;


function Article({ title, content }) {
  return (
    <article style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  );
}

export default Article;
