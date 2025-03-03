{
    /**
     * interface キーワードを使わないで、型エイリアスを使用してインターフェースを定義する場合
     * 
     * 別の型エイリアスを継承することができない
     */

    type Identifiable = {
        id(): string;
    };

    /**
     * ID で要素を検索する
     * @param {Identifiable[]} elements - 検索対象の要素（配列）
     * @param {string} id - 検索する ID
     * @returns {Identifiable | undefined} 検索結果の要素または undefined
     */
    const findById = (elements: Identifiable[], id: string) => {
        for (const e of elements) {
            // id が一致する要素を返す
            if (e.id() === id) {
                return e;
            }
        }
        return undefined;
    };

    // Identifiable インターフェースを実装するクラス
    class Person implements Identifiable {
        #name: string;  // 名前
        #id: string;    // ID

        /** コンストラクタ */
        constructor(name: string, id: string) {
            this.#name = name;
            this.#id = id;
        }

        /** id メソッドを実装 */
        id() { return this.#id; }
    }
}

{
    /**
     * interface キーワードを使用して、インターフェースを定義する場合
     * 
     * 別のインターフェースを継承することができる
     */

    interface Identifiable {
        id(): string;
    }

    // 別のインターフェースを継承する
    interface Employee extends Identifiable {
        name(): string; // 名前を返すメソッド
    }

    // 型宣言の場合は extends の代わりに & 演算子を使う
    type EmployeeType = Identifiable & {
        name(): string; // 名前を返すメソッド
    };
}

{
    /**
     * TypeScript では、インターフェースはクラスを拡張することができる
     */

    class Point {
        readonly x: number;  // x 座標
        constructor(x: number) {
            this.x = x;
        }

        hoge() { console.log('hoge'); }
    }

    /**
     * Point クラスを拡張した Point3D インターフェース
     * Point クラスのフィールドやメソッドを引き継ぎ、新たに z フィールドを追加
     */
    interface Point3D extends Point {
        z: number;  // z 座標
    }

    // interface キーワードを使わず、& 演算子を使って型エイリアスを定義することもできる
    type Point3DType = Point & {
        z: number;  // z 座標
    }
}