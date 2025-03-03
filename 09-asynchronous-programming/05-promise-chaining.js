/**
 * 非同期処理を行う関数を定義
 * @returns {Promise<string>} - 非同期処理が完了したら "データ1" というメッセージを返す
 */
function asyncTask1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Task 1 完了');
            resolve('データ1');
        }, 1000);
    });
}

/**
 * 非同期処理を行う関数を定義
 * @param {string} data - 前のタスクから受け取ったデータ
 * @returns {Promise<string>} - 非同期処理が完了したら "データ2" を追加したメッセージを返す
 */
function asyncTask2(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Task 2 完了');
            resolve(data + ' データ2');
        }, 1000);
    });
}

/**
 * 非同期処理を行う関数を定義
 * @param {string} data - 前のタスクから受け取ったデータ
 * @returns {Promise<string>} - 非同期処理が完了したら "データ3" を追加したメッセージを返す
 */
function asyncTask3(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Task 3 完了');
            resolve(data + ' データ3');
        }, 1000);
    });
}

// プロミスの連鎖を実行
asyncTask1()
    .then(result1 => {
        console.log(result1);
        return asyncTask2(result1);
    })
    .then(result2 => {
        console.log(result2);
        return asyncTask3(result2);
    })
    .then(result3 => {
        console.log(result3);
        console.log('すべてのタスクが完了しました');
    })
    .catch(error => {
        console.error('エラーが発生しました:', error);
    });

/**
 * プロミスの連鎖
 * 
 * このコードは、3つの非同期タスクを順番に実行し、それぞれのタスクが完了するたびに次のタスクを実行します。
 * 各タスクは、前のタスクから受け取ったデータを使用して新しいデータを生成し、それを次のタスクに渡します。
 * 最後に、すべてのタスクが完了したことを示すメッセージをコンソールに出力します。
 */