export { }

const fs = require('fs')

module.exports = {
  onSuccess: () => {
    console.log('onInit: I run before anything else 🐣');
  },
  onPreBuild: async ({ utils }) => {
    console.log("my plugin loaded!")

    // const post = getPostFileNames()

    fs.writeFileSync('./content/searchData.json', JSON.stringify("test"));

    try {
    } catch (error) {
      utils.build.failBuild('Failure message', { error })
    }
  },
}