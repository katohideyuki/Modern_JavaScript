class bankAccount {
    constructor() {
        this.balance = 0;
        this.observers = [];
    }
    addObserver(f) {
        this.observers.push(f);
    }
    notifyObservers() {
        for (let i = 0; i < this.addObserver.length; i++) {
            this.observers[i]();
        }
    }
    deposit(amount) {
        this.balance += amount;
        this.notifyObservers();
    }
}

// 銀行口座を作成
const account = new bankAccount();
// オブザーバーを追加
class UserInterface {
    log(message) {
        console.log(message);
    }
    start() {
        account.addObserver(
            /**
             * 失敗するコード。
             * addObserver メソッドに渡すこのコールバック関数が呼び出されたときの this は、オブザーバーの配列を指す。
             * start() メソッドを実行した場合、 TypeError: Cannot read property 'log' of undefined が発生する。
             */
            // function () { this.log('More money has been deposited'); }

            /**
             * addObserver メソッドに渡すこのコールバック関数が呼び出されたときの this は、UserInterface クラスのインスタンスを指す。
             */
            () => this.log('More money has been deposited')
        )
        account.deposit(100);
    }
}
const ui = new UserInterface();
ui.start(); // start() メソッドがアロー関数を使用している場合、More money has been deposited がコンソールに表示される。
/**
 * this参照
 * 
 * モダンなJavascriptの書き方でぇあ、newなしでコンストラクタを呼び出すことは一般的ではありません。
 * 
 * アロー関数の場合、thisはその関数が定義されたコンテキストを参照します。
 * 一方、通常の関数の場合、thisはその関数が呼び出されたコンテキストを参照します。
 */