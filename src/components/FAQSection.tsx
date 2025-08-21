import { useState } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useParallax";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What is Battle Code Champs?",
    answer:
      "Battle Code Champs is a competitive programming platform where developers battle through coding challenges, earn ranks in a medieval Japanese hierarchy, and compete for glory on global leaderboards.",
  },
  {
    question: "Who is this platform for?",
    answer:
      "Our platform is designed for CS students, coding bootcamp graduates, interview preparation seekers, competitive programming enthusiasts, and anyone looking to sharpen their algorithmic problem-solving skills.",
  },
  {
    question: "What programming languages are supported?",
    answer:
      "We support all major programming languages including Python, JavaScript, Java, C++, C#, Go, Rust, TypeScript, and more. You can solve challenges in your preferred language.",
  },
  {
    question: "How does the ranking system work?",
    answer:
      "Progress through five feudal Japanese ranks: Ashigaru (beginner), Shinobi (intermediate), Rōnin (advanced), Hatamoto (expert), and Shōgun (master). Each rank is earned through consistent performance and challenge completion.",
  },
  {
    question: "How to get started with Battle Code Champs?",
    answer:
      "Simply sign up for our waitlist, and once launched, create your account, complete the onboarding challenges, and start your journey from Ashigaru rank. Practice daily to climb the feudal hierarchy.",
  },
  {
    question: "Can I use this for interview preparation?",
    answer:
      "Absolutely! Our challenges are designed to mirror real technical interviews. Practice algorithms, data structures, and problem-solving patterns commonly asked by top tech companies.",
  },
];

const FAQItem = ({
  faq,
  index,
  isOpen,
  onToggle,
  hasIntersected,
}: {
  faq: { question: string; answer: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  hasIntersected: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
      className="group"
    >
      <div className="bg-white/[0.04] backdrop-blur-[25px] backdrop-saturate-150 rounded-3xl border border-white/[0.08] shadow-depth-lg overflow-hidden">
        <button
          onClick={onToggle}
          className="w-full px-8 py-7 text-left flex items-center justify-between transition-all duration-300 hover:bg-white/[0.06]"
        >
          <span className="text-lg font-medium text-white pr-6 leading-relaxed">
            {faq.question}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex-shrink-0"
          >
            <ChevronDown className="w-6 h-6 text-white/60" />
          </motion.div>
        </button>

        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{
            height: { duration: 0.4, ease: [0.4, 0.0, 0.2, 1] },
            opacity: { duration: 0.3, ease: "easeInOut" },
          }}
          className="overflow-hidden"
        >
          <div className="px-8 pb-7 pt-2">
            <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent mb-6" />
            <motion.p
              initial={false}
              animate={{
                y: isOpen ? 0 : -10,
                opacity: isOpen ? 1 : 0,
              }}
              transition={{ duration: 0.3, delay: isOpen ? 0.1 : 0 }}
              className="text-white/75 leading-relaxed font-light text-[16px]"
            >
              {faq.answer}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const FAQSection = () => {
  const { ref: intersectionRef, hasIntersected } = useIntersectionObserver(0.1);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-32 overflow-hidden -mt-1">
      {/* Seamless background blend */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0F1A] via-[#050609] to-[#020306] -z-10" />

      {/* Enhanced glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[300px] rounded-full bg-gradient-to-r from-purple-600/10 to-indigo-600/8 blur-[80px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[250px] rounded-full bg-gradient-to-l from-indigo-600/8 to-blue-600/6 blur-[60px] -z-10" />

      <motion.div
        ref={intersectionRef as any}
        className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8"
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* FAQ Badge with enhanced glass effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-white/[0.08] backdrop-blur-[20px] backdrop-saturate-150 border border-white/[0.12] text-white/80 text-sm font-medium mb-8 shadow-depth-md"
          >
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse shadow-sm"></span>
            FAQ
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tighter text-white mb-6">
            Have a question?
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            Browse through our frequently asked topics.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => toggleQuestion(index)}
              hasIntersected={hasIntersected}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FAQSection;
