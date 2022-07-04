import fs from 'fs'
import { join } from 'path';
import matter from 'gray-matter';
//typescript
import { IPost, IProject } from "../typescript"

export const importMdFiles = (filePath: string) => fs
  .readdirSync(filePath)
  // Remove file extensions for page paths
  .map((path) => path.replace(/\.md?$/, ''))
  // Map the path into the static paths object required by Next.js
  .map((slug) => ({ params: { slug } }));

export const getProjectFiles = (path: string) => importSlugs(path).map((slug) => getProjectFileBySlug(slug, path))
export const getArticleFiles = (path: string) => importSlugs(path).map((slug) => getArticleFileBySlug(slug, path))

//export const getFilesForSearchIndex = (path: string) => importSlugs(path).map((slug) => getFileBySlug(slug, path))

export const getArticlesByAmount = (path: string, amountOfFiles: number) => getArticleFiles(path).slice(-amountOfFiles);
export const getProjectsByAmount = (path: string, amountOfFiles: number) => getProjectFiles(path).slice(-amountOfFiles);

const importSlugs = (filePath: string) =>
  fs.readdirSync(filePath)
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))

const putSlugInData = (slug: string, product: any) => ({ ...product, slug })

export const getArticleFileBySlug = (
  slug: string,
  Path: string
): IPost => {

  const filePath = join(Path, `${slug}.md`);

  const fileContents = fs.readFileSync(filePath);

  const { data, content } = matter(fileContents);

  const newData = putSlugInData(slug, data)

  return {
    data: { ...newData, date: changeDate(data.date) },
    content
  };
};

export const getProjectFileBySlug = (
  slug: string,
  Path: string
): IProject => {

  const filePath = join(Path, `${slug}.md`);

  const fileContents = fs.readFileSync(filePath);

  const { data, content } = matter(fileContents);

  const newData = putSlugInData(slug, data)

  return {
    data: { ...newData, date: changeDate(data.date) },
    content
  };
};

const changeDate = (date: Date) => date.toLocaleDateString()