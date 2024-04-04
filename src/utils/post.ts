import { getCollection, type CollectionEntry } from "astro:content";

export const getAllPosts = async () => {
  return await getCollection("post");
};

export const getUniqueTags = async () => {
  const allPosts = await getCollection("post");
  const allTags = allPosts.flatMap(post => [...post.data.tags]);
  return [...new Set(allTags)];
};

export const sortPostsByDate = (posts: Array<CollectionEntry<"post">>): Array<CollectionEntry<"post">> => {
  return posts.sort((a, b) => {
    return new Date(b.data.publishDate).getTime() - new Date(a.data.publishDate).getTime();
  });
}
