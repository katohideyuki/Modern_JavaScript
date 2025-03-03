/** 
 * Yamada オブジェクト
 * - 名前と給与を保持し、給与を昇給するメソッドを持つ。
 */
const Yamada = {
    // 名前
    name: 'Yamada',
    
    // 給与
    salary: 90000,
    
    /** 
     * raiseSalary メソッド
     * 給与を昇給する
     * @param {number} percent - 昇給の割合（パーセント）
     * @returns {void} - 戻り値なし
     */
    raiseSalary(percent) {
        // 現在の給与に昇給分を加算する
        this.salary *= 1 + percent / 100;
    }
};

// 給与を200%昇給
Yamada.raiseSalary(200);

// 新しい給与を表示
console.log(Yamada.salary); // 270000

/** 
 * メソッド宣言にはショートカット構文がある
 * - ES6以降、オブジェクトリテラル内でメソッドを簡潔に定義できる。
 */
