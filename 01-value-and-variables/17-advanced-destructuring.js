// オブジェクトの分割。分かりづらい。
{
    // pat オブジェクトには name と birthday プロパティが含まれ、birthday はネストされたオブジェクト
    let pat = { name: 'Pat', birthday: { day: 14, month: 3, year: 2000 } };

    // pat オブジェクトからネストされた birthday.year を分割代入して birthDay に格納
    let { birthday: { year: birthDay } } = pat;

    console.log(`birthDay: ${birthDay}`);   // 出力: birthDay: 2000
}

// rest 宣言（...）でその他の要素をひとまとめに。
{
    // numbers 配列の最初の2つを分割代入し、残りを others 配列にまとめる
    let numbers = [1, 7, 2, 9];
    let [first, second, ...others/*rest変数*/] = numbers;
    console.log(`others: ${others}`);   // 出力: others: 2,9

    // harry オブジェクトから name を取り出し、それ以外のプロパティを otherObj にまとめる
    let harry = { name: 'Yamada', age: 43, id: 1 };
    let { name, ...otherObj } = harry;
    console.log(`otherObj: ${JSON.stringify(otherObj)}`);   // 出力: otherObj: {"age":43,"id":1}
}

// 分割代入とデフォルト値の併用
{
    // numbers 配列の2番目の値が存在しない場合、second に 0 が設定される
    let numbers = [42];
    let [first, second = 0] = numbers;
    console.log(`first: ${first}, second: ${second}`); // 出力: first: 42, second: 0

    // harry オブジェクトに name プロパティがないため、デフォルト値 'None' が設定される
    let harry = { age: 43 };
    let { name = 'None' } = harry;
    console.log(`name: ${name}`);   // 出力: name: None
}

// 典型的な例。separator はカスタムセパレータで初期化されるが、コンフィギュレーションで提供されないので、デフォルトのデリミタが使われる。
// 個々のプロパティを見て、定義されているかをチェックし、未定義ならばデフォルトを提供するという書き方
{
    // config オブジェクトに separator プロパティがあり、他のプロパティはデフォルト値を使用
    let config = { separator: '; ' };
    const { separator = ',', leftDelimiter = '[', rightDelimiter = ']' } = config;
    console.log(`separator: ${separator}, leftDelimiter: ${leftDelimiter}, rightDelimiter: ${rightDelimiter}`);   // 出力: separator: ; , leftDelimiter: [, rightDelimiter: ]
}

/**
 * 高度な分割
 */
