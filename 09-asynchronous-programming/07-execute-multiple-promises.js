/**
 * 複数のプロミスを実行する
 * Promise.all メソッドを使用して、すべてのプロミスが解決されるのを待つ
 * すべてのプロミスが解決された場合にのみ、次の処理を実行する
 */

// プロミスの配列
const promises = [
    /** 1秒後に解決されるプロミス */
    new Promise((resolve) => setTimeout(() => resolve('Promise 1 resolved'), 1000)),
    /** 2秒後に解決されるプロミス */
    new Promise((resolve) => setTimeout(() => resolve('Promise 2 resolved'), 2000)),
    /** 3秒後に解決されるプロミス */
    new Promise((resolve) => setTimeout(() => resolve('Promise 3 resolved'), 3000))
];

/**
 * Promise.all メソッドは、すべてのプロミスが解決された場合に、次の処理を実行する
 * いずれかのプロミスが拒否された場合は、次の処理を実行しない
 * その代わり、エラーが発生し、catch メソッドでエラーを処理する
 */
Promise.all(promises)
    .then((results) => {
        // すべてのプロミスが解決された場合の処理
        console.log('All promises resolved:', results);
    })
    .catch((error) => {
        // いずれかのプロミスが拒否された場合の処理
        console.error('One of the promises rejected:', error);
    });

/**
 * 複数のプロミスを実行する
 * Promise.allSettled メソッドを使用して、すべてのプロミスが完了するのを待つ
 * すべてのプロミスが解決または拒否された場合に、次の処理を実行する
 */

// プロミスの配列
const promisesSettled = [
    /** 1秒後に解決されるプロミス */
    new Promise((resolve) => setTimeout(() => resolve('Promise 1 resolved'), 1000)),
    /** 2秒後に拒否されるプロミス */
    new Promise((resolve, reject) => setTimeout(() => reject('Promise 2 rejected'), 2000)),
    /** 3秒後に解決されるプロミス */
    new Promise((resolve) => setTimeout(() => resolve('Promise 3 resolved'), 3000))
];

/**
 * Promise.allSettled メソッドは、すべてのプロミスが解決または拒否された場合に、次の処理を実行する
 * いずれかのプロミスが拒否された場合でも、次の処理を実行する
 * その際、プロミスの結果を含むオブジェクトを返す
 * オブジェクトの status プロパティには、プロミスの状態が含まれる
 * status プロパティの値は、'fulfilled' または 'rejected' である
 * オブジェクトの value プロパティには、解決されたプロミスの値が含まれる
 * オブジェクトの reason プロパティには、拒否されたプロミスの理由が含まれる
 * @param {Array} promisesSettled - プロミスの配列
 */
Promise.allSettled(promisesSettled)
    .then((results) => {
        // 全てのプロミスが成功した場合の処理
        if (results.status === 'fulfilled') {
            console.log('Promise resolved:', results.value);
        } else {
            // いずれかのプロミスが失敗した場合の処理
            console.error('Promise rejected:', results.reason);
        }

        // 成功/失敗に関わらず、全てのプロミスの結果を表示する
        console.log('All promises settled:', results);
    });