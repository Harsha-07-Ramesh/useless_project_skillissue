/* =========================================================
   USELESS SKILL ACADEMY™
   Main Application Logic
========================================================= */


/* =========================================================
   COURSE DATABASE
========================================================= */

const courses = [

    {
        id: "ceiling",
        number: "01",
        icon: "🏢",
        title: "Advanced Ceiling Staring",
        level: "beginner",
        duration: "42 min",
        uselessness: 18,

        description:
            "Develop the ability to observe ceilings with sustained attention, identify suspicious patterns and stare with academic purpose.",

        objectives: [
            "Identify common ceiling phenomena",
            "Develop professional staring posture",
            "Distinguish meaningful patterns from meaningless ones",
            "Maintain observational focus under pressure"
        ],

        lessons: [

            {
                title: "The Science of Looking Up",
                intro:
                    "Ceiling observation is a misunderstood discipline. While ordinary individuals look at ceilings only when absolutely necessary, trained professionals understand that every ceiling contains information.",

                content: `
                    <p>
                        A professional ceiling observer must first understand
                        that staring and observing are not the same activity.
                        Staring is passive. Observation is unnecessarily intentional.
                    </p>

                    <p>
                        Your objective is to maintain visual attention while
                        appearing as though you have discovered something of
                        extraordinary academic significance.
                    </p>
                `,

                tip:
                    "Never look at the ceiling too quickly. A professional observer gives the ceiling time to reveal absolutely nothing.",

                activity: {
                    type: "slider",
                    title: "Calibrate your observation technique",
                    question: "How intensely should you observe the ceiling?",
                    options: []
                }
            },

            {
                title: "Pattern Recognition",
                intro:
                    "Ceilings contain patterns, stains, cracks, fans and other objects that may or may not deserve your attention.",

                content: `
                    <p>
                        Pattern recognition is one of the most advanced skills
                        in ceiling observation. The human brain naturally
                        attempts to identify shapes in random objects.
                    </p>

                    <p>
                        A stain may resemble a continent. A crack may resemble
                        a road. Neither observation has any practical value.
                    </p>
                `,

                tip:
                    "If a ceiling stain resembles a famous person, congratulations. You have discovered absolutely nothing.",

                activity: {
                    type: "choice",
                    title: "Professional Pattern Analysis",
                    question:
                        "You notice a suspicious shape on the ceiling. What should a professional observer do?",
                    options: [
                        "Immediately take a photograph",
                        "Ignore it completely",
                        "Study it for an unnecessarily long time",
                        "Report it to the United Nations"
                    ],
                    correct: 2,
                    feedback:
                        "Correct. Excessive observation is the foundation of professional ceiling expertise."
                }
            },

            {
                title: "Advanced Staring Posture",
                intro:
                    "The physical mechanics of ceiling staring are more complicated than they appear.",

                content: `
                    <p>
                        Head angle, neck position and facial expression all
                        contribute to the perceived professionalism of a
                        ceiling observer.
                    </p>

                    <p>
                        The objective is to appear calm, analytical and
                        completely unconcerned about why you are looking upward.
                    </p>
                `,

                tip:
                    "A slight expression of intellectual concern dramatically increases perceived expertise.",

                activity: {
                    type: "choice",
                    title: "Choose your professional posture",
                    question:
                        "Someone asks why you have been looking at the ceiling for five minutes.",
                    options: [
                        "Say you are bored",
                        "Say 'Interesting...'",
                        "Look away immediately",
                        "Ask them what they think about the ceiling"
                    ],
                    correct: 3,
                    feedback:
                        "Excellent. Redirecting the investigation is an advanced technique."
                }
            },

            {
                title: "The Final Ceiling",
                intro:
                    "You have now acquired the foundational abilities required to stare professionally.",

                content: `
                    <p>
                        The final stage involves combining observation,
                        posture and confidence into a single useless skill.
                    </p>

                    <p>
                        At this stage, you are no longer simply looking upward.
                        You are conducting an investigation into nothing.
                    </p>
                `,

                tip:
                    "When in doubt, continue staring. Stopping may suggest that you have found the ceiling uninteresting.",

                activity: {
                    type: "choice",
                    title: "Final professional decision",
                    question:
                        "Your ceiling contains absolutely nothing interesting. What do you do?",
                    options: [
                            "Leave immediately",
                            "Continue observing because professionals do not give up",
                            "Start painting the ceiling",
                            "File a research paper"
                    ],
                    correct: 1,
                    feedback:
                        "Precisely. Your commitment to pointlessness is impressive."
                }
            }
        ],

        quiz: [
            {
                q: "What separates staring from professional observation?",
                options: [
                    "Looking upward",
                    "Intentional attention",
                    "Closing your eyes",
                    "Taking notes"
                ],
                answer: 1
            },
            {
                q: "What should you do when you see a suspicious ceiling stain?",
                options: [
                    "Ignore it",
                    "Study it excessively",
                    "Paint over it",
                    "Call the police"
                ],
                answer: 1
            },
            {
                q: "What improves perceived expertise?",
                options: [
                    "Running away",
                    "Looking confused",
                    "Controlled posture",
                    "Sleeping"
                ],
                answer: 2
            },
            {
                q: "A professional ceiling observer should:",
                options: [
                    "Give up quickly",
                    "Maintain attention",
                    "Look at the floor",
                    "Ask for a certificate first"
                ],
                answer: 1
            },
            {
                q: "What is the primary outcome of this course?",
                options: [
                    "Employment",
                    "Useful knowledge",
                    "Unnecessary confidence",
                    "Engineering qualification"
                ],
                answer: 2
            }
        ]
    },


    {
        id: "queue",
        number: "02",
        icon: "🚶",
        title: "Professional Queue Standing",
        level: "intermediate",
        duration: "51 min",
        uselessness: 20,

        description:
            "Master queue positioning, patience, social uncertainty and the delicate art of pretending you know what the queue is for.",

        objectives: [
            "Identify optimal queue positioning",
            "Maintain your position under uncertainty",
            "Handle queue confusion",
            "Develop advanced patience"
        ],

        lessons: [

            {
                title: "Understanding the Queue",
                intro:
                    "A queue is a social structure in which multiple individuals voluntarily agree to wait for an unknown amount of time.",

                content: `
                    <p>
                        Professional queue standing begins with one fundamental
                        principle: once you join a queue, you must become emotionally
                        invested in remaining there.
                    </p>
                `,

                tip:
                    "Never leave a queue just because you don't know what it is for. You may discover the purpose later.",

                activity: {
                    type: "choice",
                    title: "Queue Intelligence Test",
                    question:
                        "You join a queue but have no idea what it is for. What should you do?",
                    options: [
                        "Immediately leave",
                        "Ask the person at the front",
                        "Stay and discover the purpose later",
                        "Create a new queue"
                    ],
                    correct: 2,
                    feedback:
                        "Correct. Commitment to unexplained waiting is essential."
                }
            },

            {
                title: "Strategic Positioning",
                intro:
                    "Position determines your emotional investment in the queue.",

                content: `
                    <p>
                        Moving forward is generally desirable. However, moving
                        backward is psychologically devastating and should be avoided.
                    </p>
                `,

                tip:
                    "Always remember the person immediately in front of you. They are your temporary academic rival.",

                activity: {
                    type: "slider",
                    title: "Queue Patience Calibration",
                    question: "How patient are you willing to be?",
                    options: []
                }
            },

            {
                title: "Queue Conflict",
                intro:
                    "Every advanced queue eventually experiences uncertainty.",

                content: `
                    <p>
                        Someone may attempt to join the queue in front of you.
                        This creates an important professional decision.
                    </p>
                `,

                tip:
                    "The internationally recognised queue response is a polite but extremely meaningful look.",

                activity: {
                    type: "choice",
                    title: "A Queue Intruder Appears",
                    question:
                        "Someone casually moves in front of you. What is the professional response?",
                    options: [
                            "Start shouting",
                            "Pretend not to notice",
                            "Politely indicate the queue",
                            "Leave the country"
                    ],
                    correct: 2,
                    feedback:
                        "Excellent. Controlled queue enforcement demonstrates maturity."
                }
            },

            {
                title: "Queue Mastery",
                intro:
                    "You have reached the final stage of queue standing.",

                content: `
                    <p>
                        At this stage, you should be able to stand in a queue
                        confidently even when the purpose, duration and outcome
                        remain unknown.
                    </p>
                `,

                tip:
                    "If the queue suddenly moves, move immediately. Hesitation can cost valuable queue territory.",

                activity: {
                    type: "choice",
                    title: "Final Queue Scenario",
                    question:
                        "The entire queue suddenly moves forward. What do you do?",
                    options: [
                            "Remain stationary",
                            "Move with professional urgency",
                            "Run",
                            "Ask everyone why"
                    ],
                    correct: 1,
                    feedback:
                        "Outstanding. Your queue reflexes are developing."
                }
            }
        ],

        quiz: [
            {
                q: "What is the first rule of professional queue standing?",
                options: [
                    "Leave immediately",
                    "Remain committed",
                    "Start a second queue",
                    "Skip everyone"
                ],
                answer: 1
            },
            {
                q: "What should you do when someone cuts the queue?",
                options: [
                    "Politely indicate the queue",
                    "Ignore everything",
                    "Run away",
                    "Celebrate"
                ],
                answer: 0
            },
            {
                q: "What should happen when the queue moves?",
                options: [
                    "Remain still",
                    "Move with it",
                    "Sit down",
                    "Go home"
                ],
                answer: 1
            },
            {
                q: "What skill is most valuable in a queue?",
                options: [
                    "Patience",
                    "Speed reading",
                    "Programming",
                    "Swimming"
                ],
                answer: 0
            },
            {
                q: "The ultimate queue achievement is:",
                options: [
                    "Knowing everything",
                    "Knowing why you joined",
                    "Remaining professional despite uncertainty",
                    "Leaving first"
                ],
                answer: 2
            }
        ]
    },


    {
        id: "hmm",
        number: "03",
        icon: "🤔",
        title: "Mastering “Hmm”",
        level: "intermediate",
        duration: "46 min",
        uselessness: 17,

        description:
            "Study the emotional, intellectual and socially confusing possibilities contained within one extremely small word.",

        objectives: [
            "Identify different forms of 'Hmm'",
            "Understand contextual meaning",
            "Control tone and timing",
            "Respond appropriately"
        ],

        lessons: [

            {
                title: "The Anatomy of Hmm",
                intro:
                    "Few words contain as much ambiguity as 'Hmm'.",

                content: `
                    <p>
                        Depending on tone, duration and context, 'Hmm' can indicate
                        agreement, disagreement, confusion, suspicion, interest,
                        boredom or absolutely nothing.
                    </p>
                `,

                tip:
                    "The longer the Hmm, the greater the perceived intellectual responsibility.",

                activity: {
                    type: "choice",
                    title: "Identify the Hmm",
                    question:
                        "Someone says 'Hmm...' after hearing surprising news. What is the most likely interpretation?",
                    options: [
                            "Excitement",
                            "Processing information",
                            "Ordering food",
                            "Falling asleep"
                    ],
                    correct: 1,
                    feedback:
                        "Correct. The strategic pause indicates information processing."
                }
            },

            {
                title: "Tone Engineering",
                intro:
                    "The same word can become an entirely different communication system through tone.",

                content: `
                    <p>
                        A short 'hmm' may indicate uncertainty.
                        A slow 'hmmmm' may suggest deep investigation.
                        A sharp 'hmm.' may create immediate social tension.
                    </p>
                `,

                tip:
                    "Punctuation is not decoration. It is an emotional weapon.",

                activity: {
                    type: "choice",
                    title: "Select the correct Hmm",
                    question:
                        "You strongly disagree but don't want to say it directly. Which response is most effective?",
                    options: [
                            "Hmm.",
                            "Hmmmm?",
                            "Hmm! 🙂",
                            "Okay."
                    ],
                    correct: 0,
                    feedback:
                        "Correct. The full stop creates maximum controlled ambiguity."
                }
            },

            {
                title: "The Strategic Hmm",
                intro:
                    "Advanced users can deploy 'Hmm' without providing any actual information.",

                content: `
                    <p>
                        This makes the word particularly useful during conversations
                        where you would like to appear thoughtful without committing
                        to an opinion.
                    </p>
                `,

                tip:
                    "When you have no response, 'Hmm' buys approximately three seconds of intellectual credibility.",

                activity: {
                    type: "choice",
                    title: "Conversation Survival",
                    question:
                        "Someone asks you a complicated question and you need time to think.",
                    options: [
                            "Panic",
                            "Say 'Hmm' thoughtfully",
                            "Run",
                            "Change your name"
                    ],
                    correct: 1,
                    feedback:
                        "Excellent. You have successfully purchased three seconds."
                }
            },

            {
                title: "Hmm Mastery",
                intro:
                    "The final stage is knowing when not to use the word at all.",

                content: `
                    <p>
                        True mastery means understanding that silence itself
                        can sometimes communicate more than a carefully deployed Hmm.
                    </p>
                `,

                tip:
                    "The highest form of Hmm is knowing when silence is more confusing.",

                activity: {
                    type: "choice",
                    title: "Final Decision",
                    question:
                        "Someone tells you something completely obvious.",
                    options: [
                            "Hmm.",
                            "Hmmmmmmmmmm.",
                            "Say nothing",
                            "Write a report"
                    ],
                    correct: 2,
                    feedback:
                        "Impressive restraint. True mastery."
                }
            }
        ],

        quiz: [
            {
                q: "What can 'Hmm' communicate?",
                options: [
                    "Only agreement",
                    "Only confusion",
                    "Multiple meanings",
                    "Nothing"
                ],
                answer: 2
            },
            {
                q: "What increases the perceived seriousness of Hmm?",
                options: [
                    "Tone and duration",
                    "Volume only",
                    "Typing speed",
                    "Handwriting"
                ],
                answer: 0
            },
            {
                q: "A thoughtful Hmm can:",
                options: [
                    "Buy thinking time",
                    "Cook food",
                    "Solve equations",
                    "Fix Wi-Fi"
                ],
                answer: 0
            },
            {
                q: "What can punctuation change?",
                options: [
                    "Nothing",
                    "Meaning and tone",
                    "The weather",
                    "Your degree"
                ],
                answer: 1
            },
            {
                q: "The highest form of Hmm mastery involves:",
                options: [
                    "Using it constantly",
                    "Knowing when not to use it",
                    "Shouting it",
                    "Writing it 100 times"
                ],
                answer: 1
            }
        ]
    },


    {
        id: "overthinking",
        number: "04",
        icon: "🧠",
        title: "Introduction to Overthinking",
        level: "beginner",
        duration: "54 min",
        uselessness: 21,

        description:
            "Transform simple decisions into complex mental investigations through unnecessary analysis.",

        objectives: [
            "Identify simple decisions",
            "Generate unnecessary alternatives",
            "Construct hypothetical scenarios",
            "Reach unnecessarily complicated conclusions"
        ],

        lessons: [

            {
                title: "The Simple Decision",
                intro:
                    "Every great overthinking journey begins with an extremely simple question.",

                content: `
                    <p>
                        Consider the decision: "Should I drink water?"
                    </p>

                    <p>
                        An ordinary person drinks water.
                        An advanced overthinker considers timing, quantity,
                        temperature, future thirst and whether drinking water
                        now might somehow influence the rest of the day.
                    </p>
                `,

                tip:
                    "If a decision can be made in five seconds, investigate it for at least twenty minutes.",

                activity: {
                    type: "choice",
                    title: "Begin the spiral",
                    question:
                        "You need to choose between two identical pens. What should you do?",
                    options: [
                            "Pick one",
                            "Compare their histories",
                            "Research ink chemistry",
                            "Ask three friends"
                    ],
                    correct: 2,
                    feedback:
                        "Excellent. You have immediately increased decision complexity."
                }
            },

            {
                title: "Hypothetical Scenarios",
                intro:
                    "A professional overthinker must consider events that will probably never happen.",

                content: `
                    <p>
                        Hypothetical thinking is essential. The more unlikely
                        the scenario, the more emotionally important it becomes.
                    </p>
                `,

                tip:
                    "Always prepare for problems that have never happened and probably never will.",

                activity: {
                    type: "choice",
                    title: "Choose your hypothetical",
                    question:
                        "You sent a message saying 'Okay'. What should you immediately consider?",
                    options: [
                            "Nothing",
                            "Whether the punctuation was appropriate",
                            "Whether they secretly dislike you",
                            "Both B and C"
                    ],
                    correct: 3,
                    feedback:
                        "Outstanding. You have successfully created two unnecessary problems."
                }
            },

            {
                title: "Decision Tree Expansion",
                intro:
                    "Overthinking becomes powerful when one question generates several new questions.",

                content: `
                    <p>
                        The goal is not to reach an answer.
                        The goal is to create more questions.
                    </p>
                `,

                tip:
                    "Every answer should create at least two additional questions.",

                activity: {
                    type: "slider",
                    title: "Overthinking intensity",
                    question: "How deeply would you analyze a simple decision?",
                    options: []
                }
            },

            {
                title: "The Final Non-Decision",
                intro:
                    "True overthinking ends not with an answer, but with exhaustion.",

                content: `
                    <p>
                        After evaluating every possible outcome, the advanced
                        overthinker reaches the final stage: deciding tomorrow.
                    </p>
                `,

                tip:
                    "If you cannot decide, postpone the decision. This is not avoidance. It is advanced analysis.",

                activity: {
                    type: "choice",
                    title: "Final Overthinking Test",
                    question:
                        "After 45 minutes of analysis, what is the correct conclusion?",
                    options: [
                            "Make the decision",
                            "Research more",
                            "Ask someone else",
                            "Decide tomorrow"
                    ],
                    correct: 3,
                    feedback:
                        "Perfect. You have achieved peak useless analysis."
                }
            }
        ],

        quiz: [
            {
                q: "What is the foundation of overthinking?",
                options: [
                    "Simple decisions",
                    "Complex mathematics",
                    "Exercise",
                    "Sleep"
                ],
                answer: 0
            },
            {
                q: "A professional overthinker should consider:",
                options: [
                    "Only realistic outcomes",
                    "Possible hypothetical outcomes",
                    "Nothing",
                    "Only other people's opinions"
                ],
                answer: 1
            },
            {
                q: "What should every answer create?",
                options: [
                    "Silence",
                    "More questions",
                    "A certificate",
                    "A job"
                ],
                answer: 1
            },
            {
                q: "What is advanced overthinking likely to produce?",
                options: [
                    "Instant decisions",
                    "More uncertainty",
                    "Engineering skills",
                    "Money"
                ],
                answer: 1
            },
            {
                q: "The final stage is:",
                options: [
                    "Immediate action",
                    "Decision postponement",
                    "Running",
                    "Sleeping"
                ],
                answer: 1
            }
        ]
    },


    {
        id: "okay",
        number: "05",
        icon: "👌",
        title: "Advanced “Okay” Techniques",
        level: "advanced",
        duration: "48 min",
        uselessness: 19,

        description:
            "Explore the emotional possibilities of the world's most deceptively complicated response.",

        objectives: [
            "Understand contextual Okay",
            "Use punctuation strategically",
            "Control conversational ambiguity",
            "Identify emotional variations"
        ],

        lessons: [

            {
                title: "One Word, Many Meanings",
                intro:
                    "The word 'Okay' appears simple. It is not.",

                content: `
                    <p>
                        Depending on tone, punctuation and timing, Okay can mean
                        agreement, disappointment, anger, confusion or
                        absolutely nothing.
                    </p>
                `,

                tip:
                    "Never underestimate a period after Okay.",

                activity: {
                    type: "choice",
                    title: "Interpretation",
                    question:
                        "What does 'Okay.' most commonly suggest in a tense conversation?",
                    options: [
                            "Excitement",
                            "Controlled disagreement",
                            "Extreme happiness",
                            "Confusion"
                    ],
                    correct: 1,
                    feedback:
                        "Correct. The period has done considerable emotional damage."
                }
            },

            {
                title: "Punctuation Engineering",
                intro:
                    "Advanced practitioners understand that punctuation can completely change emotional interpretation.",

                content: `
                    <p>
                        "Okay", "Okay.", "Okay!", and "Okay..." may all contain
                        the same letters while communicating completely different
                        emotional signals.
                    </p>
                `,

                tip:
                    "Three dots can communicate more uncertainty than three paragraphs.",

                activity: {
                    type: "choice",
                    title: "Choose your Okay",
                    question:
                        "You genuinely agree and want to sound friendly.",
                    options: [
                            "Okay.",
                            "Okay!",
                            "Okay...",
                            "Okaaay."
                    ],
                    correct: 1,
                    feedback:
                        "Correct. The exclamation mark creates positive energy."
                }
            },

            {
                title: "Timing",
                intro:
                    "The delay before an Okay can be more meaningful than the word itself.",

                content: `
                    <p>
                        Instant response may suggest confidence.
                        A delayed response may suggest emotional processing.
                    </p>
                `,

                tip:
                    "A seven-minute delay followed by 'Okay' is technically a communication event.",

                activity: {
                    type: "slider",
                    title: "Response Timing",
                    question: "How dramatic should your response delay be?",
                    options: []
                }
            },

            {
                title: "Okay Mastery",
                intro:
                    "You have now reached the highest academic level of saying Okay.",

                content: `
                    <p>
                        Your final objective is to communicate exactly nothing
                        while making the other person think you communicated something.
                    </p>
                `,

                tip:
                    "The most powerful Okay is the one that creates five minutes of unnecessary interpretation.",

                activity: {
                    type: "choice",
                    title: "Final Okay Challenge",
                    question:
                        "Someone sends a long emotional paragraph. Your response?",
                    options: [
                            "Okay!",
                            "Okay.",
                            "Okay...",
                            "Okay"
                    ],
                    correct: 1,
                    feedback:
                        "Excellent. Minimal words. Maximum interpretation."
                }
            }
        ],

        quiz: [
            {
                q: "What can change the meaning of Okay?",
                options: [
                    "Tone",
                    "Punctuation",
                    "Timing",
                    "All of these"
                ],
                answer: 3
            },
            {
                q: "Which Okay sounds most enthusiastic?",
                options: [
                    "Okay.",
                    "Okay!",
                    "Okay...",
                    "Okay"
                ],
                answer: 1
            },
            {
                q: "A delayed Okay may suggest:",
                options: [
                    "Processing",
                    "Running",
                    "Sleeping",
                    "Cooking"
                ],
                answer: 0
            },
            {
                q: "Why are three dots powerful?",
                options: [
                    "They look fancy",
                    "They create ambiguity",
                    "They are longer",
                    "They are academic"
                ],
                answer: 1
            },
            {
                q: "The advanced Okay practitioner aims to:",
                options: [
                    "Talk more",
                    "Create unnecessary interpretation",
                    "Avoid punctuation",
                    "Write essays"
                ],
                answer: 1
            }
        ]
    },


    {
        id: "busy",
        number: "06",
        icon: "💻",
        title: "Professional Looking Busy",
        level: "advanced",
        duration: "57 min",
        uselessness: 22,

        description:
            "Master the visual language of productivity while accomplishing almost nothing measurable.",

        objectives: [
            "Create the appearance of productivity",
            "Select convincing busy activities",
            "Manage interruptions",
            "Maintain professional appearance"
        ],

        lessons: [

            {
                title: "The Appearance of Productivity",
                intro:
                    "Productivity and the appearance of productivity are two different disciplines.",

                content: `
                    <p>
                        Professional-looking busyness depends primarily on
                        visual signals: focused facial expression, multiple
                        open windows and occasional purposeful scrolling.
                    </p>
                `,

                tip:
                    "Never stare at a blank screen. Open a spreadsheet. Nobody knows what the spreadsheet means.",

                activity: {
                    type: "choice",
                    title: "Busy Mode Selection",
                    question:
                        "Someone walks past your desk. What should be visible?",
                    options: [
                            "A blank desktop",
                            "A spreadsheet containing unexplained numbers",
                            "A game",
                            "A food delivery app"
                    ],
                    correct: 1,
                    feedback:
                        "Excellent. Numbers create immediate academic credibility."
                }
            },

            {
                title: "Strategic Screen Movement",
                intro:
                    "Movement suggests activity. Meaning is optional.",

                content: `
                    <p>
                        Switching between windows frequently creates the
                        impression of multiple simultaneous responsibilities.
                    </p>
                `,

                tip:
                    "If someone approaches, switch windows. The destination does not matter.",

                activity: {
                    type: "slider",
                    title: "Productivity Theatre",
                    question: "How intensely should you appear to be working?",
                    options: []
                }
            },

            {
                title: "The Serious Expression",
                intro:
                    "Facial expression is an underrated productivity signal.",

                content: `
                    <p>
                        A slightly concerned expression suggests that the task
                        is complex and therefore important.
                    </p>
                `,

                tip:
                    "Looking mildly confused is surprisingly effective.",

                activity: {
                    type: "choice",
                    title: "Expression Selection",
                    question:
                        "Which expression communicates the highest perceived workload?",
                    options: [
                            "Smiling peacefully",
                            "Mild intellectual concern",
                            "Extreme happiness",
                            "Sleeping"
                    ],
                    correct: 1,
                    feedback:
                        "Correct. Mild concern communicates invisible responsibility."
                }
            },

            {
                title: "Ultimate Busy Person",
                intro:
                    "You have reached the final stage of professional-looking busyness.",

                content: `
                    <p>
                        The ultimate professional looks busy even when absolutely
                        nothing is happening.
                    </p>
                `,

                tip:
                    "The phrase 'I'll get back to you' is a powerful productivity multiplier.",

                activity: {
                    type: "choice",
                    title: "Final Productivity Scenario",
                    question:
                        "Your work is completely finished but someone asks if you are busy.",
                    options: [
                            "Say no",
                            "Say 'Just finishing something up'",
                            "Leave immediately",
                            "Explain everything"
                    ],
                    correct: 1,
                    feedback:
                        "Outstanding. Your productivity theatre is now complete."
                }
            }
        ],

        quiz: [
            {
                q: "What creates the appearance of productivity?",
                options: [
                    "Visual signals",
                    "Sleeping",
                    "Leaving early",
                    "Doing nothing visibly"
                ],
                answer: 0
            },
            {
                q: "What can create academic credibility?",
                options: [
                    "Random spreadsheets",
                    "Music",
                    "Games",
                    "Food"
                ],
                answer: 0
            },
            {
                q: "What expression works well?",
                options: [
                    "Mild intellectual concern",
                    "Sleepiness",
                    "Laughter",
                    "Shock"
                ],
                answer: 0
            },
            {
                q: "What should happen when someone approaches?",
                options: [
                    "Switch windows",
                    "Close everything",
                    "Run",
                    "Sleep"
                ],
                answer: 0
            },
            {
                q: "The ultimate objective is:",
                options: [
                    "Maximum actual work",
                    "Maximum perceived productivity",
                    "No computer",
                    "More meetings"
                ],
                answer: 1
            }
        ]
    }

];


/* =========================================================
   ACHIEVEMENTS
========================================================= */

const achievements = [

    {
        id: "firstLesson",
        icon: "📖",
        name: "First Lesson Completed",
        description: "Complete your first useless lesson.",
        condition: state => state.totalLessons >= 1
    },

    {
        id: "queue",
        icon: "🚶",
        name: "Queue Veteran",
        description: "Complete Professional Queue Standing.",
        condition: state => state.completedCourses.includes("queue")
    },

    {
        id: "hmm",
        icon: "🤔",
        name: "Master of Hmm",
        description: "Complete Mastering “Hmm”.",
        condition: state => state.completedCourses.includes("hmm")
    },

    {
        id: "ceiling",
        icon: "🏢",
        name: "Ceiling Observation Expert",
        description: "Complete Advanced Ceiling Staring.",
        condition: state => state.completedCourses.includes("ceiling")
    },

    {
        id: "overthink",
        icon: "🧠",
        name: "Certified Overthinker",
        description: "Complete Introduction to Overthinking.",
        condition: state => state.completedCourses.includes("overthinking")
    },

    {
        id: "timewaster",
        icon: "👀",
        name: "Professional Time Waster",
        description: "Complete any three courses.",
        condition: state => state.completedCourses.length >= 3
    }
];


/* =========================================================
   STATE
========================================================= */

let state = {

    studentName: "",

    enrolled: [],

    progress: {},

    completedLessons: {},

    quizCompleted: {},

    quizScores: {},

    completedCourses: [],

    achievements: [],

    certificates: [],

    activities: [],

    uselessness: 0
};

let currentCourse = null;
let currentLesson = 0;
let currentQuizAnswers = [];
let currentQuizIndex = 0;


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    loadState();

    if (state.studentName) {
        enterApplication();
    }

    renderRecommended();

});


/* =========================================================
   LOCAL STORAGE
========================================================= */

function saveState() {

    localStorage.setItem(
        "uselessAcademyState",
        JSON.stringify(state)
    );
}


function loadState() {

    const saved = localStorage.getItem("uselessAcademyState");

    if (saved) {

        try {

            state = JSON.parse(saved);

        } catch {

            console.log("Starting fresh.");

        }

    }

}


/* =========================================================
   LOGIN
========================================================= */

function showLogin() {

    document.getElementById("loginModal")
        .classList.remove("hidden");

    setTimeout(() => {

        document.getElementById("studentNameInput").focus();

    }, 100);

}


function closeLogin() {

    document.getElementById("loginModal")
        .classList.add("hidden");

}


function enterAcademy() {

    const input =
        document.getElementById("studentNameInput");

    const name =
        input.value.trim();

    if (!name) {

        input.style.borderColor = "var(--danger)";

        input.placeholder =
            "Please enter your highly unnecessary name.";

        return;
    }

    state.studentName = name;

    saveState();

    closeLogin();

    enterApplication();

    showToast(
        "Welcome to the Academy, " + name + "."
    );

}


function enterApplication() {

    document.getElementById("landingPage")
        .classList.add("hidden");

    document.getElementById("app")
        .classList.remove("hidden");

    updateUserUI();

    renderDashboard();

    renderCourses();

    renderAchievements();

    renderCertificates();

    renderLeaderboard();

}


/* =========================================================
   LOGOUT
========================================================= */

function logout() {

    if (
        confirm(
            "Exit the Academy? Your progress will remain saved."
        )
    ) {

        document.getElementById("app")
            .classList.add("hidden");

        document.getElementById("landingPage")
            .classList.remove("hidden");

    }

}


/* =========================================================
   USER UI
========================================================= */

function updateUserUI() {

    const name =
        state.studentName || "Scholar";

    document.getElementById("headerStudentName")
        .textContent = name;

    document.getElementById("userAvatar")
        .textContent =
        name.charAt(0).toUpperCase();

    document.getElementById("welcomeText")
        .textContent =
        `Welcome back, ${name}.`;

}


/* =========================================================
   VIEW SYSTEM
========================================================= */

function showView(viewName, button = null) {

    document.querySelectorAll(".view")
        .forEach(view => {

            view.classList.remove("active-view");

        });

    const view =
        document.getElementById(viewName + "View");

    if (view) {

        view.classList.add("active-view");

    }

    document.querySelectorAll(".nav-item")
        .forEach(item => {

            item.classList.remove("active");

        });

    if (button) {

        button.classList.add("active");

    }

    const titles = {

        dashboard: "Dashboard",

        courses: "Course Library",

        courseDetail: "Course Details",

        lesson: "Lesson",

        quiz: "Final Assessment",

        achievements: "Achievements",

        certificates: "Certificates",

        leaderboard: "Leaderboard"

    };

    document.getElementById("pageTitle")
        .textContent =
        titles[viewName] || "Dashboard";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (viewName === "dashboard") {
        renderDashboard();
    }

    if (viewName === "courses") {
        renderCourses();
    }

    if (viewName === "achievements") {
        renderAchievements();
    }

    if (viewName === "certificates") {
        renderCertificates();
    }

    if (viewName === "leaderboard") {
        renderLeaderboard();
    }

}


/* =========================================================
   COURSE LIBRARY
========================================================= */

function renderCourses(filter = "all") {

    const container =
        document.getElementById("fullCourseGrid");

    const filtered =
        courses.filter(course => {

            return filter === "all" ||
                course.level === filter;

        });

    container.innerHTML = filtered.map(course => {

        const progress =
            getCourseProgress(course.id);

        const enrolled =
            state.enrolled.includes(course.id);

        const completed =
            state.completedCourses.includes(course.id);

        return `

            <div class="full-course-card">

                <div class="course-cover">

                    <div class="course-cover-icon">
                        ${course.icon}
                    </div>

                    <span class="course-level">
                        ${course.level}
                    </span>

                </div>

                <div class="full-course-body">

                    <h3>${course.title}</h3>

                    <p>
                        ${course.description}
                    </p>

                    <div class="course-meta">

                        <span>◷ ${course.duration}</span>

                        <span>
                            ${course.lessons.length} lessons
                        </span>

                        <span>
                            +${course.uselessness}
                        </span>

                    </div>

                    <div class="course-progress">
                        <div style="width:${progress}%"></div>
                    </div>

                    <button
                        class="course-card-btn"
                        onclick="openCourse('${course.id}')"
                    >

                        ${
                            completed
                            ? "View completed course"
                            : enrolled
                            ? progress > 0
                                ? "Continue learning"
                                : "Start course"
                            : "View course"
                        }

                    </button>

                </div>

            </div>

        `;

    }).join("");

}


/* =========================================================
   COURSE FILTER
========================================================= */

function filterCourses(filter, button) {

    document.querySelectorAll(".filter")
        .forEach(btn => {

            btn.classList.remove("active");

        });

    button.classList.add("active");

    renderCourses(filter);

}


/* =========================================================
   OPEN COURSE
========================================================= */

function openCourse(courseId) {

    currentCourse =
        courses.find(
            course => course.id === courseId
        );

    renderCourseDetail();

    showView("courseDetail");

}


/* =========================================================
   COURSE DETAIL
========================================================= */

function renderCourseDetail() {

    const course =
        currentCourse;

    const progress =
        getCourseProgress(course.id);

    const enrolled =
        state.enrolled.includes(course.id);

    const completed =
        state.completedCourses.includes(course.id);

    const html = `

        <div class="course-detail-hero">

            <div>

                <span class="detail-label">
                    COURSE ${course.number} • ${course.level.toUpperCase()}
                </span>

                <h2>${course.icon} ${course.title}</h2>

                <p>
                    ${course.description}
                </p>

                <div style="margin-top:25px">

                    ${
                        !enrolled
                        ? `
                            <button
                                class="primary-btn"
                                onclick="enrollCourse('${course.id}')"
                            >
                                Enroll in course →
                            </button>
                        `
                        : completed
                        ? `
                            <button
                                class="primary-btn"
                                onclick="startCourse('${course.id}')"
                            >
                                Review course →
                            </button>
                        `
                        : `
                            <button
                                class="primary-btn"
                                onclick="startCourse('${course.id}')"
                            >
                                ${progress > 0 ? "Continue learning" : "Start course"} →
                            </button>
                        `
                    }

                </div>

            </div>

            <div class="detail-icon">
                ${course.icon}
            </div>

        </div>


        <div class="detail-info-grid">

            <div class="detail-panel">

                <h3>What you will master</h3>

                <div class="objectives">

                    ${course.objectives.map(objective => `

                        <div class="objective">
                            <span>✓</span>
                            <span>${objective}</span>
                        </div>

                    `).join("")}

                </div>

            </div>


            <div class="detail-panel">

                <h3>Course information</h3>

                <div class="detail-stats">

                    <div class="detail-stat">
                        <small>DIFFICULTY</small>
                        <strong>${course.level}</strong>
                    </div>

                    <div class="detail-stat">
                        <small>DURATION</small>
                        <strong>${course.duration}</strong>
                    </div>

                    <div class="detail-stat">
                        <small>LESSONS</small>
                        <strong>4</strong>
                    </div>

                    <div class="detail-stat">
                        <small>USELESSNESS</small>
                        <strong>+${course.uselessness}</strong>
                    </div>

                </div>

            </div>

        </div>


        <div style="margin-top:25px">

            <div class="section-label">
                CURRICULUM
            </div>

            <h3 style="font-family:'Space Grotesk';margin-top:7px">
                Course lessons
            </h3>

            <div class="lesson-list">

                ${course.lessons.map((lesson, index) => {

                    const completedLesson =
                        isLessonCompleted(
                            course.id,
                            index
                        );

                    return `

                        <div
                            class="lesson-row ${completedLesson ? "completed" : ""}"
                            onclick="openLesson(${index})"
                        >

                            <div class="lesson-number">

                                ${
                                    completedLesson
                                    ? "✓"
                                    : String(index + 1).padStart(2, "0")
                                }

                            </div>

                            <div>

                                <strong>
                                    ${lesson.title}
                                </strong>

                                <small>
                                    Interactive lesson • 8–12 min
                                </small>

                            </div>

                            <div class="lesson-status">

                                ${
                                    completedLesson
                                    ? "Completed"
                                    : "Start →"
                                }

                            </div>

                        </div>

                    `;

                }).join("")}

            </div>

        </div>

    `;

    document.getElementById("courseDetail")
        .innerHTML = html;

}


/* =========================================================
   ENROLL
========================================================= */

function enrollCourse(courseId) {

    if (!state.enrolled.includes(courseId)) {

        state.enrolled.push(courseId);

        state.progress[courseId] = 0;

        addActivity(
            "Enrolled",
            `Enrolled in ${getCourse(courseId).title}`,
            "＋"
        );

        saveState();

        showToast(
            "Course enrolled. Your useless education begins."
        );

    }

    currentCourse =
        getCourse(courseId);

    renderCourseDetail();

    updateDashboard();

}


/* =========================================================
   START COURSE
========================================================= */

function startCourse(courseId) {

    if (!state.enrolled.includes(courseId)) {

        enrollCourse(courseId);

    }

    currentCourse =
        getCourse(courseId);

    let firstIncomplete = 0;

    for (
        let i = 0;
        i < currentCourse.lessons.length;
        i++
    ) {

        if (
            !isLessonCompleted(
                courseId,
                i
            )
        ) {

            firstIncomplete = i;
            break;

        }

    }

    openLesson(firstIncomplete);

}


/* =========================================================
   LESSON
========================================================= */

function openLesson(index) {

    currentLesson = index;

    const course =
        currentCourse;

    const lesson =
        course.lessons[index];

    showView("lesson");

    renderLesson();

}


function renderLesson() {

    const course =
        currentCourse;

    const lesson =
        course.lessons[currentLesson];

    const completed =
        isLessonCompleted(
            course.id,
            currentLesson
        );

    const progress =
        Math.round(
            ((currentLesson) /
                course.lessons.length) * 100
        );

    document.getElementById("lessonContainer")
        .innerHTML = `

        <div class="lesson-top">

            <div class="lesson-number-label">
                LESSON ${currentLesson + 1} OF 4
            </div>

            <div class="lesson-progress-wrap">

                <div class="lesson-progress">

                    <div style="width:${progress}%"></div>

                </div>

            </div>

        </div>


        <div class="lesson-card">

            <span class="section-label">
                ${course.title}
            </span>

            <h2>${lesson.title}</h2>

            <p class="lesson-intro">
                ${lesson.intro}
            </p>

            <div class="lesson-content">

                ${lesson.content}

                <div class="pro-tip">

                    <strong>Professional Tip</strong>

                    <br><br>

                    ${lesson.tip}

                </div>

                ${renderActivity(lesson.activity)}

            </div>


            <div class="lesson-controls">

                <button
                    class="secondary-btn"
                    onclick="previousLesson()"
                    ${
                        currentLesson === 0
                        ? "disabled"
                        : ""
                    }
                >
                    ← Previous
                </button>

                <button
                    id="completeLessonBtn"
                    class="primary-btn"
                    onclick="completeCurrentLesson()"
                >
                    ${
                        completed
                        ? currentLesson === 3
                            ? "Go to final assessment →"
                            : "Next lesson →"
                        : "Complete lesson →"
                    }
                </button>

            </div>

        </div>

    `;

}


/* =========================================================
   ACTIVITY RENDERING
========================================================= */

function renderActivity(activity) {

    if (!activity) {
        return "";
    }


    if (activity.type === "choice") {

        return `

            <div class="activity-box">

                <span>INTERACTIVE ACTIVITY</span>

                <h3>${activity.title}</h3>

                <div class="activity-question">
                    ${activity.question}
                </div>

                <div class="option-grid">

                    ${activity.options.map(
                        (option, index) => `

                            <button
                                class="activity-option"
                                onclick="answerActivity(
                                    ${index},
                                    ${activity.correct},
                                    '${escapeForAttribute(activity.feedback)}'
                                )"
                            >
                                ${option}
                            </button>

                        `
                    ).join("")}

                </div>

                <div
                    id="activityFeedback"
                    class="activity-feedback"
                ></div>

            </div>

        `;

    }


    if (activity.type === "slider") {

        return `

            <div class="activity-box">

                <span>INTERACTIVE ACTIVITY</span>

                <h3>${activity.title}</h3>

                <div class="activity-question">
                    ${activity.question}
                </div>


                <div class="slider-activity">

                    ${createSlider(
                        "Confidence",
                        "How confidently would you perform this skill?"
                    )}

                    ${createSlider(
                        "Intensity",
                        "How seriously would you take it?"
                    )}

                    ${createSlider(
                        "Patience",
                        "How long would you continue?"
                    )}

                </div>

                <button
                    class="primary-btn"
                    style="margin-top:10px"
                    onclick="analyzePersonality()"
                >
                    Analyze my useless personality
                </button>

                <div
                    id="sliderResult"
                    class="activity-feedback"
                ></div>

            </div>

        `;

    }

    return "";

}


function createSlider(label, description) {

    return `

        <div class="slider-row">

            <div class="slider-label">

                <span>
                    ${label}
                </span>

                <span
                    id="value-${label}"
                    class="slider-value"
                >
                    3 / 5
                </span>

            </div>

            <input
                type="range"
                min="1"
                max="5"
                value="3"
                oninput="
                    document.getElementById(
                        'value-${label}'
                    ).textContent =
                    this.value + ' / 5'
                "
            >

        </div>

    `;

}


/* =========================================================
   SLIDER PERSONALITY
========================================================= */

function analyzePersonality() {

    const sliders =
        document.querySelectorAll(
            '.slider-activity input[type="range"]'
        );

    let total = 0;

    sliders.forEach(slider => {

        total += Number(slider.value);

    });

    const average =
        total / sliders.length;

    let result = "";

    if (average >= 4.5) {

        result =
            "EXTREME USELESSNESS: You possess alarming commitment to pointless activities.";

    } else if (average >= 3.5) {

        result =
            "ADVANCED USELESSNESS: You show significant potential.";

    } else if (average >= 2.5) {

        result =
            "MODERATE USELESSNESS: Promising. Society still has a chance.";

    } else {

        result =
            "BEGINNER USELESSNESS: You are still dangerously practical.";

    }

    const resultBox =
        document.getElementById("sliderResult");

    resultBox.textContent =
        result;

    resultBox.classList.add("show");

}


/* =========================================================
   ACTIVITY ANSWER
========================================================= */

function answerActivity(
    selected,
    correct,
    feedback
) {

    const buttons =
        document.querySelectorAll(
            ".activity-option"
        );

    buttons.forEach(
        button => button.classList.remove("selected")
    );

    buttons[selected]
        .classList.add("selected");

    const feedbackBox =
        document.getElementById(
            "activityFeedback"
        );

    if (selected === correct) {

        feedbackBox.innerHTML =
            "✓ " + feedback;

        feedbackBox.classList.add("show");

        showToast(
            "Excellent useless reasoning."
        );

    } else {

        feedbackBox.innerHTML =
            "Not quite. Consider the unnecessarily professional approach.";

        feedbackBox.classList.add("show");

    }

}


/* =========================================================
   COMPLETE LESSON
========================================================= */

function completeCurrentLesson() {

    const course =
        currentCourse;

    const lessonKey =
        `${course.id}_${currentLesson}`;

    const alreadyCompleted =
        isLessonCompleted(
            course.id,
            currentLesson
        );

    if (!alreadyCompleted) {

        if (!state.completedLessons[course.id]) {

            state.completedLessons[course.id] = [];

        }

        state.completedLessons[course.id]
            .push(currentLesson);

        state.totalLessons =
            Object.values(
                state.completedLessons
            ).reduce(
                (total, lessons) =>
                    total + lessons.length,
                0
            );

        addActivity(
            "Lesson completed",
            `${course.title} — Lesson ${currentLesson + 1}`,
            "✓"
        );

        updateAchievements();

        saveState();

        showToast(
            "Lesson completed. Uselessness increased."
        );

    }


    if (currentLesson < 3) {

        currentLesson++;

        renderLesson();

    } else {

        updateCourseProgress();

        startQuiz();

    }

}


/* =========================================================
   LESSON NAVIGATION
========================================================= */

function previousLesson() {

    if (currentLesson > 0) {

        currentLesson--;

        renderLesson();

    }

}


/* =========================================================
   QUIZ
========================================================= */

function startQuiz() {

    currentQuizAnswers =
        new Array(
            currentCourse.quiz.length
        ).fill(null);

    showView("quiz");

    renderQuiz();

}


function renderQuiz() {

    const course =
        currentCourse;

    document.getElementById("quizContainer")
        .innerHTML = `

        <div class="quiz-wrapper">

            <div class="quiz-header">

                <span class="section-label">
                    FINAL ASSESSMENT
                </span>

                <h2>
                    ${course.title}
                </h2>

                <p>
                    Five questions stand between you
                    and your unnecessarily prestigious certificate.
                </p>

            </div>


            ${course.quiz.map(
                (question, index) => `

                    <div class="question-card">

                        <span>
                            QUESTION ${index + 1} / 5
                        </span>

                        <h3>
                            ${question.q}
                        </h3>

                        <div class="quiz-options">

                            ${question.options.map(
                                (option, optionIndex) => `

                                    <button
                                        class="quiz-option ${
                                            currentQuizAnswers[index] === optionIndex
                                            ? "selected"
                                            : ""
                                        }"
                                        onclick="
                                            selectQuizAnswer(
                                                ${index},
                                                ${optionIndex}
                                            )
                                        "
                                    >
                                        ${option}
                                    </button>

                                `
                            ).join("")}

                        </div>

                    </div>

                `
            ).join("")}


            <button
                class="primary-btn quiz-submit"
                onclick="submitQuiz()"
            >
                Submit final assessment →
            </button>

        </div>

    `;

}


function selectQuizAnswer(
    questionIndex,
    answerIndex
) {

    currentQuizAnswers[questionIndex] =
        answerIndex;

    renderQuiz();

}


function submitQuiz() {

    if (
        currentQuizAnswers.some(
            answer => answer === null
        )
    ) {

        showToast(
            "Please answer every question. Academic shortcuts are discouraged."
        );

        return;

    }

    let correct = 0;

    currentCourse.quiz.forEach(
        (question, index) => {

            if (
                question.answer ===
                currentQuizAnswers[index]
            ) {

                correct++;

            }

        }
    );

    const percentage =
        Math.round(
            (correct /
                currentCourse.quiz.length) *
                100
        );

    state.quizCompleted[currentCourse.id] = true;

    state.quizScores[currentCourse.id] =
        percentage;

    addActivity(
        "Assessment completed",
        `${currentCourse.title} — ${percentage}%`,
        "★"
    );

    updateCourseProgress();

    if (percentage >= 60) {

        completeCourse();

    } else {

        saveState();

        renderQuizResult(
            percentage,
            false
        );

    }

}


/* =========================================================
   QUIZ RESULT
========================================================= */

function renderQuizResult(
    percentage,
    passed
) {

    const course =
        currentCourse;

    const icon =
        passed
        ? "🏆"
        : "📚";

    const title =
        passed
        ? "Assessment passed."
        : "A respectable academic struggle.";

    const message =
        passed
        ? `
            Congratulations, Scholar.
            You have successfully completed a skill
            that absolutely nobody requested.
        `
        : `
            You scored ${percentage}%.
            The Academy recommends another attempt.
            Failure is simply uselessness in progress.
        `;

    document.getElementById("quizContainer")
        .innerHTML = `

        <div class="result-card">

            <div class="result-icon">
                ${icon}
            </div>

            <h2>${title}</h2>

            <div class="result-score">
                ${percentage}%
            </div>

            <p>
                ${message}
            </p>

            ${
                passed
                ? `
                    <button
                        class="primary-btn"
                        onclick="showView('dashboard')"
                    >
                        Return to dashboard →
                    </button>
                `
                : `
                    <button
                        class="primary-btn"
                        onclick="startQuiz()"
                    >
                        Attempt again →
                    </button>
                `
            }

        </div>

    `;

}


/* =========================================================
   COURSE COMPLETION
========================================================= */

function completeCourse() {

    const course =
        currentCourse;

    if (
        !state.completedCourses.includes(
            course.id
        )
    ) {

        state.completedCourses.push(
            course.id
        );

        state.progress[course.id] = 100;

        state.uselessness +=
            course.uselessness;

        if (state.uselessness > 100) {

            state.uselessness = 100;

        }

        state.certificates.push(
            course.id
        );

        addActivity(
            "Course completed",
            `${course.title} — Certificate unlocked`,
            "🏆"
        );

        updateAchievements();

        saveState();

        showToast(
            "COURSE COMPLETED. Society remains unaffected."
        );

    }

    renderQuizResult(
        state.quizScores[course.id],
        true
    );

}


/* =========================================================
   COURSE PROGRESS
========================================================= */

function updateCourseProgress() {

    if (!currentCourse) return;

    const course =
        currentCourse;

    const completedLessons =
        state.completedLessons[course.id]
        ? state.completedLessons[course.id].length
        : 0;

    const lessonProgress =
        completedLessons / 4;

    const quizProgress =
        state.quizCompleted[course.id]
        ? 0.2
        : 0;

    const progress =
        Math.min(
            100,
            Math.round(
                (lessonProgress * 80) +
                (quizProgress * 100)
            )
        );

    state.progress[course.id] =
        progress;

    saveState();

}


function getCourseProgress(courseId) {

    return state.progress[courseId] || 0;

}


/* =========================================================
   COMPLETION HELPERS
========================================================= */

function isLessonCompleted(
    courseId,
    index
) {

    return (
        state.completedLessons[courseId] &&
        state.completedLessons[courseId]
            .includes(index)
    );

}


function getCourse(courseId) {

    return courses.find(
        course => course.id === courseId
    );

}


/* =========================================================
   ACHIEVEMENTS
========================================================= */

function updateAchievements() {

    achievements.forEach(
        achievement => {

            if (
                achievement.condition(state) &&
                !state.achievements.includes(
                    achievement.id
                )
            ) {

                state.achievements.push(
                    achievement.id
                );

                addActivity(
                    "Achievement unlocked",
                    achievement.name,
                    achievement.icon
                );

                showToast(
                    `Achievement unlocked: ${achievement.name}`
                );

            }

        }
    );

    saveState();

    renderAchievements();

}


function renderAchievements() {

    const container =
        document.getElementById(
            "achievementGrid"
        );

    if (!container) return;

    container.innerHTML =
        achievements.map(
            achievement => {

                const unlocked =
                    state.achievements
                        .includes(
                            achievement.id
                        );

                return `

                    <div
                        class="
                            achievement-card
                            ${unlocked ? "" : "locked"}
                        "
                    >

                        <div class="badge">
                            ${achievement.icon}
                        </div>

                        <h3>
                            ${achievement.name}
                        </h3>

                        <p>
                            ${achievement.description}
                        </p>

                        <p>
                            ${
                                unlocked
                                ? "✓ UNLOCKED"
                                : "🔒 LOCKED"
                            }
                        </p>

                    </div>

                `;

            }
        ).join("");

}


/* =========================================================
   CERTIFICATES
========================================================= */

function renderCertificates() {

    const container =
        document.getElementById(
            "certificateGrid"
        );

    if (!container) return;

    const completed =
        state.certificates;

    if (!completed.length) {

        container.innerHTML = `

            <div class="panel"
                 style="grid-column:1/-1;text-align:center">

                <h3>
                    No certificates yet.
                </h3>

                <p style="color:var(--muted);margin:10px 0 20px">
                    Complete a course to receive
                    your completely unnecessary qualification.
                </p>

                <button
                    class="primary-btn"
                    onclick="showView('courses')"
                >
                    Find a course
                </button>

            </div>

        `;

        return;

    }


    container.innerHTML =
        completed.map(
            courseId => {

                const course =
                    getCourse(courseId);

                const score =
                    state.quizScores[courseId] || 0;

                const id =
                    generateCertificateId(
                        courseId
                    );

                return `

                    <div class="certificate-card">

                        <div
                            id="certificate-${courseId}"
                            class="certificate-paper"
                        >

                            <small>
                                USELESS SKILL ACADEMY™
                            </small>

                            <h3>
                                CERTIFICATE OF COMPLETION
                            </h3>

                            <p>
                                This certifies that
                            </p>

                            <strong>
                                ${state.studentName}
                            </strong>

                            <p>
                                has successfully completed
                            </p>

                            <strong>
                                ${course.title}
                            </strong>

                            <p>
                                Final Assessment: ${score}%
                            </p>

                            <div class="certificate-seal">
                                U.S.A.
                            </div>

                            <p>
                                Certified in Completely
                                Unnecessary Skills
                            </p>

                            <span class="certificate-id">
                                Certificate ID: ${id}
                            </span>

                            <p>
                                Accredited by absolutely nobody.
                            </p>

                        </div>

                        <button
                            class="print-certificate"
                            onclick="printCertificate('${courseId}')"
                        >
                            Print / Save Certificate
                        </button>

                    </div>

                `;

            }
        ).join("");

}


function generateCertificateId(
    courseId
) {

    const name =
        state.studentName
            .replace(/\s/g, "")
            .toUpperCase()
            .slice(0, 4);

    return `USA-${name}-${courseId.toUpperCase()}-${Math.floor(
        1000 + Math.random() * 9000
    )}`;

}


function printCertificate(courseId) {

    const element =
        document.getElementById(
            `certificate-${courseId}`
        );

    const printWindow =
        window.open(
            "",
            "_blank"
        );

    printWindow.document.write(`

        <html>

        <head>

            <title>
                Useless Skill Academy Certificate
            </title>

            <style>

                body {
                    margin: 0;
                    display: grid;
                    place-items: center;
                    min-height: 100vh;
                    font-family: Arial, sans-serif;
                    background: white;
                }

                .certificate {
                    width: 850px;
                    min-height: 580px;
                    border: 8px double #555;
                    background: #fcfbf4;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    padding: 40px;
                    box-sizing: border-box;
                }

                h1 {
                    font-size: 32px;
                }

                strong {
                    font-size: 24px;
                }

                p {
                    color: #555;
                }

                .seal {
                    width: 60px;
                    height: 60px;
                    border: 2px solid #777;
                    border-radius: 50%;
                    display: grid;
                    place-items: center;
                    margin: 20px;
                    font-size: 11px;
                }

            </style>

        </head>

        <body>

            <div class="certificate">

                ${element.innerHTML}

            </div>

        </body>

        </html>

    `);

    printWindow.document.close();

    printWindow.focus();

    setTimeout(
        () => {
            printWindow.print();
        },
        300
    );

}


/* =========================================================
   DASHBOARD
========================================================= */

function renderDashboard() {

    updateDashboard();

    renderRecommended();

    renderActivities();

}


function updateDashboard() {

    document.getElementById(
        "statEnrolled"
    ).textContent =
        state.enrolled.length;

    document.getElementById(
        "statLessons"
    ).textContent =
        state.totalLessons || 0;

    document.getElementById(
        "statAchievements"
    ).textContent =
        state.achievements.length;

    document.getElementById(
        "dashboardScore"
    ).textContent =
        state.uselessness + "%";

    document.getElementById(
        "circleScore"
    ).textContent =
        state.uselessness + "%";

    document.getElementById(
        "scoreBar"
    ).style.width =
        state.uselessness + "%";

    const circumference =
        327;

    const offset =
        circumference -
        (
            state.uselessness / 100
        ) * circumference;

    document.getElementById(
        "scoreCircle"
    ).style.strokeDashoffset =
        offset;

    document.querySelector(
        ".banner-decoration div"
    ).textContent =
        state.uselessness + "%";


    let message;

    if (state.uselessness === 0) {

        message =
            "Your uselessness journey has not yet begun.";

    } else if (state.uselessness < 25) {

        message =
            "Promising. You remain dangerously practical.";

    } else if (state.uselessness < 50) {

        message =
            "Your usefulness is beginning to decline.";

    } else if (state.uselessness < 75) {

        message =
            "Excellent. Society is becoming increasingly concerned.";

    } else {

        message =
            "Outstanding. You are now professionally useless.";

    }

    document.getElementById(
        "scoreDescription"
    ).textContent =
        message;

    document.getElementById(
        "scoreMessage"
    ).textContent =
        message;


    renderContinueLearning();

}


function renderContinueLearning() {

    const container =
        document.getElementById(
            "continueContent"
        );

    const enrolled =
        state.enrolled;

    if (!enrolled.length) {

        container.innerHTML = `

            <div class="empty-icon">
                ◎
            </div>

            <h3>
                Your academic journey awaits.
            </h3>

            <p>
                Choose a course and begin learning something
                completely unnecessary.
            </p>

            <button
                class="primary-btn"
                onclick="showView('courses')"
            >
                Explore courses
            </button>

        `;

        return;

    }


    let selected =
        enrolled.find(
            id =>
                !state.completedCourses.includes(id)
        );

    if (!selected) {

        selected =
            enrolled[enrolled.length - 1];

    }

    const course =
        getCourse(selected);

    const progress =
        getCourseProgress(course.id);

    container.innerHTML = `

        <div
            class="recommended-card"
            style="border:none;padding:0"
        >

            <div class="rec-icon"
                 style="width:55px;height:55px;font-size:25px">
                ${course.icon}
            </div>

            <div style="flex:1">

                <small style="color:var(--muted)">
                    CONTINUE LEARNING
                </small>

                <strong style="display:block;margin:4px 0">
                    ${course.title}
                </strong>

                <div class="course-progress">
                    <div style="width:${progress}%"></div>
                </div>

                <small style="color:var(--muted)">
                    ${progress}% complete
                </small>

            </div>

            <button
                class="primary-btn"
                onclick="openCourse('${course.id}')"
            >
                →
            </button>

        </div>

    `;

}


/* =========================================================
   RECENT ACTIVITY
========================================================= */

function addActivity(
    title,
    description,
    icon
) {

    if (!state.activities) {

        state.activities = [];

    }

    state.activities.unshift({

        title,
        description,
        icon,
        time: new Date().toLocaleTimeString(
            [],
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        )

    });

    state.activities =
        state.activities.slice(
            0,
            8
        );

}


function renderActivities() {

    const container =
        document.getElementById(
            "activityList"
        );

    if (!container) return;

    if (
        !state.activities ||
        !state.activities.length
    ) {

        container.innerHTML = `

            <div class="empty-activity">
                No activity yet. This is your opportunity.
            </div>

        `;

        return;

    }


    container.innerHTML =
        state.activities.map(
            activity => `

                <div class="activity-item">

                    <div class="activity-icon">
                        ${activity.icon}
                    </div>

                    <div>

                        <strong>
                            ${activity.title}
                        </strong>

                        <small>
                            ${activity.description}
                            • ${activity.time}
                        </small>

                    </div>

                </div>

            `
        ).join("");

}


/* =========================================================
   RECOMMENDATIONS
========================================================= */

function renderRecommended() {

    const container =
        document.getElementById(
            "recommendedList"
        );

    if (!container) return;

    const recommendations =
        courses.slice(0, 3);

    container.innerHTML =
        recommendations.map(
            course => `

                <div
                    class="recommended-card"
                    onclick="openCourse('${course.id}')"
                >

                    <div class="rec-icon">
                        ${course.icon}
                    </div>

                    <div>

                        <strong>
                            ${course.title}
                        </strong>

                        <span>
                            ${course.level}
                            • +${course.uselessness} uselessness
                        </span>

                    </div>

                </div>

            `
        ).join("");

}


/* =========================================================
   LEADERBOARD
========================================================= */

function renderLeaderboard() {

    const container =
        document.getElementById(
            "leaderboardRows"
        );

    if (!container) return;

    const sample =
        [
            {
                name: "Professor Probably",
                courses: 6,
                score: 96
            },

            {
                name: "Scholar A",
                courses: 5,
                score: 87
            },

            {
                name: "The Queue Enthusiast",
                courses: 4,
                score: 79
            },

            {
                name: "Hmm Specialist",
                courses: 3,
                score: 65
            }
        ];


    sample.push({

        name: state.studentName || "You",

        courses:
            state.completedCourses.length,

        score:
            state.uselessness

    });


    sample.sort(
        (a, b) =>
            b.score - a.score
    );


    container.innerHTML =
        sample.map(
            (scholar, index) => `

                <div class="leaderboard-row">

                    <span class="rank">
                        #${index + 1}
                    </span>

                    <div class="scholar">

                        <div class="scholar-avatar">
                            ${scholar.name
                                .charAt(0)
                                .toUpperCase()}
                        </div>

                        <div>

                            <strong>
                                ${scholar.name}
                                ${
                                    scholar.name === state.studentName
                                    ? " (You)"
                                    : ""
                                }
                            </strong>

                            <small>
                                Certified Scholar
                            </small>

                        </div>

                    </div>

                    <span>
                        ${scholar.courses}
                    </span>

                    <span class="uselessness">
                        ${scholar.score}%
                    </span>

                </div>

            `
        ).join("");

}


/* =========================================================
   MOBILE SIDEBAR
========================================================= */

function toggleSidebar() {

    document.querySelector(".sidebar")
        .classList.toggle(
            "mobile-open"
        );

}


/* =========================================================
   LANDING SCROLL
========================================================= */

function scrollToSection(id) {

    const element =
        document.getElementById(id);

    if (element) {

        element.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================================================
   TOAST
========================================================= */

let toastTimeout;

function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );

    document.getElementById(
        "toastMessage"
    ).textContent =
        message;

    toast.classList.add("show");

    clearTimeout(
        toastTimeout
    );

    toastTimeout =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            3000
        );

}


/* =========================================================
   ESCAPE HTML ATTRIBUTE
========================================================= */

function escapeForAttribute(text) {

    return text
        .replace(/'/g, "\\'")
        .replace(/"/g, "&quot;");

}


/* =========================================================
   KEYBOARD SHORTCUT
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter" &&
            !document.getElementById(
                "loginModal"
            ).classList.contains("hidden")
        ) {

            enterAcademy();

        }

    }
);