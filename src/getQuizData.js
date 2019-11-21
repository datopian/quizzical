var HeaderNames = {
  TEXT: 'text',
  CHOICES: 'choices',
  FEEDBACK_CORRECT: 'feedback for correct',
  FEEDBACK_INCORRECT: 'feedback for incorrect',
  FEEDBACK_LINK: 'feedback link',
  POINTS: 'points',
  DESCRIPTION: 'description'
}

function getQuizData(worksheetId) {
  var worksheet = SpreadsheetApp.openById(worksheetId);
  var sheets = worksheet.getSheets();
  
  var quiz = {
    title: 'Onboarding Quiz',
    description: "Below we have number of questions which is based on the Datopian's Handbook. Question can be single choice or multi choice.",
    pages: []
  }
  
  for each (var sheet in sheets) {
    var sheetName = sheet.getName();
    
    if ( sheetName.indexOf('Form Responses') === -1 ) {
      var page = { 
        title: sheetName,
        questions: []
      }
      
      sheetData = sheet.getDataRange().getValues();
      
      columnNames = sheetData[0];
      
      for (var i = 2; i < sheetData.length; i++) {
        row = sheetData[i];
        
        var question = { feedback: {} }
        
        for (var j = 0; j < row.length; j++) {
          headerName = columnNames[j].toLowerCase();
          cellValue = row[j]
          
          switch (headerName) {
            case HeaderNames.TEXT:
              question.text = cellValue;
            case HeaderNames.CHOICES:
              var choices = parseChoices(cellValue)
              question.choices = choices;
            case HeaderNames.FEEDBACK_CORRECT:
              question.feedback.correct = cellValue;
            case HeaderNames.FEEDBACK_INCORRECT:
              question.feedback.incorrect = cellValue;
            case HeaderNames.FEEDBACK_LINK:
              question.feedback.link = cellValue;
            case HeaderNames.POINTS:
              question.points = cellValue;
            case HeaderNames.DESCRIPTION:
              question.description = cellValue;
          }            
        }
        
        page.questions.push(question)
      }
      
      quiz.pages.push(page)
    }
    
  }
  
  return quiz;
}

function parseChoices(choices) {
  var result = [];
  
  var choicesList = choices.split('\n');
  var rx = /\[([\sx]*)\][\s]*(.*)/
  
  for each (var choice_string in choicesList) {
    groups = choice_string.match(rx)
    
    if (groups != null && groups.length >= 3) {
      
      isCorrect = groups[1] === 'x';
      
      result.push({
        text: groups[2],
        isCorrect: isCorrect
      });
    }
  }
  
  return result;
}