# Quizzical

## Description

The goal of the project is to automatically generate quizzes out of easily readable text files.

## Usage

1. A quiz is created in the [Markdown Format](###Markdown-Format)

2. TODO: The script (?) reads the human readable form and saves the result to a JSON file in the web.

3. The app script reads the json file and creates a google form with the quizz.

## Formats

### Domain Model

* Quiz
  * Title
  * Sections
    * Section
      * Questions
        * Description
        * Choices
        * IsCorrect
        * Points
	* Feedback
	  * Correct
	  * Incorrect

### Markdown Format

Correctness of a choice is indicated by the checkbox selection in the choice option.

NOTE: Using markdown to write the quiz isn't supported yet. For now, we are reading from a Google spreadsheet, found here: https://docs.google.com/spreadsheets/d/1YAnQRDM_V62QMl5mRvuoK0zaAphbv1fxyNpM6HbVLks/edit#gid=1965524460

```
# <title of the quiz>

## <section>

### <question>

  * [ ] <incorrect choice>
  * [ ] <incorrect choice>
  * [x] <correct choice>
  * [ ] <incorrect choice>

Description: <description of question>
Correct: <feedback on correct choice>
Incorrect: <feedback on incorrect choice>
Points: <number, e.g. 1>

### <question>

  * [x] <correct choice>
  * [ ] <incorrect choice>
  * [x] <correct choice>
  * [ ] <incorrect choice>

Description: <description of question>
Correct: <feedback on correct choice>
Incorrect: <feedback on incorrect choice>
Points: <number, e.g. 1>
```

### JSON Format

```
{
    "title": "<title of the quiz>",
    "pages": [
        {
            "title": "<page title>",
            "questions": [
                {
                    "question": "<question>",
                    "description": "<description of question>",
                    "choices": [
                        "<incorrect choice>",
                        "<incorrect choice>",
                        "<correct choice>",
                        "<incorrect choice>"
                    ],
                    "feedback": {
                        "correct": "<feedback on correct choice>",
                        "incorrect": "<feedback on incorrect choice>",
                        "link": "<link to more information>"
                    },
                    "points": "<number, e.g. 1>"
                }
            ]
        }
    ]
}
```
