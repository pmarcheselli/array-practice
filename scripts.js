alert("Let's get to work! ")

// TODO: Assign value of "answers" variable to an array of strings
// that could be answers to magic 8 ball type questions
var answers = ["Yes", "No", "Maybe", "Not in a million years", "Of course!", "Definitely!", "Yeah, right!", "No way!", "Duh, for sure!"]

/* TODO: Write a form handler function that will:
  1. capture the question asked in the form, and assign it to a variable
  2. console log something conversational including the question, like
     "Oh, you want to know if you'll win the lottery?"
*/

function answerQ(){
  event.preventDefault()
  console.log("Magic 8 ball question")
  var theQuestion = document.qForm.question.value
  console.log("Interesting, we'll see if " + theQuestion)
  
  // Math.random() returns decimal numbers between 0 and 1 always 
  // .lenght is 1 more than highest valid index
  // Math.floor() always rounds down
  // This is a bulletproof formula for randomly generating a valid index for an array
  var rando = Math.floor(Math.random() * answers.length)

  var ans = answers[rando]
  console.log(ans)
  
  document.qForm.question.value = ""
}

function newAnswer(){
  event.preventDefault()
  //get value from form
  var theAnswer = document.aForm.answer.value
  
  //see if value is already in answers
  var i = answers.indexOf(theAnswer)
    
  //if not, insert it into answers
  if(i == -1){
    answers.push(theAnswer)
    //print new answer
    console.log(answers.length)
  } else {
    console.log("We've already got that one, thanks")
  }
  //clear input value
  document.aForm.answer.value = ""
}
