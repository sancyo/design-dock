export default {
  getItemList(state) {
    return state.itemSorce
  },
  getPostMeta: (state) => (...sortTag) => {
    /*
    switch (sortTag.length) {
      // 引数が指定されない時
      case 0: {
        return state.itemSorce
      }
      // 引数が1つ指定された時
      case 1: {
        console.log(sortTag)
        const sortedArray = state.itemSorce.filter(
          // 引数とsortプロパティを比較して一致したオブジェクトだけ返す
          (array) => array.sort === String(sortTag[0])
        )
        return sortedArray
      }
    }
    */
    switch (typeof sortTag[0]) {
      // 引数がnullの時
      case 'object': {
        return state.itemSorce
      }
      // 引数が文字列の時
      case 'string': {
        const sortedArray = state.itemSorce.filter(
          // 引数とsortプロパティを比較して一致したオブジェクトだけ返す
          (array) => array.sort === String(sortTag[0])
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
  }
}
