(function(){
    // HTML と JavaScriptの分離
    var button = document.getElementById('start');
    button.onclick = function(){
        start();
    }
    // ゲームスタート
    function start() {
        var cards = [],
            CARD_NUM = document.getElementById('mode').value,
            currentNum, // 0 or 1
            openedCard, // 0 .. 3
            correctNum = 0,
            enableFlip = true,
            score = 0,
            timerId;

        // ボタンを非表示
        button.style.display = 'none';

        // カードをめくる処理
        function flip(card) {
            if(!enableFlip){
                return;
            }
            // var card = document.getElementById('card_'+n);
            if(card.value != '?'){
                return;
            }
            card.value = card.dataset.num;
            card.src = './img/'+card.dataset.num+'.png';
            if (typeof currentNum === 'undefined') {
                // 1枚目！
                openedCard = card;
                currentNum = card.dataset.num;
            }else{
                // 2枚目！
                // 判定
                judge(card);
                currentNum = undefined;
            }
        }

        // 判定
        function judge(card) {
            if (currentNum == card.dataset.num) {
                // 正解処理！
                correctNum++;
                if (correctNum == CARD_NUM /2) {
                    // ゲーム終了
                    clearTimeout(timerId);
                    alert("Your score is " + document.getElementById('score').innerHTML);
                    // ボタンを再表示
                    button.style.display = 'inline-block';
                    button.innerHTML = "Restart";
                }
            }else{
                // 不正解！
                enableFlip = false;
                setTimeout(function() {
                    // document.getElementById('card_'+openedCard).value = '?';
                    // document.getElementById('card_'+n).value = '?';
                    openedCard.value = '?';
                    openedCard.src = './img/hatena.png';
                    card.value = '?';
                    card.src = './img/hatena.png';
                    enableFlip = true;
                }, 200);
            }
        }

        // 初期カード生成
        function initCards() {
            var num,
                cardIndex,
                i,
                stage = document.getElementById('stage');
            
            // stageの子要素を全削除
            var chiledNum = stage.childNodes.length;
            for(i = 0; i < chiledNum; i++){
                stage.removeChild(stage.firstChild);
            }
            for (i = 0; i < CARD_NUM; i++) {
                num = Math.floor(i /2);
                do{
                    cardIndex = Math.floor(Math.random() * CARD_NUM);    
                } while(typeof cards[cardIndex] !== 'undefined');
                cards[cardIndex] = createCard(num);
            }
            // var el = document.getElementsByTagName('input');
            // for(i = 0; i < el.length; i++){
            //     el[i].onclick = function(){
            //         flip(this.id.replace(/^card_/, ''));
            //     };
            // }
            for (var i = 0; i < CARD_NUM; i++) {
                stage.appendChild(cards[i]);
                if(i % Math.sqrt(CARD_NUM) == (Math.sqrt(CARD_NUM) - 1)){
                    stage.appendChild(document.createElement('br'));
                }
            }
        }

        // 時間計測
        function runTimer(){
            document.getElementById('score').innerHTML = score++;
            timerId = setTimeout(function (){
                runTimer();
            }, 10);
        }

        // カードを１つ生成
        function createCard(num) {
            var card = document.createElement('input');
            card.type = 'image';
            card.value = '?';
            card.src = './img/hatena.png';
            card.dataset.num = num;
            card.onclick = function() {
                flip(this);
            };
            return card;
        }

        initCards();
        runTimer();
    }
})();