/**
 * BankAccount クラスは銀行口座を表します。
 * 静的メソッドとフィールドを使用して、利息の計算や引き出し時の手数料を管理します。
 */
class BankAccount {
    /**
     * オーバードラフト手数料を表す定数。
     * @type {number}
     */
    static OVERDRAFT_FEE = 30;

    /**
     * BankAccount のインスタンスを初期化します。
     * 初期残高は 0 です。
     */
    constructor() {
        /**
         * 口座の残高を表します。
         * @type {number}
         */
        this.balance = 0;
    }

    /**
     * 指定された金額の指定された割合を計算します。
     * @param {number} amount - 基本となる金額。
     * @param {number} rate - 割合。
     * @returns {number} 計算された割合の金額。
     */
    static percentOf(amount, rate) { return amount * rate / 100 }

    /**
     * 指定された割合の利息を残高に追加します。
     * @param {number} rate - 利息の割合。
     */
    addInterest(rate) {
        this.balance += BankAccount.percentOf(this.balance, rate);
    }

    /**
     * 指定された金額を引き出します。
     * 残高が不足している場合、オーバードラフト手数料が適用されます。
     * @param {number} amount - 引き出す金額。
     */
    withdraw(amount) {
        this.balance -= amount;
        if (this.balance < 0) {
            this.balance -= BankAccount.OVERDRAFT_FEE;
        }
    }
};

let bank = new BankAccount(2000);
bank.addInterest(100);
console.log({ bank });  // { bank: BankAccount { balance: 0 } }
console.log();  // { bank: BankAccount { balance: 0 } }


/**
 * static（静的）なメソッドとフィールド
 */