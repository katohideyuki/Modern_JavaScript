// 名前のリスト
let firstname = ['Taro'];

// 苗字
let lastname = 'Ymada';

// 挨拶文
greeting = `Hello, ${firstname.length > 0 ? `${firstname[0]}` : ''} ${lastname}`;

console.log(greeting);

/**
 * ${...}の内側にテンプレートリテラルをネストすることができる。
 */
