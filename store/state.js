import fileArray from '../content/summary.json'

// 記事のメタ情報を配列に格納 投稿日で並び替え
const metaArray = Object.values(fileArray.fileMap).sort((a, b) => {
  return new Date(a.datex) + new Date(b.date)
})

// 上部メニュー一覧
const DOCK_LIST = [
  { tag: 'vue' },
  { tag: 'webpack' },
  { tag: 'design' },
  { tag: 'git-hub' },
  { tag: 'others' }
]

const originalArray = Object.values(fileArray.fileMap)

// packageの情報を格納する配列
const packageArray = []

for (const i of originalArray.filter((item) => 'name' in item)) {
  // packageのファイル名を追加
  i.path = i.dir.replace('content/json/', '')

  // 不要なプロパティを削除
  delete i.dir
  delete i.base
  delete i.ext
  delete i.sourceBase
  delete i.sourceExt

  packageArray.push(i)
}

// コンテンツのファイルパスを格納する配列
const packageContentArray = []

for (const i of originalArray.filter((item) => 'title' in item)) {
  const re = /content\/json\/.*\//
  i.url = i.dir.replace(re, '')
  // contentを格納している配列を取得
  packageContentArray.push(i)
}

const packageContentSource = ''

export default () => ({
  itemSorce: metaArray,
  dockList: DOCK_LIST,
  displayPage: '',
  sourceFileArray: fileArray.sourceFileArray,
  packageArray,
  packageContentArray,
  packageContentSource
})
