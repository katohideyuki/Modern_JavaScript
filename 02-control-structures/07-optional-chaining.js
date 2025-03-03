/**
 * AND（&&）と OR（||）の動作例
 */
{
    console.log(0 && 'Harry');  // 出力: 0
    console.log(0 || 'Harry');  // 出力: Harry
}

/**
 * arg が undefined でも null でもなければ、メソッド呼び出しを行う。
 * どちらかに該当した場合、result は undefined か null になる。
 * しかし、arg が 0 か空文字列か false なら誤動作する可能性がある。
 */
let arg = {
    someMethod: () => { return null } // null を返すメソッド
};

// AND 演算子を用いたメソッド呼び出し
{
    console.log(arg && arg.someMethod());    // 出力: false
}

/**
 * OR（||）を使用したデフォルト値の設定
 */
{
    console.log(arg.someMethod() || 'defaultValue');    // 出力: defaultValue
}

/**
 * Null 合体演算子（??）を使用したデフォルト値の設定
 * null または undefined の場合にのみデフォルト値を適用する
 */
{
    console.log(arg.someMethod() ?? 'defaultValue');    // 出力: defaultValue
}

/**
 * オプショナルチェーン（?.）を使用した安全なメソッド呼び出し
 * arg.someMethod() が存在する場合のみ console.log を実行する
 */
{
    arg.someMethod()?.console.log('OK');    // 何も出力されない
}

/**
 * ブール演算子
 * 
 * JavaScript における論理演算子（&&, ||, ??）の挙動を解説。
 */