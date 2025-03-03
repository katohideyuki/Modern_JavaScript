/**
 * ポイントクラス
 */
class Point {
    readonly x: number;  // x 座標
    readonly y: number;  // y 座標

    /** コンストラクタ */
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    /**
     * 原点からの距離を計算する
     * @param {Point} other - 他のポイント
     * @returns {number} 距離の二乗
     */
    distance(other: Point) {
        return Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2);
    }

    /**
     * ポイントの文字列表現を返す
     * @returns {string} ポイントの文字列表現
     */
    toString() {
        return `(${this.x}, ${this.y})`;
    }

    /** 静的メンバ */
    static origin = new Point(0, 0);
}

// readonly 修飾子を使用して、読み取り専用のプロパティを定義することができる
// readonly にしたプロパティは、コンストラクタでのみ初期化でき、その後は変更できない
/** ポイントのインスタンス */
const p = new Point(3, 4);
// p.x = 10; // エラー: 読み取り専用プロパティ

/**
 * TypeScript によるクラス宣言
 */