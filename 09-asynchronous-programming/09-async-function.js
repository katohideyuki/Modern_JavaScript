/**
 * 非同期処理を行うための関数
 * aync 関数は 必ず Promise を返す。
 * @returns {Promise<string>} 非同期処理の結果を返す Promise
 */
async function fetchData() {
    console.log('fetchData 関数の処理開始');
    // データを取得するための非同期関数
    const data = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("データ取得完了");  // 戻り値
        }, 2000);
    });

    console.log('fetchData 関数の処理終了');
    // もし戻り値が Promise ではない場合でも、暗黙的に Promise.resolve() でラップされて返されます。
    return data;
}

/**
 * 非同期関数を呼び出して結果を表示する関数
 */
async function displayData() {
    // fetchData 関数の結果を格納する変数
    const result = await fetchData();
    console.log(result); // データ取得完了
}

// displayData 関数を呼び出して実行
displayData();