/**
 * 「任意のプロパティを使えるオブジェクト」が欲しい時もある。
 * TypeScript の型チェッカーに、プロパティが何でも大丈夫だと知らせるには、
 * 「インデックスシグネチャ」(index signature) を使う。
 */

/**
 * 辞書型
 * - creator: 作成者
 * - 任意のプロパティ（値は文字列または文字列の配列）を後から追加できるようにする
 */
type Dictionary = {
    creator: string,
    // [arg: string]とすることで、任意のプロパティを後から追加できるようにする
    [arg: string]: string | string[]
};

/** 辞書オブジェクト */
const dict: Dictionary = { creator: 'Taro' };
console.log(dict);  // { creator: 'Taro' }

// dict オブジェクトに hello プロパティを追加し、値に文字列の配列を代入
dict.hello = ['world', 'world2'];
console.log(dict);  // { creator: 'Taro', hello: [ 'world', 'world2' ] }

// dict オブジェクトに message プロパティを追加し、値に文字列を代入
dict['message'] = 'hello';
console.log(dict);  // { creator: 'Taro', hello: [ 'world', 'world2' ], message: 'hello' }