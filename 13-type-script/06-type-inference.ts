/**
 * 2 つの数値の平均を計算する関数
 * @param {number} x - 最初の数値
 * @param {number} y - 2 番目の数値
 * @returns {number} 平均値
 */
const average = (x: number, y: number) => (x + y) / 2;

const a = 3;
const b = 4;
console.log(average(a, b)); // 3.5 になる

/**
 * 型アノテーションが必要なのは、関数のパラメータだけ。
 * その他の変数は、TypeScript が型を推論してくれる。
 * この機能を型推論（Type Inference）と呼ぶ。
 * 
 * average 関数のコードを分析することで TypeScript は、戻り値の型が number であることを推論している。
 */