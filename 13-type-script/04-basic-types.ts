/**
 * 「なんでもござれ」の any 型は、できるかぎり避けるべきです。
 * なぜなら、any 型は、型チェックを無効にしてしまうため、TypeScript の利点を活かせなくなるからです。
 */

/**
 * 四半期を表す enum 型
 */
enum Quarter {
    Q1 = 'Winter',
    Q2 = 'Spring',
    Q3 = 'Summer',
    Q4 = 'Autumn'
}

/** 現在の四半期 */
let q: Quarter = Quarter.Q1;
console.log(q); // Winter

if (q === Quarter.Q1) { console.log('It is Winter') }; // It is Winter