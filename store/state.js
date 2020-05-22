import fileArray from '../content/summary.json'

// 記事のメタ情報を配列に格納 投稿日で並び替え
const metaList = Object.values(fileArray.fileMap).sort((a, b) => {
  return new Date(a.date) + new Date(b.date)
})

// 上部メニュー一覧
const DOCK_LIST = [
  { name: 'Vue.js', tag: 'vue' },
  { name: 'Webpack', tag: 'webpack' },
  { name: 'Design', tag: 'design' },
  { name: 'GitHub', tag: 'git-hub' },
  { name: 'Others', tag: 'others' }
]

export default () => ({
  itemSorce: metaList,
  dockList: DOCK_LIST,
  sourceFileArray: fileArray.sourceFileArray
})
