// 配列を定義
let arr = ['A', 'B', 'C'];

// 通常の forEach ループ
// 配列の各要素とそのインデックスをログに出力する
arr.forEach((element, index) => {
    console.log(`${index}: ${element}`);  // A, B, C
});

// 引数 index が不要な場合、受け取らずに処理する
// 配列の各要素のみをログに出力する
arr.forEach(element => {
    console.log(`${element}`);  // A, B, C
});

// HTML タグを囲む関数
// 渡されたタグ名と内容を使って HTML タグで囲んだ文字列を返す
const enclose = (tag, contents) => `<${tag}>${contents}</${tag}>`;

// map 関数
// 配列の各要素を HTML の <li> タグで囲んで、新しい配列を作成
{
    const listItem = arr.map(i => enclose('li', i));
    listItem.forEach(i => console.log(i));  // <li>A</li> <li>B</li> <li>C</li>
}

// filter 関数
// 空文字を除外し、残った文字を <li> タグで囲んで <ul> タグの中にまとめる
{
    const listItem_2 = ['A', 'B', '', 'D'];  // 空文字を含む配列
    const list = enclose('ul',
        listItem_2
            // 空文字を取り除く
            .filter(i => i.trim() !== '')
            // 残った文字を <li> タグで囲む
            .map(i => enclose('li', i))
            // 配列を文字列に変換して結合
            .join('')
    );
    console.log(list);  // <ul><li>A</li><li>B</li><li>D</li></ul>
}

/**
 * 関数による配列処理
 * 上記のコードでは、map と filter を使用して配列の各要素に関する操作を行っています。
 * - map: 配列の各要素に関数を適用し、新しい配列を生成する
 * - filter: 条件を満たす要素のみを残す新しい配列を生成する
 */
