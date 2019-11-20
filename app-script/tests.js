function testCreateForm() {
  var testQuiz = {
    title: 'Test Quiz',
    description: 'This is where the description goes',
    pages: [
      {
        title: 'Page 1',
        questions: [
          {
            text: 'What approach do we use for testing?',
            description: 'Think: "What would Kent do?"',
            choices: [{
              text: 'Yolo, no tests',
              isCorrect: false
            },{
              text: 'TDD',
              isCorrect: true
            }],
            points: 1,
            feedback: {}
          }
        ]
      }  
    ]
  }
  
  createForm(testQuiz);
}

function testGetQuizData() {
  var quiz = getQuizData(SHEET_ID);
  Logger.log(quiz)
}

function testParseChoices() {
  var choices = "* [ ] Keep team in sync\n* [ ] Deal with issues arising\n* [ ] Surface blockers\n* [x] Getting better at restoring integrity";
  
  Logger.log(parse_choices(choices));
}