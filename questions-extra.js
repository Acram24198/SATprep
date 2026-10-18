// 48 additional original SAT-style questions; loaded after questions.js.
QUESTIONS.push(...[
  {
    "id": "q025",
    "subject": "math",
    "category": "algebra",
    "difficulty": "easy",
    "question": "If 5x − 9 = 31, what is x?",
    "choices": [
      "6",
      "8",
      "10",
      "11"
    ],
    "answer": 1,
    "explanation": "Add 9 to both sides to obtain 5x = 40; dividing by 5 gives x = 8."
  },
  {
    "id": "q026",
    "subject": "math",
    "category": "algebra",
    "difficulty": "medium",
    "question": "A gym charges $18 per month plus $6 per class. If the bill is $60, how many classes were attended?",
    "choices": [
      "6",
      "7",
      "8",
      "10"
    ],
    "answer": 1,
    "explanation": "Subtract the $18 membership fee: 60 − 18 = 42. Divide by $6 per class to get 7 classes."
  },
  {
    "id": "q027",
    "subject": "math",
    "category": "algebra",
    "difficulty": "hard",
    "question": "For which value of a does the system 3x + 2y = 8 and 6x + ay = 17 have no solution?",
    "choices": [
      "2",
      "4",
      "6",
      "8"
    ],
    "answer": 1,
    "explanation": "Parallel distinct lines have proportional x and y coefficients but different constants. Doubling the first equation gives 6x + 4y = 16; therefore a = 4 yields no solution."
  },
  {
    "id": "q028",
    "subject": "math",
    "category": "algebra",
    "difficulty": "easy",
    "question": "The line y = 4x − 7 has what slope?",
    "choices": [
      "−7",
      "−4",
      "4",
      "7"
    ],
    "answer": 2,
    "explanation": "In slope-intercept form y = mx + b, the coefficient m is the slope. Here m = 4."
  },
  {
    "id": "q029",
    "subject": "math",
    "category": "algebra",
    "difficulty": "medium",
    "question": "A line passes through (2, 5) and (6, 17). What is its slope?",
    "choices": [
      "2",
      "3",
      "4",
      "6"
    ],
    "answer": 1,
    "explanation": "Slope is the change in y divided by the change in x: (17 − 5)/(6 − 2) = 12/4 = 3."
  },
  {
    "id": "q030",
    "subject": "math",
    "category": "algebra",
    "difficulty": "hard",
    "question": "If 2(x − 3) + 5 = 3x − 9, what is x?",
    "choices": [
      "6",
      "8",
      "10",
      "12"
    ],
    "answer": 1,
    "explanation": "Expand to 2x − 1 = 3x − 9. Subtract 2x and add 9 to find x = 8."
  },
  {
    "id": "q031",
    "subject": "math",
    "category": "advanced",
    "difficulty": "easy",
    "question": "What is the value of 2³ + 3²?",
    "choices": [
      "13",
      "15",
      "17",
      "25"
    ],
    "answer": 2,
    "explanation": "Compute the powers first: 2³ = 8 and 3² = 9. Their sum is 17."
  },
  {
    "id": "q032",
    "subject": "math",
    "category": "advanced",
    "difficulty": "medium",
    "question": "What is the larger root of x² − 9x + 20 = 0?",
    "choices": [
      "4",
      "5",
      "9",
      "20"
    ],
    "answer": 1,
    "explanation": "Factor as (x − 4)(x − 5) = 0. The roots are 4 and 5, so the larger is 5."
  },
  {
    "id": "q033",
    "subject": "math",
    "category": "advanced",
    "difficulty": "hard",
    "question": "If f(x) = x² − 4x + 1, what is the minimum value of f(x)?",
    "choices": [
      "−4",
      "−3",
      "0",
      "1"
    ],
    "answer": 1,
    "explanation": "Complete the square: f(x) = (x − 2)² − 3. A square is at least zero, so the minimum is −3."
  },
  {
    "id": "q034",
    "subject": "math",
    "category": "advanced",
    "difficulty": "easy",
    "question": "Simplify (x³)(x²).",
    "choices": [
      "x⁵",
      "x⁶",
      "2x⁵",
      "x"
    ],
    "answer": 0,
    "explanation": "When multiplying powers with the same base, add exponents: x³ · x² = x⁵."
  },
  {
    "id": "q035",
    "subject": "math",
    "category": "advanced",
    "difficulty": "medium",
    "question": "If 3^(x+1) = 81, what is x?",
    "choices": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 1,
    "explanation": "Since 81 = 3⁴, x + 1 = 4, so x = 3."
  },
  {
    "id": "q036",
    "subject": "math",
    "category": "advanced",
    "difficulty": "hard",
    "question": "The polynomial x² + bx + 16 has exactly one real zero. If b is positive, what is b?",
    "choices": [
      "4",
      "6",
      "8",
      "16"
    ],
    "answer": 2,
    "explanation": "Exactly one real zero means discriminant b² − 4(1)(16) = 0. Thus b² = 64 and positive b = 8."
  },
  {
    "id": "q037",
    "subject": "math",
    "category": "data",
    "difficulty": "easy",
    "question": "Five quiz scores are 6, 8, 10, 8, and 8. What is their mean?",
    "choices": [
      "7",
      "8",
      "9",
      "10"
    ],
    "answer": 1,
    "explanation": "Add the scores: 6 + 8 + 10 + 8 + 8 = 40. Divide by five to get 8."
  },
  {
    "id": "q038",
    "subject": "math",
    "category": "data",
    "difficulty": "medium",
    "question": "A price rises from $50 to $65. What is the percent increase?",
    "choices": [
      "15%",
      "23%",
      "30%",
      "65%"
    ],
    "answer": 2,
    "explanation": "The increase is $15. Divide by the original $50: 15/50 = 0.30 = 30%."
  },
  {
    "id": "q039",
    "subject": "math",
    "category": "data",
    "difficulty": "hard",
    "question": "Five numbers have a mean of 12. A sixth number, 24, is added. What is the new mean?",
    "choices": [
      "12",
      "13",
      "14",
      "16"
    ],
    "answer": 2,
    "explanation": "The original sum is 5 × 12 = 60. Adding 24 gives 84, and 84/6 = 14."
  },
  {
    "id": "q040",
    "subject": "math",
    "category": "data",
    "difficulty": "easy",
    "question": "A box has 3 yellow and 7 purple balls. What is the probability of choosing yellow?",
    "choices": [
      "3/10",
      "3/7",
      "7/10",
      "1/3"
    ],
    "answer": 0,
    "explanation": "There are 10 balls in total, 3 of them yellow. The probability is 3/10."
  },
  {
    "id": "q041",
    "subject": "math",
    "category": "data",
    "difficulty": "medium",
    "question": "The values 4, 6, 8, 10, and 22 have what median?",
    "choices": [
      "6",
      "8",
      "10",
      "22"
    ],
    "answer": 1,
    "explanation": "The data are already ordered. With five values, the middle (third) value is 8."
  },
  {
    "id": "q042",
    "subject": "math",
    "category": "data",
    "difficulty": "hard",
    "question": "A survey randomly samples 200 of a town’s 4,000 residents; 58% support a proposal. About how many residents would be predicted to support it?",
    "choices": [
      "232",
      "580",
      "2,320",
      "3,420"
    ],
    "answer": 2,
    "explanation": "Apply the sample proportion to the population: 0.58 × 4,000 = 2,320. This is an estimate, not an exact count."
  },
  {
    "id": "q043",
    "subject": "math",
    "category": "geometry",
    "difficulty": "easy",
    "question": "A triangle has angles 45° and 65°. What is the third angle?",
    "choices": [
      "60°",
      "70°",
      "80°",
      "90°"
    ],
    "answer": 1,
    "explanation": "Angles in a triangle total 180°. Subtract 45° and 65° to get 70°."
  },
  {
    "id": "q044",
    "subject": "math",
    "category": "geometry",
    "difficulty": "medium",
    "question": "A circle has radius 4. What is its circumference?",
    "choices": [
      "4π",
      "8π",
      "16π",
      "32π"
    ],
    "answer": 1,
    "explanation": "Circumference equals 2πr. With radius 4, C = 2π(4) = 8π."
  },
  {
    "id": "q045",
    "subject": "math",
    "category": "geometry",
    "difficulty": "hard",
    "question": "Two similar triangles have corresponding sides of 3 and 9. If the smaller triangle has area 12, what is the larger area?",
    "choices": [
      "36",
      "72",
      "108",
      "324"
    ],
    "answer": 2,
    "explanation": "The linear scale factor is 9/3 = 3. Areas scale by the square of that factor: 12 × 3² = 108."
  },
  {
    "id": "q046",
    "subject": "math",
    "category": "geometry",
    "difficulty": "easy",
    "question": "What is the area of a triangle with base 10 and height 6?",
    "choices": [
      "16",
      "30",
      "60",
      "120"
    ],
    "answer": 1,
    "explanation": "Triangle area is (1/2)bh = (1/2)(10)(6) = 30."
  },
  {
    "id": "q047",
    "subject": "math",
    "category": "geometry",
    "difficulty": "medium",
    "question": "In a right triangle, an angle has opposite side 5 and hypotenuse 13. What is its sine?",
    "choices": [
      "5/12",
      "5/13",
      "12/13",
      "13/5"
    ],
    "answer": 1,
    "explanation": "Sine equals opposite divided by hypotenuse, giving 5/13."
  },
  {
    "id": "q048",
    "subject": "math",
    "category": "geometry",
    "difficulty": "hard",
    "question": "A square is inscribed in a circle so that its diagonal is the circle’s diameter, 10. What is the square’s area?",
    "choices": [
      "25",
      "50",
      "75",
      "100"
    ],
    "answer": 1,
    "explanation": "For a square, diagonal² = 2(side²). Thus area = side² = 10²/2 = 50."
  },
  {
    "id": "q049",
    "subject": "english",
    "category": "ideas",
    "difficulty": "easy",
    "question": "A library extended its Saturday hours. Visits on Saturdays increased during the following month. Which statement best summarizes the information?",
    "choices": [
      "The library closed on weekdays.",
      "Longer Saturday hours coincided with more Saturday visits.",
      "All visitors borrowed books.",
      "The library reduced its collection."
    ],
    "answer": 1,
    "explanation": "The passage reports an increase in visits after extended hours; it does not establish the other claims."
  },
  {
    "id": "q050",
    "subject": "english",
    "category": "ideas",
    "difficulty": "medium",
    "question": "Scientists counted butterflies in two meadows. Meadow A had 14 species and Meadow B had 9. Both meadows were surveyed for the same amount of time. Which finding is supported?",
    "choices": [
      "Meadow A had greater observed species richness.",
      "Every butterfly preferred Meadow A.",
      "Meadow B had no flowers.",
      "The survey proves Meadow A is larger."
    ],
    "answer": 0,
    "explanation": "Species richness is the number of different species observed. Fourteen is greater than nine; the other conclusions are unsupported."
  },
  {
    "id": "q051",
    "subject": "english",
    "category": "ideas",
    "difficulty": "hard",
    "question": "A researcher claims a newly installed shade canopy reduced midday pavement temperatures. Which evidence would best support the claim?",
    "choices": [
      "A photograph of the canopy",
      "Temperature measurements before and after installation at the shaded site and a comparable unshaded site",
      "The canopy manufacturer’s brochure",
      "A survey of favorite park colors"
    ],
    "answer": 1,
    "explanation": "Comparative temperature measurements help isolate the effect of shade from changes in weather."
  },
  {
    "id": "q052",
    "subject": "english",
    "category": "ideas",
    "difficulty": "easy",
    "question": "A community garden donated 300 pounds of produce to a food pantry in June. Which detail is explicitly stated?",
    "choices": [
      "The garden donated produce in June.",
      "The garden was founded in June.",
      "All produce was tomatoes.",
      "The pantry paid for the produce."
    ],
    "answer": 0,
    "explanation": "The passage directly states that produce was donated in June; the remaining details are not given."
  },
  {
    "id": "q053",
    "subject": "english",
    "category": "ideas",
    "difficulty": "medium",
    "question": "A museum recorded 1,200 visits in April and 1,500 in May. Which inference is best supported?",
    "choices": [
      "Admission prices fell.",
      "The museum had 300 more visits in May.",
      "Every visitor came twice.",
      "May had fewer visitors."
    ],
    "answer": 1,
    "explanation": "Subtract April visits from May visits: 1,500 − 1,200 = 300. Nothing establishes prices or unique visitors."
  },
  {
    "id": "q054",
    "subject": "english",
    "category": "ideas",
    "difficulty": "hard",
    "question": "An ecologist argues that removing invasive plants can help native seedlings recover. Which observation most directly strengthens the argument?",
    "choices": [
      "Native seedlings grew more densely in plots where invasive plants were removed than in otherwise similar untreated plots.",
      "Some invasive plants have colorful flowers.",
      "The site receives rain each spring.",
      "The ecologist used a notebook."
    ],
    "answer": 0,
    "explanation": "A comparison with similar untreated plots links removal of invasive plants to increased native seedling growth."
  },
  {
    "id": "q055",
    "subject": "english",
    "category": "craft",
    "difficulty": "easy",
    "question": "The speaker’s tone was optimistic: she expected the project to succeed despite setbacks. In context, “optimistic” most nearly means:",
    "choices": [
      "Hopeful",
      "Angry",
      "Confused",
      "Indifferent"
    ],
    "answer": 0,
    "explanation": "Expecting success despite setbacks indicates a hopeful outlook."
  },
  {
    "id": "q056",
    "subject": "english",
    "category": "craft",
    "difficulty": "medium",
    "question": "The scientist sought to corroborate the initial results by repeating the experiment. “Corroborate” most nearly means:",
    "choices": [
      "Disprove",
      "Confirm",
      "Ignore",
      "Simplify"
    ],
    "answer": 1,
    "explanation": "Repeating an experiment can provide independent support, or confirmation, for its initial results."
  },
  {
    "id": "q057",
    "subject": "english",
    "category": "craft",
    "difficulty": "hard",
    "question": "Text 1 argues that digital maps make navigation more accessible. Text 2 warns that overreliance on digital maps can weaken spatial memory. How does Text 2 relate to Text 1?",
    "choices": [
      "It rejects the existence of maps.",
      "It provides a qualification to a stated benefit.",
      "It discusses only paper production.",
      "It confirms that navigation is impossible."
    ],
    "answer": 1,
    "explanation": "Text 2 acknowledges a potential drawback without denying the accessibility benefit described in Text 1."
  },
  {
    "id": "q058",
    "subject": "english",
    "category": "craft",
    "difficulty": "easy",
    "question": "The author describes the old clock as “steadfast,” noting that it kept accurate time for decades. The word most nearly means:",
    "choices": [
      "Reliable",
      "Expensive",
      "Decorative",
      "Silent"
    ],
    "answer": 0,
    "explanation": "Keeping accurate time over many years makes the clock dependable, or reliable."
  },
  {
    "id": "q059",
    "subject": "english",
    "category": "craft",
    "difficulty": "medium",
    "question": "A passage begins with a common belief about urban trees, then presents research that challenges it. What is the function of the opening belief?",
    "choices": [
      "To introduce an idea the evidence will question",
      "To prove the research is false",
      "To list experimental materials",
      "To describe the author’s childhood"
    ],
    "answer": 0,
    "explanation": "The opening establishes a familiar claim so the subsequent evidence can challenge it."
  },
  {
    "id": "q060",
    "subject": "english",
    "category": "craft",
    "difficulty": "hard",
    "question": "Text 1: Small neighborhood parks offer residents convenient access to green space. Text 2: Large regional parks support wildlife requiring extensive habitat. Which statement captures a difference in emphasis?",
    "choices": [
      "Text 1 stresses convenience; Text 2 stresses habitat size.",
      "Both texts oppose public parks.",
      "Text 1 discusses oceans; Text 2 discusses deserts.",
      "Both texts focus exclusively on admission fees."
    ],
    "answer": 0,
    "explanation": "Text 1 emphasizes residents’ proximity, while Text 2 emphasizes ecological benefits of large contiguous areas."
  },
  {
    "id": "q061",
    "subject": "english",
    "category": "expression",
    "difficulty": "easy",
    "question": "The train was delayed by heavy snow. _____, passengers arrived later than planned.",
    "choices": [
      "However",
      "As a result",
      "For example",
      "Likewise"
    ],
    "answer": 1,
    "explanation": "The late arrival follows from the delay, so “As a result” expresses cause and effect."
  },
  {
    "id": "q062",
    "subject": "english",
    "category": "expression",
    "difficulty": "medium",
    "question": "Solar panels produce electricity from sunlight. _____, wind turbines use moving air to generate power.",
    "choices": [
      "Similarly",
      "Instead",
      "Nevertheless",
      "Consequently"
    ],
    "answer": 0,
    "explanation": "Both sentences describe renewable energy technologies, so “Similarly” signals a parallel."
  },
  {
    "id": "q063",
    "subject": "english",
    "category": "expression",
    "difficulty": "hard",
    "question": "Notes: • Architect Maya Chen designed a public library. • It opened in 2024. • The building uses skylights to reduce daytime artificial lighting. The student wants to emphasize an environmental design feature. Which sentence is best?",
    "choices": [
      "Maya Chen designed a building that opened in 2024.",
      "The public library opened recently.",
      "Chen’s library uses skylights to reduce the need for artificial lighting during the day.",
      "Many architects design libraries."
    ],
    "answer": 2,
    "explanation": "This sentence directly highlights the skylights and their energy-related function."
  },
  {
    "id": "q064",
    "subject": "english",
    "category": "expression",
    "difficulty": "easy",
    "question": "The first trial produced inconsistent results. _____, the researchers repeated the procedure.",
    "choices": [
      "Therefore",
      "For instance",
      "In contrast",
      "Meanwhile"
    ],
    "answer": 0,
    "explanation": "Repeating the procedure is a response to inconsistent results, making “Therefore” appropriate."
  },
  {
    "id": "q065",
    "subject": "english",
    "category": "expression",
    "difficulty": "medium",
    "question": "The original painting is displayed indoors. _____, a weather-resistant replica stands in the courtyard.",
    "choices": [
      "In addition",
      "As a result",
      "For example",
      "Previously"
    ],
    "answer": 0,
    "explanation": "The second sentence adds a related fact rather than showing cause, contrast, or an example."
  },
  {
    "id": "q066",
    "subject": "english",
    "category": "expression",
    "difficulty": "hard",
    "question": "Notes: • Botanist Amir Patel examined 30 trees. • Trees near roads had more leaf dust than trees in parks. • The student wants to emphasize the comparison. Which choice is best?",
    "choices": [
      "Amir Patel is a botanist.",
      "Patel examined trees in two settings.",
      "In a study of 30 trees, Patel found more leaf dust on roadside trees than on park trees.",
      "Some trees grow near roads."
    ],
    "answer": 2,
    "explanation": "This sentence states both the sample size and the comparison the student wants to emphasize."
  },
  {
    "id": "q067",
    "subject": "english",
    "category": "conventions",
    "difficulty": "easy",
    "question": "The group of volunteers _____ meeting at noon.",
    "choices": [
      "are",
      "is",
      "were",
      "have"
    ],
    "answer": 1,
    "explanation": "The grammatical subject “group” is singular, so “is” agrees with it."
  },
  {
    "id": "q068",
    "subject": "english",
    "category": "conventions",
    "difficulty": "medium",
    "question": "The telescope was repaired _____ the team resumed observations.",
    "choices": [
      "; ",
      ",",
      " and",
      " :"
    ],
    "answer": 0,
    "explanation": "Two independent clauses can be correctly joined by a semicolon without a conjunction."
  },
  {
    "id": "q069",
    "subject": "english",
    "category": "conventions",
    "difficulty": "hard",
    "question": "The researcher, along with two assistants, _____ the results each Friday.",
    "choices": [
      "review",
      "reviews",
      "have reviewed",
      "were reviewing"
    ],
    "answer": 1,
    "explanation": "The subject “researcher” is singular; the phrase “along with two assistants” does not change agreement. “Reviews” is correct."
  },
  {
    "id": "q070",
    "subject": "english",
    "category": "conventions",
    "difficulty": "easy",
    "question": "Each of the notebooks _____ a numbered label.",
    "choices": [
      "have",
      "has",
      "were",
      "are"
    ],
    "answer": 1,
    "explanation": "“Each” is singular, so it takes the singular verb “has.”"
  },
  {
    "id": "q071",
    "subject": "english",
    "category": "conventions",
    "difficulty": "medium",
    "question": "The sculpture, which was installed last year, _____ a popular landmark.",
    "choices": [
      "have become",
      "has become",
      "becoming",
      "become"
    ],
    "answer": 1,
    "explanation": "The singular subject “sculpture” requires “has become”; the intervening relative clause does not affect agreement."
  },
  {
    "id": "q072",
    "subject": "english",
    "category": "conventions",
    "difficulty": "hard",
    "question": "The two musicians shared a studio. Their _____ equipment occupied most of the room.",
    "choices": [
      "musician’s",
      "musicians’",
      "musicians",
      "musicians’s"
    ],
    "answer": 1,
    "explanation": "Equipment belongs jointly to two musicians. The plural possessive of “musicians” is “musicians’.”"
  }
]);
