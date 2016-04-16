$(document).ready(function(){
	$('#submit_button').prop('disabled', true);
	$(".result").text('');
	// The Submit button is only enabled when all 4 input fields are entered.
    $('input').on("keyup",function() {
    	var team1 = $.trim($("#teamName1").val());
		var team2 = $.trim($("#teamName2").val());
		var score1 = parseInt($("#teamScore1").val());
		var score2 = parseInt($("#teamScore2").val());
		if(team1 != '' && team2 != '' && score1 >= 0 && score2 >= 0){
			$('#submit_button').prop('disabled', false);
		}
	});
	$("#submit_button").click(function(){
		var team1 = $.trim($("#teamName1").val());
		var team2 = $.trim($("#teamName2").val());
		var score1 = parseInt($("#teamScore1").val());
		var score2 = parseInt($("#teamScore2").val());
		if(team1 != '' && team2 != '' && score1 >= 0 && score2 >= 0){
			// team names should not be the same
			if(team1 != team2){
				$('#submit_button').prop('disabled', false);
				// Scores are shown at the bottom of the screen with the winner's name and score in bold
				// In the case of a tie then illustrate this by bolding both teams and scores
				result_str = "And the winner is ";		
				if(score1 == score2){
					result_str = 'It is a tie! The winners are <strong>' + team1 + '</strong> and <strong>' + team2 + '</strong> with a score of <strong>' + score1 + '</strong>!';
				}else if(score1 > score2){
					result_str += '<strong>' + team1 + '</strong> with a score of <strong>' + score1 + '</strong>!';
				}else{
					result_str += '<strong>' + team2 + '</strong> with a score of <strong>' + score2 + '<strong>!';
				}
				// display result
				$("p.result").html(result_str);
				// All 4 input fields are cleared upon submission of the score.
				// Disable submit button upon submission of the score
				$("#teamName1").val('');
				$("#teamName2").val('');
				$("#teamScore1").val('');
				$("#teamScore2").val('');
				$('#submit_button').prop('disabled', true);
			}else{
				alert("Please check your team names!")
			}
		}else{
			alert("Please fill all the fields.");
		}
		
	});

	// Next to each score is a Remove link where the user can remove the score
	// On click of this button, the value of score field is removed
	$(".removeScore").click(function(){
		$(this).closest(".row").find(".score").val('');
	});
});