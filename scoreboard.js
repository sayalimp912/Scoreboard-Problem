$(document).ready(function(){
	$('#submit_button').prop('disabled', true);
	// The Submit button is only enabled when all 4 input fields are entered.
    $('input').on("keyup",function() {
    	team1 = $.trim($("#teamName1").val()).length;
		team2 = $.trim($("#teamName2").val()).length;
		score1 = $.trim($("#teamScore1").val()).length;
		score2 = $.trim($("#teamScore2").val()).length;
		if(team1 > 0 && team2 > 0 && score1 > 0 && score2 > 0){
			$('#submit_button').prop('disabled', false);
		}
	});
	$("#submit_button").click(function(){
		// display result
		team1 = $.trim($("#teamName1").val()).length;
		team2 = $.trim($("#teamName2").val()).length;
		score1 = $.trim($("#teamScore1").val()).length;
		score2 = $.trim($("#teamScore2").val()).length;
		if(team1 > 0 && team2 > 0 && score1 > 0 && score2 > 0){
			$('#submit_button').prop('disabled', false);
			result_str = "And the winner is "		
			if($("#teamScore1").val() == $("#teamScore2").val()){
				result_str = 'It is a tie! The winners are <strong>' + $("#teamName1").val() + '</strong> and <strong>' + $("#teamName2").val() + '</strong> with a score of <strong>' + $("#teamScore1").val() + '</strong>'
			}else if($("#teamScore1").val() > $("#teamScore2").val()){
				result_str += '<strong>' + $("#teamName1").val() + '</strong> with a score of <strong>' + $("#teamScore1").val() + '</strong>'
			}else{
				result_str += '<strong>' + $("#teamName2").val() + '</strong> with a score of <strong>' + $("#teamScore2").val() + '<strong>'
			}
			$("p.result").html(result_str)
			// All 4 input fields are cleared upon submission of the score.
			// Disable submit button upon submission of the score
			$("#teamName1").val('');
			$("#teamName2").val('');
			$("#teamScore1").val('');
			$("#teamScore2").val('');
			$('#submit_button').prop('disabled', true);
		}else{
			alert("Please fill all the fields.")
		}
		
	});

	// Next to each score is a Remove link where the user can remove the score
	// On click of this button, the value of score field is removed
	$(".removeScore").click(function(){
		$(this).closest(".row").find(".score").val('');
	});
});