// 配列の要素やオブジェクトのプロパティを簡潔に取り出す分割代入の使い方

let pair = ['Taro', 'Yamada']; // 名前と苗字を含む配列

// 普通のやり方（配列のインデックスを使用）
{
    let first = pair[0];  // first に 'Taro' が代入される
    let second = pair[1]; // second に 'Yamada' が代入される

    console.log(`first: ${first}, second: ${second}`); // 出力: first: Taro, second: Yamada
};

// 分割代入を使った簡潔な書き方
{
    let [first, second] = pair;  // 配列から直接値を取り出す

    console.log(`first: ${first}, second: ${second}`); // 出力: first: Taro, second: Yamada
};

// 配列の長さが異なる場合でもマッチした要素だけが取り出され、残りの要素は無視される
{
    let [first, second] = [1, 2, 3];  // 配列から最初の2つの要素を取り出す
    console.log(`first: ${first}, second: ${second}`); // 出力: first: 1, second: 2
};

// 配列のネストされた要素を分割代入で取り出す
{
    let [first, [second, third]] = [1, [2, 3]];  // ネストされた配列から値を取り出す
    console.log(`first: ${first}, second: ${second}, third: ${third}`); // 出力: first: 1, second: 2, third: 3
};

// 右辺の配列が短い場合、余った変数は undefined になる
{
    let [first, second] = [1];  // second は undefined になる
    console.log(`first: ${first}, second: ${second}`); // 出力: first: 1, second: undefined
}

// 再代入でも問題なし
{
    let first = '', second = ''; // 初期値は空文字
    [first, second] = [1, 2];    // 再代入
    console.log(`first: ${first}, second: ${second}`); // 出力: first: 1, second: 2
}

// 配列でもオブジェクトプロパティでも問題なし
{
    let numbers = new Array(1);  // 配列の作成
    let harry = { age: 0, };     // オブジェクトの作成
    [numbers[0], harry.age] = [1, 2];  // 配列とオブジェクトの値を分割代入
    console.log(`numbers: ${numbers[0]}, age: ${harry.age}`); // 出力: numbers: 1, age: 2
}

// オブジェクトの分割代入も問題なし（注意点：変数名とプロパティ名を変更する場合）
{
    let harry = { name: 'Yamada', age: 43 }; // オブジェクトの作成
    let { name: harryName, age: harryAge } = harry; // オブジェクトのプロパティを分割代入
    console.log(`harryName: ${harryName}, harryAge: ${harryAge}`); // 出力: harryName: Yamada, harryAge: 43
}

/**
 * 分割代入
 * 
 * 配列やオブジェクトから要素や値を簡潔に取り出すための構文。
 */
