/**
 * 名前付きクラス式
 * Employee クラスは従業員を表します。
 * @param {string} name - 従業員の名前。
 * @param {number} salary - 従業員の給与。
 */
const Employee = class {
    constructor(name, salary) {
        /** 従業員の名前 */
        this.name = name;
        /** 従業員の給与 */
        this.salary = salary;
    }

    /**
     * 従業員の給与を引き上げます。
     * @param {number} percent - 引き上げる割合。
     */
    raiseSalary(percent) {
        this.salary *= 1 + percent / 100;
    }
};

/** Employee クラスのインスタンス */
const employeeInstance = new Employee('Alice', 50000);
employeeInstance.raiseSalary(10);

/**
 * 匿名クラス式（ミックスインパターン）
 * 引数として与えられたクラスを継承し、さらに toString メソッドを追加し、新しいクラスを返します。
 * @param {class} base - 基本となるクラス。
 * @returns {class} toString メソッドを持つ新しいクラス。
 */
const withToString = base => class extends base {
    /**
     * オブジェクトの文字列表現を返します。
     * @returns {string} オブジェクトの文字列表現。
     */
    toString() {
        return `${this.name} (${this.salary})`;
    }
};

/** Employee クラスを継承した新しいクラス（toString メソッドを持つクラス） EmployeeWithToString クラスを作成する */
const EmployeeWithToString = withToString(Employee);
/** EmployeeWithToString クラスのインスタンスを生成する */
const employeeWithToStringInstance = new EmployeeWithToString('Bob', 60000);
console.log(employeeWithToStringInstance.toString()); // Bob (60000)

/**
 * class 式と匿名クラス
 * 
 * 
 * ミックスイン（mixin: 加味）パターン
 * 
 * クラスに特定の機能（メソッド）を加えるための設計パターンのこと。
 * 
 * ミックスインの特徴
 * - 単独でインスタンス化しない（通常、単独のクラスとして使わない）
 * - 特定の機能を他のクラスに追加する（継承の代わりに使われることが多い）
 * - コードの再利用性が向上する（共通のメソッドを複数のクラスで使える）
 */