import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src', 'content', 'blog');

export function getSortedPostsData() {
  if (!fs.existsSync(contentDirectory)) return [];
  
  const fileNames = fs.readdirSync(contentDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');

      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const matterResult = matter(fileContents);

      return {
        slug,
        ...matterResult.data,
      };
    });
    
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostSlugs() {
  if (!fs.existsSync(contentDirectory)) return [];
  const fileNames = fs.readdirSync(contentDirectory);

  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      return {
        slug: fileName.replace(/\.md$/, ''),
      };
    });
}

export function getPostData(slug) {
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  return {
    slug,
    content: matterResult.content,
    ...matterResult.data,
  };
}
