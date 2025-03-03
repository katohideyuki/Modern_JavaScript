/** 
 * createAccount 関数
 * 初期残高を設定し、口座開設と関連する処理を提供する関数。
 * 初期残高には謝礼金として 10 が追加される。
 * 
 * @param {number} initialBalance - 口座開設時の初期残高
 * @returns {Object} - 口座操作を提供するオブジェクト（入金、引き出し、残高取得）
 */
const createAccount = (initialBalance) => {
    // 口座開設の謝礼金。固定値として 10 を設定
    const honorarium = 10;
    // 残高。初期残高に謝礼金を加算して設定
    let balance = initialBalance + honorarium;

    return {
        /** 
         * deposit 関数
         * 指定された金額を口座に入金する。
         * 
         * @param {number} amount - 入金額
         */
        deposit: amount => { balance += amount; },

        /** 
         * withdraw 関数
         * 指定された金額を口座から引き出す。
         * 引き出し額が残高より大きい場合、引き出しは行われない。
         * 
         * @param {number} amount - 引き出し額
         */
        withdraw: amount => { if (balance >= amount) balance -= amount; },

        /** 
         * getBalance 関数
         * 現在の残高を取得する。
         * 
         * @returns {number} - 現在の残高
         */
        getBalance: () => balance
    };
};

// 口座開設時の初期残高として 500 を設定
const harryAccount = createAccount(500);

// 口座開設時の残高（謝礼込み）
console.log(harryAccount.getBalance()); // 510

// 100 の入金後
harryAccount.deposit(100);
console.log(harryAccount.getBalance()); // 610

// 300 の引き出し後
harryAccount.withdraw(300);
console.log(harryAccount.getBalance()); // 310

/**
 * 堅いオブジェクト
 * 
 * ローカル関数内で保持されるデータ（ここでは残高）は、外部から直接アクセスできません。
 * これにより、外部からデータを変更できず、データが保護されます（プライベートプロパティ）。
 * 
 * 関数内で状態を管理し、その状態に対する操作のみをオブジェクトのメソッドとして提供することで、
 * データを堅く保護し、適切な管理が可能になります。
 */
