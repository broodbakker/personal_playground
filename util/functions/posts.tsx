import fs from 'fs'

export const importMdFiles = (filePath: string) => fs
  .readdirSync(filePath)
  // Remove file extensions for page paths
  .map((path) => path.replace(/\.md?$/, ''))
  // Map the path into the static paths object required by Next.js
  .map((product) => ({ params: { product } }));


