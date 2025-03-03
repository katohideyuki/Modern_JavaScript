// コンストラクタ関数「Employee」を定義します。
// 「name」と「salary」のプロパティを持つオブジェクトを作成するために使用します。
function Employee(name, salary) {
    this.name = name;   // 従業員の名前を設定します。
    this.salary = salary; // 従業員の給与を設定します。
}

// new キーワードを使用して「Employee」インスタンスを作成します。
// 「Yamada」という名前と「20000」の給与を持つ従業員オブジェクトが作成されます。
let employee_yamada = new Employee('Yamada', 20000);

// 従業員オブジェクトをコンソールに表示します。
// 出力は「{ employee_yamada: Employee { name: 'Yamada', salary: 20000 } }」となります。
console.log({ employee_yamada });   // { employee_yamada: Employee { name: 'Yamada', salary: 20000 } }

// オブジェクトのプロトタイププロパティに、メソッドを追加
Employee.prototype.raiseSalary = function (percent) { this.salary *= 1 + percent / 100 };
employee_yamada.raiseSalary(2);
console.log({ employee_yamada });   // { employee_yamada: Employee { name: 'Yamada', salary: 20400 } }

/**
 * コンストラクタ
 * 
 * コンストラクタ関数は新しいオブジェクトを作成するための関数であり、
 * 新しいインスタンスを生成する際に「new」キーワードを使用して呼び出します。
 * コンストラクタ内で「this」を使用して、インスタンスにプロパティを設定します。
 */
