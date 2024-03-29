// [課題01] 配列の生成
// 要素が１つもない配列を作ってください。

const array = []

// [課題02] 配列の生成
// 1から5までの整数が１つずつ入った配列を作ってください。

const array01 = [1,2,3,4,5]

// [課題03] 要素の追加
// 1から1000までの整数が１つずつ入った配列を作ってください。

const array02 = []
for (let i = 1; i <= 1000; i++) {
  array02.push(i)
  // console.log(array02)
}

// [課題04] 要素のアクセス
// '課題02'の配列の最初の要素の値をコンソールに表示してください。

console.log(array01[0])
// console.log(array01.shift())

// [課題05] 要素のアクセス
// '課題02'の配列の最後の要素の値をコンソールに表示してください。

console.log(array01[4])
// console.log(array01.pop())

// [課題06] 値の代入
// '課題02'の配列の二番目の要素に数値10を代入してください。

console.log(array01[1] = 10)
// console.log(array01)

// [課題07] 要素の追加
// '課題06'の配列の最後に数値6を追加してください。

console.log(array01.push(6))
// console.log(array01)

// [課題08] 要素の数
// '課題07'の配列の要素数をコンソールに表示してください。

console.log(array01.length)

// [課題09] 配列のループ
// '課題07'の配列の全ての要素の和を計算してください。

let sum = 0
array01.forEach(value => {
  sum += value
})
console.log(sum)

console.log('--------------修正--------------');
let sum02 = 0
for (let i = 0; i < array01.length; i++) {
  sum02 += array01[i]
}
console.log(sum02)

// [課題10] 配列のループ
// '課題07'の偶数番目の要素だけを持つ別の配列を作成してください。

const arrayEven = array01.filter((value,index) => {
  if(index % 2 === 0) {
    return true
  }
}) 

console.log(arrayEven)

let newArray = []
for (let i = 0; i < array01.length; i++) {
  if (i % 2 === 0) {
   newArray.push(array01[i]);
  }
}
console.log(newArray);
console.log('----------------------------')

// [課題11] 配列の結合
// '課題07'と'課題10'の配列を結合した別の配列を作成してください。

const array03 = array01.concat(arrayEven)
console.log(array03)

// [課題12] 配列の文字列化
// '課題11'の配列の各要素をカンマ区切りで結合した文字列を作成してください。

const array04 = array03.join(',')
console.log(array04)

// [課題13] map関数
// '課題11'の配列の各要素を２倍した要素を持つ別の配列をmap関数を使って作成してください。

const arrayDouble = array03.map((value) => {
    return value * 2
})

console.log(arrayDouble)

// [課題14] filter関数
// '課題11'の配列の各要素の値が３の倍数の要素だけを持つ配列をfilter関数を使って作成してください。

const arrayMultipleOfThree = array03.filter((value) => {
  return value % 3 === 0
})
console.log(arrayMultipleOfThree)

// [課題15] reduce関数
// '課題11'の配列の全ての要素の値の和をreduce関数を使って求めてください。

const sumArray = array03.reduce((value,current)=>{
  return value + current
})
console.log(sumArray)

// [課題16] some関数
// '課題11'の配列に３の倍数が含まれているかsome関数を使って確かめてください。

const tripleArray = array03.some((value) => {
  if(value % 3 === 0) {
    return true
  }
})
console.log(tripleArray)

const tripleArray02 = array03.some((num) => num % 3 === 0)
console.log(`${tripleArray02 ? '3の倍数が含まれている。' : 'は含まれていない。'}`);

// [課題17] find関数
// '課題11'の配列の要素のうち、値が３の倍数である最初の要素の値findを使って求めてください。

const findArray = array03.find((value) => {
  return value % 3 === 0;
});
console.log(findArray)
