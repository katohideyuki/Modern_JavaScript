{
/** 
 * createEmployee 関数
 * - 従業員オブジェクトを作成し、`name` と `salary` プロパティと `raiseSalary` メソッドを持つオブジェクトを返す。
 * @param {string} name - 従業員の名前
 * @param {number} salary - 従業員の給与
 * @returns {object} 従業員オブジェクト
 */
function createEmployee(name, salary) {
    return {
        name: name,          // 名前
        salary: salary,      // 給与
        /** 
         * raiseSalary メソッド
         * - 給与を昇給する
         * @param {number} percent - 昇給の割合（パーセント）
         * @returns {void} 戻り値なし
         */
        raiseSalary(percent) {
            this.salary *= 1 + percent / 100;  // 給与を昇給させる
        }
    };
}

let employee_yamada = createEmployee('Ymada', 1000);  // Yamadaの従業員オブジェクト
let employee_sasaki = createEmployee('Sasaki', 2000);  // Sasakiの従業員オブジェクト

employee_yamada.raiseSalary(2);  // Yamadaの給与を2%昇給
employee_sasaki.raiseSalary(2);  // Sasakiの給与を2%昇給

console.log({ employee_yamada });  // { employee_yamada: { name: 'Ymada', salary: 1020, raiseSalary: [Function: raiseSalary] } }
console.log({ employee_sasaki });  // { employee_sasaki: { name: 'Sasaki', salary: 2040, raiseSalary: [Function: raiseSalary] } }
}

{
/** 
 * プロトタイプを利用したオブジェクト生成
 */
const employeePrototype = {
    /** 
     * raiseSalary メソッド
     * - 給与を昇給させる
     * @param {number} percent - 昇給の割合（パーセント）
     * @returns {void} 戻り値なし
     */
    raiseSalary(percent) {
        this.salary *= 1 + percent / 100;  // 給与を昇給させる
    }
};

/** 
 * createEmployee 関数
 * - 従業員オブジェクトを作成し、プロトタイプを設定して `raiseSalary` メソッドを共有する
 * @param {string} name - 従業員の名前
 * @param {number} salary - 従業員の給与
 * @returns {object} 従業員オブジェクト
 */
function createEmployee(name, salary) {
    const result = { name, salary };  // 名前と給与を持つオブジェクトを作成
    Object.setPrototypeOf(result, employeePrototype);  // プロトタイプを設定
    return result;
}

let employee_tanaka = createEmployee('tanaka', 1000);  // tanakaの従業員オブジェクト
let employee_suzuki = createEmployee('suzuki', 1000);  // suzukiの従業員オブジェクト

employee_tanaka.raiseSalary(2);  // tanakaの給与を2%昇給
employee_suzuki.raiseSalary(2);  // suzukiの給与を2%昇給

console.log({ employee_tanaka });  // { employee_tanaka: { name: 'tanaka', salary: 1020 } }
console.log({ employee_suzuki });  // { employee_suzuki: { name: 'suzuki', salary: 1020 } }
}

/** 
 * プロトタイプ
 * 
 * オブジェクトのプロトタイプを `obj.__proto__` でアクセスできるが、標準の記法ではない。
 * 代わりに `Object.getPrototypeOf` と `Object.setPrototypeOf` を使うことが推奨されている。
 */
