enchant(); // 初期化
 
window.onload = function() {
    var game = new Game(320, 400);
    game.fps = 24;
    game.preload('./img/map1.png','./img/chara5.png','./img/chara6.png','./img/icon0.png','./img/start.png','./img/gameover.png','./img/clear.png','./img/pad.png'); // pre（前）-load（読み込み）：ゲームに使う素材をあらかじめ読み込んでおきます。

    game.onload = function() {
    
        /**
        * タイトルシーン
        *
        * タイトルシーンを作り、返す関数です。
        */
        var createStartScene = function() {

            var scene = new Scene();                                // 新しいシーンを作る
            scene.backgroundColor = '#888888';                      // シーンの背景色を設定

            // スタート画像設定
            var startImage = new Sprite(236, 48);                   // スプライトを作る
            startImage.image = game.assets['./img/start.png'];     // スタート画像を設定
            startImage.x = 42;                                      // 横位置調整
            startImage.y = 176;                                     // 縦位置調整
            scene.addChild(startImage);                             // シーンに追加

            // タイトルラベル設定
            var title = new Label('アクションゲー');                    // ラベルを作る
            title.textAlign = 'center';                             // 文字を中央寄せ
            title.color = '#ffffff';                                // 文字を白色に
            title.x = 0;                                           // 横位置調整
            title.y = 136;                                           // 縦位置調整
            title.font = '28px sans-serif';                         // 28pxのゴシック体にする
            scene.addChild(title);                                  // シーンに追加

            // サブタイトルラベル設定
            var subTitle = new Label('- ひたすら敵を倒すゲーム  -');  // ラベルを作る
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
            var scene = new Scene();

            // 背景
            var baseMap = new Map(16, 16);
            baseMap.image = game.assets['./img/map1.png'];

            // マップを2レイヤ重ねる
            baseMap.loadData([
              [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
              [ -1,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3, -1],
              [ -1,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3, -1],
              [ -1,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3, -1],
              [ -1,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3, -1],
              [ -1,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3, -1],
              [ -1,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3, -1],
              [ -1,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3, -1],
              [ -1,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3, -1],            
              [ -1,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3, -1],
              [ -1,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3, -1],
              [ -1,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3, -1],
              [ -1,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3, -1],
              [ -1,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3, -1],
              [ -1,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3, -1],
              [ -1,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3, -1],
              [ -1,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3, -1],
              [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
            ],[
              [  7, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,  7],
              [  7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  7],
              [  7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  7],
              [  7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  7],
              [  7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  7],
              [  7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  7],
              [  7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  7],
              [  7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  7],
              [  7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  7],            
              [  7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  7],
              [  7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  7],
              [  7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  7],
              [  7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  7],
              [  7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  7],
              [  7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  7],
              [  7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  7],
              [  7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,  7],
              [ 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23]
            ]);
            // 障害物の判定用 1:障害物有り
            baseMap.collisionData = [
              [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
              [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
              [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
              [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
              [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
              [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
              [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
              [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
              [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],            
              [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
              [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
              [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
              [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
              [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
              [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
              [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
              [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
              [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
            ];
            
            // ナイト
            var knight = new Sprite(32, 32);
            knight.image = game.assets['./img/chara5.png'];
            knight.x = 140;
            knight.y = 200;
            knight.isMoving = false;
            knight.direction = 0; // 0:down, 1:left, 2:right, 3:up
            knight.walk = 1; // frameのアニメーション用

            // ナイトの当たり判定用スプライトの設定
            var knight_hit = new Sprite(10, 16);
            knight_hit.x = knight.x + 11;
            knight_hit.y = knight.y + 3;

            // ナイトの攻撃当たり判定用スプライトの設定
            var knight_hitU = new Sprite(16, 8);
            var knight_hitD = new Sprite(16, 8);
            var knight_hitL = new Sprite(8, 16);
            var knight_hitR = new Sprite(8, 16);
            knight_hitU.x = knight.x;
            knight_hitU.y = knight.y;
            knight_hitD.x = knight.x;
             // 画像の関係上、下と右だけずらす
            knight_hitD.y = knight.y + 24;
            knight_hitR.x = knight.x + 24;
            knight_hitR.y = knight.y;
            knight_hitL.x = knight.x;
            knight_hitL.y = knight.y;
            
            var aPush = 0; // aボタンフラグ 0:離す,1:押下
            var cnt = 0; // 攻撃フレームアニメーション用
            // ナイトに「毎フレーム実行イベント」を追加
            knight.addEventListener(Event.ENTER_FRAME, function(e) {
                if(aPush == 0){
                    this.frame = this.direction * 9 + this.walk; // 攻撃してない時のフレーム設定
                    cnt =0;
                }else{
                    if(cnt < 4){
                        this.frame = this.direction * 9 + this.walk + 6; // 攻撃用フレーム設定
                        cnt++;
                    }else if(this.isMoving){
                        this.frame = this.direction * 9 + this.walk;
                    }else{
                        this.frame = this.direction * 9;
                    }
                }
                if (this.isMoving) {
                    // 移動アニメーション
                    this.moveBy(this.vx, this.vy); // 実際に移動  
                    knight_hit.x = this.x + 11;
                    knight_hit.y = this.y + 8;
                    knight_hitU.x = this.x;
                    knight_hitU.y = this.y;
                    knight_hitD.x = this.x;
                    knight_hitD.y = this.y + 24;
                    knight_hitR.x = this.x + 24;
                    knight_hitR.y = this.y;
                    knight_hitL.x = this.x;
                    knight_hitL.y = this.y;
                    if (!(game.frame % 3)) {
                        this.walk++;
                        this.walk %= 3;
                    }
                    if ((this.vx && (this.x-8) % 16 == 0) || (this.vy && this.y % 16 == 0)) {
                        this.isMoving = false;
                        this.walk = 1;
                    }
                } else {
                    // 停止時の処理待ち
                    this.vx = this.vy = 0;
                    if (game.input.left) {
                        this.direction = 1; // 移動方向の設定　0:down, 1:left, 2:right, 3:up
                        this.vx = -4; // 移動距離の設定
                    } else if (game.input.right) {
                        this.direction = 2;
                        this.vx = 4;
                    } else if (game.input.up) {
                        this.direction = 3;
                        this.vy = -4;
                    } else if (game.input.down) {
                        this.direction = 0;
                        this.vy = 4;
                    }
                    if (this.vx || this.vy) {
                        var x = this.x + (this.vx ? this.vx / Math.abs(this.vx) * 16 : 0) + 16;
                        var y = this.y + (this.vy ? this.vy / Math.abs(this.vy) * 16 : 0) + 16;
                        // マップとの当たり判定
                        if (0 <= x && x < baseMap.width && 0 <= y && y < baseMap.height && !baseMap.hitTest(x, y)) {
                            this.isMoving = true;
                            arguments.callee.call(this);
                        }
                    }
                    // 攻撃用フレーム設定
                    if (!(game.frame % 3) && aPush) {
                        this.walk++;
                        this.walk %= 3;
                    }
                }
            });

            var enemies = new Group();
            var enemies_hit = new Group();
            
            for (var i = 0; i < 8; i++) {
                var enemy = new Sprite(32, 32);
                enemy.image = game.assets['./img/chara6.png'];
                enemy.x = Math.floor(Math.random() * 7 * 32 + 32);
                enemy.y = Math.floor(Math.random() * 4 * 32 + 32);
                enemy.frame = [0, 0, 0, 1, 1, 1, 2, 2, 2];
                enemies.addChild(enemy);
                // 敵の当たり判定用スプライトの設定
                var enemy_hit = new Sprite(10, 16);
                enemy_hit.x = enemy.x + 11;
                enemy_hit.y = enemy.y + 8;
                enemies_hit.addChild(enemy_hit);
            }

            var time=0; // 敵の出現タイミング計算用
            // 敵に「毎フレーム実行イベント」を追加します。
            enemies.addEventListener('enterframe', function(e) {
                time++;
                // 敵の移動
                if(time%20 == 0 || time%30 == 0){
                    for (var i in this.childNodes){
                        var random = Math.floor(Math.random() * 4);
                        // 右に移動
                        if(random == 0){
                            var x = this.childNodes[i].x + 8 + 32;
                            var y = this.childNodes[i].y + 16;
                            if (0 <= x && x < baseMap.width && !baseMap.hitTest(x, y)) {
                                this.childNodes[i].tl.moveBy(8, 0, 5);
                            }
                        }
                        // 左に移動
                        if(random == 1){
                            var x = this.childNodes[i].x - 8;
                            var y = this.childNodes[i].y + 16;
                            if (0 <= x && x < baseMap.width && !baseMap.hitTest(x, y)) {
                                this.childNodes[i].tl.moveBy(-8, 0, 5);
                            }
                        }
                        // 下に移動
                        if(random == 2){
                            var x = this.childNodes[i].x + 16;
                            var y = this.childNodes[i].y + 8 + 32;
                            if (0 <= y && y < baseMap.height && !baseMap.hitTest(x, y)) {
                                this.childNodes[i].tl.moveBy(0, 8, 5);
                            }
                        }
                        // 上に移動
                        if(random == 3){
                            var x = this.childNodes[i].x + 16;
                            var y = this.childNodes[i].y - 8;
                            if (0 <= y && y < baseMap.height && !baseMap.hitTest(x, y)) {
                                this.childNodes[i].tl.moveBy(0, -8, 5);
                            }
                        }
                        enemies_hit.childNodes[i].x = this.childNodes[i].x + 11;
                        enemies_hit.childNodes[i].y = this.childNodes[i].y + 8;
                    }
                }
            });

            // キーボード処理と画面タッチの処理が同様なので共有の関数を用意
            var buttonAction = function(){
                aPush = 1;
                // 0:down, 1:left, 2:right, 3:up
                if(knight.direction == 0){
                    for (var i in enemies.childNodes)
                    if(enemies.childNodes[i].intersect(knight_hitD)){
                        enemies.removeChild(enemies.childNodes[i]);
                        enemies_hit.removeChild(enemies_hit.childNodes[i]);
                    }
                }
                if(knight.direction == 1){
                    for (var i in enemies.childNodes)
                    if(enemies.childNodes[i].intersect(knight_hitL)){
                        enemies.removeChild(enemies.childNodes[i]);
                        enemies_hit.removeChild(enemies_hit.childNodes[i]);
                    }
                }
                if(knight.direction == 2){
                    for (var i in enemies.childNodes)
                    if(enemies.childNodes[i].intersect(knight_hitR)){
                        enemies.removeChild(enemies.childNodes[i]);
                        enemies_hit.removeChild(enemies_hit.childNodes[i]);
                    }
                }
                if(knight.direction == 3){
                    for (var i in enemies.childNodes)
                    if(enemies.childNodes[i].intersect(knight_hitU)){
                        enemies.removeChild(enemies.childNodes[i]);
                        enemies_hit.removeChild(enemies_hit.childNodes[i]);
                    }
                }
                return 0;
            }

            game.keybind('Z'.charCodeAt(0), 'a');   // z を a ボタンとして割り当てる
            // aボタン押下時イベント
            game.addEventListener("abuttondown", function(e) {
                buttonAction();
            });
            // aボタン離した時イベント
            game.addEventListener("abuttonup", function(e) {
                aPush = 0;
            });

            // シーンに「タッチイベント」を追加します。
            scene.addEventListener(Event.TOUCH_START, function(e) {
                if(e.x > 160 && e.y > 160){
                    buttonAction();
                }
            });
            // シーンに「タッチエンドイベント」を追加します。
            scene.addEventListener(Event.TOUCH_END, function(e) {
                aPush = 0;
            });

            // ステージに「毎フレーム実行イベント」を追加します。
            scene.addEventListener('enterframe', function(e) {
                for (var i in enemies_hit.childNodes)
                if(knight_hit.intersect(enemies_hit.childNodes[i]))
                    game.replaceScene(createGameoverScene());
                if(enemies.lastChild == null)
                    game.replaceScene(createClearScene());
            });

            // 画面のスクロール設定
            var stage = new Group();
            stage.addChild(baseMap);
            stage.addChild(knight);
            stage.addChild(knight_hit);
            stage.addChild(knight_hitU);
            stage.addChild(knight_hitD);
            stage.addChild(knight_hitR);
            stage.addChild(knight_hitL);
            stage.addChild(enemies);
            stage.addChild(enemies_hit);

            // ステージに「毎フレーム実行イベント」を追加します。
            stage.addEventListener('enterframe', function(e) {
                if (this.x > 200 - knight.x && knight.x <= 250) { 
                    this.x = 200 - knight.x;
                }
                if (this.x < 140 - knight.x && knight.x != 0) { 
                    this.x = 140 - knight.x;
                }
                if (this.y > 200 - knight.y && knight.y <= 300) { 
                    this.y = 200 - knight.y;
                }
                if (this.y < 160 - knight.y && knight.y != 0) { 
                    this.y = 160 - knight.y;
                }
            });

            // シーンに追加
            scene.addChild(stage);

            // 十字キー
            var pad = new Pad();
            pad.x = 0;
            pad.y = 304;
            
            scene.addChild(pad);
            scene.backgroundColor = '#888888';

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
        var createGameoverScene = function() {
            var scene = new Scene();                                   // 新しいシーンを作る
            scene.backgroundColor = '#303030';                         // シーンの背景色を設定

            // ゲームオーバー画像設定
            var gameoverImage = new Sprite(189, 97);                   // スプライトを作る
            gameoverImage.image = game.assets['./img/gameover.png'];  // ゲームオーバー画像を設定
            gameoverImage.x = 65;                                      // 横位置調整
            gameoverImage.y = 152;                                     // 縦位置調整
            scene.addChild(gameoverImage);                             // シーンに追加

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

        /**
        * クリアシーン
        */
        var createClearScene = function() {
            var scene = new Scene();                                   // 新しいシーンを作る
            scene.backgroundColor = '#303030';                         // シーンの背景色を設定

            // クリア画像設定
            var clearImage = new Sprite(267, 48);                   // スプライトを作る
            clearImage.image = game.assets['./img/clear.png'];  // ゲームオーバー画像を設定
            clearImage.x = 26;                                      // 横位置調整
            clearImage.y = 180;                                     // 縦位置調整
            scene.addChild(clearImage);                             // シーンに追加

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