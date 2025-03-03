/**
 * JavaScript の場合
 */
// const elements = [1, 2, 3];
// const result = mkString(elements, {
//     separator: ',',
//     leftDelimiter: '(',
//     rightDelimiter: ')'
// });

// // 設定オブジェクトのために1個のパラメータを準備してもよい
// const mkString = (values, config) => {
//     return config.leftDelimiter + values.join(config.separator) + config.rightDelimiter
// };

// あるいは「分割」(destructuring)を使って、3つのパラメータ変数を宣言してもよい
// const mkString = (values, { separator, leftDelimiter, rightDelimiter }) => {
//     return leftDelimiter + values.join(separator) + rightDelimiter;
// };

/**
 * TypeScript の場合
 * 
 * 型を追加する必要がある。
 */

/**
 * 普通の方法ではコンパイルエラーとなる。
 * TypeScript の型定義と分割構文が衝突しているため
 */
// const mkString = (values: unknown[], {
//     separator: string,
//     leftDelimiter: string,
//     rightDelimiter: string
// }) => return leftDelimiter + values.join(separator) + rightDelimiter;

/**
 * JavaScript と同様に TypeScript でもプロパティ名の後に変数名を追加できる。
 */

/**
 * JavaScript の場合
 */
// const mkString = (values, {
//     separator: sep,
//     leftDelimiter: left,
//     rightDelimiter: right
// }) => return left + values.join(sep) + right;

/**
 * TypeScript の場合
 * 
 * 型を正しく指定するために、設定オブジェクト全体の型定義が必要
 */
const mkString = (
    values: unknown[],
    { separator, leftDelimiter, rightDelimiter }: {
        separator: string,
        leftDelimiter: string,
        rightDelimiter: string
    }
) => {
    return leftDelimiter + values.join(separator) + rightDelimiter;
};

/**
 * デフォルト値を付与したパターン
 */
const mkString_v2 = (
    values: unknown[],
    {
        separator = ',',
        leftDelimiter = '(',
        rightDelimiter = ')'
    }: {
        separator?: string,
        leftDelimiter?: string,
        rightDelimiter?: string
    }
) => {
    return leftDelimiter + values.join(separator) + rightDelimiter;
};

/**
 * 分かりやすい設定オブジェクトをするには・・・
 * 設定用のインターフェースを使用するのがよい。
 */
interface MkStringOptions {
    separator?: string,
    leftDelimiter?: string,
    rightDelimiter?: string
};

const mkString_v3 = (
    values: unknown[],
    { separator = ',', leftDelimiter = '(', rightDelimiter = ')' }: MkStringOptions = {}
) => {
    return leftDelimiter + values.join(separator) + rightDelimiter;
};