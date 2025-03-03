// JSON.stringify はオブジェクトのプロパティで値が undefined のものを飛ばす。
// 配列のようでは、 undefined の値を null に置き換える
{
    console.log(JSON.stringify({ name: ['Yamada', undefined, 'Taro'], age: undefined }));
    // 出力結果: {"name":["Yamada",null,"Taro"]}
}

{
    const harry = { name: 'Taro Yamada', age: 42, };  // 名前と年齢を含むオブジェクト

    // このロギングは情報が少なく意味がない
    console.log(`harry ${harry}`);  // 出力結果: harry [object Object]

    // その対策として、オブジェクトを文字列化する
    console.log(`harry ${JSON.stringify(harry)}`);
    // 出力結果: harry {"name":"Taro Yamada","age":42}

    // もしくはオブジェクト自体をそのまままとめて表示する方法
    console.log({ harry })
    // 出力結果: { harry: { name: 'Taro Yamada', age: 42 } }
}

/**
 * JSONに関する操作
 */
