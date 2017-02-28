//
//
//
//
//

"use strict";


function learn() {

    //
    // play the Quizlet "Learn" game
    //

    function getCurrentTerm() {
	// get the current term
	return document.getElementsByClassName("qDef")[0].innerHTML
    }

    function getAnswer(prompt) {
	var terms = window.Quizlet.learnGameData.allTerms;
	var answer = "";
	
	// TODO: make  this exit when it's found a match
	terms.forEach(function(term) {
	    if (term.definition === term) {
		answer = term.word;
	    }
	    else if (term.word === term) {
		answer = term.definition;
	    }
	});
	return answer;
    }

    function run() {
	// TODO: make this run in an actual loop
	while (true) {
	    answer = getAnswer();
	}
    }
    
}
