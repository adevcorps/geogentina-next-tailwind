import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import imgUp from '../../assets/up.svg';
import imgDown from '../../assets/down.svg';

var questions = [
    {
        question: "What is Geogentia and how can it transform my understanding of geospatial data?",
        answer: "Geogentia democratizes access to geospatial intelligence, leveraging Big Data and AI to transform geographical data into actionable insights, helping organizations make informed decisions."
    },
    {
        question: "What makes Geogentia Lens a unique tool in geospatial intelligence?",
        answer: "Geogentia democratizes access to geospatial intelligence, leveraging Big Data and AI to transform geographical data into actionable insights, helping organizations make informed decisions."
    },
    {
        question: "How extensive is Geogentia's data repository, and what does it offer?",
        answer: "Geogentia boasts the industry's richest data repository, with over 3 years of comprehensive geospatial data and more than 22 trillion data points for instant, actionable insights."
    },
    {
        question: "How can Geogentia help my organization anticipate trends and solve complex problems?",
        answer: "By integrating geospatial intelligence, Big Data, and AI, Geogentia helps organizations understand their world better, anticipate trends, and create robust solutions to complex challenges."
    },
    {
        question: "How can I experience Geogentia's capabilities firsthand?",
        answer: "You can sign up for a free demo and trial to experience how Geogentia transforms raw data into actionable insights and start your journey towards unparalleled geospatial intelligence."
    },
];

const Faq = ({ }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const [answerHeights, setAnswerHeights] = useState<number[]>(
        Array(questions.length).fill(0),
    )

    const toggleQuestion = (idx: number) => {
        setActiveIndex(activeIndex === idx ? null : idx)
        const newAnswerHeights = Array(questions.length).fill(0)
        if (activeIndex !== idx)
            newAnswerHeights[idx] = document.getElementById(
                `answer-${idx}`,
            )?.scrollHeight
        setAnswerHeights(newAnswerHeights)
    }
    return (
        <div id="faq" className="bg-geo-dark-2 w-full">
            <section className="w-full flex items-center justify-center bg-geo-dark px-6">
                <div className="w-full max-w-[1400px] flex flex-col items-center justify-center py-12 md:py-24">
                    <div className="mx-auto max-w-xl text-center">
                        <p className="text-lg leading-8 text-geo-blue">FAQ</p>
                        <h2 className="mt-2 text-3xl leading-[40px] md:text-4xl md:leading-[44px] text-white">Common questions about our geospatial analytics</h2>
                    </div>
                    <div className="w-full md:max-w-2xl lg:max-w-3xl mt-8 md:mt-12">
                        {questions.map(({ question, answer }, idx) => (
                            <div key={idx} data-state="closed" data-orientation="vertical" className="border-b border-slate-500/20">
                                <div
                                    className="hover:cursor-pointer flex justify-between items-center"
                                    onClick={() => toggleQuestion(idx)}
                                >
                                    {/* Title */}
                                    <h3 className=" leading-6 text-geo-green hover:text-geo-green">
                                        <button type="button" aria-controls="radix-:r1:" aria-expanded="false" data-state="closed" data-orientation="vertical" id="radix-:r0:" className="flex flex-1 items-center justify-between py-4 transition-all hover:text-geo-green ease-in-out duration-100 underline-offset-8 [&amp;[data-state=open]>svg]:rotate-180" data-radix-collection-item="">
                                            {question}
                                        </button>
                                    </h3>

                                    {activeIndex === idx ? <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 ">
                                        <path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" >
                                        </path>
                                    </svg> :
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 rotate-180">
                                            <path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" >
                                            </path>
                                        </svg>

                                    }
                                </div>
                                {/* Answer */}
                                <div
                                    id={`answer-${idx}`}
                                    className="overflow-hidden transition-all duration-300 font-light text-slate-500 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                                    style={{ maxHeight: `${answerHeights[idx] || 0}px` }}
                                >
                                    <div className="pb-4 pt-0">
                                        {answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Faq;