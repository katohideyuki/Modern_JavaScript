type Point = { x: number; y: number; };

/**
 * Point のサブタイプ
 * 
 * 明示的に Point 型のサブタイプだと定義していないが、Point 型のプロパティを持っているため、Point 型のサブタイプとして扱われる
 * 本来は、Point 型のサブタイプとして扱うためには、明示的に定義すべき。（推奨）
 * 明示的に定義する場合は、次のように記述する。
 * - extends キーワードを使用して、スーパータイプを指定する
 * - & 演算子を使用して、スーパータイプとサブタイプを結合する（型を統合する）
 */
type ColorPoint = { x: number, y: number, color: string; };

// 明示的に Point 型のサブタイプとして定義するため、& 演算子を使用して、Point 型と結合する
type ColorPoint2 = Point & { color: string; };

/** 青色のポイント */
const bluePoint = { x: 10, y: 30, color: 'blue' };

/**
 * 原点からの距離を計算する関数
 * @param {Point} p - ポイント
 * @returns {number} 距離の二乗
 */
const distanceFromOrigin = (p: Point) => Math.pow(p.x, 2) + Math.pow(p.y, 2);
console.log(distanceFromOrigin(bluePoint)); // 1000

// TypeScript における置換則には、1つの例外がある
// サブタイプのオブジェクトリテラルは、置換できない
// そのため、次の呼び出しは、コンパイルに失敗する
// distanceFromOrigin({ x: 10, y: 20, color: 'red' });

// 過剰プロパティチェックと呼ばれる
/** ポイント */
let p: Point = { x: 3, y: 4 };
// p = { x: 3, y: 4, color: 'blue' }; // エラー: 過剰プロパティ

// オブジェクトリテラルを変数に代入する場合、過剰プロパティチェックは無効になる
/** 青色の原点 */
const blueOrigin = { x: 0, y: 0, color: 'blue' };
p = blueOrigin; // エラーが発生しない