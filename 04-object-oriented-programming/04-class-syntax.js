// Employeeクラスを定義します。
// 「name」と「salary」のプロパティを持ち、給与の引き上げを行うメソッドを持つクラスです。
class Employee {
    /** 
     * コンストラクタ関数
     * @param {string} name - 従業員の名前
     * @param {number} salary - 従業員の給与
     */
    constructor(name, salay) {
        this.name = name;   // 従業員の名前を設定します。
        this.salary = salay; // 従業員の給与を設定します。
    };

    /** 
     * 給与の引き上げを行うメソッド
     * @param {number} percent - 引き上げ率（パーセント）
     */
    raiseSalary(percent) { 
        this.salary *= 1 + percent / 100; 
    };
};

// 「Yamada」という名前で「20000」の給与を持つEmployeeインスタンスを作成します。
const employee_yamada = new Employee('Yamada', 20000);

// 「Yamada」の給与を2%引き上げます。
employee_yamada.raiseSalary(2);

// 従業員情報をコンソールに表示します。
// 出力は「{ employee_yamada: Employee { name: 'Yamada', salary: 20400 } }」となります。
console.log({ employee_yamada });   // { employee_yamada: Employee { name: 'Yamada', salary: 20400 } }

/**
 * クラス構文
 * 
 * JavaScriptのクラス構文は、オブジェクト指向プログラミングのために導入された構文であり、
 * クラス内でプロパティやメソッドを定義することができます。
 * クラスのインスタンスを作成するには「new」キーワードを使用します。
 */
