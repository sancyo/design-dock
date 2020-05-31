export default {
  setPackageContentSource(state, meta) {
    const jsonPath = require(`../content/json/${meta.package}/${meta.content}/index.json`)
    state.packageContentSource = jsonPath
  }
}
