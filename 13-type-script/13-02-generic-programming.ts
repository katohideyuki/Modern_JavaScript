/**
 * 型束縛
 * 
 * ときには、型パラメータといっても何でも良いわけではなく、何らかの条件を満たしたパラメータに制限したい。
 * そういう時に「型束縛」（type bound）によって表現する。
 */

// 関数で、受け取った引数のうち、先頭を除く残り全部の要素を取得したいとする。

// values に slice メソッドがあると確信できないため、エラー
// const tail = <T>(values: T) => values.slice(1)  // エラー

/**
 * 型束縛を使って、T 型は「values.slice メソッドを持ったオブジェクトのサブタイプ」と制限を付けている。
 * @param {T} values - slice メソッドを持つオブジェクト
 * @returns {T} - slice メソッドで取得したオブジェクト
 */
const tail = <T extends { slice(from: number, to?: number): T/*戻り値もT型*/ }>(values: T): T => {
    return values.slice(1);
}

/**
 * 使用例を再現するため、slice メソッドを持ったオブジェクトのサブタイプを作成するクラス
 */
class MyArray {
    /** 配列の要素 */
    private elements: number[];

    /** コンストラクタ */
    constructor(...elements: number[]) {
        this.elements = elements;
    }

    /**
     * 配列の一部を取得するメソッド
     * @param {number} from - 開始インデックス
     * @param {number} [to] - 終了インデックス（省略可能）
     * @returns {MyArray} - 新しい MyArray インスタンス
     */
    slice(from: number, to?: number): MyArray {
        const slicedElements = this.elements.slice(from, to);
        return new MyArray(...slicedElements);
    }

    /**
     * 配列の要素をコンソールに出力するメソッド
     */
    print() {
        console.log(this.elements);
    }
}

/**
 * MyArray クラスを拡張するクラス
 */
class MyArrayEx extends MyArray {} ;

/** MyArrayEx クラスのインスタンス */
const myArrayEx = new MyArrayEx(1, 2, 3, 4, 5);
/** tail 関数を使用して、先頭を除く残りの要素を取得 */
const result = tail(myArrayEx);
result.print();  // [2, 3, 4, 5]
