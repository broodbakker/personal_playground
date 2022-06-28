const fs = require('fs')

const { join } = require('path')

const matter = require("gray-matter")

const getFileData = async (path) => await getFiles(path)

const getFiles = (path) => importSlugs(path).map((slug) => getFileBySlug(slug, path))

const importSlugs = (filePath) =>
  fs.readdirSync(filePath)
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))

const putSlugInData = (slug, product) => ({ ...product, slug })

const getFileBySlug = (
  slug,
  Path
) => {

  const filePath = join(Path, `${slug}.md`);

  const fileContents = fs.readFileSync(filePath);

  const { data, content } = matter(fileContents);

  const newData = putSlugInData(slug, data)

  return {
    data: { ...newData, date: changeDate(data.date) },
    content
  };
};

const changeDate = (date) => date.toLocaleDateString()


module.exports = {
  onSuccess: () => {
    console.log('onInit: I run before anything else 🐣');
  },
  onPreBuild: async ({ utils }) => {
    const fs = require('fs')

    const PATH = "./content/posts";

    const data = await getFileData(PATH)

    fs.writeFileSync('./content/searchData.json', JSON.stringify(data));

    try {
    } catch (error) {
      utils.build.failBuild('Failure message', { error })
    }
  },
}