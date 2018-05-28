$(document).ready(function() {
	$(".list-answers .btn").click(function() {
		$(".list-answers li").addClass("answer");
		$(this).parent().addClass("user-choice");
	});
	$(".list-answers .submit .btn").click(function() {
		$(".list-answers li:nth-child(2)").addClass("answer-correct");
		$("body").addClass("modal-open");
	});
	$(".list-answers .submit .btn").click(function() {
		$(".list-answers li:nth-child(3)").addClass("answer-incorrect");
	});
});

function progress(timeleft, timetotal, $element) {
    var progressBarWidth = timeleft * $element.width() / timetotal;
    $element.find('div').animate({ width: progressBarWidth }, 500).html(Math.floor(timeleft/60) + ":"+ timeleft%60);
    if(timeleft > 0) {
        setTimeout(function() {
            progress(timeleft - 1, timetotal, $element);
        }, 1000);
    }
};

progress(30, 30, $('#progressBar'));



