<!DOCTYPE html>
<html lang="ja">
	<head>
		<meta charset="utf-8" />
		<title>関西弁ジェネレータ</title>
		<meta name="author" content="Seiya Tanaka" />
		<meta name="viewport" content="width=device-width; initial-scale=1.0" />
	</head>

	<body>
		<div>
			<header>
				<h1>関西弁ジェネレータ</h1>
			</header>
			<nav>
				<p>
					<!-- 入力フォーム -->
					<form method="post" action="">
						<textarea name="body" rows="5" cols="80" placeholder="変換前"><?php echo $_POST["body"]; ?></textarea><br/>
						<input type="submit" value="変換" />
					</form>
					<?php
						//--------------------------------------------
						// 変換処理
						$body = $_POST["body"]; // 入力された文章を得る
						//--------------------------------------------

						// セキュリティ対策
						$body = htmlspecialchars($body);
						//--------------------------------------------
						// 関西弁に変換する処理
						$body = str_replace('です。','や。',$body);
						$body = str_replace('ます。','まんねん。',$body);
						$body = str_replace('しました。','してったんや。',$body);
						$body = str_replace('でした。','だったんや。',$body);
						$body = str_replace('いきましょう。','いこか。',$body);
						$body = str_replace('いました。','いたんや。',$body);
						$body = str_replace('ください。','してなー。',$body);

						// 大阪・関西弁辞典　参照
						$body = str_replace('あなた','あんさん',$body);
						$body = str_replace('ありがとう','おおきに',$body);
						$body = str_replace('ありがとうございます','まいどおおきに',$body);
						$body = str_replace('あります','おます',$body);
						$body = str_replace('ありますから','あるさかいに',$body);
						$body = str_replace('あるから','あるさかいに',$body);
						$body = str_replace('あるんだね','あるんやね',$body);
						$body = str_replace('ありますね','あるんやね',$body);
						$body = str_replace('あれは','あら',$body);
						$body = str_replace('あれって','あれて',$body);
						$body = str_replace('あわせてやる','あわせたる',$body);
						$body = str_replace('あんな','あない',$body);
						$body = str_replace('あんまり','あんま',$body);
						$body = str_replace('いいから','ええから',$body);
						$body = str_replace('いいじゃない','ええやない',$body);
						$body = str_replace('いいだろ','ええやろ',$body);
						$body = str_replace('いいですよ','ええで',$body);
						$body = str_replace('いいな','ええな',$body);
						$body = str_replace('いいね','ええね',$body);
						$body = str_replace('いいんだけど','ええねんけど',$body);
						$body = str_replace('いいんだよ','ええねん',$body);
						$body = str_replace('行きたくなってきた','行きとうなってきた',$body);
						$body = str_replace('行きましょう','行きまひょ',$body);
						$body = str_replace('行きます','行きまっせ',$body);
						$body = str_replace('いきますか','行きまっしゃろか',$body);
						$body = str_replace('いくつ','なんぼ',$body);
						$body = str_replace('いくら','なんぼ',$body);
						$body = str_replace('いくらなんでも','なんぼなんでも',$body);
						$body = str_replace('行くよ','行くで',$body);
						$body = str_replace('行くぜ','行くで',$body);
						$body = str_replace('行け','いったれ',$body);
						$body = str_replace('いけない','あかん',$body);
						$body = str_replace('ダメ','あかん',$body);
						$body = str_replace('いけません','あきまへん',$body);
						$body = str_replace('痛くなってきた','痛とうなってきた',$body);
						$body = str_replace('行こうか','行こか',$body);
						$body = str_replace('いじわる','いけず',$body);
						$body = str_replace('一度','いっぺん',$body);
						$body = str_replace('たくさん','ぎょーさん',$body);
						$body = str_replace('いっぱい','ぎょーさん',$body);
						$body = str_replace('いない','居らへん',$body);
						$body = str_replace('いらっしゃい','おいでやす',$body);
						$body = str_replace('いらっしゃいませ','おいでやす',$body);
						$body = str_replace('いる','居る',$body);
						$body = str_replace('いろ','居れ',$body);
						$body = str_replace('言った','言うた',$body);
						$body = str_replace('言って','言うて',$body);
						$body = str_replace('言わない','言わへん',$body);
						$body = str_replace('歌った','歌うた',$body);
						$body = str_replace('歌って','歌うて',$body);
						$body = str_replace('うまく','あんじょう',$body);
						$body = str_replace('驚いた','おったまげた',$body);
						$body = str_replace('お前','おんどれ',$body);
						$body = str_replace('面白い','おもろい',$body);
						$body = str_replace('面白くない','おもろない',$body);
						$body = str_replace('思った','思た',$body);
						$body = str_replace('思って','思て',$body);
						$body = str_replace('買い物','買いもん',$body);
						$body = str_replace('買った','買うた',$body);
						$body = str_replace('買って','買うて',$body);
						$body = str_replace('からかう','おちょくる',$body);
						$body = str_replace('変わっている','変わっとる',$body);
						$body = str_replace('関わらないで','関わらへんといて',$body);
						$body = str_replace('頑張りなさい','頑張りなはれ',$body);
						$body = str_replace('消えてしまった','消えてもうた',$body);
						$body = str_replace('聞かせてやる','聞かせたる',$body);
						$body = str_replace('気がついた','気イついた',$body);
						$body = str_replace('来てやった','来たった',$body);
						$body = str_replace('決まっている','決まっとる',$body);
						$body = str_replace('気をつけて','気イつけて',$body);
						$body = str_replace('くだらない','しょーもない',$body);
						$body = str_replace('こうなったら','こうなりよったら',$body);
						$body = str_replace('自分','ウチ',$body);
						$body = str_replace('私','ウチ',$body);
						$body = str_replace('此方','ウチ',$body);
						$body = str_replace('来ない','けぇへん',$body);
						$body = str_replace('来なくていい','来んでええ',$body);
						$body = str_replace('このまま','このまんま',$body);
						$body = str_replace('これ','こら',$body);
						$body = str_replace('これは','こら',$body);
						$body = str_replace('怖くない','怖ない',$body);
						$body = str_replace('こんな','こない',$body);
						$body = str_replace('こんにちは','もうかりまっか',$body);
						$body = str_replace('寒い','さぶい',$body);
						$body = str_replace('さようなら','ほなさいなら',$body);
						$body = str_replace('仕方ない','しゃあない',$body);
						$body = str_replace('している','しとる',$body);
						$body = str_replace('しないで','せんで',$body);
						$body = str_replace('しないと','せんと',$body);
						$body = str_replace('自分','オノレ',$body);
						$body = str_replace('します','しまっせ',$body);
						$body = str_replace('しまった','しもた',$body);
						$body = str_replace('しまって','しもて',$body);
						$body = str_replace('じゃない','せやない',$body);
						$body = str_replace('じゃないか','ちゃうか',$body);
						$body = str_replace('じゃなかったら','せやなかったら',$body);
						$body = str_replace('しろ','せえ',$body);
						$body = str_replace('好きじゃない','好かん',$body);
						$body = str_replace('好かない','好かん',$body);
						$body = str_replace('すごく','めっちゃ',$body);
						$body = str_replace('超','めっちゃ',$body);
						$body = str_replace('すごいじゃん','すごいやん',$body);
						$body = str_replace('すみません','すんまへん',$body);
						$body = str_replace('すんません','すんまへん',$body);
						$body = str_replace('そうだ','せや',$body);
						$body = str_replace('そうだから','そやから',$body);
						$body = str_replace('だから','そやから',$body);
						$body = str_replace('だけど','そやけど',$body);
						$body = str_replace('そうだけど','そやけど',$body);
						$body = str_replace('そうだったら','そやったら',$body);
						$body = str_replace('そうだな','せやな',$body);
						$body = str_replace('そうだね','せやね',$body);
						$body = str_replace('そうだろ','せやろ',$body);
						$body = str_replace('そうでしょうか','そうでっしゃろか',$body);
						$body = str_replace('そうです','そうや',$body);
						$body = str_replace('そうですか','そうでっか',$body);
						$body = str_replace('そうなの','そうなん',$body);
						$body = str_replace('そうなのか','そうなんか',$body);
						$body = str_replace('そしたら','ほしたら',$body);
						$body = str_replace('それだけ','ほんだけ',$body);
						$body = str_replace('それだったら','それやったら',$body);
						$body = str_replace('それから','ほんで',$body);
						$body = str_replace('そして','ほんで',$body);
						$body = str_replace('それで','ほんで',$body);
						$body = str_replace('それでは','ほな',$body);
						$body = str_replace('じゃあ','ほな',$body);
						$body = str_replace('それでも','ほんでも',$body);
						$body = str_replace('それなら','ほんなら',$body);
						$body = str_replace('それは','そら',$body);
						$body = str_replace('揃った','揃た',$body);
						$body = str_replace('揃って','揃て',$body);
						$body = str_replace('そんなこと','そないなこと',$body);
						$body = str_replace('高く','高う',$body);
						$body = str_replace('だから','せやから',$body);
						$body = str_replace('だけど','せやけど',$body);
						$body = str_replace('だったら','せやったら',$body);
						$body = str_replace('だって','せやかて',$body);
						$body = str_replace('だな','せやな',$body);
						$body = str_replace('食べたくない','食べたない',$body);
						$body = str_replace('だね','せやね',$body);
						$body = str_replace('誰','どなた',$body);
						$body = str_replace('だろ','せやろ',$body);
						$body = str_replace('違いますよ','ちゃいまんがな',$body);
						$body = str_replace('違う','ちゃう',$body);
						$body = str_replace('違った','違た',$body);
						$body = str_replace('違って','違て',$body);
						$body = str_replace('ちょっと','ちと',$body);
						$body = str_replace('使った','使た',$body);
						$body = str_replace('使って','使て',$body);
						$body = str_replace('付き合って','付き合うて',$body);
						$body = str_replace('使わない','使わへん',$body);
						$body = str_replace('ってわけ','ちゅうわけ',$body);
						$body = str_replace('できている','できとる',$body);
						$body = str_replace('できない','でけへん',$body);
						$body = str_replace('という','ちゅう',$body);
						$body = str_replace('どうした','どないした',$body);
						$body = str_replace('どうしたの','どないしたん',$body);
						$body = str_replace('どうします','どないします',$body);
						$body = str_replace('どうしますか','どうしまっか',$body);
						$body = str_replace('どうしよう','どないしょ',$body);
						$body = str_replace('どうする','どないする',$body);
						$body = str_replace('どうだ','どうや',$body);
						$body = str_replace('どうでした','どうやった',$body);
						$body = str_replace('どうでしょう','どうでっしゃろ',$body);
						$body = str_replace('どうですか','どうでっか',$body);
						$body = str_replace('どちらにしましょう','どちらにしまひょ',$body);
						$body = str_replace('止まっている','止まっとる',$body);
						$body = str_replace('どんな','どないな',$body);
						$body = str_replace('ない','あらへん',$body);
						$body = str_replace('ないか','おまへんか',$body);
						$body = str_replace('殴る','どつく',$body);
						$body = str_replace('叩く','どつく',$body);
						$body = str_replace('投げる','放る',$body);
						$body = str_replace('何か','何ぞ',$body);
						$body = str_replace('無くなる','無うなる',$body);
						$body = str_replace('何も','なんも',$body);
						$body = str_replace('なって','なて',$body);
						$body = str_replace('なのに','せやのに',$body);
						$body = str_replace('なのに','せやのに',$body);
						$body = str_replace('なりたくない','なりとうない',$body);
						$body = str_replace('何なの','何やの',$body);
						$body = str_replace('何だって','何やて',$body);
						$body = str_replace('何だと','何やと',$body);
						$body = str_replace('何だよ','何やねん',$body);
						$body = str_replace('何でだよ','何でやねん',$body);
						$body = str_replace('何でよ','何でやねん',$body);
						$body = str_replace('何度','なんべん',$body);
						$body = str_replace('似合ってる','似合てる',$body);
						$body = str_replace('鈍い','どんくさい',$body);
						$body = str_replace('バカ','アホ',$body);
						$body = str_replace('早く','早よ',$body);
						$body = str_replace('早くしろ','早よせぇ',$body);
						$body = str_replace('変','けったい',$body);
						$body = str_replace('俺','わい',$body);
						$body = str_replace('僕','わい',$body);
						$body = str_replace('ほんと','ほんま',$body);
						$body = str_replace('本当','ほんま',$body);
						$body = str_replace('酷い','えげつ',$body);
						$body = str_replace('酷いな','えげつないな',$body);
						$body = str_replace('まあまあ','ぼちぼち',$body);
						$body = str_replace('そろそろ','ぼちぼち',$body);
						$body = str_replace('少しずつ','ぼちぼち',$body);
						$body = str_replace('負けてられない','負けてられへん',$body);
						$body = str_replace('負けない','負けへん',$body);
						$body = str_replace('まだだった','まだやった',$body);
						$body = str_replace('まだでした','まだやった',$body);
						$body = str_replace('間違ってた','間違てた',$body);
						$body = str_replace('全くもー','ほんまにもー',$body);
						$body = str_replace('待ってください','待ってくんなはれ',$body);
						$body = str_replace('見たくないんだよ','見たないねん',$body);
						$body = str_replace('見たくないんだよ','見たないねん',$body);
						$body = str_replace('見たことない','見たことあらへん',$body);
						$body = str_replace('皆さん','皆はん',$body);
						$body = str_replace('もう一度','もっぺん',$body);
						$body = str_replace('もう一回','もっかい',$body);
						$body = str_replace('持ってない','持ってへん',$body);
						$body = str_replace('持ってません','持ってまへん',$body);
						$body = str_replace('もの','もん',$body);
						$body = str_replace('貰った','貰た',$body);
						$body = str_replace('貰って','貰て',$body);
						$body = str_replace('文句','いちゃもん',$body);
						$body = str_replace('やっつけてしまえ','いてまえ',$body);
						$body = str_replace('やってしまえ','いてまえ',$body);
						$body = str_replace('やっている','やっとる',$body);
						$body = str_replace('やってしまう','やってまう',$body);
						$body = str_replace('やってやった','やったった',$body);
						$body = str_replace('やってやる','やったる',$body);
						$body = str_replace('やってやれ','やったれ',$body);
						$body = str_replace('やってやろう','やったろ',$body);
						$body = str_replace('やらないで','やらんといて',$body);
						$body = str_replace('やりません','やりまへん',$body);
						$body = str_replace('勘弁して','堪忍して',$body);
						$body = str_replace('許して','堪忍して',$body);
						$body = str_replace('よく','よう',$body);
						$body = str_replace('よろしく','よろしゅう',$body);
						$body = str_replace('よろしくお願いします','よろしゅう頼んまっせ',$body);
						$body = str_replace('了解です','了解や',$body);
						$body = str_replace('了解だ','了解や',$body);
						$body = str_replace('ルギージさん','ルギージはん',$body);
						$body = str_replace('分からない','分からん',$body);
						$body = str_replace('分かりません','分かりまへん',$body);
						$body = str_replace('私','わて',$body);
					?>
				</p>
				<p>
					<!-- 結果の表示 -->
					<textarea rows="8" cols="80" placeholder="変換前"><?php echo $body; ?></textarea>
				</p>
			</nav>
		</div>
	</body>
</html>
