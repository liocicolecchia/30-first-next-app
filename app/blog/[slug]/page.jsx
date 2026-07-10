async function BlogPostPage({ params }) {
  const paramsObject = await params;
  const slug = paramsObject.slug;

  return (
    <main>
      <h1>Blog Post</h1>
      <p>{slug}</p>
    </main>
  );
}

export default BlogPostPage;
