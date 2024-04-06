import { getCollection, type CollectionEntry } from "astro:content";

export const getAllPosts = async (): Promise<Array<CollectionEntry<"post">>> => {
  return await getCollection("post");
};

export const getUniqueTags = async (): Promise<string[]> => {
  const allPosts = await getCollection("post");
  const allTags = allPosts.flatMap(post => [...post.data.tags]);
  return [...new Set(allTags)];
};

export const sortPostsByDate = (posts: Array<CollectionEntry<"post">>): Array<CollectionEntry<"post">> => {
  return posts.sort((a, b) => {
    return new Date(b.data.publishDate).getTime() - new Date(a.data.publishDate).getTime();
  });
};
