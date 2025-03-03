/**
 * Employee クラス
 * @param {string} name - 従業員の名前
 * @param {number} salary - 従業員の給与
 */
class Employee {
    constructor(name, salary) {
        this.name = name; // 従業員の名前
        this.salary = salary; // 従業員の給与
    }

    /**
     * 給与を引き上げるメソッド
     * @param {number} percent - 引き上げる割合
     */
    raiseSalary(percent) {
        this.salary += this.salary * (percent / 100);
    }
}

/**
 * Manager クラス
 * Employee クラスを継承
 * @param {string} name - マネージャーの名前
 * @param {number} salary - マネージャーの給与
 * @param {number} bonus - マネージャーのボーナス
 */
class Manager extends Employee {
    constructor(name, salary, bonus) {
        super(name, salary);
        this.bonus = bonus; // マネージャーのボーナス
    }

    /**
     * 給与とボーナスを含む総給与を取得するゲッター
     * @returns {number} - 総給与
     */
    get getSalary() { return this.salary + this.bonus; }
}

const boss = new Manager('John', 100000, 20000); // マネージャーのインスタンス
console.log(boss.getSalary); // 120000 

// Empolyee.prototype は、boss のプロトタイプチェーンに含まれている
console.log(boss instanceof Employee); // true

/**
 * サブクラス
 */