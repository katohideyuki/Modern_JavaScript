/**
 * BankAccount クラスは銀行口座の残高管理を行います。
 * 残高の初期化と預金処理を行うシンプルなクラスです。
 */
class BankAccount {
    /**
     * コンストラクタ
     * 初期状態で残高を 0 に設定します。
     */
    constructor() { 
        this.balance = 0;  // 口座の残高を 0 に初期化
    };

    /**
     * 預金処理を行うメソッド
     * @param {number} amount 預金額
     * 口座に指定した金額を預けます。
     */
    deposit(amount) { 
        this.balance += amount;  // 残高に預けた金額を加算
    };
};

/**
 * BankAccount_v2 クラスは、クラス宣言時にフィールドと初期化を行います。
 * より簡潔な構文を使用しています。
 */
class BankAccount_v2 {
    // インスタンスフィールドの宣言と初期化
    balance = 0;  // 初期残高を 0 に設定

    /**
     * 預金処理を行うメソッド
     * @param {number} amount 預金額
     * 口座に指定した金額を預けます。
     */
    deposit(amount) { 
        this.balance += amount;  // 残高に預けた金額を加算
    };
};

/**
 * BankAccount_v3 クラスは、フィールドとメソッドをプライベートにする構文を使用しています。
 * 「#」で始まるフィールドとメソッドは、クラス外部からアクセスできません。
 */
class BankAccount_v3 {
    /**
     * #balance フィールドはプライベートです。
     * クラスの外部から直接アクセスすることはできません。
     */
    #balance = 0;  // プライベートフィールドとして残高を保持

    /**
     * 預金処理を行うメソッド
     * @param {number} amount 預金額
     * 口座に指定した金額を預けます。#balance フィールドを更新します。
     */
    deposit(amount) { 
        this.#balance += amount;  // プライベートフィールド #balance に預けた金額を加算
    };
};

/**
 * インスタンスフィールドとプライベートメソッド
 * クラス内でのフィールドやメソッドのスコープ管理を行い、
 * 外部からアクセスできないようにすることで、カプセル化を実現しています。
 */
