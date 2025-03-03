/**
 * ジェネリックなクラスと型
 * 
 * ジェネリック型（generic type）とは、1個以上の型パラメータを持つ型。
 */
class Entry<K, V> {
    key: K
    value: V
    constructor(key: K, value: V) {
        this.key = key
        this.value = value
    }
};

/**
 * 型は、コンストラクタの引数からも推定可能。
 */
// Map<string, number>と型付けられる
const weekdays = new Map(
    [['Mon', 0], ['Tue', 1], ['Wed', 2], ['Thu', 3], ['Fri', 4], ['Sat', 5], ['Sun', 6]]
);

/**
 * ジェネリック関数
 */
function count<T>(arr: T[], target: T) {
    let count = 0
    for (let e of arr) {
        if (e === target) {
            count++;
        }
    }
    return count;
}

// 型パラメータを使うと、配列の型は、必ずターゲットの型と同じ
let digits = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let result = count(digits, 4);  // 2
// result = count(digits, 'Blue');  // 型の不一致エラー


// アロー関数の場合
const count_v2 = <T>(arr: T[], target: T) => {
    let count = 0
    for (let e of arr) {
        if (e === target) {
            count++;
        }
    }
    return count;
};

let digits_v2 = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let result_v2 = count_v2(digits_v2, 4);  // 2

// ジェネリック関数を呼び出す際に、呼び出し側で明示的に型を指定してもよい。
result_v2 = count_v2<number>(digits_v2, 3); // 2