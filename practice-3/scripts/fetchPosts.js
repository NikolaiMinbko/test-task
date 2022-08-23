const fetchPosts = async () =>
  (await fetch("https://jsonplaceholder.typicode.com/posts")).json();

export default fetchPosts;
