import fileArray from '../content/summary.json'

// 記事のメタ情報を配列に格納 投稿日で並び替え
const metaList = Object.values(fileArray.fileMap).sort((a, b) => {
  return new Date(a.date) + new Date(b.date)
})

export default () => ({
  itemSorce: metaList,
  sourceFileArray: fileArray.sourceFileArray
})
