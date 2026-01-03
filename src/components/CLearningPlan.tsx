import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

// --- Data extracted from the C Learning Plan ---

const planData = [
  // Week 1
  {
    week: 'Week 1: The Absolute Basics',
    days: [
      { day: 1, topic: 'Introduction & Setup', objectives: "Understand what C is, its history, and where it's used. Set up your development environment (Compiler: GCC, Editor: VS Code, etc.).", tasks: 'Install your compiler and text editor. Compile and run your first "Hello, World!" program.' },
      { day: 2, topic: 'Basic Syntax & I/O', objectives: 'Learn the structure of a C program (`main()` function, headers). Learn to print output (`printf()`). Learn to get user input (`scanf()`).', tasks: 'Write a program that asks for the user\'s name and prints "Hello, [Name]!". Caution: Learn why `scanf()` with strings can be unsafe (buffer overflow).' },
      { day: 3, topic: 'Variables & Data Types I', objectives: 'Understand what a variable is. Learn core data types: `int`, `float`, `char`. Learn to declare and initialize variables.', tasks: 'Write a program that declares variables of each type, assigns them values, and prints them. Calculate the area of a rectangle with hard-coded values.' },
      { day: 4, topic: 'Variables & Data Types II', objectives: 'Learn `double` and `long`. Understand type casting (implicit and explicit). Learn about constants (`const` keyword).', tasks: 'Write a program that takes two integers from the user, casts them to `float`, and performs division, printing the result.' },
      { day: 5, topic: 'Operators I: Arithmetic', objectives: 'Learn arithmetic operators (`+`, `-`, `*`, `/`, `%`). Understand operator precedence and associativity.', tasks: 'Write a program that converts Fahrenheit to Celsius. (`C = (F - 32) * 5 / 9`). Write a program that takes a 3-digit number and prints the sum of its digits.' },
      { day: 6, topic: 'Operators II: Relational & Logical', objectives: 'Learn relational (`==`, `!=`, `>`, `<`, `>=`, `<=`) and logical (`&&`, `||`, `!`) operators.', tasks: 'Write a program that asks for a user\'s age and prints whether they are eligible to vote (>= 18). Check if a number is both even and positive.' },
      { day: 7, topic: 'Weekly Project 1', objectives: 'Consolidate all concepts from Week 1.', tasks: 'Start Weekly Project 1: Simple Calculator. (Details in "Weekly Projects" section).' },
    ]
  },
  // Week 2
  {
    week: 'Week 2: Control Flow & Functions',
    days: [
      { day: 8, topic: 'Control Flow: `if`, `else if`, `else`', objectives: 'Learn to make decisions in your code. Understand how `if-else` blocks work. Practice nested `if` statements.', tasks: 'Write a program that finds the largest of three numbers given by the user. Write a program that checks if a year is a leap year.' },
      { day: 9, topic: 'Control Flow: `switch`', objectives: 'Learn an alternative to long `if-else if` chains. Understand `case`, `break`, and `default`.', tasks: 'Write a program that takes a number 1-7 and prints the corresponding day of the week.' },
      { day: 10, topic: 'Loops: `while` & `do-while`', objectives: 'Learn how to repeat blocks of code. Understand the difference between `while` (pre-test) and `do-while` (post-test).', tasks: 'Write a program to print numbers from 1 to 10. Write a program that keeps asking the user for a number until they enter 0.' },
      { day: 11, topic: 'Loops: `for`', objectives: 'Learn the most common loop structure. Understand its three parts: initialization, condition, increment. Practice nested loops.', tasks: 'Write a program to print a multiplication table (e.g., 5x1=5, 5x2=10...). Write a program to print a half-pyramid of stars (`*`).' },
      { day: 12, topic: 'Functions I: Basics', objectives: 'Understand the "Divide and Conquer" principle. Learn to define, declare (prototype), and call functions.', tasks: 'Write a function `printGreeting()` that prints "Welcome!" and call it from `main()`. Write a function `addTwoNumbers()` that takes two `int`s and returns their sum.' },
      { day: 13, topic: 'Functions II: Scope & Storage', objectives: 'Learn about `return` values. Understand "pass by value". Learn about local vs. global variables and scope.', tasks: 'Create a function `isEven()` that takes an `int` and returns 1 (true) if even, 0 (false) if odd. Use this in `main()` to check a user\'s number.' },
      { day: 14, topic: 'Weekly Project 2', objectives: 'Consolidate control flow and functions.', tasks: 'Start Weekly Project 2: Number Guessing Game. (Details in "Weekly Projects" section).' },
    ]
  },
  // Week 3
  {
    week: 'Week 3: Pointers, Arrays & Strings',
    days: [
      { day: 15, topic: 'Pointers I: The Core', objectives: 'This is crucial! Understand what a pointer is (a variable holding an address). Learn the `&` (address-of) and `*` (dereference) operators.', tasks: 'Declare an `int` variable, assign it a value. Declare a pointer to `int`. Store the address of the variable in the pointer. Print the variable\'s value, its address, the pointer\'s value (the address), and the value at the pointer\'s address (`*ptr`).' },
      { day: 16, topic: 'Pointers II: Pointers & Functions', objectives: 'Learn about `NULL` pointers. Understand "pass by reference" by passing pointers to functions.', tasks: 'Write a `swap()` function that takes two `int` pointers and swaps the values of the variables they point to. Test it in `main()`.' },
      { day: 17, topic: 'Arrays I: Basics', objectives: 'Learn to store collections of data. Declare, initialize, and access array elements. Loop through arrays.', tasks: 'Declare an array of 5 integers. Ask the user to fill it. Print the sum and average of the elements in the array.' },
      { day: 18, topic: 'Arrays II: Pointers & Arrays', objectives: 'Understand the deep relationship between arrays and pointers. Learn that an array name decays to a pointer to its first element.', tasks: 'Write a function `sumArray()` that takes an `int` pointer and a `size` and returns the sum. Call it from `main()` by passing the array name.' },
      { day: 19, topic: 'Strings I: (Arrays of `char`)', objectives: 'Understand that strings in C are null-terminated (`\\0`) character arrays. Learn to initialize strings.', tasks: 'Write a program that asks for the user\'s first name, stores it in a `char` array, and prints it. Implement your own `strlen()` function that counts chars until `\\0`.' },
      { day: 20, topic: 'Strings II: `<string.h>`', objectives: 'Learn the standard string library. Use `strlen()`, `strcpy()` (safe: `strncpy()`), `strcat()` (safe: `strncat()`), `strcmp()`.', tasks: 'Write a program that takes two strings from the user and prints whether they are equal or not (using `strcmp()`).' },
      { day: 21, topic: 'Weekly Project 3', objectives: 'Consolidate pointers, arrays, and strings.', tasks: 'Start Weekly Project 3: Simple To-Do List Manager. (Details in "Weekly Projects" section).' },
    ]
  },
  // Week 4
  {
    week: 'Week 4: Advanced Data Structures & File I/O',
    days: [
      { day: 22, topic: 'Multidimensional Arrays', objectives: 'Learn to create 2D arrays (matrices). Understand how they are stored in memory. Pass 2D arrays to functions.', tasks: 'Write a program to initialize a 3x3 matrix. Ask the user to input values and print the matrix in a grid format. Calculate the sum of the main diagonal.' },
      { day: 23, topic: 'Structures (`struct`) I', objectives: 'Learn to create your own custom data types. Define a `struct`, declare variables of it, and access members using the `.` (dot) operator.', tasks: 'Define a `struct Student` with members `name` (char array), `rollNumber` (int), and `gpa` (float). Create a `Student` variable, fill its data, and print it.' },
      { day: 24, topic: 'Structures (`struct`) II', objectives: 'Learn to create arrays of `structs`. Learn how to use pointers to `structs` and the `->` (arrow) operator. Pass `structs` to functions.', tasks: 'Create an array of 3 `Student` structs. Get data from the user for all 3. Write a function `printStudent(struct Student s)` to print a student\'s details. Loop and call this function.' },
      { day: 25, topic: 'Dynamic Memory (Heap)', objectives: 'Understand Stack vs. Heap memory. Learn to allocate memory at runtime using `malloc()`. Learn to free memory using `free()`.', tasks: 'Ask the user how many numbers they want to store. Dynamically allocate an `int` array of that size using `malloc()`. Fill it, print the sum, and then `free()` the memory.' },
      { day: 26, topic: 'File I/O I: Basics', objectives: 'Learn to make data persistent. Understand the `FILE` pointer. Learn to open (`fopen()`), close (`fclose()`), and write to files (`fputc()`, `fprintf()`).', tasks: 'Write a program that asks the user for a line of text and writes it to a file named `output.txt`.' },
      { day: 27, topic: 'File I/O II: Reading', objectives: 'Learn to read from files (`fgetc()`, `fscanf()`, `fgets()`). Understand "modes" (`"r"`, `"w"`, `"a"`).', tasks: 'Write a program that reads the `output.txt` file created yesterday and prints its contents to the console, character by character.' },
      { day: 28, topic: 'Weekly Project 4', objectives: 'Consolidate structs, dynamic memory, and file I/O.', tasks: 'Start Weekly Project 4: Basic Contact Book. (Details in "Weekly Projects" section).' },
    ]
  },
  // Week 5
  {
    week: 'Week 5: Review & Final Project',
    days: [
      { day: 29, topic: 'Review & Preprocessor', objectives: 'Review key "tricky" topics: Pointers, Dynamic Memory. Learn about preprocessor directives: `#include`, `#define`, `#ifdef`.', tasks: 'Create a header file `mymath.h` with a `#define` for PI and a function prototype for your `addTwoNumbers()` function. Create `mymath.c` with the definition. Use `#include "mymath.h"` in your `main.c` and call the function.' },
      { day: 30, topic: 'Final Mini-Project', objectives: 'Integrate all concepts from the 30-day plan.', tasks: 'Start Final Project: Simple Library Management System. (Details in "Final Mini-Project" section).' },
    ]
  }
];

const projectsData = [
  {
    title: 'Week 1: Simple Calculator',
    objective: 'Practice basic I/O, variables, and operators.',
    description: 'Write a program that asks the user for two numbers and an operator (+, -, *, /).',
    tasks: [
      'Get two `float` numbers from the user.',
      'Get a `char` for the operator.',
      'Use an `if-else if-else` chain or a `switch` statement to perform the correct operation.',
      'Print the result (e.g., "10.0 + 5.0 = 15.0").',
      'Handle the case for division by zero.',
    ],
  },
  {
    title: 'Week 2: Number Guessing Game',
    objective: 'Practice loops, conditional logic, and functions.',
    description: 'The program generates a random secret number within a range (e.g., 1-100), and the user has a limited number of attempts to guess it.',
    tasks: [
      'Generate a random number (you\'ll need to look up `#include <stdlib.h>` and use `rand()` and `srand()`).',
      'Use a `while` or `for` loop to limit the user to e.g., 7 guesses.',
      'Inside the loop, get the user\'s guess.',
      'Use `if-else` to tell the user if their guess is "Too high!", "Too low!", or "Correct!".',
      'If correct, congratulate them and `break` the loop.',
      'If they run out of guesses, tell them the correct number.',
    ],
  },
  {
    title: 'Week 3: Simple To-Do List Manager',
    objective: 'Practice arrays, strings, and functions. This will stretch your skills.',
    description: 'A command-line menu to add, view, and delete tasks.',
    tasks: [
      'Use a 2D `char` array (e.g., `char tasks[10][100];`) to store up to 10 tasks, each up to 99 characters.',
      'Use an `int task_count` to track how many tasks are active.',
      'Create a main `while(1)` loop with a menu: "1. Add Task, 2. View Tasks, 3. Delete Task, 4. Exit".',
      'Use a `switch` statement to handle the user\'s choice.',
      '**Add Task:** Prompts for a task string, copies it to the `tasks` array using `strcpy()`, and increments `task_count`.',
      '**View Tasks:** Loops from `0` to `task_count` and prints each task.',
      '**Delete Task (Simple version):** Ask for the task number to delete. Shift all subsequent tasks up by one. Decrement `task_count`.',
    ],
  },
  {
    title: 'Week 4: Basic Contact Book',
    objective: 'Practice `structs`, arrays of `structs`, and basic file I/O.',
    description: 'A program to save and load contact information (name, phone) to a file.',
    tasks: [
      'Define a `struct Contact` with `name` (char array) and `phone` (char array).',
      'Create a global array `struct Contact book[100];` and an `int contact_count`.',
      'Create functions: `addContact()`, `viewContacts()`, `saveToFile()`, `loadFromFile()`.',
      '`saveToFile()`: Opens `contacts.txt` in `"w"` mode. Loops through the array and uses `fprintf()` to write each contact\'s data, one per line.',
      '`loadFromFile()`: Opens `contacts.txt` in `"r"` mode. Uses `fscanf()` in a loop to read data back into the `book` array, setting `contact_count`.',
      'Call `loadFromFile()` at the start of `main()` and `saveToFile()` before exiting.',
    ],
  },
  {
    title: 'Final Mini-Project (Day 30): Simple Library Management System',
    objective: 'Integrate all concepts from the 30-day plan.',
    description: 'This project integrates everything: control flow, functions, pointers, `structs`, dynamic memory, and file I/O. Create a menu-driven program to manage a collection of books.',
    tasks: [
      '**`struct Book`:** Define a structure with `title` (char*), `author` (char*), and `isbn` (int).',
      '**Dynamic Array:** Instead of a fixed-size array, use `malloc()` to create an array of `struct Book` pointers (`struct Book** library`). Use `realloc()` to grow this array as more books are added.',
      '**Menu:** Create a main `while` loop with a menu: 1. Add Book, 2. List All Books, 3. Find Book by Title, 4. Save Library, 5. Load Library, 6. Exit.',
      '**Functions:** `addBook()`, `listBooks()`, `findBook()`, `saveLibrary()`, `loadLibrary()`.',
      '**Memory Management:** When exiting, the program must `free()` all dynamically allocated memory (for strings, structs, and the main array). This is critical!',
    ],
  },
];

const resourcesData = {
  books: [
    { title: '"The C Programming Language" (K&R)', description: 'The classic, written by the creators. It\'s dense but definitive.' },
  ],
  websites: [
    { title: 'GeeksforGeeks C Programming', description: 'Excellent for practice problems and clear explanations.' },
    { title: 'TutorialsPoint C Programming', description: 'Good quick reference.' },
    { title: 'cprogramming.com', description: 'Good tutorials, especially on pointers.' },
  ],
  video: [
    { title: 'Harvard\'s CS50x', description: 'The first few weeks are a fantastic, high-energy introduction to C and computer science. (Search for it on edX or YouTube).' },
  ],
  documentation: [
    { title: 'C Standard Library Reference', description: 'Use this to look up functions from headers like `<string.h>` or `<stdio.h>`.' },
    { title: '`man` pages', description: 'On Linux/macOS, type `man printf` in your terminal to get the official documentation.' },
  ]
};

const tipsData = {
  debugging: [
    { title: '`printf` Debugging', description: 'The simplest way. Sprinkle `printf("Here, x = %d\\n", x);` statements in your code to track variables and see where your logic fails.' },
    { title: 'Use a Debugger', description: 'Learn to use `gdb` (command line) or your IDE\'s built-in debugger. It\'s a game-changer. You can step through code line-by-line, inspect variables, and find the *exact* point of failure.' },
    { title: 'Read Compiler Warnings', description: 'Don\'t just look for errors. `gcc -Wall -Wextra` will show you *warnings* that are often bugs in disguise (e.g., "unused variable" or "implicit conversion"). **Treat warnings as errors.**' },
    { title: 'Rubber Ducking', description: 'Explain your code, line-by-line, to an inanimate object (like a rubber duck). You\'ll often find the mistake yourself just by verbalizing it.' },
  ],
  cleanCode: [
    { title: 'Meaningful Names', description: '`int user_age;` is better than `int a;`. `int num_students;` is better than `int n;`.' },
    { title: 'One Function, One Job', description: 'A function should do *one* thing well. `calculateAndPrintSum()` is bad. `int calculateSum()` and `void printSum()` are good.' },
    { title: 'Comments: Comment the *why*, not the *what*.', description: 'Bad: `i = i + 1; // Add one to i` | Good: `// We need to check the next character, so increment the index`' },
    { title: 'Consistent Indentation', description: 'It\'s not optional. It\'s mandatory for readability. Use an auto-formatter in your editor.' },
    { title: 'Avoid "Magic Numbers"', description: 'Bad: `for (i = 0; i < 10; i++)` | Good: `#define MAX_STUDENTS 10` ... `for (i = 0; i < MAX_STUDENTS; i++)`' },
  ]
};

// --- Reusable Icon Component ---
const CodeBracketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5 0-4.5 10.5" />
  </svg>
);

const BookOpenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
  </svg>
);

const LightBulbIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a.75.75 0 0 0 .75-.75v-3.536a.75.75 0 0 0-.57-0.733c-1.252-.303-2.08-1.56-2.08-2.98 0-1.777 1.396-3.23 3.125-3.23s3.125 1.453 3.125 3.23c0 1.42-0.828 2.677-2.08 2.98a.75.75 0 0 0-.57.733v3.536a.75.75 0 0 0 .75.75Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.28 15.22A6.75 6.75 0 0 1 12 21a6.75 6.75 0 0 1-5.28-5.78m10.56 0s-1.03-1.22-2.218-1.22c-1.189 0-2.218 1.22-2.218 1.22m4.436 0M5.16 15.22s1.03-1.22 2.218-1.22c1.189 0 2.218 1.22 2.218 1.22m-4.436 0M12 3v1.125m0 16.75v1.125m0-1.75a.375.375 0 0 1-.375-.375V19.5a.375.375 0 0 1 .375-.375h.001c.207 0 .375.168.375.375v.375a.375.375 0 0 1-.375.375H12ZM16.875 5.125l-.793.793M20.625 12h-1.125m-16.75 0H1.5m16.875 6.875-.793-.793M7.125 5.125l.793.793" />
  </svg>
);

const CalendarDaysIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0h18M5.25 6h.008v.008H5.25V6Zm.75 3h.008v.008H6v-.008Zm0 3h.008v.008H6v-.008Zm0 3h.008v.008H6v-.008Zm3-6h.008v.008H9v-.008Zm0 3h.008v.008H9v-.008Zm0 3h.008v.008H9v-.008Zm3-6h.008v.008H12v-.008Zm0 3h.008v.008H12v-.008Zm0 3h.008v.008H12v-.008Zm3-6h.008v.008H15v-.008Zm0 3h.008v.008H15v-.008Zm0 3h.008v.008H15v-.008Zm3-6h.008v.008H18v-.008Zm0 3h.008v.008H18v-.008Zm0 3h.008v.008H18v-.008Z" />
  </svg>
);

// --- Sub-Components ---

const Header = () => (
  <header className="bg-purple-800 text-white p-6 rounded-t-lg">
    <div className="container mx-auto flex items-center gap-4">
      <CodeBracketIcon />
      <h1 className="text-3xl font-bold">30-Day C Programming Master Plan</h1>
    </div>
    <p className="container mx-auto mt-2 text-purple-200">
      Your intensive guide to learning C from beginner to medium level.
    </p>
  </header>
);

const PlanTable = () => (
<div className="w-full overflow-x-auto sm:overflow-visible -mx-3 sm:mx-0">

    {planData.map((weekData) => (
      <div key={weekData.week} className="mb-8">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4 p-3 bg-slate-100 rounded-lg">{weekData.week}</h2>
        <div className="shadow-lg border border-slate-200 rounded-lg overflow-hidden">
<table className="min-w-[720px] sm:min-w-[900px] bg-purple-100 divide-y divide-slate-200 text-[13px] sm:text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider w-1/12">Day</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider w-2/12">Topic</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider w-4/12">Learning Objectives</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider w-5/12">Daily Practice & Mini-Challenges</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {weekData.days.map((dayData) => (
                <tr key={dayData.day} className="hover:bg-purple-50">
                  <td className="px-4 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-purple-600 text-white font-bold">{dayData.day}</span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm font-medium text-slate-900">{dayData.topic}</div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm text-slate-600" dangerouslySetInnerHTML={{ __html: dayData.objectives.replace(/`([^`]+)`/g, '<code class="bg-slate-200 text-slate-800 px-1 py-0.5 rounded text-xs">$1</code>') }}></div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-sm text-slate-600" dangerouslySetInnerHTML={{ __html: dayData.tasks.replace(/`([^`]+)`/g, '<code class="bg-slate-200 text-slate-800 px-1 py-0.5 rounded text-xs">$1</code>') }}></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ))}
  </div>
);

const WeeklyProjects = () => (
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

    {projectsData.map((project) => (
      <div key={project.title} className="bg-purple-100 p-6 rounded-lg shadow-lg border border-slate-200">
        <h3 className="text-xl font-semibold text-slate-900 mb-2">{project.title}</h3>
        <p className="text-sm font-medium text-purple-700 mb-2"><strong>Objective:</strong> {project.objective}</p>
        <p className="text-sm text-slate-700 mb-4">{project.description}</p>
        <h4 className="font-semibold text-slate-800 mb-2">Tasks:</h4>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
          {project.tasks.map((task, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: task.replace(/`([^`]+)`/g, '<code class="bg-slate-200 text-slate-800 px-1 py-0.5 rounded text-xs">$1</code>') }}></li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const ResourcesAndTips = () => (
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-purple-100 p-4 sm:p-6 rounded-lg shadow-lg border border-slate-200">
      <h3 className="text-xl font-semibold text-slate-900 mb-4">Learning Resources</h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-slate-800 mb-2">Book</h4>
          {resourcesData.books.map(item => <ResourceItem key={item.title} title={item.title} description={item.description} />)}
        </div>
        <div>
          <h4 className="font-semibold text-slate-800 mb-2">Websites</h4>
          {resourcesData.websites.map(item => <ResourceItem key={item.title} title={item.title} description={item.description} />)}
        </div>
        <div>
          <h4 className="font-semibold text-slate-800 mb-2">Video Course</h4>
          {resourcesData.video.map(item => <ResourceItem key={item.title} title={item.title} description={item.description} />)}
        </div>
        <div>
          <h4 className="font-semibold text-slate-800 mb-2">Documentation</h4>
          {resourcesData.documentation.map(item => <ResourceItem key={item.title} title={item.title} description={item.description} />)}
        </div>
      </div>
    </div>

    <div className="space-y-6">
      <div className="bg-purple-100 p-6 rounded-lg shadow-lg border border-slate-200">
        <h3 className="text-xl font-semibold text-slate-900 mb-4">Debugging Tips</h3>
        <div className="space-y-3">
          {tipsData.debugging.map(item => <TipItem key={item.title} title={item.title} description={item.description} />)}
        </div>
      </div>
      <div className="bg-purple-100 p-6 rounded-lg shadow-lg border border-slate-200">
        <h3 className="text-xl font-semibold text-slate-900 mb-4">Clean Code Tips</h3>
        <div className="space-y-3">
          {tipsData.cleanCode.map(item => <TipItem key={item.title} title={item.title} description={item.description} />)}
        </div>
      </div>
    </div>
  </div>
);

const ResourceItem = ({ title, description }: { title: string, description: string }) => (
  <div className="mb-2">
    <p className="text-sm font-medium text-slate-900">{title}</p>
    <p className="text-sm text-slate-600">{description}</p>
  </div>
);

const TipItem = ({ title, description }: { title: string, description: string }) => (
  <div>
    <h5 className="font-semibold text-sm text-slate-800">{title}</h5>
    <p className="text-sm text-slate-600" dangerouslySetInnerHTML={{ __html: description.replace(/`([^`]+)`/g, '<code class="bg-slate-200 text-slate-800 px-1 py-0.5 rounded text-xs">$1</code>') }}></p>
  </div>
);

// --- Main App Component ---

type TabName = 'plan' | 'projects' | 'resources';

const TabButton = ({ label, icon, isActive, onClick }: { label: string, icon: React.ReactNode, isActive: boolean, onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-3 font-medium text-sm rounded-md transition-colors ${
      isActive
        ? 'bg-purple-600 text-white'
        : 'text-slate-600 hover:bg-purple-100 hover:text-slate-900'
    }`}
  >
    {icon}
    {label}
  </button>
);

export default function CLearningPlan() {
  const [activeTab, setActiveTab] = useState<TabName>('plan');
  const navigate = useNavigate();   
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);


  const renderContent = () => {
    switch (activeTab) {
      case 'plan':
        return <PlanTable />;
      case 'projects':
        return <WeeklyProjects />;
      case 'resources':
        return <ResourcesAndTips />;
      default:
        return <PlanTable />;
    }
  };

  return (
<div className="min-h-screen bg-purple-50 font-sans pt-16 pb-8 px-2 sm:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto bg-purple-100 shadow-lg rounded-lg">
        <Header />

        <nav className="border-b border-purple-200 bg-purple-50">
<div className="p-2 sm:p-4 flex flex-wrap gap-2 justify-center">
            <TabButton
              label="30-Day Plan"
              icon={<CalendarDaysIcon />}
              isActive={activeTab === 'plan'}
              onClick={() => setActiveTab('plan')}
            />
            <TabButton
              label="Weekly Projects"
              icon={<BookOpenIcon />}
              isActive={activeTab === 'projects'}
              onClick={() => setActiveTab('projects')}
            />
            <TabButton
              label="Resources & Tips"
              icon={<LightBulbIcon />}
              isActive={activeTab === 'resources'}
              onClick={() => setActiveTab('resources')}
            />
          </div>
        </nav>

        <main className="p-6">
          {renderContent()}
        </main>
        {/* BACK TO COURSES BUTTON */}
<div className="py-10 text-center">
  <Button
    size="lg"
    className="bg-purple-600 text-white hover:bg-purple-700 transition-all"
    onClick={() => navigate("/courses")}
  >
    ← Back to Courses
  </Button>
</div>


        <footer className="border-t border-purple-200 bg-purple-50 p-6 rounded-b-lg text-center">
          <p className="text-sm text-slate-600">Happy coding! Consistency is the key to mastering C.</p>
        </footer>
      </div>
    </div>
  );
}
