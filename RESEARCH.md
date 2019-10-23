## Recommendations

From https://docs.google.com/spreadsheets/d/1ULGVlOaSzPHoZkxXf-bQUV840cxrV1cSoPKfeulOlKk/edit#gid=1840091729

### Quizzes Toolkit 88.57%

https://github.com/jutge-org/quizzes-toolkit

```
title: The Title of The Quiz
statement: Here you can put a statement for the quiz
questions:
  - title: Question 1
    file: question1
    score: 30
  - title: Question 2
    file: question2
    score: 70
```

### GitBook 82.86%

https://github.com/GitbookIO/plugin-quizzes

```
---

Here's a quiz about Gitbook

|                  | Good | Bad |
| ---------------- | ---- | --- |
| What is Gitbook? | (x)  | ( ) |

> Gitbook is good

What does Gitbook support?
- [x] Table-based questions with radio buttons
- [x] Table-based questions with checkboxes
- [ ] Telepathy
- [x] List-based questions with checkboxes
- [x] List-based questions with radio buttons
- [ ] Moon-on-a-stick

> Gitbook supports table and list based quiz questions using either radio buttons or checkboxes.
>
> Gitbook is not telepathic and does not give you the moon on a stick.

---
```

### Urban Institute 80%

https://github.com/UrbanInstitute/quick-quiz

```
// example quiz text
// @bsouthga
// <- (this is a comment and will be ignored)

// this is the url for the parent
url: http://urbaninstitute.github.io/quick-quiz/

// this is the title of the quiz
# How well do you know real creatures?

// this is an example question.
// the number signifies the question order,
// meaning questions can be placed in random order
// within the file
1) Which of the following is the most real?

  // these are answers, a correct answer
  // is indicated by a "*"
  - Loch Ness Monster
  - Centaur
  * Unicorn
  - Mermaid

  // this is a reponse text paragraph
  // it will be displayed upon answering
  // the question correctly
  The unicorn is a mythical creature. Strong, wild, and fierce, it was impossible to tame by man. Plinie, the Roman naturalist records it as "a very ferocious beast, similar in the rest of its body to a horse, with the head of a deer, the feet of an elephant, the tail of a boar, a deep, bellowing voice, and a single black horn, two cubits in length, standing out in the middle of its forehead."


2) Unicorns are real?
  * True
  - False

3) What shade of white is this unicorn?
  - Marshmallow
  * Moon glow
  - Egg shell

  // this image will appear along with
  // the question pompt
  (image) unicorn.jpg
```

## Research

### RStudio Format

https://rstudio.github.io/learnr/questions.html

Could be a useful format, but I think we have better options

````
```{r letter-a, echo=FALSE}
question("What number is the letter A in the English alphabet?",
  answer("8"),
  answer("14"),
  answer("1", correct = TRUE),
  answer("23")
)
```
````

### Blackboard YAML

https://github.com/league/blackboard-yaml

Has own YAML format with Python converter script to CSV suitable for Blackboard Learn

> Generate quizzes for Blackboard Learn™ from a YAML+Markdown specification. We use the CSV-import feature of Blackboard, but format the CSV file so the questions and answers can have code blocks or
other sorts of markup.

https://github.com/league/blackboard-yaml/blob/master/example.yaml

```
- type: mc
  question: |
    Which Java keyword is used to distinguish object methods from class methods?
  answers:
    - answer: "`public`"
      correct: false
    - answer: "`static`"
      correct: true
    - answer: "`final`"
      correct: false
    - answer: "`void`"
      correct: false
    - answer: "`class`"
      correct: false
```

### Quizzes toolkit

https://github.com/jutge-org/quizzes-toolkit

Dependencies: Python 3 and `pyyaml`

>execute `make-quiz.py` inside a directory that contains the quiz ([Example](https://github.com/jutge-org/quizzes-toolkit/tree/master/quizzes/demo.pbm/ca)), passing as a unique parameter an integer number that will be used as the random seed. The output will be a JSON file with the generated quiz.

https://github.com/jutge-org/quizzes-toolkit#quiz

```
title: The Title of The Quiz
statement: Here you can put a statement for the quiz
questions:
  - title: Question 1
    file: question1
    score: 30
  - title: Question 2
    file: question2
    score: 70
```

### Coding Game Markdown

https://www.codingame.com/playgrounds/408/tech-io-documentation/add-a-quiz

```
?[What is the answer to Life, the Universe and Everything?]
-[ ] There is no answer to that!
-[ ] Sleep and eat
-[x] Easy, this is 42
-[ ] Peace & Love
```

### Discourse discussion -> edx

https://meta.discourse.org/t/creating-basic-tests-exams-with-markdown/48474/3

The discourse discussion is in reference to the edx project:

https://github.com/edx/edx-platform/blob/0438878ab96e8be21c4f75fa3979c4eb5b491543/common/lib/xmodule/xmodule/templates/problem/checkboxes_response.yaml

```
---
metadata:
    display_name: Checkboxes
    markdown: |
       Checkbox problems allow learners to select multiple options. Learners can see all the options along with the problem text.

       When you add the problem, be sure to select Settings to specify a Display Name and other values that apply.
       You can use the following example problem as a model.
       >>The following languages are in the Indo-European family:<<
       [x] Urdu
       [ ] Finnish
       [x] Marathi
       [x] French
       [ ] Hungarian
       Note: Make sure you select all of the correct options—there may be more than one!
       [explanation]
       Urdu, Marathi, and French are all Indo-European languages, while Finnish and Hungarian are in the Uralic family.
       [explanation]
```

### Urban Institute Quick Quiz Generator

https://github.com/UrbanInstitute/quick-quiz

```
// example quiz text
// @bsouthga
// <- (this is a comment and will be ignored)

// this is the url for the parent
url: http://urbaninstitute.github.io/quick-quiz/

// this is the title of the quiz
# How well do you know real creatures?

// this is an example question.
// the number signifies the question order,
// meaning questions can be placed in random order
// within the file
1) Which of the following is the most real?

  // these are answers, a correct answer
  // is indicated by a "*"
  - Loch Ness Monster
  - Centaur
  * Unicorn
  - Mermaid

  // this is a reponse text paragraph
  // it will be displayed upon answering
  // the question correctly
  The unicorn is a mythical creature. Strong, wild, and fierce, it was impossible to tame by man. Plinie, the Roman naturalist records it as "a very ferocious beast, similar in the rest of its body to a horse, with the head of a deer, the feet of an elephant, the tail of a boar, a deep, bellowing voice, and a single black horn, two cubits in length, standing out in the middle of its forehead."


2) Unicorns are real?
  * True
  - False

3) What shade of white is this unicorn?
  - Marshmallow
  * Moon glow
  - Egg shell

  // this image will appear along with
  // the question pompt
  (image) unicorn.jpg
```

Output is a .JSON file

### ML quiz

https://github.com/willprice/ml-quiz

Forked from Urban Institute but has a bunch of new stuff e.g. the yaml structure ...

```
images: []
problem_type: training
difficulty: "3"
reference: "8.3"
source: "http://www.csd.uwo.ca/courses/CS9840a/Lecture2_knn.pdf"
question: |
  Given the training data
  $$\mathbf{x} =
    \begin{pmatrix}
      3 & 3 \\
      1 & 0 \\
      1 & 2 \\
      2 & 3 \\
      2 & 1 \\
    \end{pmatrix}$$
  with the labels:
  $$\mathbf{y} =
  \begin{pmatrix}
      0 \\
      1 \\
      0 \\
      0 \\
      1 \\
    \end{pmatrix}$$
  where an instance belonging to the $\oplus$ class is represented by
  $1$ in $\mathbf{y}$, and an instance belonging to the $\ominus$
  class by $0$.
  Classify the test instance $(0, 1)$ using the 3 nearest neighbours
  classifier with Euclidean distances by calculation
answer_type: single
answers:
  - correctness: "+"
    explanation: "The nearest points to $(0, 1)$ are $(1, 0)$, $(1, 2)$ and $(2, 1)$"
    answer: "$\\oplus$"
  - correctness: "-"
    answer: "$\\ominus$"
workings: |
  We need to find the distance between our test point and every point
  in the training data set.
  First we find the distance between the test point and training
  points in each dimension.
  $$\mathbf{x} - (0, 1) =
  \begin{pmatrix}
    3 & 2 \\
    1 & -1 \\
    1 & 1 \\
    2 & 2 \\
    2 & 0 \\
  \end{pmatrix}$$
  We can then apply our distance measure to work out the distances.
  $$\mathbf{D(x, (0, 1))} =
  \begin{pmatrix}
    \sqrt{(3^2 + 2^2)} \\
    \sqrt{(1^2 + {(-1)}^2)} \\
    \sqrt{(1^2 + 1^2)} \\
    \sqrt{(2^2 + 2^2)} \\
    \sqrt{(2^2 + 0^2)} \\
  \end{pmatrix}
  =
  \begin{pmatrix}
    3.6 \\
    1.4 \\
    1.4 \\
    2.8 \\
    2 \\
  \end{pmatrix}$$
  The 2nd, 3rd and 5th entries are the closest to the test point,
  looking this up in our training data vector $\mathbf{x}$ we see they
  correspond to the following points, $(1, 0)$, $(1, 2)$ and $(2, 1)$,
  which each have the classes $\oplus$, $\ominus$, $\oplus$ respectively.
  We take the majority class as the prediction for our test point, $\oplus$.
hint: |
  First plot the data then see whether you can visually identify the
  points that are closest.
comments: |
  <p>
  Tests the student's knowledge of training and using a KNN model.
  </p>
  <p>
  Since the student has to both train and test using classifier, a
  fair amount of calculation, this question scores a 3 in difficulty.
  </p>
  <p>
  Author: Will Price
  </p>
```

### Gitbook quiz format

https://github.com/GitbookIO/plugin-quizzes

```
---

Here's a quiz about Gitbook

|                  | Good | Bad |
| ---------------- | ---- | --- |
| What is Gitbook? | (x)  | ( ) |

> Gitbook is good

What does Gitbook support?
- [x] Table-based questions with radio buttons
- [x] Table-based questions with checkboxes
- [ ] Telepathy
- [x] List-based questions with checkboxes
- [x] List-based questions with radio buttons
- [ ] Moon-on-a-stick

> Gitbook supports table and list based quiz questions using either radio buttons or checkboxes.
>
> Gitbook is not telepathic and does not give you the moon on a stick.

---
```

### QTI

Mother of all question exchange formats ...

http://www.imsglobal.org/question/index.html

Covers much more than questions and answers!! Pretty complex!

**[Format](https://www.ibm.com/developerworks/library/x-qti/index.html#list2):**

```
<itemBody>
   <choiceInteraction responseIdentifier="RESPONSE" shuffle="true" maxChoices="1">
      <prompt>What is the top color of the Dutch flag?</prompt>
      <simpleChoice identifier="A">Red</simpleChoice>
      <simpleChoice >="B">Orange</simpleChoice>
      <simpleChoice identifier="C">Black</simpleChoice>
      <simpleChoice identifier="D">White</simpleChoice>
   </choiceInteraction>
</itemBody>
```

### GIFT

https://en.wikipedia.org/wiki/GIFT_(file_format)

https://www.lmspulse.com/2019/gift-format-moodle-quiz-scripting/

https://github.com/moodle/moodle/blob/master/question/format/gift/examples.txt

```
//Comment line
::Question title
:: Question {
     =A correct answer
     ~Wrong answer1
     #A response to wrong answer1
     ~Wrong answer2
     #A response to wrong answer2
     ~Wrong answer3
     #A response to wrong answer3
     ~Wrong answer4
     #A response to wrong answer4
}
```

### Aiken

https://docs.moodle.org/37/en/Aiken_format

The Aiken format lets you create multiple-choice or true-false questions using a simple, human-readable format that you can save as a plain text file and import into a Moodle course.

Write Questions in the Aiken Format

* Write your questions in a word-processing application (e.g., MS Word) or a text editor such as Notepad (Windows) or Text Edit (Mac OS X), and format as follows:
* The question must be all on one line.
* Each answer must start with a single uppercase letter, followed by a period "." or a right parenthesis ")", then a space.
* The answer line must immediately follow, starting with "ANSWER: " (with a space after the colon) and then give the letter for the correct answer.
* Note: The word "ANSWER" and the answer letters (A,B,C etc.) must be capitalized as shown, otherwise the import will fail.
* Use Save As and save your questions as a .txt (plain text) file in UTF-8 format.

Example:

```
The Loch Ness Monster is a type of?
A. Homonid
B. Lizard
C. Ape
D. Plesiosauria
ANSWER: D

The Coelacanth was considered a cryptid until 1938.
A) True
B) False
ANSWER: A
```

### WebCT

https://docs.moodle.org/37/en/Import_questions#WebCT_format

```
# Start of question: Short Answer Question
:TYPE:S:
:TITLE:Short Answer Question
:QUESTION:H
What is the name of the WebCT Learning Hub?
<br />
:IMAGE:dotcomLogoc.gif
:ANSWERS:1
:CASE:0
:ANSWER1:WebCT.com:100:0:20:0
:FEEDBACK1:H
Be sure to visit the Learning Hub\: www.WebCT.com
:CAT:Default
# End of question: Short Answer Question



# Start of question: Multiple Choice Question
:TYPE:MC:1:0:C
:TITLE:Multiple Choice Question
:FEEDBACK
Darwin invented the theory of evolution and created Darwinism.
:QUESTION:H
Where is the Darwin Research Center?
:IMAGE:
:LAYOUT:vertical
:ANSWER1:0:H
Menlo Park, California
:REASON1:H
Sorry!
:ANSWER2:0:H
Vancouver, Canada
:REASON2:H
Sorry!
:ANSWER3:100:H
Galapagos Islands, Ecuador
:REASON3:H
Correct Answer!
:ANSWER4:0:H
London, England
:REASON4:H
Sorry!
:ANSWER5:0:H
Sidney, Australia
:REASON5:H
Sorry!
:CAT:Default
# End of question: Multiple Choice Question
```
