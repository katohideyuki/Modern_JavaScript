/**
 * javaScript 関数
 */
// const average = (x, y) => (x + y) / 2;
// average(3) を実行すると、「(3 + undefined) / 2」となり、NaN が返される

/**
 * TypeScript 関数
 */
// 上記のような呼び出しができないため、心配する必要はない
// const average = (x: number, y: number) => (x + y) / 2;
// average(3); // エラー: 引数が少ない

/**
 * javaScript 関数
 * 
 * オプションパラメータを提供して、引数が少ない場合にデフォルト値を使用する
 */
// y が未定義の場合、x をそのまま返し、y が定義されていれば計算結果を返す
// const average = (x, y) => y === undefined ? x : (x + y) / 2;

/**
 * TypeScript 関数
 * 
 * オプションパラメータ（オプション引数）は、「?」を使用する。
 * つまり「y?: number」は「引数 y は省略可能である」ことを意味する。
 * 
 * オプションパラメータは、必須パラメータよりも後に定義しないといけない。
 */
{
    const average = (x: number, y?: number) => y === undefined ? x : (x + y) / 2;
    console.log(average(2, 3)); // 2.5
    console.log(average(2));    // 2

    // エラー: 必須パラメーターを省略可能なパラメーターの後に指定することはできません。
    // const average_2 = (x?: number, y: number) => y === undefined ? x : (x + y) / 2;
}

/**
 * JavaScript 同様 TypeScript でもデフォルト値を定義できる
 */
{
    // 書き方その1
    const average = (x: number, y: number = 0) => y === undefined ? x : (x + y) / 2;
    // 書き方その2: デフォルト値を設定した引数は、型推論があるから明示的に型を定義する必要はない
    const average_2 = (x: number, y = 0) => y === undefined ? x : (x + y) / 2;
}

{
    /**
     * rest（残余）パラメータの働きは、 JavaScript と全く同じ。
     * 型だけは定義しておくこと。
     * @param {number} first - 最初の数値
     * @param {number[]} following - 残りの数値の配列
     * @returns {number} 平均値
     */
    const average = (first = 0, ...following: number[]) => {
        let sum = first;
        for (const value of following) {
            sum += value;
        }
        return sum / (1 + following.length);
    };
    console.log(average(1, 2)); // 1.5
    console.log(average(1, 2, 3, 4, 5));    // 3
}