/**
 * Employee クラスは従業員を表します。
 * @param {string} name - 従業員の名前。
 * @param {number} salary - 従業員の給与。
 */
class Employee {
    constructor(name, salary) {
        /** 従業員の名前 */
        this.name = name;
        /** 従業員の給与 */
        this.salary = salary;
    }

    /**
     * 従業員の給与を取得します。
     * @returns {number} 従業員の給与。
     */
    get getSalary() { return this.salary; };
}

/**
 * Manager クラスはマネージャーを表し、Employee クラスを継承します。
 * @param {string} name - マネージャーの名前。
 * @param {number} salary - マネージャーの給与。
 * @param {number} bonus - マネージャーのボーナス。
 */
class Manager extends Employee {
    constructor(name, salary, bonus) {
        super(name, salary);
        /** マネージャーのボーナス */
        this.bonus = bonus;
    }

    /**
     * マネージャーの給与とボーナスを合計して取得します。
     * @returns {number} マネージャーの総給与。
     */
    get getSalary() { return this.salary + this.bonus; };

    // サブクラスからスーパークラスのメソッドを呼び出したい場合は、super キーワードを使用する
    // get getSalary() { return super.getSalary + this.bonus; };
}

// Example usage:

/** 従業員のインスタンス */
const employee = new Employee('John Doe', 50000);
console.log(employee.getSalary); // 50000

/** マネージャーのインスタンス */
const manager = new Manager('Jane Smith', 70000, 15000);
console.log(manager.getSalary); // 85000

/**
 * メソッドをオーバーライドする
 * 
 * 多相性（ポリモーフィズム, polymorphism）
 * 
 * オブジェクト指向プログラミング（OOP）における重要な概念の一つ。
 * 「同じインターフェース（またはメソッド）を持つ異なる型のオブジェクトが、それぞれ異なる振る舞いをする性質」のことを指す。
 */