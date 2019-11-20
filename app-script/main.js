function main() {
  var quiz = getQuizData(SHEET_ID);
  
  createForm(quiz, FORM_ID);
}


function createForm(quiz, formId) {
  // create a new form or open an existing one
  if (formId == null) {
    var form = FormApp.create(quiz.title)
    } else {
      var form = FormApp.openById(formId);
    }
  
  form.setTitle(quiz.title)
  .setDescription(quiz.description)
  .setIsQuiz(true)
  .setProgressBar(true);
  
  // delete old items
  var oldItems = form.getItems();
  while(oldItems.length > 0){
    form.deleteItem(oldItems.pop());
  }
  
  // create new pages and questions
  var pageNumber = 1
  quiz.pages.forEach(function (page) {
    if (pageNumber > 1) {
      //add new page to quiz
      form.addPageBreakItem().setTitle(page.title);
    }
    
    //add questions to quiz page
    page.questions.forEach(function (question) {
      var questionItem = form.addCheckboxItem();
      
      questionItem.setTitle(question.text)
      .setPoints(question.points ? question.points : 0)
      .setRequired(question.points ? true : false);
      
      addAnswersToQuestionItem(question.choices, questionItem);
      
      if (question.feedback.lenght !== 0) {
        addFeedbackItemToQuestionItem(question.feedback, questionItem);
      }
      
    });
    
    pageNumber += 1
  });
  
  //set form response destination
  form.setDestination(FormApp.DestinationType.SPREADSHEET, SHEET_ID);
  
  Logger.log('Form URL: ' + form.shortenFormUrl(form.getPublishedUrl()));
  
}

function addAnswersToQuestionItem(choices, questionItem) {
  var createChoicesArray = choices.map(function (choice) {
    return questionItem.createChoice(choice.text, choice.isCorrect);
  })
  questionItem.setChoices(createChoicesArray);
}

function addFeedbackItemToQuestionItem(feedback, questionItem) {
  
  if (feedback.link == null || feedback.link === '') {
    feedback.link = DEFAULT_FEEDBACK_LINK? DEFAULT_FEEDBACK_LINK : ''
  }
  
  if (feedback.correct != null && feedback.correct !== '') {
    var feedbackOnCorrectItem = FormApp.createFeedback()
    .setText(feedback.correct)
    .addLink(feedback.link)
    .build();
    questionItem.setFeedbackForCorrect(feedbackOnCorrectItem);
  }
  
  if (feedback.incorrect != null && feedback.incorrect !== '') {
    var feedbackOnIncorrectItem = FormApp.createFeedback()
    .setText(feedback.incorrect)
    .addLink(feedback.link)
    .build();
    questionItem.setFeedbackForIncorrect(feedbackOnIncorrectItem);
  }
}