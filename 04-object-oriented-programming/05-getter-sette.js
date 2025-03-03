// Person クラスを定義します。
// このクラスは、姓 (last) と名 (first) のプロパティを持つ人物を表現します。
// また、getFullName ゲッターと setFullName セッターを使って、フルネームの取得および設定ができます。
class Person {
    /**
     * コンストラクタ: Person クラスのインスタンスを作成する際に、姓と名を受け取ります。
     * 
     * @param {string} last - 姓 (last name) を指定します。
     * @param {string} first - 名 (first name) を指定します。
     */
    constructor(last, first) {
        this.last = last;  // 姓 (last) を設定
        this.first = first; // 名 (first) を設定
    };

    /**
     * ゲッター: フルネームを「姓, 名」の形式で返します。
     * 
     * @returns {string} フルネーム (last, first) の形式で返されます。
     */
    get getFullName() {
        return `${this.last}, ${this.first}`; // 姓と名を結合して返す
    };

    /**
     * セッター: フルネームを「姓, 名」の形式で設定します。
     * 文字列を「, 」で分割し、それぞれ姓と名に設定します。
     * 
     * @param {string} value - 「姓, 名」の形式でフルネームを指定します。
     */
    set setFullNeme(value) {
        const [last, first] = value.split(/, \s*/); // フルネームを「, 」で分割
        this.last = last;  // 姓を設定
        this.first = first; // 名を設定
    };
}

// Person クラスのインスタンス「yamada」を作成します。
// 姓「Yamada」、名「Taro」を指定しています。
const yamada = new Person('Yamada', 'Taro');

// 「yamada_name」には、「yamada」インスタンスのフルネームを格納します。
// フルネームはゲッターで取得されます。
const yamada_name = yamada.getFullName;

console.log({ yamada });    // { yamada: Person { last: 'Yamada', first: 'Taro' } }
console.log(yamada_name);   // Yamada, Taro

// セッター「setFullNeme」を使ってフルネームを「Sasaki, Goro」に変更します。
yamada.setFullNeme = 'Sasaki, Goro';

// セッターで変更した内容をゲッターで再取得します。
// 「getFullName」で新しいフルネーム「Sasaki, Goro」が反映されます。
console.log(yamada.getFullName);   // Sasaki, Goro

/**
 * ゲッターとセッター
 * 
 * ゲッターはプロパティの値を取得するために使用され、セッターはプロパティの値を設定するために使用されます。
 * このコードでは、フルネームを取得するためにゲッター「getFullName」を使用し、フルネームを設定するためにセッター「setFullNeme」を使用しています。
 * セッターで設定された値はゲッターで反映され、値を更新することができます。
 */
