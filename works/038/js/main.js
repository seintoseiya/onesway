(function () {
	// Matter.js module aliases
	// 使用するメソッドを読み込む
	var Engine = Matter.Engine, // エンジンの作成、操作に関するメソッド
	    World = Matter.World, // 仮想世界（重力やバウンド）に関するメソッド
	    Bodies = Matter.Bodies; // 四角や丸などの実際に描画するモジュールを作るためのメソッド

	// create a Matter.js engine
	// 描画域を作成(描画したいDOM,オプションを読み込む)
	var engine = Engine.create(document.body); // create ( element , [options] ) 

	// create two boxes and a ground
	// ２つのボックスと地面を作る
	var boxA = Bodies.rectangle(400, 200, 80, 80); // rectangle ( x , y , width , height , [options] ) 
	var boxB = Bodies.rectangle(450, 50, 80, 80);
	var circleA = Bodies.circle(375, 100, 50, { restitution: 0.9 }); // circle ( x , y , radius , [options] , maxSides ) // restitutionはバウンドさせる
	var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true }); // isStaticは固定にするか

	// add all of the bodies to the world
	// Worldメソッドに上記のオブジェクトを追加する
	World.add(engine.world, [boxA, boxB, circleA, ground]); // add ( world , body ) 

	// run the engine
	// 実行
	Engine.run(engine); // run ( engine )
})();