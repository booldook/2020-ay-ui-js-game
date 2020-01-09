// 전역변수
var i = 0;				// for문 변수
var cnt = 0;			// player 갯수
var rnd = 0;			// random 담는 변수
var html = '';
var imgs = [];		// 캐릭터 경로 배열
var players = [];
for(i=0; i<9; i++) imgs.push('./img/c'+i+'.png');


// 이벤트 등록
$("#btInit").click(init);
$("#btReset").click(reset);
$("#btStart").click(start);


// 이벤트 콜백
function start() {
	for(i=0; i<cnt; i++) {
		rnd = Math.random() * 1000 + 2000;
		$(".player").eq(i).stop().animate({"left": "90%"}, rnd, function(){
			players.push($(this).index());
			console.log(players);
		});
	}
}

function init() {
	$(".stage-wrap").empty();
	$("#btInit").hide();
	$("#btStart").show();
	$("#btReset").show();
	cnt = Number($("#cnt").val());
	for(i=0; i<cnt; i++) {
		rnd = Math.floor(Math.random()*9);
		html  = '<div class="player">';
		html += '<div class="badge badge-primary">'+(i+1)+'</div>';
		html += '<img src="'+imgs[rnd]+'" alt="선수" class="img">';
		html += '</div>';
		$(".stage-wrap").append(html);
	}
}

function reset() {
	$(".stage-wrap").empty();
	$("#btInit").show();
	$("#btStart").hide();
	$("#btReset").hide();
	$("#cnt").val(4);
	players = [];
}

