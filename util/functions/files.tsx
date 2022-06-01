import fs from 'fs'
import { join } from 'path';
import matter from 'gray-matter';

export const importMdFiles = (filePath: string) => fs
  .readdirSync(filePath)
  // Remove file extensions for page paths
  .map((path) => path.replace(/\.md?$/, ''))
  // Map the path into the static paths object required by Next.js
  .map((slug) => ({ params: { slug } }));


export const getFiles = (path: string) => importSlugs(path).map((slug) => getFileBySlug(slug, path))

export const getFilesAmount = (path: string, amountOfFiles: number) => getFiles(path).slice(-amountOfFiles);

const importSlugs = (filePath: string) =>
  fs.readdirSync(filePath)
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))

const putSlugInData = (slug: string, product: any) => ({ ...product, slug })

export const getFileBySlug = (
  slug: string,
  Path: string
): any => {

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