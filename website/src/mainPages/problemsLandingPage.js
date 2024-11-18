import React, { useState } from 'react';
import ProgrammingNavbar from '../components/programmingNav';
import background from '../images/problemsLandingPage_background.png';

//example problems for loading in
const initialProblems = [
    { id: 1, title: "Two Sum", difficulty: "Easy", completed: true },
    { id: 2, title: "Fizz Buzz", difficulty: "Easy", completed: false },
    { id: 3, title: "Linked List Traversal", difficulty: "Medium", completed: false },
    { id: 4, title: "Longest Repeating String", difficulty: "Hard", completed: false },
    { id: 5, title: "Binary Search", difficulty: "Hard", completed: false },
    { id: 6, title: "Placeholder", difficulty: "Hard", completed: false },
    { id: 7, title: "Placeholder", difficulty: "Hard", completed: false },
    { id: 8, title: "Placeholder", difficulty: "Hard", completed: false },
  ];

export default function ProblemsHome() {
    const [problems, setProblems] = useState(initialProblems);

    const toggleCompletion = (id) => {
        setProblems((prevProblems) =>
          prevProblems.map((problem) =>
            problem.id === id
              ? { ...problem, completed: !problem.completed }
              : problem
          )
        );
    };
    

    return (
        <div
        style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
        }}
    >
            <ProgrammingNavbar />
            <div className="pt-24 pl-64">
                <h1 className="text-8xl text-pink">Learn by doing</h1>
                {/* Buttons for sorting problems */}
                <div className="flex pt-8 text-pink space-x-4">
                    <button className="rounded-xl px-4 border-2 border-deep-purple hover:bg-deep-purple">Easy</button>
                    <button className="rounded-xl px-4 border-2 border-deep-purple hover:bg-deep-purple">Medium</button>
                    <button className="rounded-xl px-4 border-2 border-deep-purple hover:bg-deep-purple">Hard</button>
                </div>
                <div className="container mx-auto pt-3 pl-0 pr-80">
                    <div className="bg-deep-purple shadow rounded-lg overflow-hidden">
                        <div className="grid grid-cols-3 gap-4 bg-deep-purple p-4 font-bold text-pink">
                        <div>Title</div>
                        <div>Difficulty</div>
                        <div>Completed</div>
                        </div>
                        <div className="max-h-96 overflow-y-auto">
                            {problems.map((problem) => (
                            <div
                                key={problem.id}
                                className="grid grid-cols-3 gap-4 p-4 border-b border-pink last:border-none text-pink"
                            >
                                <div>{problem.title}</div>
                                <div
                                className={
                                    problem.difficulty === "Easy"
                                    ? "text-green-500"
                                    : problem.difficulty === "Medium"
                                    ? "text-yellow"
                                    : "text-red-500"
                                }
                                >
                                {problem.difficulty}
                                </div>
                                <div>
                                <button
                                    onClick={() => toggleCompletion(problem.id)}
                                    className="focus:outline-none"
                                    >
                                    {problem.completed ? (
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="green"
                                        viewBox="0 0 24 24"
                                        className="h-6 w-6"
                                        >
                                        <circle cx="12" cy="12" r="10" />
                                        </svg>
                                    ) : (
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        className="h-6 w-6 text-gray-400"
                                        >
                                        <circle cx="12" cy="12" r="10" />
                                        </svg>
                                    )}
                                    </button>
                                </div>
                            </div>))}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}