//
//
//
//
//

"use strict";

function insertAtCursor(myField, myValue) {
    //IE support
    if (document.selection) {
        myField.focus();
        sel = document.selection.createRange();
        sel.text = myValue;
    }
    //MOZILLA and others
    else if (myField.selectionStart || myField.selectionStart == '0') {
        var startPos = myField.selectionStart;
        var endPos = myField.selectionEnd;
        myField.value = myField.value.substring(0, startPos)
            + myValue
            + myField.value.substring(endPos, myField.value.length);
    } else {
        myField.value += myValue;
    }
}

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
	    if (term.definition === prompt) {
		answer = term.word;
	    }
	    else if (term.word === prompt) {
		answer = term.definition;
	    }
	});
	return answer;
    }

    function run() {
	try {
	    document.getElementsByClassName("LearnModeMain-anyKey")[0].click();
	}
	catch (e) {
	    
	}
	insertAtCursor(document.getElementById("user-answer"), getAnswer(getCurrentTerm()));
	document.getElementById("js-learnModeAnswerButton").click();
    }

    setInterval(run, 100);
}

function hack(game) {
    switch(game) {
    case "learn":
	learn();
	break;
    case "flashcards":
	//flashcards();
	break;
    }
}
