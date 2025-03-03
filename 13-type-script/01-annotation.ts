// javascript の場合
// cosnt average = (x, y) => (x + y) / 2;
// const result = average('2', '3'); // 2.5 にはならず、'23' を 2 で割った結果 11.5 になる

// TypeScript の場合
/**
 * 2 つの数値の平均を計算する関数
 * @param {number} x - 最初の数値
 * @param {number} y - 2 番目の数値
 * @returns {number} 平均値
 */
const average = (x: number, y: number): number => (x + y) / 2;
// console.log(average('2', '3')); // 文字列でコンパイルエラー（型エラー）になる
console.log(average(2, 3)) // 2.5 になる

// もう少し複雑な場合
/**
 * 配列内の指定された値を置き換える関数
 * @param {number[]} arr - 対象の配列
 * @param {number | number[]} target - 置き換え対象の値または値の配列
 * @param {number} replacement - 置き換える値
 */
const replace = (arr: number[], target: number | number[], replacement: number) => {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(target) && target.includes(arr[i])
            || !Array.isArray(target) && target === arr[i]) {
            arr[i] = replacement;
        }
    }
};
/** 数値の配列 */
const a = [1, 2, 3, 4, 5];
replace(a, 3, 0);   // [1, 2, 0, 4, 5]
replace(a, [1, 4], 0);  // [0, 2, 0, 0, 5]
// replace(a,13, 14, 0); // 引数不一致でエラーになる

/**
 * ユニオン型（Union Type）とは、複数の型を「または（OR）」の関係で組み合わせた型です。
 * この型を使うことで、変数や引数が複数の型のいずれかであることを表現できます。
 * 
 * 例えば、`string` 型と `number` 型を組み合わせたユニオン型は、次のように記述します:
 * 
 * ```typescript
 * let value: number | string;
 * value = 42;      // OK
 * value = "hello";  // OK
 * value = true;     // エラー: boolean は number | string に含まれない
 * ```
 * 
 * また、ユニオン型を使った関数の引数例は以下の通りです:
 * 
 * ```typescript
 * const greet = (name: string | string[]) => {
 *     if (typeof name === "string") {
 *         console.log("Hello " + name);
 *     } else {
 *         console.log("Hello " + name.join(", "));
 *     }
 * };
 * greet("John");         // "Hello John"
 * greet(["Alice", "Bob"]); // "Hello Alice, Bob"
 * ```
 * 
 * ユニオン型を使うことで、異なる型の値を柔軟に扱いつつ、型安全性を保つことができます。
 * 
 * @param {string | string[]} name - 名前（string または string[]）
 */
