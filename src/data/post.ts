import { getCollection } from "astro:content";

export const getAllPosts = async () => {
  return await getCollection("post");
};

export const getUniqueTags = async () => {
  const allPosts = await getCollection("post");
  const allTags = allPosts.flatMap(post => [...post.data.tags]);
  return [...new Set(allTags)];
};
