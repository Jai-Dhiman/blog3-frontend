export function StoriesIndex({ stories }) {
  return (
    <div>
      <h1>All stories</h1>
      {stories.map((story) => (
        <div key={story.id}>
          <h2>{story.title}</h2>
          <img src={story.photo} />
          <p>{story.content}</p>
        </div>
      ))}
    </div>
  );
}
