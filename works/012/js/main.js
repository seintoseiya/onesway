enchant(); // 初期化
 
window.onload = function() {
    var game = new Game(320, 400); // ゲーム本体を準備すると同時に、表示される領域の大きさを設定しています。
    game.fps = 24; // frames（フレーム）per（毎）second（秒）：ゲームの進行スピードを設定しています。
    game.preload('./img/bg1.png','./img/chara1.png','./img/icon0.png','./img/start.png','./img/gameover.png'); // pre（前）-load（読み込み）：ゲームに使う素材をあらかじめ読み込んでおきます。

    game.onload = function() { // ゲームの準備が整ったらメインの処理を実行します。
    
        /**
        * タイトルシーン
        *
        * タイトルシーンを作り、返す関数です。
        */
        var createStartScene = function() {

            var scene = new Scene();                                // 新しいシーンを作る
            scene.backgroundColor = '#fcc800';                      // シーンの背景色を設定

            // スタート画像設定
            var startImage = new Sprite(236, 48);                   // スプライトを作る
            startImage.image = game.assets['./img/start.png'];     // スタート画像を設定
            startImage.x = 42;                                      // 横位置調整
            startImage.y = 176;                                     // 縦位置調整
            scene.addChild(startImage);                             // シーンに追加

            // タイトルラベル設定
            var title = new Label('くまげー');                    // ラベルを作る
            title.textAlign = 'center';                             // 文字を中央寄せ
            title.color = '#ffffff';                                // 文字を白色に
            title.x = 0;                                           // 横位置調整
            title.y = 136;                                           // 縦位置調整
            title.font = '28px sans-serif';                         // 28pxのゴシック体にする
            scene.addChild(title);                                  // シーンに追加

            // サブタイトルラベル設定
            var subTitle = new Label('- ひたすら爆弾をよけるゲーム  -');  // ラベルを作る
            subTitle.textAlign = 'center';                          // 文字中央寄せ
            subTitle.x = 0;                                         // 横位置調整
            subTitle.y = 236;                                       // 縦位置調整
            subTitle.font = '14px sans-serif';                      // 14pxのゴシック体にする
            scene.addChild(subTitle);                               // シーンに追加

            // スタート画像にタッチイベントを設定
            startImage.addEventListener(Event.TOUCH_START, function(e) {
                // 現在表示しているシーンをゲームシーンに置き換える
                game.replaceScene(createGameScene());
            });

            // タイトルシーンを返します。
            return scene;

        };

        /**
        * ゲームシーン
        *
        * ゲームシーンを作り、返す関数です。
        */
        var createGameScene = function() {
            var scene = new Scene();                            // 新しいシーンを作る

            // 背景
            var bg1 = new Sprite(320, 400);            // スプライトを作る
            bg1.image = game.assets['./img/bg1.png']; // 画像を設定
            scene.addChild(bg1);                       // シーンに追加
            bg1.x = 0;                                 // 横位置調整
            bg1.y = 0;                                 // 縦位置調整

            // スコア欄を作成
            var timer = 0;
            var timeLimit = new Label('SCORE:' + timer);      // 残り時間: ○○と表示するラベルを作る
            timeLimit.font = '14px sans-serif';                 // 14pxのゴシック体にする
            timeLimit.x = 0;                                    // 横位置調整
            timeLimit.y = 20;                                   // 縦位置調整
            scene.addChild(timeLimit);                          // シーンに追加

            // くま
            var kuma = new Sprite(32, 32);  // くまというスプライト(操作可能な画像)を準備すると同時に、スプライトの表示される領域の大きさを設定しています。
            kuma.image = game.assets['./img/chara1.png']; // くまにあらかじめロードしておいた画像を適用します。
            kuma.x = 100; // くまの横位置を設定します。
            kuma.y = 300; // くまの縦位置を設定します。
            scene.addChild(kuma); // ゲームのシーンにくまを表示させます。
            kuma.frame = [0, 0, 1, 1, 2, 2];   // select sprite frame
            scene.backgroundColor  = '#7ecef4'; // ゲームの動作部分の背景色を設定しています。
            var speed = 1;// くまのスピードを表す変数（箱）を用意しておきます。

            // くまの当たり判定用スプライトの設定
            var kuma_hit = new Sprite(1, 1);           // スプライトを作る（幅1, 高さ1）
            // kuma_hit.image =                        // 画像は設定しない（透明）
            kuma_hit.x = kuma.x + kuma.width / 2;      // 横位置調整 くまの左右中央に配置
            kuma_hit.y = kuma.y + kuma.height / 2;     // 縦位置調整くまの上下中央に配置
            scene.addChild(kuma_hit);                  // シーンに追加

            // 爆弾生成関数
            var makeOb = function(){
                var ob = new Sprite(16, 16);
                ob.image = game.assets['./img/icon0.png'];
                ob.y = -16;
                ob.x = Math.floor(Math.random() * 300);
                scene.addChild(ob);
                ob.frame = 24;
                return ob;
            };
            // りんごアイテム生成関数
            var makeItem = function(){
                var item = new Sprite(16, 16);
                item.image = game.assets['./img/icon0.png'];
                item.y = -16;
                item.x = Math.floor(Math.random() * 300);
                scene.addChild(item);
                item.frame = 15;
                return item;
            };
            // ダイヤアイテム生成関数
            var makeItem2 = function(){
                var item = new Sprite(16, 16);
                item.image = game.assets['./img/icon0.png'];
                item.y = -16;
                item.x = Math.floor(Math.random() * 300);
                scene.addChild(item);
                item.frame = 64;
                return item;
            };

            // オブジェクトの生成
            var ob1 = makeOb();
            var ob2 = makeOb();
            var ob3 = makeOb();
            var ob4 = makeOb();
            var ob5 = makeOb();
            var ob6 = makeOb();
            var item = makeItem();
            var item2 = makeItem2();
            var speedOb = 3;
            var itemPer = 100;
            var itemSpeed = 1;

            // シーンに「毎フレーム実行イベント」を追加します。
            scene.addEventListener(Event.ENTER_FRAME, function() {
                timer++; //時間計測
                timeLimit.text = 'SCORE:' + timer;    // 残り時間の表示を更新
                kuma.x += speed; // 毎フレーム、くまの座標をspeed分ずらす
                kuma_hit.x = kuma.x + kuma.width / 2;      // 横位置調整 くまの左右中央に配置
                ob1.y += speedOb; // 毎フレーム、くまの座標をspeed分ずらす
                
                // 画面端の制限設定
                if(kuma.x <= 0){
                    kuma.x = 0;
                }
                if(kuma.x >= 290){
                    kuma.x = 290
                }
            
                // 爆弾の落下タイミングをずらす
                if(timer > 30){
                    ob2.y += speedOb;
                }
                if(timer > 60){
                    ob3.y += speedOb;
                }
                if(timer > 90){
                    ob4.y += speedOb;
                }
                // Level2
                if(timer > 300){
                    ob5.y += speedOb*2;
                }
                if(timer > 330){
                    ob6.y += speedOb*2;
                }
                // Level3
                if(timer > 500){
                    ob1.y += speedOb;
                    ob2.y += speedOb;
                    ob3.y += speedOb;
                    ob4.y += speedOb;
                    ob5.y += speedOb;
                    ob6.y += speedOb;
                }
                // Level4
                if(timer > 1000){
                    ob1.y += speedOb;
                    ob2.y += speedOb;
                    ob3.y += speedOb;
                    ob4.y += speedOb;
                    ob5.y += speedOb;
                    ob6.y += speedOb;
                }
                // アイテム
                if(timer > 100){
                    item.y += speedOb;   
                }
                if(timer > 200){
                    item2.y += speedOb;   
                }
                // 画面下部に来た再生成
                if(ob1.y > 320){
                    scene.removeChild(ob1); // シーンから画像を削除する
                    ob1 = makeOb();
                }
                if(ob2.y > 320){
                    scene.removeChild(ob2);
                    ob2 = makeOb();
                }
                if(ob3.y > 320){
                    scene.removeChild(ob3);
                    ob3 = makeOb();
                }
                if(ob4.y > 320){
                    scene.removeChild(ob4);
                    ob4 = makeOb();
                }
                if(ob5.y > 320){
                    scene.removeChild(ob5);
                    ob5 = makeOb();
                }
                if(ob6.y > 320){
                    scene.removeChild(ob6);
                    ob6 = makeOb();
                }
                if(item.y > 320){
                    scene.removeChild(item);
                }
                if(item2.y > 320){
                    scene.removeChild(item2);
                }
                if(item.y > 320+itemPer){
                    item = makeItem();
                    itemPer = 50 + Math.floor(Math.random() * 640);
                }
                if(item2.y > 320+itemPer){
                    item2 = makeItem2();
                    itemPer = 50 + Math.floor(Math.random() * 640);
                }
                // 爆弾の当たり判定
                if (ob1.intersect(kuma_hit) || ob2.intersect(kuma_hit) || ob3.intersect(kuma_hit) || ob4.intersect(kuma_hit) || ob5.intersect(kuma_hit) || ob6.intersect(kuma_hit)) {
                    game.replaceScene(createGameoverScene(timer));
                }
                // りんごアイテムの当たり判定
                if (item.intersect(kuma_hit)) {
                    scene.removeChild(item);
                    item = makeItem();
                    itemPer = 50 + Math.floor(Math.random() * 640);
                    item.y = -itemPer;
                    itemSpeed++;
                    if(speed > 0){
                        speed = 1 * itemSpeed;
                    }else{
                        speed = -1 * itemSpeed;
                    }
                    if(itemSpeed==2){
                       kuma.frame = [0, 1, 2];
                    }else if(itemSpeed>2){
                        kuma.frame = 4;
                    }
                }
                // ダイヤの当たり判定
                if (item2.intersect(kuma_hit)) {
                    scene.removeChild(item2);
                    item2 = makeItem2();
                    itemPer2 = 50 + Math.floor(Math.random() * 640);
                    item2.y = -itemPer;
                    timer += 500;
                }
            });

            // シーンに「タッチイベント」を追加します。
            scene.addEventListener(Event.TOUCH_START, function(e) {
     
                // タッチイベントは、タッチした座標をe.x , e.y として取ることができます。
                // なお、eという変数の名前は自由に変更できます。 例：function(好きな名前) { ?
     
                if (e.x > kuma.x) { // if (もしも) タッチした横位置が、くまの横位置よりも右側（座標の値として大きい）だったら
                    speed = 1 * itemSpeed; // くまのスピードを1にする
                    kuma.tl.scaleTo(1, 1, 10);      // turn right
                } else { // それ以外のときは
                    speed = -1 * itemSpeed; // くまのスピードを-1にする
                    kuma.tl.scaleTo(-1, 1, 10);      // turn left
                }
            });

            // ゲームシーンを返す
            return scene;
        };

        /**
        * ゲームオーバーシーン
        *
        * ゲームオーバーシーンを作り、返す関数です。
        * createGameoverScore(※) ※にスコアを入れると画面にスコアが表示されます
        * ※は任意の名前でOKで、カンマ区切りで複数設定できます。
        * 例) var createGameoverScore = function (resultScore, test1, test2) {
        */
        var createGameoverScene = function(resultScore) {
            var scene = new Scene();                                   // 新しいシーンを作る
            scene.backgroundColor = '#303030';                         // シーンの背景色を設定

            // ゲームオーバー画像設定
            var gameoverImage = new Sprite(189, 97);                   // スプライトを作る
            gameoverImage.image = game.assets['./img/gameover.png'];  // ゲームオーバー画像を設定
            gameoverImage.x = 65;                                      // 横位置調整
            gameoverImage.y = 152;                                     // 縦位置調整
            scene.addChild(gameoverImage);                             // シーンに追加

            // スコアラベル設定
            var label = new Label(resultScore + 'Point');           // ラベルを作る スコアを代入
            label.textAlign = 'center';                                // 文字を中央寄せ
            label.color = '#ffffff';                                      // 文字を白色に
            label.x = 0;                                               // 横位置調整
            label.y = 100;                                              // 縦位置調整
            label.font = '40px sans-serif';                            // 40pxのゴシック体にする
            scene.addChild(label);                                     // シーンに追加

            // リトライラベル(ボタン)設定
            var retryLabel = new Label('TRY AGAIN');                // ラベルを作る
            retryLabel.color = '#ffffff';                              // 文字を白色に
            retryLabel.x = 20;                                          // 横位置調整
            retryLabel.y = 350;                                        // 縦位置調整
            retryLabel.font = '20px sans-serif';                       // 20pxのゴシック体にする
            scene.addChild(retryLabel);                                // シーンに追加

            // リトライラベルにタッチイベントを設定
            retryLabel.addEventListener(Event.TOUCH_START, function(e) {
                // 現在表示しているシーンをタイトルシーンに置き換える
                game.replaceScene(createStartScene());
            });
            return scene;

        };

        // ゲームの_rootSceneをスタートシーンに置き換える
        game.replaceScene(createStartScene());

    }
    game.start(); // ゲームをスタートさせます
};