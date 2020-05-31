export default {
  getItemList(state) {
    return state.itemSorce
  },
  getPostMeta: (state) => (...sortTag) => {
    switch (typeof sortTag[0]) {
      // 引数がnullの時
      case 'object': {
        return state.packageArray
      }
      // 引数が文字列の時
      case 'string': {
        const sortedArray = state.packageArray.filter(
          // 引数とsortプロパティを比較して一致したオブジェクトだけ返す
          (array) => array.tag === String(sortTag[0])
        )
        return sortedArray
      }
    }
  },
  getSourceFileArray(state) {
    return state.sourceFileArray
  },
  getDockList(state) {
    return state.dockList
  },

  getPackageContent: (state) => (packageName) => {
    // 引数が含まれている配列を返す
    return state.packageContentArray.filter((array) =>
      array.dir.includes(packageName)
    )
  },
  getPackageContentSource(state) {
    return state.packageContentSource
  }

  //     content/json/package2/page3
}
