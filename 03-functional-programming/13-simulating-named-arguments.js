/** 
 * 関数の引数をオブジェクトとして渡し、名前付き引数をシミュレートする。
 * 
 * @param {Object} options - オプションのオブジェクト
 * @param {string} options.name - ユーザーの名前
 * @param {number} options.age - ユーザーの年齢
 * @param {string} options.city - ユーザーの住んでいる都市
 */
const greetUser = ({ name, age, city }) => {
    console.log(`Hello, ${name}!`);
    console.log(`You are ${age} years old and live in ${city}.`);
};

// 名前付き引数としてオブジェクトを渡す
greetUser({ name: 'Alice', age: 30, city: 'New York' });
// 出力:
// Hello, Alice!
// You are 30 years old and live in New York.

/**
 * 分割による名前付き引数のシミュレーション
 */