{
    // 以下2つは同じ型である
    type ErrorCode = [number, string];
    type LineItem = [number, string];

    // 2つの型の間では、自由に値を代入できる（潜在的な危険はあるが・・・）
    /** エラーコードを表す変数 */
    let code: ErrorCode = [404, 'Not Found'];
    /** 商品のリストを表す配列 */
    let item: LineItem[] = [[1, 'Apple']];
    item.push(code);
    console.log(item);  // [ [ 1, 'Apple' ], [ 404, 'Not Found' ] ]
}

{
    // 以下2つはプロパティ名が異なるため、異なる型である
    type ErrorCode = { code: number, description: string };
    type LineItem = { quantity: number, description: string };
}

{
    /**
     * 特定の構造を持つオブジェクトを引数として受け取るメソッド。
     * 
     * 引数で渡されるオブジェクトは、walk メソッドと quack メソッドを持っている必要があるとする。
     */

    // Javascript関数の場合
    // const act = x => { 
    //     x.walk();
    //     x.quack();
    // };

    // TypeScript関数の場合
    /**
     * この場合、引数で渡されるオブジェクトは、戻り値を返さない walk メソッドと quack メソッドを持っている必要があります。
     * @param x     - オブジェクト（walk メソッドと quack メソッドを持つ）
     */
    const act = (x: { walk(): void, quack(): void }) => {
        x.walk();
        x.quack();
    };

    // これらのメソッドを提供するDuckクラス
    /**
     * Duck クラスは、walk メソッドと quack メソッドを持つクラスです。
     */
    class Duck {
        /** Duck が歩くメソッド */
        walk() { console.log('Duck is walking'); }
        /** Duck が鳴くメソッド */
        quack() { console.log('Duck is quacking'); }
    }

    // 問題なく、Duckインスタンスは、act関数の引数として渡すことができる
    /** Duck クラスのインスタンス */
    const donald = new Duck();
    act(donald);    // Duck is walking, Duck is quacking

    // クラスのインスタンスではないが、walk メソッドと quack メソッドを持つオブジェクト
    /** walk メソッドと quack メソッドを持つオブジェクト */
    const daffy = {
        walk: () => console.log('Daffy is walking'),
        quack: () => console.log('Daffy is quacking')
    };

    // これも問題なく、act関数の引数として渡すことができる
    act(daffy);     // Daffy is walking, Daffy is quacking

    /**
     * この現象を、ダックタイピング（Duck Typing）と呼ぶ。
     * 「アヒルみたいに歩き、アヒルみたいに鳴くものは、アヒルである」という考え方に由来する。
     * 
     * TypeScript における構造的型付けは、このダックタイピングに基づいている。
     */
}

/**
 * 構造的型付け
 * 
 * TypeScript は、型の互換性をチェックする際に、名前による型のチェックだけでなく、
 * プロパティの型や個数によるチェックも行う。
 * このような型の互換性のチェック方法を構造的型付け（Structural Typing）と呼ぶ。
 */