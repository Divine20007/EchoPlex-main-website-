// --- 1. Game Data (The 20 Levels and 30 Questions) ---
// This data structure will be used to populate questions and check answers.
const gameQuestions = [
    {
        level: 1,
        questions: [
            { id: 1, sentence: "How many letters are in the word 'Echoplex'?", answer: 8 },
            { id: 2, sentence: "If you have 3 apples and get 2 more, how many do you have?", answer: 5 },
            { id: 3, sentence: "Count the number of 'A' characters (case-insensitive) in 'Banana Rama Drama'.", answer: 5 },
            { id: 4, sentence: "What is the result of seven plus three, multiplied by two?", answer: 20 },
            { id: 5, sentence: "How many sides does a pentagon have?", answer: 5 },
            { id: 6, sentence: "If a baker made 4 dozen cookies, how many cookies did they make?", answer: 48 },
            { id: 7, sentence: "What is the sum of the digits in 987?", answer: 24 },
            { id: 8, sentence: "In a common deck of cards, how many suits are there?", answer: 4 },
            { id: 9, sentence: "Count the words in this sentence: 'One fish, two fish, red fish, blue fish.'", answer: 8 },
            { id: 10, sentence: "If it's 3 PM and you add 5 hours, what time is it?", answer: 8 }, // 8 PM
            { id: 11, sentence: "How many stripes are on the US flag?", answer: 13 },
            { id: 12, sentence: "What is the total of one hundred minus fifty, then divided by five?", answer: 10 },
            { id: 13, sentence: "The number of letters in the first word of this sentence: 'Unbelievable challenge!'", answer: 12 },
            { id: 14, sentence: "How many legs does a spider have?", answer: 8 },
            { id: 15, sentence: "If you multiply 6 by 7, what is the product?", answer: 42 },
            { id: 16, sentence: "What is the square root of 81?", answer: 9 },
            { id: 17, sentence: "A car has 4 wheels. How many wheels do 7 cars have?", answer: 28 },
            { id: 18, sentence: "Count the occurrences of the letter 'o' in 'Monotonous Octopus'.", answer: 5 },
            { id: 19, sentence: "If a triangle has three sides, how many sides do five triangles have?", answer: 15 },
            { id: 20, sentence: "What number is halfway between 10 and 20?", answer: 15 },
            { id: 21, sentence: "How many days are in a leap year?", answer: 366 },
            { id: 22, sentence: "If you have 10 fingers, how many pairs of fingers do you have?", answer: 5 },
            { id: 23, sentence: "The number of consonants (non-vowels) in the word 'rhythm'.", answer: 5 },
            { id: 24, sentence: "What is 25% of 80?", answer: 20 },
            { id: 25, sentence: "How many months have 28 days?", answer: 12 }, // All of them!
            { id: 26, sentence: "If a decade is 10 years, how many years are in 3 decades?", answer: 30 },
            { id: 27, sentence: "What is the product of the first three prime numbers?", answer: 30 }, // 2 * 3 * 5 = 30
            { id: 28, sentence: "How many letters in the word that is opposite of 'cold'?", answer: 3 }, // Hot
            { id: 29, sentence: "If you have a dozen and a half, how many do you have?", answer: 18 },
            { id: 30, sentence: "The average human body temperature in Celsius is around 37. What about Fahrenheit (closest whole number)?", answer: 99 } // 37 * 9/5 + 32 = 98.6 -> 99
        ]
    },
    {
        level: 2,
        questions: [
            { id: 1, sentence: "How many planets are in our solar system (excluding Pluto)?", answer: 8 },
            { id: 2, sentence: "If a square has 4 sides, how many sides do 3 squares have?", answer: 12 },
            { id: 3, sentence: "What is 150 divided by 3?", answer: 50 },
            { id: 4, sentence: "How many eyes does a cyclops have?", answer: 1 },
            { id: 5, sentence: "If you start with 100 and subtract 7 three times, what is the result?", answer: 79 },
            { id: 6, sentence: "What is the next number in the sequence: 1, 1, 2, 3, 5, 8, __?", answer: 13 },
            { id: 7, sentence: "How many colors are in a rainbow?", answer: 7 },
            { id: 8, sentence: "If a dog has 4 legs, how many legs do 5 dogs have?", answer: 20 },
            { id: 9, sentence: "What is the sum of all single-digit prime numbers?", answer: 17 }, // 2 + 3 + 5 + 7 = 17
            { id: 10, sentence: "How many seconds are in 2 minutes?", answer: 120 },
            { id: 11, sentence: "In a baker's dozen, how many items are there?", answer: 13 },
            { id: 12, sentence: "What is the value of pi, rounded to two decimal places?", answer: 3.14 }, // Consider integer for simplicity or adjust input
            { id: 13, sentence: "How many sides does a hexagon have?", answer: 6 },
            { id: 14, sentence: "If you have 6 eggs and crack 2, how many whole eggs do you have left?", answer: 4 },
            { id: 15, sentence: "What is the number of vowels in the word 'education'?", answer: 5 },
            { id: 16, sentence: "How many hours are in 2 days?", answer: 48 },
            { id: 17, sentence: "If a farmer has 10 sheep and all but 6 die, how many are left?", answer: 6 },
            { id: 18, sentence: "What is 10% of 200?", answer: 20 },
            { id: 19, sentence: "How many lives does a cat supposedly have?", answer: 9 },
            { id: 20, sentence: "What is the largest single-digit number?", answer: 9 },
            { id: 21, sentence: "How many strings does a standard guitar have?", answer: 6 },
            { id: 22, sentence: "What is the sum of the angles in a triangle (in degrees)?", answer: 180 },
            { id: 23, sentence: "How many items are in half a dozen?", answer: 6 },
            { id: 24, sentence: "If you buy a shirt for $25 and pay with a $50 bill, how much change do you get?", answer: 25 },
            { id: 25, sentence: "How many wheels does a unicycle have?", answer: 1 },
            { id: 26, sentence: "What is the smallest two-digit number?", answer: 10 },
            { id: 27, sentence: "How many zeroes are in one million?", answer: 6 },
            { id: 28, sentence: "If you have 2 pairs of shoes, how many individual shoes do you have?", answer: 4 },
            { id: 29, sentence: "What is the cube root of 64?", answer: 4 },
            { id: 30, sentence: "How many letters are in the word 'riddle'?", answer: 6 }
        ]
    },
    // LEVEL 3
    {
        level: 3,
        questions: [
            { id: 1, sentence: "How many points does a standard star symbol usually have?", answer: 5 },
            { id: 2, sentence: "If a marathon is approximately 26 miles, how many is that times two?", answer: 52 },
            { id: 3, sentence: "What is the numerical value of Roman numeral 'X'?", answer: 10 },
            { id: 4, sentence: "How many dwarves were with Snow White?", answer: 7 },
            { id: 5, sentence: "If a clock shows 9 o'clock, how many hours until it shows 5 o'clock (the next day)?", answer: 20 },
            { id: 6, sentence: "What is the product of 11 and 11?", answer: 121 },
            { id: 7, sentence: "How many innings are in a standard baseball game?", answer: 9 },
            { id: 8, sentence: "Count the number of letters in 'supercalifragilisticexpialidocious'.", answer: 34 },
            { id: 9, sentence: "How many sides does an octagon have?", answer: 8 },
            { id: 10, sentence: "What is the square of 7?", answer: 49 },
            { id: 11, sentence: "If there are 4 seasons, how many seasons are in 5 years?", answer: 20 },
            { id: 12, sentence: "What is the smallest number that is a multiple of both 3 and 5?", answer: 15 },
            { id: 13, sentence: "How many primary colors are there?", answer: 3 },
            { id: 14, sentence: "If a baker bakes 5 cakes, and each cake needs 3 eggs, how many eggs are needed?", answer: 15 },
            { id: 15, sentence: "How many degrees are in a right angle?", answer: 90 },
            { id: 16, sentence: "What is the total sum of numbers on a standard dartboard?", answer: 381 },
            { id: 17, sentence: "How many players are on a soccer (football) team on the field?", answer: 11 },
            { id: 18, sentence: "What is 50% of 120?", answer: 60 },
            { id: 19, sentence: "If you subtract 10 from 200, then divide by 2, what is the result?", answer: 95 },
            { id: 20, sentence: "How many months have 31 days?", answer: 7 },
            { id: 21, sentence: "What is the number of continents on Earth?", answer: 7 },
            { id: 22, sentence: "How many items are in a gross (12 dozens)?", answer: 144 },
            { id: 23, sentence: "What is 1/4 of 100?", answer: 25 },
            { id: 24, sentence: "How many straight lines are in a triangle?", answer: 3 },
            { id: 25, sentence: "If a train travels at 60 mph, how far does it travel in 2 hours?", answer: 120 },
            { id: 26, sentence: "What is the smallest positive whole number?", answer: 1 },
            { id: 27, sentence: "How many unique sides does a cube have?", answer: 6 },
            { id: 28, sentence: "If a standard dice has 6 sides, how many dots are on the opposite side of 1?", answer: 6 }, // 1+6=7, 2+5=7, 3+4=7
            { id: 29, sentence: "What is the result of 200 minus 75?", answer: 125 },
            { id: 30, sentence: "How many letters in 'numerical'?", answer: 9 }
        ]
    },
    // LEVEL 4
    {
        level: 4,
        questions: [
            { id: 1, sentence: "How many years are in a century?", answer: 100 },
            { id: 2, sentence: "If you multiply 12 by 5, what's the answer?", answer: 60 },
            { id: 3, sentence: "How many wheels on a bicycle?", answer: 2 },
            { id: 4, sentence: "What is the number of players on a basketball team on the court?", answer: 5 },
            { id: 5, sentence: "How many zeroes are in ten thousand?", answer: 4 },
            { id: 6, sentence: "What is the square root of 100?", answer: 10 },
            { id: 7, sentence: "If a spider has 8 legs, how many legs do 2 spiders have?", answer: 16 },
            { id: 8, sentence: "How many letters are in the word 'mathematics'?", answer: 11 },
            { id: 9, sentence: "What is 75% of 40?", answer: 30 },
            { id: 10, sentence: "How many minutes are in an hour?", answer: 60 },
            { id: 11, sentence: "If a baker made 6 dozen rolls, how many rolls did they make?", answer: 72 },
            { id: 12, sentence: "What is the product of 9 and 8?", answer: 72 },
            { id: 13, sentence: "How many faces does a regular tetrahedron have?", answer: 4 },
            { id: 14, sentence: "If you have 15 marbles and lose 8, how many are left?", answer: 7 },
            { id: 15, sentence: "How many colors in the basic traffic light (excluding flashing yellow)?", answer: 3 },
            { id: 16, sentence: "What is the smallest two-digit odd number?", answer: 11 },
            { id: 17, sentence: "How many sides does a trapezoid have?", answer: 4 },
            { id: 18, sentence: "If a song is 3 minutes long, how many seconds is that?", answer: 180 },
            { id: 19, sentence: "What is the result of 100 divided by 4?", answer: 25 },
            { id: 20, sentence: "How many hours in a week?", answer: 168 },
            { id: 21, sentence: "What is the sum of 15, 20, and 5?", answer: 40 },
            { id: 22, sentence: "How many strings on a cello?", answer: 4 },
            { id: 23, sentence: "What is the next number in the series: 2, 4, 6, 8, __?", answer: 10 },
            { id: 24, sentence: "How many days are in September?", answer: 30 },
            { id: 25, sentence: "If a recipe calls for 2 cups of flour for one batch, how many cups for 3 batches?", answer: 6 },
            { id: 26, sentence: "What is 20% of 150?", answer: 30 },
            { id: 27, sentence: "How many wheels does a tricycle have?", answer: 3 },
            { id: 28, sentence: "What is the largest even single-digit number?", answer: 8 },
            { id: 29, sentence: "If you have 4 groups of 7 students, how many students in total?", answer: 28 },
            { id: 30, sentence: "How many letters in the word 'challenge'?", answer: 9 }
        ]
    },
    // LEVEL 5
    {
        level: 5,
        questions: [
            { id: 1, sentence: "How many fingers do two hands have (excluding thumbs)?", answer: 8 },
            { id: 2, sentence: "What is the cube of 3?", answer: 27 },
            { id: 3, sentence: "How many stars are on the current EU flag?", answer: 12 },
            { id: 4, sentence: "If a decade is 10 years, how many years are in half a decade?", answer: 5 },
            { id: 5, sentence: "What is the smallest prime number?", answer: 2 },
            { id: 6, sentence: "How many players are on a full volleyball team (on court)?", answer: 6 },
            { id: 7, sentence: "If you travel at 50 km/h for 3 hours, how far have you traveled?", answer: 150 },
            { id: 8, sentence: "How many letters are in the word 'adventure'?", answer: 9 },
            { id: 9, sentence: "What is 100 minus 35?", answer: 65 },
            { id: 10, sentence: "How many sides does a rhombus have?", answer: 4 },
            { id: 11, sentence: "What is the square root of 144?", answer: 12 },
            { id: 12, sentence: "How many points is a touchdown worth in American football (before extra point)?", answer: 6 },
            { id: 13, sentence: "If you have 20 candies and eat 12, how many are left?", answer: 8 },
            { id: 14, sentence: "How many states are in the United States?", answer: 50 },
            { id: 15, sentence: "What is the result of 8 multiplied by 9?", answer: 72 },
            { id: 16, sentence: "How many hours in half a day?", answer: 12 },
            { id: 17, sentence: "What is the number of vowels in 'rhythm'?", answer: 0 },
            { id: 18, sentence: "If a pizza is cut into 8 slices, and you eat 3, how many slices are left?", answer: 5 },
            { id: 19, sentence: "How many zeroes are in a billion?", answer: 9 },
            { id: 20, sentence: "What is the smallest three-digit number?", answer: 100 },
            { id: 21, sentence: "How many legs does a centipede approximately have?", answer: 100 }, // Common misconception, it's not actually 100 but often named as such.
            { id: 22, sentence: "What is the sum of 1, 2, 3, 4, and 5?", answer: 15 },
            { id: 23, sentence: "How many days are in a common year?", answer: 365 },
            { id: 24, sentence: "If you have $2.50 and spend $1.25, how much do you have left (in cents)?", answer: 125 },
            { id: 25, sentence: "How many sides on a stop sign?", answer: 8 },
            { id: 26, sentence: "What is the result of 150 divided by 5?", answer: 30 },
            { id: 27, sentence: "How many different numbers can you make with 1, 2, 3, without repeating (e.g., 12, 21, 123)?", answer: 6 }, // 12, 13, 21, 23, 31, 32
            { id: 28, sentence: "What is the sum of the digits in 12345?", answer: 15 },
            { id: 29, sentence: "How many seconds are in 5 minutes?", answer: 300 },
            { id: 30, sentence: "How many letters in 'cryptocurrency'?", answer: 14 }
        ]
    },
    // LEVEL 6
    {
        level: 6,
        questions: [
            { id: 1, sentence: "How many sides does a nonagon have?", answer: 9 },
            { id: 2, sentence: "What is 200 minus 80?", answer: 120 },
            { id: 3, sentence: "How many legs does an insect have?", answer: 6 },
            { id: 4, sentence: "If you add 20 to 50, then multiply by 2, what's the result?", answer: 140 },
            { id: 5, sentence: "How many years are in a millennium?", answer: 1000 },
            { id: 6, sentence: "What is the square of 10?", answer: 100 },
            { id: 7, sentence: "How many colors in a standard traffic light sequence?", answer: 3 },
            { id: 8, sentence: "If a car travels 40 miles in 1 hour, how long to travel 160 miles?", answer: 4 },
            { id: 9, sentence: "What is 25% of 200?", answer: 50 },
            { id: 10, sentence: "How many minutes are in two and a half hours?", answer: 150 },
            { id: 11, sentence: "If you have 7 red balls and 5 blue balls, how many balls total?", answer: 12 },
            { id: 12, sentence: "What is the largest two-digit number?", answer: 99 },
            { id: 13, sentence: "How many sides does a sphere have?", answer: 0 },
            { id: 14, sentence: "If a farmer has 20 chickens and sells 7, how many are left?", answer: 13 },
            { id: 15, sentence: "How many items in a pair?", answer: 2 },
            { id: 16, sentence: "What is the product of 10 and 15?", answer: 150 },
            { id: 17, sentence: "How many strings on a violin?", answer: 4 },
            { id: 18, sentence: "What is the sum of the digits in 54321?", answer: 15 },
            { id: 19, sentence: "How many months are in a quarter of a year?", answer: 3 },
            { id: 20, sentence: "What is the square root of 64?", answer: 8 },
            { id: 21, sentence: "How many players in a game of chess?", answer: 2 },
            { id: 22, sentence: "If you have 100 apples and give away 25, how many remain?", answer: 75 },
            { id: 23, sentence: "How many letters in 'algorithm'?", answer: 9 },
            { id: 24, sentence: "What is the smallest number divisible by both 4 and 6?", answer: 12 },
            { id: 25, sentence: "How many zeros in one trillion?", answer: 12 },
            { id: 26, sentence: "If you doubled 17, what would you get?", answer: 34 },
            { id: 27, sentence: "How many sides on a hexagon?", answer: 6 },
            { id: 28, sentence: "What is the next number: 10, 20, 30, __?", answer: 40 },
            { id: 29, sentence: "How many items are in a baker's dozen?", answer: 13 },
            { id: 30, sentence: "How many letters in 'programming'?", answer: 11 }
        ]
    },
    // LEVEL 7
    {
        level: 7,
        questions: [
            { id: 1, sentence: "How many days in April?", answer: 30 },
            { id: 2, sentence: "What is 10 multiplied by 10?", answer: 100 },
            { id: 3, sentence: "How many arms does a starfish typically have?", answer: 5 },
            { id: 4, sentence: "If a cake requires 2 eggs, how many cakes can you make with a dozen eggs?", answer: 6 },
            { id: 5, sentence: "What is the sum of all even numbers between 1 and 10 (inclusive)?", answer: 30 }, // 2+4+6+8+10
            { id: 6, sentence: "How many sides does a decagon have?", answer: 10 },
            { id: 7, sentence: "If a recipe calls for 1.5 cups of sugar, and you double the recipe, how many cups?", answer: 3 },
            { id: 8, sentence: "How many letters in 'cybersecurity'?", answer: 13 },
            { id: 9, sentence: "What is 30% of 90?", answer: 27 },
            { id: 10, sentence: "How many legs does an octopus have?", answer: 8 },
            { id: 11, sentence: "What is the square root of 121?", answer: 11 },
            { id: 12, sentence: "How many planets are gas giants in our solar system?", answer: 4 }, // Jupiter, Saturn, Uranus, Neptune
            { id: 13, sentence: "If you have 25 coins and give away 10, how many are left?", answer: 15 },
            { id: 14, sentence: "How many wheels does a skateboard have?", answer: 4 },
            { id: 15, sentence: "What is the largest three-digit number?", answer: 999 },
            { id: 16, sentence: "How many states border Canada?", answer: 13 },
            { id: 17, sentence: "What is the product of 7 and 6?", answer: 42 },
            { id: 18, sentence: "How many minutes in half an hour?", answer: 30 },
            { id: 19, sentence: "If a bus has 40 seats and 25 are occupied, how many are empty?", answer: 15 },
            { id: 20, sentence: "How many letters in 'artificial intelligence'?", answer: 22 },
            { id: 21, sentence: "What is the smallest positive even number?", answer: 2 },
            { id: 22, sentence: "How many unique prime factors does 30 have?", answer: 3 }, // 2, 3, 5
            { id: 23, sentence: "If a farmer has 12 cows and sells half, how many cows remain?", answer: 6 },
            { id: 24, sentence: "What is 1/3 of 90?", answer: 30 },
            { id: 25, sentence: "How many colors in the French flag?", answer: 3 },
            { id: 26, sentence: "If you count by fives from 5 to 30, how many numbers do you say?", answer: 6 }, // 5, 10, 15, 20, 25, 30
            { id: 27, sentence: "How many sides on a rhombus?", answer: 4 },
            { id: 28, sentence: "What is the difference between 50 and 23?", answer: 27 },
            { id: 29, sentence: "How many zeroes in ten million?", answer: 7 },
            { id: 30, sentence: "How many letters in 'innovation'?", answer: 10 }
        ]
    },
    // LEVEL 8
    {
        level: 8,
        questions: [
            { id: 1, sentence: "How many days are in a week?", answer: 7 },
            { id: 2, sentence: "What is 15 multiplied by 4?", answer: 60 },
            { id: 3, sentence: "How many wheels on a quad bike?", answer: 4 },
            { id: 4, sentence: "What is the number of colors in a standard Rubik's Cube?", answer: 6 },
            { id: 5, sentence: "How many zeroes are in one hundred thousand?", answer: 5 },
            { id: 6, sentence: "What is the square root of 25?", answer: 5 },
            { id: 7, sentence: "If a cat has 4 legs, how many legs do 6 cats have?", answer: 24 },
            { id: 8, sentence: "How many letters in the word 'developer'?", answer: 9 },
            { id: 9, sentence: "What is 50% of 90?", answer: 45 },
            { id: 10, sentence: "How many seconds are in a minute?", answer: 60 },
            { id: 11, sentence: "If a factory produces 100 toys and 15 are defective, how many are good?", answer: 85 },
            { id: 12, sentence: "What is the largest prime number less than 20?", answer: 19 },
            { id: 13, sentence: "How many faces does a triangular prism have?", answer: 5 },
            { id: 14, sentence: "If you have 30 candies and share 10 with a friend, how many do you have left?", answer: 20 },
            { id: 15, sentence: "How many items in a quintet?", answer: 5 },
            { id: 16, sentence: "What is the product of 12 and 12?", answer: 144 },
            { id: 17, sentence: "How many strings on a standard bass guitar?", answer: 4 },
            { id: 18, sentence: "What is the sum of the digits in 789?", answer: 24 },
            { id: 19, sentence: "How many months in a decade?", answer: 120 },
            { id: 20, sentence: "What is the square of 9?", answer: 81 },
            { id: 21, sentence: "How many players on a hockey team (on ice)?", answer: 6 },
            { id: 22, sentence: "If you have 50 pencils and 18 are broken, how many are usable?", answer: 32 },
            { id: 23, sentence: "How many letters in 'digitalization'?", answer: 14 },
            { id: 24, sentence: "What is the smallest number divisible by both 7 and 2?", answer: 14 },
            { id: 25, sentence: "How many zeros in one thousand?", answer: 3 },
            { id: 26, sentence: "If you double 25, what would you get?", answer: 50 },
            { id: 27, sentence: "How many sides on a quadrilateral?", answer: 4 },
            { id: 28, sentence: "What is the next number: 1, 3, 5, 7, __?", answer: 9 },
            { id: 29, sentence: "How many items are in a duo?", answer: 2 },
            { id: 30, sentence: "How many letters in 'ecosystem'?", answer: 9 }
        ]
    },
    // LEVEL 9
    {
        level: 9,
        questions: [
            { id: 1, sentence: "How many sides does a heptagon have?", answer: 7 },
            { id: 2, sentence: "What is 300 minus 120?", answer: 180 },
            { id: 3, sentence: "How many legs does a crab have?", answer: 10 },
            { id: 4, sentence: "If a bus carries 30 passengers and makes 3 trips, how many passengers transported?", answer: 90 },
            { id: 5, sentence: "How many years in a score?", answer: 20 },
            { id: 6, sentence: "What is the cube of 4?", answer: 64 },
            { id: 7, sentence: "How many different numbers can be represented by a single binary digit (0 or 1)?", answer: 2 },
            { id: 8, sentence: "If a car travels 50 km in 1 hour, how many hours to travel 200 km?", answer: 4 },
            { id: 9, sentence: "What is 20% of 250?", answer: 50 },
            { id: 10, sentence: "How many days are in a leap year?", answer: 366 },
            { id: 11, sentence: "If you have 100 marbles and win 50 more, how many do you have?", answer: 150 },
            { id: 12, sentence: "What is the smallest prime number greater than 10?", answer: 11 },
            { id: 13, sentence: "How many dimensions are generally perceived in space?", answer: 3 },
            { id: 14, sentence: "If a recipe calls for 4 tomatoes for one sauce, how many tomatoes for 4 sauces?", answer: 16 },
            { id: 15, sentence: "How many minutes in a quarter of an hour?", answer: 15 },
            { id: 16, sentence: "What is the product of 13 and 5?", answer: 65 },
            { id: 17, sentence: "How many strings on a ukulele?", answer: 4 },
            { id: 18, sentence: "What is the sum of the digits in 1001?", answer: 2 },
            { id: 19, sentence: "How many months in two years?", answer: 24 },
            { id: 20, sentence: "What is the square root of 169?", answer: 13 },
            { id: 21, sentence: "How many players on a baseball team (on field)?", answer: 9 },
            { id: 22, sentence: "If you have 70 books and donate 30, how many are left?", answer: 40 },
            { id: 23, sentence: "How many letters in 'nanotechnology'?", answer: 14 },
            { id: 24, sentence: "What is the smallest number divisible by both 5 and 10?", answer: 10 },
            { id: 25, sentence: "How many zeroes in one hundred?", answer: 2 },
            { id: 26, sentence: "If you triple 15, what would you get?", answer: 45 },
            { id: 27, sentence: "How many sides on a triangle?", answer: 3 },
            { id: 28, sentence: "What is the next number: 5, 10, 15, __?", answer: 20 },
            { id: 29, sentence: "How many items are in a triplet?", answer: 3 },
            { id: 30, sentence: "How many letters in 'sustainable'?", answer: 11 }
        ]
    },
    // LEVEL 10
    {
        level: 10,
        questions: [
            { id: 1, sentence: "How many sides does an undecagon (hendecagon) have?", answer: 11 },
            { id: 2, sentence: "What is 400 minus 150?", answer: 250 },
            { id: 3, sentence: "How many legs does a bird have?", answer: 2 },
            { id: 4, sentence: "If a class has 25 students and 2 new students join, how many total?", answer: 27 },
            { id: 5, sentence: "How many years in a generation (approximately)?", answer: 25 },
            { id: 6, sentence: "What is the cube of 5?", answer: 125 },
            { id: 7, sentence: "How many colors in the German flag?", answer: 3 },
            { id: 8, sentence: "If a painter uses 2 liters of paint per room, how many liters for 5 rooms?", answer: 10 },
            { id: 9, sentence: "What is 10% of 500?", answer: 50 },
            { id: 10, sentence: "How many seconds in 10 minutes?", answer: 600 },
            { id: 11, sentence: "If you have 40 apples and sell 15, how many are left?", answer: 25 },
            { id: 12, sentence: "What is the largest prime number less than 30?", answer: 29 },
            { id: 13, sentence: "How many faces does a square pyramid have?", answer: 5 },
            { id: 14, sentence: "If a box contains 8 pencils, how many pencils in 3 boxes?", answer: 24 },
            { id: 15, sentence: "How many minutes in three quarters of an hour?", answer: 45 },
            { id: 16, sentence: "What is the product of 14 and 4?", answer: 56 },
            { id: 17, sentence: "How many strings on a mandolin?", answer: 8 },
            { id: 18, sentence: "What is the sum of the digits in 2468?", answer: 20 },
            { id: 19, sentence: "How many years in a decade and a half?", answer: 15 },
            { id: 20, sentence: "What is the square root of 225?", answer: 15 },
            { id: 21, sentence: "How many players on a rugby team (on field)?", answer: 15 },
            { id: 22, sentence: "If you have 120 euros and spend 40, how many remain?", answer: 80 },
            { id: 23, sentence: "How many letters in 'communication'?", answer: 13 },
            { id: 24, sentence: "What is the smallest number divisible by both 2 and 7?", answer: 14 },
            { id: 25, sentence: "How many zeroes in one million?", answer: 6 },
            { id: 26, sentence: "If you quadruple 12, what would you get?", answer: 48 },
            { id: 27, sentence: "How many sides on an equilateral triangle?", answer: 3 },
            { id: 28, sentence: "What is the next number: 1, 2, 4, 8, __?", answer: 16 },
            { id: 29, sentence: "How many items are in a quartet?", answer: 4 },
            { id: 30, sentence: "How many letters in 'technology'?", answer: 10 }
        ]
    },
    // LEVEL 11
    {
        level: 11,
        questions: [
            { id: 1, sentence: "How many sides does a dodecagon have?", answer: 12 },
            { id: 2, sentence: "What is 500 minus 200?", answer: 300 },
            { id: 3, sentence: "How many wings does a butterfly have?", answer: 4 },
            { id: 4, sentence: "If a farmer has 5 cows and buys 3 more, how many cows total?", answer: 8 },
            { id: 5, sentence: "How many years in a jubilee?", answer: 50 },
            { id: 6, sentence: "What is the square of 13?", answer: 169 },
            { id: 7, sentence: "How many colors in the Irish flag?", answer: 3 },
            { id: 8, sentence: "If a person works 8 hours a day, how many hours in 5 days?", answer: 40 },
            { id: 9, sentence: "What is 5% of 100?", answer: 5 },
            { id: 10, sentence: "How many seconds in half an hour?", answer: 1800 },
            { id: 11, sentence: "If you have 60 cherries and eat 25, how many are left?", answer: 35 },
            { id: 12, sentence: "What is the smallest prime number greater than 20?", answer: 23 },
            { id: 13, sentence: "How many vertices does a cube have?", answer: 8 },
            { id: 14, sentence: "If a bookshelf holds 20 books, how many books in 4 bookshelves?", answer: 80 },
            { id: 15, sentence: "How many minutes in one-tenth of an hour?", answer: 6 },
            { id: 16, sentence: "What is the product of 16 and 3?", answer: 48 },
            { id: 17, sentence: "How many holes on a standard golf course (usually)?", answer: 18 },
            { id: 18, sentence: "What is the sum of the digits in 999?", answer: 27 },
            { id: 19, sentence: "How many days in 3 weeks?", answer: 21 },
            { id: 20, sentence: "What is the square root of 196?", answer: 14 },
            { id: 21, sentence: "How many players on a synchronized swimming team (duet)?", answer: 2 },
            { id: 22, sentence: "If you have 250 marbles and lose 75, how many remain?", answer: 175 },
            { id: 23, sentence: "How many letters in 'globalization'?", answer: 13 },
            { id: 24, sentence: "What is the smallest number divisible by both 3 and 7?", answer: 21 },
            { id: 25, sentence: "How many zeroes in ten?", answer: 1 },
            { id: 26, sentence: "If you multiply 7 by 7, what is the product?", answer: 49 },
            { id: 27, sentence: "How many sides on a square?", answer: 4 },
            { id: 28, sentence: "What is the next number: 100, 90, 80, __?", answer: 70 },
            { id: 29, sentence: "How many items are in a group of five?", answer: 5 },
            { id: 30, sentence: "How many letters in 'innovation'?", answer: 10 }
        ]
    },
    // LEVEL 12
    {
        level: 12,
        questions: [
            { id: 1, sentence: "How many sides does a chiliagon have?", answer: 1000 },
            { id: 2, sentence: "What is 600 minus 250?", answer: 350 },
            { id: 3, sentence: "How many legs does a human have?", answer: 2 },
            { id: 4, sentence: "If a pizza costs $15 and you buy 2, how much total?", answer: 30 },
            { id: 5, sentence: "How many years in a century and a half?", answer: 150 },
            { id: 6, sentence: "What is the cube of 6?", answer: 216 },
            { id: 7, sentence: "How many colors in the Italian flag?", answer: 3 },
            { id: 8, sentence: "If a runner covers 10 km in 1 hour, how many km in 3 hours?", answer: 30 },
            { id: 9, sentence: "What is 2% of 200?", answer: 4 },
            { id: 10, sentence: "How many seconds in an hour?", answer: 3600 },
            { id: 11, sentence: "If you have 80 balloons and 20 pop, how many are left?", answer: 60 },
            { id: 12, sentence: "What is the largest prime number less than 40?", answer: 37 },
            { id: 13, sentence: "How many edges does a cube have?", answer: 12 },
            { id: 14, sentence: "If a packet has 12 cookies, how many cookies in 5 packets?", answer: 60 },
            { id: 15, sentence: "How many minutes in one-sixth of an hour?", answer: 10 },
            { id: 16, sentence: "What is the product of 17 and 2?", answer: 34 },
            { id: 17, sentence: "How many strings on a double bass?", answer: 4 },
            { id: 18, sentence: "What is the sum of the digits in 123?", answer: 6 },
            { id: 19, sentence: "How many days in 4 weeks?", answer: 28 },
            { id: 20, sentence: "What is the square root of 256?", answer: 16 },
            { id: 21, sentence: "How many players on a table tennis (singles) team?", answer: 1 },
            { id: 22, sentence: "If you have 300 cards and sell 100, how many remain?", answer: 200 },
            { id: 23, sentence: "How many letters in 'interconnection'?", answer: 15 },
            { id: 24, sentence: "What is the smallest number divisible by both 4 and 5?", answer: 20 },
            { id: 25, sentence: "How many zeroes in one hundred million?", answer: 8 },
            { id: 26, sentence: "If you double 30, what would you get?", answer: 60 },
            { id: 27, sentence: "How many sides on a pentagon?", answer: 5 },
            { id: 28, sentence: "What is the next number: 3, 6, 9, 12, __?", answer: 15 },
            { id: 29, sentence: "How many items are in a couple?", answer: 2 },
            { id: 30, sentence: "How many letters in 'experience'?", answer: 10 }
        ]
    },
    // LEVEL 13
    {
        level: 13,
        questions: [
            { id: 1, sentence: "How many feet in a yard?", answer: 3 },
            { id: 2, sentence: "What is 750 minus 300?", answer: 450 },
            { id: 3, sentence: "How many legs does a chicken have?", answer: 2 },
            { id: 4, sentence: "If a book costs $20 and you buy 3, how much total?", answer: 60 },
            { id: 5, sentence: "How many years in two centuries?", answer: 200 },
            { id: 6, sentence: "What is the cube of 7?", answer: 343 },
            { id: 7, sentence: "How many colors in the Japanese flag?", answer: 2 },
            { id: 8, sentence: "If a factory produces 50 units per hour, how many units in 4 hours?", answer: 200 },
            { id: 9, sentence: "What is 1% of 500?", answer: 5 },
            { id: 10, sentence: "How many seconds in 2 hours?", answer: 7200 },
            { id: 11, sentence: "If you have 100 stickers and give away 30, how many are left?", answer: 70 },
            { id: 12, sentence: "What is the smallest prime number greater than 30?", answer: 31 },
            { id: 13, sentence: "How many faces does an octahedron have?", answer: 8 },
            { id: 14, sentence: "If a class has 15 boys and 12 girls, how many students total?", answer: 27 },
            { id: 15, sentence: "How many days are in December?", answer: 31 },
            { id: 16, sentence: "What is the product of 18 and 3?", answer: 54 },
            { id: 17, sentence: "How many strings on a ukulele?", answer: 4 },
            { id: 18, sentence: "What is the sum of the digits in 707?", answer: 14 },
            { id: 19, sentence: "How many weeks in 2 months (approx)?", answer: 8 },
            { id: 20, sentence: "What is the square root of 289?", answer: 17 },
            { id: 21, sentence: "How many players on a beach volleyball team?", answer: 2 },
            { id: 22, sentence: "If you have 400 photos and delete 150, how many remain?", answer: 250 },
            { id: 23, sentence: "How many letters in 'transformation'?", answer: 14 },
            { id: 24, sentence: "What is the smallest number divisible by both 6 and 8?", answer: 24 },
            { id: 25, sentence: "How many zeroes in one billion?", answer: 9 },
            { id: 26, sentence: "If you triple 20, what would you get?", answer: 60 },
            { id: 27, sentence: "How many sides on a quadrilateral?", answer: 4 },
            { id: 28, sentence: "What is the next number: 2, 6, 10, 14, __?", answer: 18 },
            { id: 29, sentence: "How many items are in a quartet?", answer: 4 },
            { id: 30, sentence: "How many letters in 'efficiency'?", answer: 10 }
        ]
    },
    // LEVEL 14
    {
        level: 14,
        questions: [
            { id: 1, sentence: "How many inches in a foot?", answer: 12 },
            { id: 2, sentence: "What is 800 minus 350?", answer: 450 },
            { id: 3, sentence: "How many legs does a beetle have?", answer: 6 },
            { id: 4, sentence: "If a restaurant has 12 tables and each seats 4 people, how many total seats?", answer: 48 },
            { id: 5, sentence: "How many months are in a bimester?", answer: 2 },
            { id: 6, sentence: "What is the square of 15?", answer: 225 },
            { id: 7, sentence: "How many colors in the Brazilian flag?", answer: 4 },
            { id: 8, sentence: "If a cyclist rides 25 km per hour, how far in 3 hours?", answer: 75 },
            { id: 9, sentence: "What is 0.5% of 1000?", answer: 5 },
            { id: 10, sentence: "How many seconds in a day?", answer: 86400 },
            { id: 11, sentence: "If you have 150 books and sell 50, how many are left?", answer: 100 },
            { id: 12, sentence: "What is the largest prime number less than 50?", answer: 47 },
            { id: 13, sentence: "How many faces does a regular dodecahedron have?", answer: 12 },
            { id: 14, sentence: "If a team scores 3 goals in each of 2 halves, how many goals total?", answer: 6 },
            { id: 15, sentence: "How many weeks are in October?", answer: 4 },
            { id: 16, sentence: "What is the product of 19 and 2?", answer: 38 },
            { id: 17, sentence: "How many strings on a banjo (standard)?", answer: 5 },
            { id: 18, sentence: "What is the sum of the digits in 2024?", answer: 8 },
            { id: 19, sentence: "How many hours in half a week?", answer: 84 },
            { id: 20, sentence: "What is the square root of 324?", answer: 18 },
            { id: 21, sentence: "How many players on a curling team?", answer: 4 },
            { id: 22, sentence: "If you have 500 followers and gain 200, how many total?", answer: 700 },
            { id: 23, sentence: "How many letters in 'sustainability'?", answer: 14 },
            { id: 24, sentence: "What is the smallest number divisible by both 9 and 12?", answer: 36 },
            { id: 25, sentence: "How many zeroes in one thousand million?", answer: 9 }, // A billion
            { id: 26, sentence: "If you halve 100, what would you get?", answer: 50 },
            { id: 27, sentence: "How many sides on a hexagon?", answer: 6 },
            { id: 28, sentence: "What is the next number: 1, 4, 9, 16, __?", answer: 25 },
            { id: 29, sentence: "How many items are in a duo?", answer: 2 },
            { id: 30, sentence: "How many letters in 'optimization'?", answer: 12 }
        ]
    },
    // LEVEL 15
    {
        level: 15,
        questions: [
            { id: 1, sentence: "How many ounces in a pound?", answer: 16 },
            { id: 2, sentence: "What is 900 minus 400?", answer: 500 },
            { id: 3, sentence: "How many legs does a spider have?", answer: 8 },
            { id: 4, sentence: "If a shelf holds 25 books, how many books on 5 shelves?", answer: 125 },
            { id: 5, sentence: "How many years in a lustrum?", answer: 5 },
            { id: 6, sentence: "What is the cube of 8?", answer: 512 },
            { id: 7, sentence: "How many colors in the Indian flag?", answer: 3 },
            { id: 8, sentence: "If a baker bakes 10 cakes a day, how many in 7 days?", answer: 70 },
            { id: 9, sentence: "What is 15% of 300?", answer: 45 },
            { id: 10, sentence: "How many seconds in a non-leap year?", answer: 31536000 },
            { id: 11, sentence: "If you have 200 pens and give away 80, how many are left?", answer: 120 },
            { id: 12, sentence: "What is the smallest prime number greater than 50?", answer: 53 },
            { id: 13, sentence: "How many faces does an icosahedron have?", answer: 20 },
            { id: 14, sentence: "If a recipe calls for 100g of sugar and you halve it, how many grams?", answer: 50 },
            { id: 15, sentence: "How many days are in February in a common year?", answer: 28 },
            { id: 16, sentence: "What is the product of 20 and 5?", answer: 100 },
            { id: 17, sentence: "How many strings on a typical classical guitar?", answer: 6 },
            { id: 18, sentence: "What is the sum of the digits in 567?", answer: 18 },
            { id: 19, sentence: "How many months are in half a decade?", answer: 60 },
            { id: 20, sentence: "What is the square root of 361?", answer: 19 },
            { id: 21, sentence: "How many players on a volleyball team (on court)?", answer: 6 },
            { id: 22, sentence: "If you have 600 points and lose 150, how many remain?", answer: 450 },
            { id: 23, sentence: "How many letters in 'infrastructure'?", answer: 14 },
            { id: 24, sentence: "What is the smallest number divisible by both 10 and 15?", answer: 30 },
            { id: 25, sentence: "How many zeroes in ten thousand?", answer: 4 },
            { id: 26, sentence: "If you add 20 to 20, then multiply by 3, what is the result?", answer: 120 },
            { id: 27, sentence: "How many sides on an octagon?", answer: 8 },
            { id: 28, sentence: "What is the next number: 1, 8, 27, 64, __?", answer: 125 }, // cubes
            { id: 29, sentence: "How many items are in a threesome?", answer: 3 },
            { id: 30, sentence: "How many letters in 'sustainability'?", answer: 14 }
        ]
    },
    // LEVEL 16
    {
        level: 16,
        questions: [
            { id: 1, sentence: "How many decades in a century?", answer: 10 },
            { id: 2, sentence: "What is 1000 minus 450?", answer: 550 },
            { id: 3, sentence: "How many legs does an ant have?", answer: 6 },
            { id: 4, sentence: "If a box contains 6 apples, how many apples in 7 boxes?", answer: 42 },
            { id: 5, sentence: "How many years in a bicentennial?", answer: 200 },
            { id: 6, sentence: "What is the square of 20?", answer: 400 },
            { id: 7, sentence: "How many stripes on the US flag?", answer: 13 },
            { id: 8, sentence: "If a bus has 50 seats and 30 are occupied, how many are empty?", answer: 20 },
            { id: 9, sentence: "What is 20% of 400?", answer: 80 },
            { id: 10, sentence: "How many seconds in 15 minutes?", answer: 900 },
            { id: 11, sentence: "If you have 300 stickers and sell 120, how many are left?", answer: 180 },
            { id: 12, sentence: "What is the largest prime number less than 60?", answer: 59 },
            { id: 13, sentence: "How many faces does a hexagonal prism have?", answer: 8 },
            { id: 14, sentence: "If a cake requires 200g of flour and you make 3 cakes, how many grams needed?", answer: 600 },
            { id: 15, sentence: "How many minutes in two and a half hours?", answer: 150 },
            { id: 16, sentence: "What is the product of 25 and 4?", answer: 100 },
            { id: 17, sentence: "How many strings on a cello?", answer: 4 },
            { id: 18, sentence: "What is the sum of the digits in 1234?", answer: 10 },
            { id: 19, sentence: "How many weeks in 3 months (approx)?", answer: 12 },
            { id: 20, sentence: "What is the square root of 400?", answer: 20 },
            { id: 21, sentence: "How many players in a game of checkers?", answer: 2 },
            { id: 22, sentence: "If you have 800 followers and gain 250, how many total?", answer: 1050 },
            { id: 23, sentence: "How many letters in 'decentralization'?", answer: 16 },
            { id: 24, sentence: "What is the smallest number divisible by both 7 and 3?", answer: 21 },
            { id: 25, sentence: "How many zeroes in one hundred million?", answer: 8 },
            { id: 26, sentence: "If you double 45, what would you get?", answer: 90 },
            { id: 27, sentence: "How many sides on a pentagon?", answer: 5 },
            { id: 28, sentence: "What is the next number: 5, 12, 19, 26, __?", answer: 33 }, // +7
            { id: 29, sentence: "How many items are in a pair?", answer: 2 },
            { id: 30, sentence: "How many letters in 'knowledge'?", answer: 9 }
        ]
    },
    // LEVEL 17
    {
        level: 17,
        questions: [
            { id: 1, sentence: "How many years in a score and a half?", answer: 30 },
            { id: 2, sentence: "What is 1200 minus 500?", answer: 700 },
            { id: 3, sentence: "How many legs does an insect have?", answer: 6 },
            { id: 4, sentence: "If a bird feeder attracts 5 birds per hour, how many in 4 hours?", answer: 20 },
            { id: 5, sentence: "How many days in 5 weeks?", answer: 35 },
            { id: 6, sentence: "What is the cube of 9?", answer: 729 },
            { id: 7, sentence: "How many colors in the UK flag?", answer: 3 },
            { id: 8, sentence: "If a printer prints 10 pages per minute, how many in half an hour?", answer: 300 },
            { id: 9, sentence: "What is 30% of 500?", answer: 150 },
            { id: 10, sentence: "How many seconds in 20 minutes?", answer: 1200 },
            { id: 11, sentence: "If you have 400 books and donate 150, how many are left?", answer: 250 },
            { id: 12, sentence: "What is the smallest prime number greater than 60?", answer: 61 },
            { id: 13, sentence: "How many faces does a cube have?", answer: 6 },
            { id: 14, sentence: "If a recipe requires 3 eggs, how many eggs for 5 recipes?", answer: 15 },
            { id: 15, sentence: "How many minutes in two-thirds of an hour?", answer: 40 },
            { id: 16, sentence: "What is the product of 30 and 3?", answer: 90 },
            { id: 17, sentence: "How many strings on a double bass?", answer: 4 },
            { id: 18, sentence: "What is the sum of the digits in 543?", answer: 12 },
            { id: 19, sentence: "How many months in 5 years?", answer: 60 },
            { id: 20, sentence: "What is the square root of 441?", answer: 21 },
            { id: 21, sentence: "How many players on a water polo team (in water)?", answer: 7 },
            { id: 22, sentence: "If you have 1000 points and lose 300, how many remain?", answer: 700 },
            { id: 23, sentence: "How many letters in 'collaboration'?", answer: 13 },
            { id: 24, sentence: "What is the smallest number divisible by both 4 and 7?", answer: 28 },
            { id: 25, sentence: "How many zeroes in one hundred thousand?", answer: 5 },
            { id: 26, sentence: "If you triple 30, what would you get?", answer: 90 },
            { id: 27, sentence: "How many sides on a triangle?", answer: 3 },
            { id: 28, sentence: "What is the next number: 1, 5, 10, 16, __?", answer: 23 }, // +4, +5, +6, +7
            { id: 29, sentence: "How many items are in a trio?", answer: 3 },
            { id: 30, sentence: "How many letters in 'creativity'?", answer: 9 }
        ]
    },
    // LEVEL 18
    {
        level: 18,
        questions: [
            { id: 1, sentence: "How many points on a compass rose (main directions)?", answer: 4 },
            { id: 2, sentence: "What is 1500 minus 600?", answer: 900 },
            { id: 3, sentence: "How many legs does a millipede approximately have?", answer: 200 }, // Named for 1000 but many have around 200-300
            { id: 4, sentence: "If a carton holds 12 eggs, how many eggs in 4 cartons?", answer: 48 },
            { id: 5, sentence: "How many years in 7 decades?", answer: 70 },
            { id: 6, sentence: "What is the square of 22?", answer: 484 },
            { id: 7, sentence: "How many colors in the South African flag?", answer: 6 },
            { id: 8, sentence: "If a car travels 80 km/h, how far in 2 hours?", answer: 160 },
            { id: 9, sentence: "What is 40% of 200?", answer: 80 },
            { id: 10, sentence: "How many seconds in a day and a half?", answer: 129600 },
            { id: 11, sentence: "If you have 500 photos and delete 200, how many are left?", answer: 300 },
            { id: 12, sentence: "What is the largest prime number less than 70?", answer: 67 },
            { id: 13, sentence: "How many vertices does a triangular prism have?", answer: 6 },
            { id: 14, sentence: "If a shirt costs $18 and you buy 2, how much total?", answer: 36 },
            { id: 15, sentence: "How many days in November?", answer: 30 },
            { id: 16, sentence: "What is the product of 35 and 2?", answer: 70 },
            { id: 17, sentence: "How many strings on a banjo (4-string tenor)?", answer: 4 },
            { id: 18, sentence: "What is the sum of the digits in 88?", answer: 16 },
            { id: 19, sentence: "How many months in a decade and a half?", answer: 180 },
            { id: 20, sentence: "What is the square root of 484?", answer: 22 },
            { id: 21, sentence: "How many players on an ice hockey team (on ice)?", answer: 6 },
            { id: 22, sentence: "If you have 1500 ECP and spend 500, how many remain?", answer: 1000 },
            { id: 23, sentence: "How many letters in 'responsibility'?", answer: 14 },
            { id: 24, sentence: "What is the smallest number divisible by both 6 and 9?", answer: 18 },
            { id: 25, sentence: "How many zeroes in one million?", answer: 6 },
            { id: 26, sentence: "If you halve 50, what would you get?", answer: 25 },
            { id: 27, sentence: "How many sides on a rhombus?", answer: 4 },
            { id: 28, sentence: "What is the next number: 1, 2, 6, 24, __?", answer: 120 }, // Factorial related: 1!, 2!, 3!, 4!, 5!
            { id: 29, sentence: "How many items are in a couple?", answer: 2 },
            { id: 30, sentence: "How many letters in 'synergy'?", answer: 7 }
        ]
    },
    // LEVEL 19
    {
        level: 19,
        questions: [
            { id: 1, sentence: "How many grand slams in tennis per year?", answer: 4 },
            { id: 2, sentence: "What is 2000 minus 700?", answer: 1300 },
            { id: 3, sentence: "How many legs does a horse have?", answer: 4 },
            { id: 4, sentence: "If a recipe calls for 3 cups of sugar and you make 4 batches, how many cups needed?", answer: 12 },
            { id: 5, sentence: "How many years in a sesquicentennial?", answer: 150 },
            { id: 6, sentence: "What is the cube of 10?", answer: 1000 },
            { id: 7, sentence: "How many continents are there?", answer: 7 },
            { id: 8, sentence: "If a gardener plants 15 seeds per row, how many seeds in 5 rows?", answer: 75 },
            { id: 9, sentence: "What is 50% of 300?", answer: 150 },
            { id: 10, sentence: "How many seconds in 30 minutes?", answer: 1800 },
            { id: 11, sentence: "If you have 600 points and earn 250 more, how many total?", answer: 850 },
            { id: 12, sentence: "What is the smallest prime number greater than 70?", answer: 71 },
            { id: 13, sentence: "How many edges does a triangular pyramid have?", answer: 6 },
            { id: 14, sentence: "If a game costs $25 and you buy 3, how much total?", answer: 75 },
            { id: 15, sentence: "How many days in a common year?", answer: 365 },
            { id: 16, sentence: "What is the product of 40 and 2?", answer: 80 },
            { id: 17, sentence: "How many strings on an acoustic guitar?", answer: 6 },
            { id: 18, sentence: "What is the sum of the digits in 1111?", answer: 4 },
            { id: 19, sentence: "How many days in July?", answer: 31 },
            { id: 20, sentence: "What is the square root of 529?", answer: 23 },
            { id: 21, sentence: "How many players on a basketball team (on court)?", answer: 5 },
            { id: 22, sentence: "If you have 2000 ECP and spend 700, how many remain?", answer: 1300 },
            { id: 23, sentence: "How many letters in 'sustainability'?", answer: 14 },
            { id: 24, sentence: "What is the smallest number divisible by both 8 and 12?", answer: 24 },
            { id: 25, sentence: "How many zeroes in one billion?", answer: 9 },
            { id: 26, sentence: "If you add 10 to 10, then multiply by 5, what is the result?", answer: 100 },
            { id: 27, sentence: "How many sides on a nonagon?", answer: 9 },
            { id: 28, sentence: "What is the next number: 1, 3, 7, 13, __?", answer: 21 }, // +2, +4, +6, +8
            { id: 29, sentence: "How many items are in a singleton?", answer: 1 },
            { id: 30, sentence: "How many letters in 'creativity'?", answer: 9 }
        ]
    },
    // LEVEL 20
    {
        level: 20,
        questions: [
            { id: 1, sentence: "How many innings in a standard baseball game?", answer: 9 },
            { id: 2, sentence: "What is 2500 minus 800?", answer: 1700 },
            { id: 3, sentence: "How many legs does a chicken have?", answer: 2 },
            { id: 4, sentence: "If a concert ticket costs $50 and 5 friends go, how much total?", answer: 250 },
            { id: 5, sentence: "How many years in a bicentennial and a half?", answer: 300 },
            { id: 6, sentence: "What is the square of 25?", answer: 625 },
            { id: 7, sentence: "How many oceans are there on Earth?", answer: 5 },
            { id: 8, sentence: "If a factory produces 20 cars a day, how many in 10 days?", answer: 200 },
            { id: 9, sentence: "What is 75% of 400?", answer: 300 },
            { id: 10, sentence: "How many seconds in an hour and a half?", answer: 5400 },
            { id: 11, sentence: "If you have 800 coins and spend 300, how many are left?", answer: 500 },
            { id: 12, sentence: "What is the largest prime number less than 80?", answer: 79 },
            { id: 13, sentence: "How many vertices does an octahedron have?", answer: 6 },
            { id: 14, sentence: "If a bookshelf holds 30 books, how many books in 5 bookshelves?", answer: 150 },
            { id: 15, sentence: "How many days are in a leap year?", answer: 366 },
            { id: 16, sentence: "What is the product of 50 and 3?", answer: 150 },
            { id: 17, sentence: "How many strings on a banjo (5-string)?", answer: 5 },
            { id: 18, sentence: "What is the sum of the digits in 2025?", answer: 9 },
            { id: 19, sentence: "How many weeks in 5 months (approx)?", answer: 20 },
            { id: 20, sentence: "What is the square root of 625?", answer: 25 },
            { id: 21, sentence: "How many players on a soccer team (on field)?", answer: 11 },
            { id: 22, sentence: "If you have 3000 ECP and spend 1000, how many remain?", answer: 2000 },
            { id: 23, sentence: "How many letters in 'digital transformation'?", answer: 21 },
            { id: 24, sentence: "What is the smallest number divisible by both 10 and 20?", answer: 20 },
            { id: 25, sentence: "How many zeroes in one trillion?", answer: 12 },
            { id: 26, sentence: "If you multiply 11 by 11, what is the product?", answer: 121 },
            { id: 27, sentence: "How many sides on a dodecagon?", answer: 12 },
            { id: 28, sentence: "What is the next number: 0, 1, 1, 2, 3, 5, 8, __?", answer: 13 }, // Fibonacci
            { id: 29, sentence: "How many items are in a group of ten?", answer: 10 },
            { id: 30, sentence: "How many letters in 'innovation'?", answer: 10 }
        ]
    }
];


// --- 2. Game Constants (ECP, Timer, etc.) ---
const ECP_REWARDS = {
    CORRECT_ANSWER: 30,
    ACHIEVEMENT: 10,
    LEVEL_COMPLETE: 200
};

const ECP_COSTS = {
    HINT: 50,
    REVEAL: 100,
    TIMEOUT_PENALTY: 2
};

const TIMER_DURATION_PER_QUESTION = 15; // seconds


// --- 3. DOM Element References ---
// Screens
const introScreen = document.getElementById('intro-screen');
const gameMenuScreen = document.getElementById('game-menu-screen');
const levelSelectionScreen = document.getElementById('level-selection-screen');
const gamePlayScreen = document.getElementById('game-play-screen');

// Intro Screen Buttons
const introPlayGameBtn = document.getElementById('intro-play-game-btn');

// Game Menu Screen Elements
const ecpDisplayMenu = document.getElementById('ecp-display-menu');
const backToGamesBtn = document.getElementById('back-to-games-btn');
const achievementsBtnMenu = document.getElementById('achievements-btn-menu');
const themeBtnMenu = document.getElementById('theme-btn-menu');
const startGameFromMenuBtn = document.getElementById('start-game-from-menu-btn');

// Level Selection Screen Elements
const ecpDisplayLevel = document.getElementById('ecp-display-level');
const achievementsBtnLevel = document.getElementById('achievements-btn-level');
const prevLevelBtn = document.getElementById('prev-level-btn');
const currentLevelDisplay = document.getElementById('current-level-display');
const nextLevelBtn = document.getElementById('next-level-btn');
const puzzleGrid = document.getElementById('puzzle-grid');
const shareProgressBtn = document.getElementById('share-progress-btn');

// Game Play Screen Elements
const ecpDisplayGame = document.getElementById('ecp-display-game');
const timerValueDisplay = document.getElementById('timer-value');
const questionCounterDisplay = document.getElementById('question-counter');
const prevQuestionBtn = document.getElementById('prev-question-btn');
const puzzleSentenceDisplay = document.getElementById('puzzle-sentence');
const guessInput = document.getElementById('guess-input');
const submitGuessBtn = document.getElementById('submit-guess-btn');
const feedbackMessage = document.getElementById('feedback-message');
const revealBtn = document.getElementById('reveal-btn');
const revealCostDisplay = document.getElementById('reveal-cost');
const hintBtn = document.getElementById('hint-btn');
const hintCostDisplay = document.getElementById('hint-cost');
const shareGameBtn = document.getElementById('share-game-btn');

// Modals
const achievementsModal = document.getElementById('achievements-modal');
const themeModal = document.getElementById('theme-modal');
const modalCloseButtons = document.querySelectorAll('.modal .close-button'); // For all modal close buttons
const themeOptions = document.getElementById('theme-options');


// --- 4. Game State Variables (Initial / Default Values) ---
let userECP = 0;
let currentLevel = 1;
let currentQuestionIndex = 0; // 0-indexed, so 0 to 29 for 30 questions
let timer;
let timeLeft = TIMER_DURATION_PER_QUESTION;
let completedPuzzles = {}; // Stores { 'level_questionId': true, ... }
let unlockedAchievements = []; // Stores IDs of unlocked achievements
let currentTheme = 'default'; // 'default', 'dark', 'light', 'neon', 'forest', 'ocean'

// Define Achievements (can be expanded)
const achievements = [
    { id: 'first_correct', name: 'First Correct Guess', condition: 'First time answering correctly', unlocked: false },
    { id: 'level1_complete', name: 'Complete Level 1', condition: 'Complete all 30 puzzles in Level 1', unlocked: false },
    { id: 'ecp_100', name: 'ECP Novice', condition: 'Accumulate 100 ECP', unlocked: false },
    { id: 'ecp_500', name: 'ECP Apprentice', condition: 'Accumulate 500 ECP', unlocked: false },
    { id: 'ecp_1000', name: 'ECP Master', condition: 'Accumulate 1000 ECP', unlocked: false },
    { id: 'all_levels_complete', name: 'Game Master', condition: 'Complete all 20 Levels', unlocked: false },
    { id: 'no_hints_level', name: 'Ghost', condition: 'Complete a level without using any hints or reveals', unlocked: false }, // Needs more complex tracking
    { id: 'streak_5', name: 'Streak 5', condition: 'Answer 5 questions correctly in a row', unlocked: false }, // Needs more complex tracking
    // Add more achievements here
];

// Variables for streak tracking (for achievements)
let currentCorrectStreak = 0;
let hintUsedInCurrentLevel = false;


// --- 5. UI Update Functions ---

/**
 * Shows a specific game screen and hides all others.
 * @param {HTMLElement} screenToShow - The DOM element of the screen to display.
 */
function showScreen(screenToShow) {
    document.querySelectorAll('.game-screen').forEach(screen => {
        screen.classList.add('hidden');
        screen.classList.remove('active');
    });
    screenToShow.classList.remove('hidden');
    screenToShow.classList.add('active');
    stopTimer(); // Stop timer when changing screens
    // Reset feedback message when changing screens from game play
    feedbackMessage.textContent = '';
    feedbackMessage.classList.remove('correct', 'wrong', 'hint');
}

/**
 * Updates the ECP display across all relevant screens.
 */
function updateECPDisplay() {
    ecpDisplayMenu.textContent = userECP;
    ecpDisplayLevel.textContent = userECP;
    ecpDisplayGame.textContent = userECP;

    // Check for ECP related achievements
    unlockAchievementIfConditionMet('ecp_100', userECP >= 100);
    unlockAchievementIfConditionMet('ecp_500', userECP >= 500);
    unlockAchievementIfConditionMet('ecp_1000', userECP >= 1000);

    saveGame(); // Save game state whenever ECP changes
}

/**
 * Renders the puzzle grid for the current level.
 * Marks completed, locked, and current puzzles.
 */
function renderPuzzleGrid() {
    puzzleGrid.innerHTML = ''; // Clear existing boxes
    const currentLevelData = gameQuestions[currentLevel - 1]; // -1 because levels are 1-indexed

    if (!currentLevelData) {
        // Handle case where level data might not exist (e.g., trying to go beyond max level)
        puzzleGrid.innerHTML = `<p style="color:red; text-align:center;">Level data not found.</p>`;
        return;
    }

    currentLevelData.questions.forEach((question, index) => {
        const puzzleBox = document.createElement('div');
        puzzleBox.classList.add('puzzle-box');
        puzzleBox.textContent = question.id; // Display question number (1-30)

        const puzzleKey = `${currentLevel}_${question.id}`;

        if (completedPuzzles[puzzleKey]) {
            puzzleBox.classList.add('completed');
            puzzleBox.style.cursor = 'pointer'; // Allow re-visiting completed questions
            puzzleBox.addEventListener('click', () => {
                currentQuestionIndex = index;
                loadQuestion(currentLevel, question.id);
                showScreen(gamePlayScreen);
            });
        } else {
            // Check for sequential unlocking
            const prevPuzzleKey = `${currentLevel}_${question.id - 1}`;
            const isFirstQuestion = question.id === 1;
            const isPrevCompleted = completedPuzzles[prevPuzzleKey];
            const isPrevLevelCompleted = currentLevel === 1 || completedPuzzles[`${currentLevel - 1}_30`];


            if ((isFirstQuestion && isPrevLevelCompleted) || (isPrevCompleted && isPrevLevelCompleted)) {
                // This puzzle is unlocked
                puzzleBox.style.cursor = 'pointer';
                puzzleBox.addEventListener('click', () => {
                    currentQuestionIndex = index; // Set the current question index
                    loadQuestion(currentLevel, question.id);
                    showScreen(gamePlayScreen);
                });
            } else {
                // This puzzle is locked
                puzzleBox.classList.add('locked');
                puzzleBox.style.cursor = 'not-allowed';
            }
        }
        puzzleGrid.appendChild(puzzleBox);
    });

    // Update level display
    currentLevelDisplay.textContent = `LEVEL ${currentLevel}`;

    // Disable/enable level navigation buttons
    prevLevelBtn.disabled = currentLevel === 1;
    // Next level is enabled only if all questions in current level are completed
    const allCurrentLevelQuestionsCompleted = currentLevelData.questions.every(q => completedPuzzles[`${currentLevel}_${q.id}`]);
    nextLevelBtn.disabled = currentLevel === gameQuestions.length || !allCurrentLevelQuestionsCompleted;

    saveGame();
}

/**
 * Updates the question counter on the game play screen.
 */
function updateQuestionCounter() {
    questionCounterDisplay.textContent = `Question ${currentQuestionIndex + 1} / 30`;
}

/**
 * Renders the achievements list in the modal.
 */
function renderAchievements() {
    const list = document.getElementById('achievements-list');
    list.innerHTML = ''; // Clear existing list

    achievements.forEach(ach => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="achievement-text">${ach.name}</span>
            <i class="fas ${ach.unlocked ? 'fa-check-circle check-icon' : 'fa-lock lock-icon'}"></i>
        `;
        list.appendChild(li);
    });
}

/**
 * Applies the selected theme to the body element.
 * @param {string} themeName - The name of the theme (e.g., 'default', 'dark').
 */
function applyTheme(themeName) {
    document.body.className = ''; // Remove existing theme classes
    document.body.classList.add(`theme-${themeName}`);
    currentTheme = themeName;
    saveGame();
}


// --- 6. Game Logic Functions ---

/**
 * Saves the current game state to localStorage.
 */
function saveGame() {
    const gameState = {
        userECP: userECP,
        currentLevel: currentLevel,
        completedPuzzles: completedPuzzles,
        unlockedAchievements: achievements.filter(ach => ach.unlocked).map(ach => ach.id), // Save only IDs of unlocked
        currentTheme: currentTheme
    };
    localStorage.setItem('guessTheNumberGame', JSON.stringify(gameState));
    console.log("Game Saved!", gameState);
}

/**
 * Loads game state from localStorage.
 */
function loadGame() {
    const savedState = localStorage.getItem('guessTheNumberGame');
    if (savedState) {
        const gameState = JSON.parse(savedState);
        userECP = gameState.userECP || 0;
        currentLevel = gameState.currentLevel || 1;
        completedPuzzles = gameState.completedPuzzles || {};
        currentTheme = gameState.currentTheme || 'default';

        // Re-hydrate unlockedAchievements objects
        if (gameState.unlockedAchievements) {
            achievements.forEach(ach => {
                if (gameState.unlockedAchievements.includes(ach.id)) {
                    ach.unlocked = true;
                } else {
                    ach.unlocked = false; // Ensure it's false if not in saved list
                }
            });
        }
    } else {
        // If no saved game, set initial ECP and default theme
        userECP = 0; // Starting ECP
        currentLevel = 1;
        completedPuzzles = {};
        achievements.forEach(ach => ach.unlocked = false); // Reset all achievements
        currentTheme = 'default';
    }

    applyTheme(currentTheme);
    updateECPDisplay();
    renderAchievements(); // Update achievements display on load
    console.log("Game Loaded!", { userECP, currentLevel, completedPuzzles, unlockedAchievements: achievements.filter(ach => ach.unlocked).map(ach => ach.id), currentTheme });
}

/**
 * Starts the timer for the current question.
 */
function startTimer() {
    stopTimer(); // Clear any existing timer first
    timeLeft = TIMER_DURATION_PER_QUESTION;
    timerValueDisplay.textContent = timeLeft;
    timerValueDisplay.classList.remove('low-time'); // Remove low-time class

    timer = setInterval(() => {
        timeLeft--;
        timerValueDisplay.textContent = timeLeft;

        if (timeLeft <= 5 && timeLeft > 0) {
            timerValueDisplay.classList.add('low-time');
        } else if (timeLeft <= 0) {
            handleTimeOut();
        }
    }, 1000);
}

/**
 * Stops the current timer.
 */
function stopTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
    timerValueDisplay.classList.remove('low-time'); // Always remove when stopping
}

/**
 * Handles what happens when the timer runs out.
 */
function handleTimeOut() {
    stopTimer();
    deductECP(ECP_COSTS.TIMEOUT_PENALTY, "Time out!");
    feedbackMessage.textContent = `Time's up! -${ECP_COSTS.TIMEOUT_PENALTY} ECP.`;
    feedbackMessage.classList.remove('correct', 'hint');
    feedbackMessage.classList.add('wrong');
    guessInput.value = ''; // Clear input

    // The question is NOT marked completed, so user can re-attempt
    setTimeout(() => {
        showScreen(levelSelectionScreen); // Send user back to question grid
        renderPuzzleGrid(); // Re-render grid to show status
    }, 1500); // Give a moment to read the feedback
}

/**
 * Loads a specific question into the game play screen.
 * @param {number} levelNum - The level number (1-indexed).
 * @param {number} questionId - The question ID within the level (1-indexed).
 */
function loadQuestion(levelNum, questionId) {
    const levelData = gameQuestions[levelNum - 1]; // Get level object
    if (!levelData) {
        console.error("Level data not found for level:", levelNum);
        return;
    }
    const questionData = levelData.questions.find(q => q.id === questionId);
    if (!questionData) {
        console.error("Question data not found for ID:", questionId, "in level:", levelNum);
        return;
    }

    currentLevel = levelNum; // Ensure currentLevel is set for persistence
    currentQuestionIndex = levelData.questions.indexOf(questionData); // Set the current index

    puzzleSentenceDisplay.textContent = questionData.sentence;
    guessInput.value = ''; // Clear previous guess
    feedbackMessage.textContent = ''; // Clear previous feedback
    feedbackMessage.classList.remove('correct', 'wrong', 'hint');
    updateQuestionCounter();
    startTimer();

    // Reset hint/reveal state for the loaded question
    // This assumes hints/reveals are per-attempt, not persistent per question
    // If they should be persistent, we'd need to save/load this state per puzzle.
    // For now, they reset when a question is loaded.
    hintBtn.disabled = false;
    revealBtn.disabled = false;
    revealCostDisplay.textContent = ECP_COSTS.REVEAL;
    hintCostDisplay.textContent = ECP_COSTS.HINT;

    // If question is already completed, disable input/submit and show message
    const puzzleKey = `${currentLevel}_${questionData.id}`;
    if (completedPuzzles[puzzleKey]) {
        guessInput.disabled = true;
        submitGuessBtn.disabled = true;
        hintBtn.disabled = true;
        revealBtn.disabled = true;
        feedbackMessage.textContent = "You've already completed this puzzle!";
        feedbackMessage.classList.add('correct');
        stopTimer(); // No need for timer on completed questions
    } else {
        guessInput.disabled = false;
        submitGuessBtn.disabled = false;
    }

    // Previous Question button logic
    prevQuestionBtn.disabled = (currentQuestionIndex === 0); // Disable if it's the first question of the level
    saveGame();
}

/**
 * Checks the user's guess against the correct answer.
 */
function checkAnswer() {
    stopTimer(); // Stop timer immediately after guess
    const guess = parseFloat(guessInput.value);
    const currentLevelData = gameQuestions[currentLevel - 1];
    const question = currentLevelData.questions[currentQuestionIndex];

    if (isNaN(guess)) {
        feedbackMessage.textContent = 'Please enter a valid number!';
        feedbackMessage.classList.remove('correct', 'hint');
        feedbackMessage.classList.add('wrong');
        startTimer(); // Restart timer if input is invalid
        return;
    }

    if (guess === question.answer) {
        feedbackMessage.textContent = `Correct! +${ECP_REWARDS.CORRECT_ANSWER} ECP`;
        feedbackMessage.classList.remove('wrong', 'hint');
        feedbackMessage.classList.add('correct');
        addECP(ECP_REWARDS.CORRECT_ANSWER);
        markPuzzleCompleted(currentLevel, question.id);
        currentCorrectStreak++;
        unlockAchievementIfConditionMet('first_correct', true);
        unlockAchievementIfConditionMet('streak_5', currentCorrectStreak >= 5);

        // Disable input and buttons after correct answer
        guessInput.disabled = true;
        submitGuessBtn.disabled = true;
        hintBtn.disabled = true;
        revealBtn.disabled = true;
        prevQuestionBtn.disabled = true; // Disable previous question after answering

        // Advance to next question or level
        setTimeout(() => {
            moveToNextPuzzle();
        }, 1500); // Wait a bit before moving on
    } else {
        feedbackMessage.textContent = 'Wrong answer. Try again!';
        feedbackMessage.classList.remove('correct', 'hint');
        feedbackMessage.classList.add('wrong');
        currentCorrectStreak = 0; // Reset streak on incorrect answer
        startTimer(); // Restart timer for another attempt
    }
    saveGame();
}

/**
 * Marks a puzzle as completed.
 * @param {number} levelNum - The level number.
 * @param {number} questionId - The question ID.
 */
function markPuzzleCompleted(levelNum, questionId) {
    const puzzleKey = `${levelNum}_${questionId}`;
    completedPuzzles[puzzleKey] = true;
    saveGame();
}

/**
 * Advances to the next puzzle or completes the level.
 */
function moveToNextPuzzle() {
    const currentLevelQuestions = gameQuestions[currentLevel - 1].questions;
    // Check if the current puzzle is the last in the level
    if (currentQuestionIndex < currentLevelQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentLevel, currentLevelQuestions[currentQuestionIndex].id);
    } else {
        // Last question of the level completed
        feedbackMessage.textContent = `Level ${currentLevel} Complete! +${ECP_REWARDS.LEVEL_COMPLETE} ECP`;
        feedbackMessage.classList.remove('wrong', 'hint');
        feedbackMessage.classList.add('correct');
        addECP(ECP_REWARDS.LEVEL_COMPLETE);

        // Check for level completion achievements
        unlockAchievementIfConditionMet('level1_complete', currentLevel === 1);
        unlockAchievementIfConditionMet('all_levels_complete', currentLevel === gameQuestions.length);
        unlockAchievementIfConditionMet('no_hints_level', !hintUsedInCurrentLevel);


        setTimeout(() => {
            goToNextLevel();
        }, 2000); // Give time for level complete message
    }
}


/**
 * Moves to the next level if available, otherwise stays on current.
 */
function goToNextLevel() {
    if (currentLevel < gameQuestions.length) {
        currentLevel++;
        currentQuestionIndex = 0; // Reset to first question of new level
        hintUsedInCurrentLevel = false; // Reset for new level's 'no_hints_level' achievement
        showScreen(levelSelectionScreen);
        renderPuzzleGrid();
        updateECPDisplay(); // Update ECP display on level screen
    } else {
        // All levels completed logic
        alert("Congratulations! You've completed all levels!");
        // For now, go back to the game menu screen
        showScreen(gameMenuScreen);
    }
    saveGame();
}

/**
 * Moves to the previous level if available.
 */
function goToPrevLevel() {
    if (currentLevel > 1) {
        currentLevel--;
        currentQuestionIndex = 0; // Reset to first question of new level
        hintUsedInCurrentLevel = false; // Reset for new level's 'no_hints_level' achievement
        showScreen(levelSelectionScreen);
        renderPuzzleGrid();
        updateECPDisplay();
    }
    saveGame();
}


/**
 * Deducts ECP from the user's balance.
 * @param {number} amount - The amount to deduct.
 * @param {string} reason - The reason for deduction.
 */
function deductECP(amount, reason = '') {
    userECP = Math.max(0, userECP - amount); // Ensure ECP doesn't go below zero
    updateECPDisplay();
    // Potentially add a log or notification for the deduction
    console.log(`${amount} ECP deducted. Reason: ${reason}. Current ECP: ${userECP}`);
}

/**
 * Adds ECP to the user's balance.
 * @param {number} amount - The amount to add.
 * @param {string} reason - The reason for addition.
 */
function addECP(amount, reason = '') {
    userECP += amount;
    updateECPDisplay();
    // Potentially add a log or notification for the addition
    console.log(`${amount} ECP added. Reason: ${reason}. Current ECP: ${userECP}`);
}

/**
 * Unlocks an achievement if its condition is met.
 * @param {string} achievementId - The ID of the achievement to check.
 * @param {boolean} conditionMet - True if the condition for unlocking is met.
 */
function unlockAchievementIfConditionMet(achievementId, conditionMet) {
    const ach = achievements.find(a => a.id === achievementId);
    if (ach && conditionMet && !ach.unlocked) {
        ach.unlocked = true;
        addECP(ECP_REWARDS.ACHIEVEMENT, `Achievement: ${ach.name}`);
        renderAchievements(); // Re-render achievements display
        alert(`Achievement Unlocked: "${ach.name}"! +${ECP_REWARDS.ACHIEVEMENT} ECP`); // Use alert for now
        saveGame();
    }
}

/**
 * Provides a hint for the current question.
 */
function giveHint() {
    const currentLevelData = gameQuestions[currentLevel - 1];
    const question = currentLevelData.questions[currentQuestionIndex];

    // Prevent hint if already completed or revealed
    const puzzleKey = `${currentLevel}_${question.id}`;
    if (completedPuzzles[puzzleKey]) {
        feedbackMessage.textContent = "This puzzle is already completed!";
        feedbackMessage.classList.remove('correct', 'hint');
        feedbackMessage.classList.add('wrong');
        return;
    }

    if (userECP < ECP_COSTS.HINT) {
        feedbackMessage.textContent = `Not enough ECP for a hint! (${ECP_COSTS.HINT} ECP needed)`;
        feedbackMessage.classList.remove('correct', 'hint');
        feedbackMessage.classList.add('wrong');
        return;
    }

    deductECP(ECP_COSTS.HINT, "Hint used");
    hintUsedInCurrentLevel = true; // Mark hint used for current level

    // Simple hint logic: If answer is > 10, hint "It's a two-digit number".
    // Or provide range. For simplicity, let's provide if it's even/odd or range.
    let hintText = '';
    if (question.answer % 2 === 0) {
        hintText = "Hint: The number is EVEN.";
    } else {
        hintText = "Hint: The number is ODD.";
    }

    // Add a range hint if possible and not too obvious
    if (question.answer >= 1 && question.answer <= 10) {
        hintText += " It's a single-digit number.";
    } else if (question.answer > 10 && question.answer <= 50) {
        hintText += " It's between 11 and 50.";
    } else if (question.answer > 50 && question.answer <= 100) {
        hintText += " It's between 51 and 100.";
    } else if (question.answer > 100) {
        hintText += " It's a number greater than 100.";
    }


    feedbackMessage.textContent = hintText;
    feedbackMessage.classList.remove('correct', 'wrong');
    feedbackMessage.classList.add('hint');
    saveGame();
}

/**
 * Reveals the answer for the current question.
 */
function revealAnswer() {
    const currentLevelData = gameQuestions[currentLevel - 1];
    const question = currentLevelData.questions[currentQuestionIndex];

    // Prevent reveal if already completed or revealed
    const puzzleKey = `${currentLevel}_${question.id}`;
    if (completedPuzzles[puzzleKey]) {
        feedbackMessage.textContent = "This puzzle is already completed!";
        feedbackMessage.classList.remove('correct', 'hint');
        feedbackMessage.classList.add('wrong');
        return;
    }

    if (userECP < ECP_COSTS.REVEAL) {
        feedbackMessage.textContent = `Not enough ECP to reveal! (${ECP_COSTS.REVEAL} ECP needed)`;
        feedbackMessage.classList.remove('correct', 'hint');
        feedbackMessage.classList.add('wrong');
        return;
    }

    deductECP(ECP_COSTS.REVEAL, "Answer revealed");
    hintUsedInCurrentLevel = true; // Reveal also counts as using a hint for achievement purposes

    feedbackMessage.textContent = `The answer is: ${question.answer}`;
    feedbackMessage.classList.remove('correct', 'wrong');
    feedbackMessage.classList.add('hint'); // Use hint color for reveal feedback
    guessInput.value = question.answer; // Auto-fill the answer

    // Mark as completed for progression, but it doesn't count for 'correctly answered' achievements
    markPuzzleCompleted(currentLevel, question.id);

    // Disable input and buttons after reveal
    guessInput.disabled = true;
    submitGuessBtn.disabled = true;
    hintBtn.disabled = true;
    revealBtn.disabled = true;
    prevQuestionBtn.disabled = true; // Disable previous question after revealing

    stopTimer(); // Stop the timer

    setTimeout(() => {
        moveToNextPuzzle();
    }, 500); // Wait a bit before moving on
    saveGame();
}

/**
 * Dummy function for sharing progress.
 */
function shareProgress() {
    const totalLevels = gameQuestions.length;
    let completedLevelsCount = 0;
    // Count truly completed levels (all 30 puzzles marked as completed in that level)
    for (let i = 1; i <= totalLevels; i++) {
        const levelData = gameQuestions[i - 1];
        const isLevelCompleted = levelData.questions.every(q => completedPuzzles[`${i}_${q.id}`]);
        if (isLevelCompleted) {
            completedLevelsCount++;
        }
    }
    const message = `I've completed ${completedLevelsCount} out of ${totalLevels} levels in Guess The Number and have ${userECP} ECP! Can you beat my score? #GuessTheNumber`;

    // Try to use Web Share API if available
    if (navigator.share) {
        navigator.share({
            title: 'My Guess The Number Progress',
            text: message,
            url: window.location.href // Current game URL
        }).then(() => {
            console.log('Share successful');
        }).catch((error) => {
            console.error('Share failed', error);
            // Fallback to prompt if share fails or is cancelled
            prompt("Share your progress! Copy this message:", message);
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        prompt("Share your progress! Copy this message:", message);
    }
}

// --- 7. Event Listeners ---

// Intro Screen
introPlayGameBtn.addEventListener('click', () => {
    showScreen(gameMenuScreen);
    updateECPDisplay(); // Ensure ECP is updated on menu screen
});

// Game Menu Screen
backToGamesBtn.addEventListener('click', () => {
    // This button implies there might be other games. For now, it could go back to intro or just stay
    // Let's assume it goes back to the intro screen.
    showScreen(introScreen);
});

achievementsBtnMenu.addEventListener('click', () => {
    renderAchievements(); // Ensure achievements are up-to-date
    achievementsModal.classList.add('active');
});

themeBtnMenu.addEventListener('click', () => {
    themeModal.classList.add('active');
});

startGameFromMenuBtn.addEventListener('click', () => {
    showScreen(levelSelectionScreen);
    renderPuzzleGrid();
    updateECPDisplay();
});

// Modals
modalCloseButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.target.closest('.modal').classList.remove('active');
    });
});

// Theme Options (Inside Theme Modal)
themeOptions.addEventListener('click', (event) => {
    if (event.target.classList.contains('theme-option')) {
        const selectedTheme = event.target.dataset.theme;
        applyTheme(selectedTheme);
        themeModal.classList.remove('active'); // Close modal after selection
    }
});


// Level Selection Screen
achievementsBtnLevel.addEventListener('click', () => {
    renderAchievements(); // Ensure achievements are up-to-date
    achievementsModal.classList.add('active');
});

prevLevelBtn.addEventListener('click', goToPrevLevel);
nextLevelBtn.addEventListener('click', goToNextLevel);

shareProgressBtn.addEventListener('click', shareProgress);


// Game Play Screen
submitGuessBtn.addEventListener('click', checkAnswer);
guessInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default form submission if any
        checkAnswer();
    }
});

prevQuestionBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        const currentLevelData = gameQuestions[currentLevel - 1];
        loadQuestion(currentLevel, currentLevelData.questions[currentQuestionIndex].id);
    }
    // Else, the button should be disabled, which it is if currentQuestionIndex === 0
});

hintBtn.addEventListener('click', giveHint);
revealBtn.addEventListener('click', revealAnswer);
shareGameBtn.addEventListener('click', shareProgress); // Share current game/level progress


// --- 8. Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    loadGame(); // Load game state first
    showScreen(introScreen); // Always start on the intro screen
});
