// Original practice questions. answer is a zero-based choice index.
const QUESTIONS = [
  {
    "id": "q001",
    "subject": "math",
    "category": "algebra",
    "difficulty": "easy",
    "question": "If 3x + 7 = 22, what is x?",
    "choices": [
      "3",
      "5",
      "7",
      "9"
    ],
    "answer": 1,
    "explanation": "Subtract 7: 3x = 15. Divide by 3: x = 5."
  },
  {
    "id": "q002",
    "subject": "math",
    "category": "algebra",
    "difficulty": "medium",
    "question": "A taxi charges a $4 starting fee plus $2.50 per mile. A ride costs $24 before tip. How many miles was the ride?",
    "choices": [
      "6",
      "8",
      "9.6",
      "10"
    ],
    "answer": 1,
    "explanation": "Let m be the miles. 4 + 2.50m = 24, so 2.50m = 20 and m = 8."
  },
  {
    "id": "q003",
    "subject": "math",
    "category": "algebra",
    "difficulty": "hard",
    "question": "The system 2x + 3y = 12 and 4x + ky = 24 has infinitely many solutions. What is k?",
    "choices": [
      "3",
      "4",
      "6",
      "12"
    ],
    "answer": 2,
    "explanation": "For infinitely many solutions, the equations must describe the same line. Doubling the first gives 4x + 6y = 24, so k = 6."
  },
  {
    "id": "q004",
    "subject": "math",
    "category": "advanced",
    "difficulty": "easy",
    "question": "What is the positive solution of x² = 49?",
    "choices": [
      "6",
      "7",
      "14",
      "24.5"
    ],
    "answer": 1,
    "explanation": "The square roots of 49 are 7 and −7. The positive solution is 7."
  },
  {
    "id": "q005",
    "subject": "math",
    "category": "advanced",
    "difficulty": "medium",
    "question": "Which expression is equivalent to x² − 5x + 6?",
    "choices": [
      "(x − 1)(x − 6)",
      "(x + 2)(x + 3)",
      "(x − 2)(x − 3)",
      "(x − 2)(x + 3)"
    ],
    "answer": 2,
    "explanation": "Find two numbers whose product is 6 and whose sum is −5: −2 and −3. Thus x² − 5x + 6 = (x − 2)(x − 3)."
  },
  {
    "id": "q006",
    "subject": "math",
    "category": "advanced",
    "difficulty": "hard",
    "question": "For f(x) = (x − 3)² + 5, what is f(3 + t) − f(3 − t)?",
    "choices": [
      "0",
      "2t",
      "4t",
      "2t²"
    ],
    "answer": 0,
    "explanation": "Both function values equal t² + 5 because squaring t and −t gives the same result. Their difference is 0."
  },
  {
    "id": "q007",
    "subject": "math",
    "category": "data",
    "difficulty": "easy",
    "question": "A jacket originally costs $80. Its price is reduced by 25%. What is the new price?",
    "choices": [
      "$20",
      "$55",
      "$60",
      "$75"
    ],
    "answer": 2,
    "explanation": "The discount is 0.25 × 80 = $20. The new price is 80 − 20 = $60."
  },
  {
    "id": "q008",
    "subject": "math",
    "category": "data",
    "difficulty": "medium",
    "question": "A bag contains 4 red, 3 blue, and 5 green marbles. One marble is selected at random. What is the probability it is NOT green?",
    "choices": [
      "5/12",
      "7/12",
      "7/5",
      "1/3"
    ],
    "answer": 1,
    "explanation": "There are 12 marbles in total and 4 + 3 = 7 that are not green. The probability is 7/12."
  },
  {
    "id": "q009",
    "subject": "math",
    "category": "data",
    "difficulty": "hard",
    "question": "A population increases by 20% and then decreases by 20%. Relative to the original population, what is the net change?",
    "choices": [
      "No change",
      "4% decrease",
      "4% increase",
      "8% decrease"
    ],
    "answer": 1,
    "explanation": "Use an original population of 100. After the increase it is 120. After the decrease it is 120 × 0.8 = 96, which is 4% below 100."
  },
  {
    "id": "q010",
    "subject": "math",
    "category": "geometry",
    "difficulty": "easy",
    "question": "A rectangle is 8 units long and 5 units wide. What is its area?",
    "choices": [
      "13",
      "26",
      "40",
      "80"
    ],
    "answer": 2,
    "explanation": "The area of a rectangle is length × width: 8 × 5 = 40 square units."
  },
  {
    "id": "q011",
    "subject": "math",
    "category": "geometry",
    "difficulty": "medium",
    "question": "A right triangle has legs of length 6 and 8. What is the length of its hypotenuse?",
    "choices": [
      "7",
      "10",
      "12",
      "14"
    ],
    "answer": 1,
    "explanation": "By the Pythagorean theorem, c² = 6² + 8² = 100, so c = 10."
  },
  {
    "id": "q012",
    "subject": "math",
    "category": "geometry",
    "difficulty": "hard",
    "question": "A circle has circumference 12π. What is its area?",
    "choices": [
      "12π",
      "24π",
      "36π",
      "144π"
    ],
    "answer": 2,
    "explanation": "C = 2πr, so 12π = 2πr and r = 6. Its area is πr² = 36π."
  },
  {
    "id": "q013",
    "subject": "english",
    "category": "ideas",
    "difficulty": "easy",
    "question": "A school replaced some paved areas with gardens. Teachers observed that students began spending more break time outdoors. The school plans to add more gardens next year.\n\nWhich choice best states the main idea?",
    "choices": [
      "Students dislike all paved areas.",
      "The gardens encouraged outdoor activity, leading the school to plan more.",
      "Teachers want to eliminate break time.",
      "The school will replace all classrooms with gardens."
    ],
    "answer": 1,
    "explanation": "The passage connects the new gardens to increased outdoor activity and plans for expansion. The other choices make claims the passage does not support."
  },
  {
    "id": "q014",
    "subject": "english",
    "category": "ideas",
    "difficulty": "medium",
    "question": "Researchers tested seedlings under equal light and water conditions. Seedlings in soil A grew taller on average than those in soil B. However, soil A also contained more nitrogen.\n\nWhich conclusion is best supported?",
    "choices": [
      "Light caused the difference.",
      "Soil B prevents all plant growth.",
      "Nitrogen may have contributed to the difference.",
      "Every seedling in soil A was taller than every seedling in soil B."
    ],
    "answer": 2,
    "explanation": "Nitrogen differed between the soils and may explain the growth difference. Average height does not establish that every individual plant followed the same pattern."
  },
  {
    "id": "q015",
    "subject": "english",
    "category": "ideas",
    "difficulty": "hard",
    "question": "A historian argues that a town’s early economy depended heavily on river transportation.\n\nWhich finding would most directly support the argument?",
    "choices": [
      "Most surviving tax records list income from river shipping as the town’s largest revenue source.",
      "The town has a modern railway station.",
      "Several residents today enjoy fishing.",
      "The town’s oldest building was painted blue."
    ],
    "answer": 0,
    "explanation": "Early tax records showing shipping as the largest revenue source directly connect river transportation with the town’s historical economy."
  },
  {
    "id": "q016",
    "subject": "english",
    "category": "craft",
    "difficulty": "easy",
    "question": "The editor called the draft “concise” because it explained the issue in just a few clear sentences.\n\nAs used here, “concise” most nearly means:",
    "choices": [
      "Brief",
      "Uncertain",
      "Humorous",
      "Incomplete"
    ],
    "answer": 0,
    "explanation": "The reference to a few clear sentences shows that concise means brief and clearly expressed."
  },
  {
    "id": "q017",
    "subject": "english",
    "category": "craft",
    "difficulty": "medium",
    "question": "The engineer’s explanation was accessible: even audience members without technical training could follow it.\n\nAs used here, “accessible” most nearly means:",
    "choices": [
      "Easy to understand",
      "Located nearby",
      "Available for purchase",
      "Physically unlocked"
    ],
    "answer": 0,
    "explanation": "The audience could understand the explanation without specialized training, so accessible means easy to understand in this context."
  },
  {
    "id": "q018",
    "subject": "english",
    "category": "craft",
    "difficulty": "hard",
    "question": "Text 1: Digital archives allow readers to study rare letters without traveling, expanding access to historical sources.\nText 2: Digital copies are useful, but they may conceal paper texture and other physical details important to interpretation.\n\nHow would the author of Text 2 most likely respond to Text 1?",
    "choices": [
      "By denying that digital archives exist",
      "By agreeing that access improves while emphasizing a limitation",
      "By claiming that travel is always impossible",
      "By arguing that rare letters have no research value"
    ],
    "answer": 1,
    "explanation": "Text 2 acknowledges that digital copies are useful but adds that physical evidence may be missing. This qualifies the benefit described in Text 1."
  },
  {
    "id": "q019",
    "subject": "english",
    "category": "expression",
    "difficulty": "easy",
    "question": "The trail was closed because of heavy rain. _____, the hikers chose an indoor activity.\n\nWhich transition best completes the text?",
    "choices": [
      "Nevertheless",
      "Consequently",
      "Similarly",
      "For example"
    ],
    "answer": 1,
    "explanation": "The indoor activity is a result of the trail closure. Consequently expresses this cause-and-effect relationship."
  },
  {
    "id": "q020",
    "subject": "english",
    "category": "expression",
    "difficulty": "medium",
    "question": "Some birds migrate thousands of miles each year. _____, other species remain in the same region year-round.\n\nWhich transition best completes the text?",
    "choices": [
      "In contrast",
      "Therefore",
      "For instance",
      "Additionally"
    ],
    "answer": 0,
    "explanation": "Remaining in one region contrasts with traveling thousands of miles. In contrast makes that relationship explicit."
  },
  {
    "id": "q021",
    "subject": "english",
    "category": "expression",
    "difficulty": "hard",
    "question": "A student has these notes:\n• Biologist Lena Park studied urban bee populations.\n• The study compared 12 rooftop gardens.\n• Gardens with native flowers supported more bee species than gardens without them.\n\nWhich choice best uses the notes to emphasize the study’s finding?",
    "choices": [
      "Lena Park is a biologist who studied gardens.",
      "Rooftop gardens can be located in cities.",
      "Park’s comparison of 12 rooftop gardens found greater bee diversity in gardens with native flowers.",
      "The study compared several gardens and collected information."
    ],
    "answer": 2,
    "explanation": "This choice accurately states the finding about native flowers and bee diversity while identifying the study. The others omit the result."
  },
  {
    "id": "q022",
    "subject": "english",
    "category": "conventions",
    "difficulty": "easy",
    "question": "The collection of photographs _____ on display in the library.\n\nWhich choice follows Standard English conventions?",
    "choices": [
      "are",
      "is",
      "were",
      "have been"
    ],
    "answer": 1,
    "explanation": "The subject is the singular noun collection, not the plural photographs. It takes the singular verb is."
  },
  {
    "id": "q023",
    "subject": "english",
    "category": "conventions",
    "difficulty": "medium",
    "question": "The experiment was complete _____ the researchers began analyzing the results.\n\nWhich choice completes the text with correct punctuation?",
    "choices": [
      ",",
      ";",
      ": and",
      "no punctuation"
    ],
    "answer": 1,
    "explanation": "Both sides are independent clauses. A semicolon joins them correctly. A comma alone would create a comma splice."
  },
  {
    "id": "q024",
    "subject": "english",
    "category": "conventions",
    "difficulty": "hard",
    "question": "The two students submitted a joint project. Their teacher praised the _____ careful analysis.\n\nWhich choice follows Standard English conventions?",
    "choices": [
      "student’s",
      "students’",
      "students",
      "students’s"
    ],
    "answer": 1,
    "explanation": "The analysis belongs to two students. For a plural noun ending in s, add an apostrophe after the s: students’."
  }
];
