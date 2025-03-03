// オブジェクトにプロパティを追加する際に、末尾にカンマ（,）を置くことでコードの拡張が簡単になる
{
    let harry = {
        name: 'Taro Yamada',  // 名前
        age: 42,    // 年齢
    };

    console.log(harry); // { name: 'Taro Yamada', age: 42 }
}

// 変数名がそのままオブジェクトのプロパティ名になる
{
    let age = 43;  // 年齢
    let harry = { name: 'Taro Yamada', age };   // ここでageプロパティが自動的に設定される

    console.log(harry); // { name: 'Taro Yamada', age: 43 }
}

/**
 * 変数名に半角スペースが含まれている場合、識別子として使えないため、角括弧でプロパティを指定する必要がある。
 */
{
    let harry = { name: 'Taro Yamada', 'favorite beer': 'IPA' }; // 'favorite beer'はスペースが含まれている
    harry['favorite beer'] = 'Lager';  // 角括弧でプロパティにアクセス
    console.log(harry);  // { name: 'Taro Yamada', 'favorite beer': 'Lager' }
}

/**
 * オブジェクトリテラル構文を使ってオブジェクトを定義する方法。
 */
