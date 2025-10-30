import React, { useState } from "react";
import { Link } from "react-router-dom";

const questions = [
  {
    id: 1,
    question: "What time of day do you most need a calming ritual?",
    options: [
      { value: "morning", label: "Morning – to start my day centered", points: { essentials: 1, classic: 2, reserve: 1 } },
      { value: "afternoon", label: "Afternoon – for a midday reset", points: { essentials: 2, classic: 1, reserve: 1 } },
      { value: "evening", label: "Evening – to unwind and relax", points: { essentials: 1, classic: 1, reserve: 2 } },
      { value: "anytime", label: "Anytime – I love variety", points: { essentials: 1, classic: 2, reserve: 2 } }
    ]
  },
  {
    id: 2,
    question: "How adventurous are you with tea flavors?",
    options: [
      { value: "classic", label: "I prefer familiar, classic teas", points: { essentials: 2, classic: 2, reserve: 0 } },
      { value: "moderate", label: "Open to new blends with some familiarity", points: { essentials: 1, classic: 3, reserve: 1 } },
      { value: "adventurous", label: "Excited to try rare and exotic varieties", points: { essentials: 0, classic: 1, reserve: 3 } }
    ]
  },
  {
    id: 3,
    question: "What's your main goal with a tea ritual?",
    options: [
      { value: "relaxation", label: "Pure relaxation and stress relief", points: { essentials: 2, classic: 1, reserve: 1 } },
      { value: "mindfulness", label: "Building a mindfulness practice", points: { essentials: 1, classic: 2, reserve: 2 } },
      { value: "experience", label: "Exploring craft and artisan experiences", points: { essentials: 0, classic: 2, reserve: 3 } },
      { value: "simplicity", label: "Simple daily comfort", points: { essentials: 3, classic: 1, reserve: 0 } }
    ]
  },
  {
    id: 4,
    question: "How much time can you dedicate to your tea ritual?",
    options: [
      { value: "5min", label: "5 minutes – quick and simple", points: { essentials: 3, classic: 1, reserve: 0 } },
      { value: "10min", label: "10-15 minutes – a mindful pause", points: { essentials: 1, classic: 3, reserve: 1 } },
      { value: "20min", label: "20+ minutes – a full ceremony", points: { essentials: 0, classic: 1, reserve: 3 } }
    ]
  },
  {
    id: 5,
    question: "What appeals to you most about a subscription?",
    options: [
      { value: "value", label: "Great value and essentials", points: { essentials: 3, classic: 1, reserve: 0 } },
      { value: "experience", label: "Complete experience with accessories", points: { essentials: 0, classic: 3, reserve: 1 } },
      { value: "exclusive", label: "Exclusive, limited-edition items", points: { essentials: 0, classic: 1, reserve: 3 } },
      { value: "gift", label: "Gift-worthy presentation", points: { essentials: 0, classic: 2, reserve: 2 } }
    ]
  }
];

const recommendations = {
  essentials: {
    name: "Essentials",
    price: "$29–$35/mo",
    description: "Perfect for your daily ritual! You value simplicity, quality, and a mindful moment in your busy day.",
    benefits: [
      "2 premium teas curated seasonally",
      "Pocket mindfulness guide",
      "Sustainable sourcing guaranteed",
      "Perfect for building a consistent habit"
    ],
    image: "/images/product-image-1.png"
  },
  classic: {
    name: "Classic",
    price: "$45–$55/mo",
    description: "Our most popular choice! You appreciate a complete experience with beautiful accessories and tasting notes.",
    benefits: [
      "3 curated teas with detailed tasting notes",
      "Mindfulness guide + artisan accessory",
      "Gift-ready packaging",
      "Perfect balance of value and experience"
    ],
    image: "/images/product-image-2.png"
  },
  reserve: {
    name: "Reserve",
    price: "$69–$85/mo",
    description: "For the true connoisseur! You seek rare, traceable teas and want to support small-farm craft.",
    benefits: [
      "Rare single-origin micro-lots",
      "Limited-edition artisan accessories",
      "Farm stories and brewing techniques",
      "Exclusive member community access"
    ],
    image: "/images/product-image-3.png"
  }
};

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [scores, setScores] = useState({ essentials: 0, classic: 0, reserve: 0 });

  const handleAnswer = (questionId, option) => {
    const newAnswers = { ...answers, [questionId]: option };
    setAnswers(newAnswers);

    // Calculate scores
    const newScores = { essentials: 0, classic: 0, reserve: 0 };
    Object.values(newAnswers).forEach((answer) => {
      newScores.essentials += answer.points.essentials;
      newScores.classic += answer.points.classic;
      newScores.reserve += answer.points.reserve;
    });
    setScores(newScores);

    // Move to next question or show results
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const getRecommendation = () => {
    const maxScore = Math.max(scores.essentials, scores.classic, scores.reserve);
    if (scores.reserve === maxScore) return "reserve";
    if (scores.classic === maxScore) return "classic";
    return "essentials";
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setScores({ essentials: 0, classic: 0, reserve: 0 });
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    const recommendedTier = getRecommendation();
    const recommendation = recommendations[recommendedTier];

    return (
      <>
        <section className="py-20 bg-[#E9E4D8]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center rounded-full bg-[#9BB7A7] px-4 py-2 text-sm font-medium text-[#2F3E34] mb-4">
                ✓ Quiz Complete
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl tracking-tight">Your Perfect Match</h1>
              <p className="mt-4 text-lg text-[#2B2B2B]/80">Based on your answers, we recommend...</p>
            </div>

            <div className="bg-white rounded-2xl shadow-[0_8px_28px_rgba(47,62,52,0.12)] overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-square lg:aspect-auto overflow-hidden bg-[#F6F3EE]">
                  <img src={recommendation.image} alt={recommendation.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-8 lg:p-10">
                  <div className="inline-flex items-center rounded-full bg-[#9BB7A7]/20 px-3 py-1 text-sm font-medium text-[#2F3E34] mb-4">
                    Recommended for you
                  </div>
                  <h2 className="font-serif text-3xl tracking-tight">{recommendation.name}</h2>
                  <p className="mt-2 text-lg font-medium text-[#2F3E34]">{recommendation.price}</p>
                  <p className="mt-4 text-[#2B2B2B]/80">{recommendation.description}</p>
                  
                  <div className="mt-6 space-y-3">
                    {recommendation.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-1 h-5 w-5 rounded-full bg-[#9BB7A7]/20 flex items-center justify-center flex-shrink-0">
                          <svg className="h-3 w-3 text-[#2F3E34]" viewBox="0 0 12 12" fill="currentColor">
                            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <Link
                      to="/shop"
                      className="inline-flex items-center justify-center rounded-md bg-[#2F3E34] px-6 py-3 text-sm font-medium text-white hover:bg-[#25342B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9BB7A7]"
                    >
                      Start {recommendation.name}
                    </Link>
                    <button
                      onClick={restartQuiz}
                      className="inline-flex items-center justify-center rounded-md border border-[#2F3E34] px-6 py-3 text-sm font-medium text-[#2F3E34] hover:bg-[#2F3E34]/5"
                    >
                      Retake Quiz
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-[#2B2B2B]/70 mb-4">Want to explore all options?</p>
              <Link
                to="/shop"
                className="inline-flex items-center text-sm font-medium text-[#2F3E34] hover:underline"
              >
                View all subscription tiers →
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  const question = questions[currentQuestion];

  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-[#E9E4D8]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl tracking-tight">Find Your Perfect Tea Ritual</h1>
          <p className="mt-4 text-lg text-[#2B2B2B]/80">Answer 5 quick questions to get a personalized recommendation</p>
          
          {/* Progress Bar */}
          <div className="mt-8">
            <div className="flex items-center justify-between text-sm text-[#2B2B2B]/70 mb-2">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-white/50 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#9BB7A7] transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Question */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-[0_8px_28px_rgba(47,62,52,0.12)] p-8 md:p-12">
            <h2 className="font-serif text-2xl sm:text-3xl tracking-tight text-center mb-8">
              {question.question}
            </h2>

            <div className="grid gap-4">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(question.id, option)}
                  className="w-full text-left p-6 rounded-xl border-2 border-black/5 hover:border-[#9BB7A7] hover:bg-[#9BB7A7]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9BB7A7] transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#2B2B2B]/20 group-hover:border-[#9BB7A7] group-hover:bg-[#9BB7A7] transition-all flex items-center justify-center">
                      <span className="text-sm font-medium text-transparent group-hover:text-[#2F3E34]">
                        {String.fromCharCode(65 + index)}
                      </span>
                    </div>
                    <span className="text-base">{option.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {currentQuestion > 0 && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setCurrentQuestion(currentQuestion - 1)}
                className="text-sm text-[#2B2B2B]/70 hover:text-[#2F3E34]"
              >
                ← Back to previous question
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

