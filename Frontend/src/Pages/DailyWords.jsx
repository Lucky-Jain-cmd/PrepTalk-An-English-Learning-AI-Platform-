import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function DailyWords() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [selectedWord, setSelectedWord] = useState(null);
  const [completedWords, setCompletedWords] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');

  const wordCategories = [
    {
      category: "Daily Routine",
      emoji: "🌅",
      color: "from-orange-400 to-red-500",
      words: [
  { 
    word: "Revitalize", 
    hindi: "पुनर्जीवित करना", 
    pronunciation: "ree-vai-tuh-lahyz", 
    example: "A short walk helped me revitalize my energy.", 
    synonyms: ["refresh", "renew", "reenergize"]
  },

  { 
    word: "Scrutinize", 
    hindi: "गहराई से जांचना", 
    pronunciation: "skroo-tuh-nahyz", 
    example: "The professor scrutinized every detail of the research paper.", 
    synonyms: ["examine", "inspect", "analyze"]
  },

  { 
    word: "Consolidate", 
    hindi: "मजबूत करना / एकीकृत करना", 
    pronunciation: "kuhn-sol-uh-deyt", 
    example: "The company plans to consolidate its operations next year.", 
    synonyms: ["combine", "strengthen", "merge"]
  },

  { 
    word: "Rejuvenate", 
    hindi: "ताज़ा करना / पुनर्जीवित करना", 
    pronunciation: "ri-joo-vuh-neyt", 
    example: "A good vacation can rejuvenate your mind and body.", 
    synonyms: ["revive", "refresh", "renew"]
  },

  { 
    word: "Assimilate", 
    hindi: "समझना / आत्मसात करना", 
    pronunciation: "uh-sim-uh-leyt", 
    example: "It takes time to assimilate into a new culture.", 
    synonyms: ["absorb", "adapt", "integrate"]
  },

  { 
    word: "Commence", 
    hindi: "प्रारंभ करना", 
    pronunciation: "kuh-mens", 
    example: "The ceremony will commence at 10 AM sharp.", 
    synonyms: ["begin", "start", "initiate"]
  },

  { 
    word: "Facilitate", 
    hindi: "सुविधा प्रदान करना / आसान बनाना", 
    pronunciation: "fuh-sil-i-teyt", 
    example: "Technology can facilitate faster communication.", 
    synonyms: ["assist", "enable", "simplify"]
  },

  { 
    word: "Culminate", 
    hindi: "अंतिम रूप लेना", 
    pronunciation: "kuhl-muh-neyt", 
    example: "Years of training will culminate in the final competition.", 
    synonyms: ["conclude", "finish", "peak"]
  },

  { 
    word: "Contemplate", 
    hindi: "गंभीरता से सोचना", 
    pronunciation: "kon-tuhm-pleyt", 
    example: "She sat quietly to contemplate her future goals.", 
    synonyms: ["consider", "reflect", "ponder"]
  },

  { 
    word: "Persevere", 
    hindi: "दृढ़ता से लगे रहना", 
    pronunciation: "pur-suh-veer", 
    example: "You must persevere even when things get tough.", 
    synonyms: ["persist", "endure", "continue"]
  }
]

    },
    {
      category: "Emotions & Feelings",
      emoji: "😊",
      color: "from-pink-400 to-purple-500",
      words: [
        { word: "Happy", hindi: "खुश", pronunciation: "hap-ee", example: "I'm so happy to see you!", difficulty: "easy" },
        { word: "Sad", hindi: "उदास", pronunciation: "sad", example: "She felt sad about the news.", difficulty: "easy" },
        { word: "Angry", hindi: "गुस्सा", pronunciation: "ang-gree", example: "He was angry at the delay.", difficulty: "easy" },
        { word: "Excited", hindi: "उत्साहित", pronunciation: "ik-sahy-tid", example: "I'm excited about the trip!", difficulty: "medium" },
        { word: "Nervous", hindi: "घबराया हुआ", pronunciation: "nur-vuhs", example: "I feel nervous before exams.", difficulty: "medium" },
        { word: "Confident", hindi: "आत्मविश्वासी", pronunciation: "kon-fi-duhnt", example: "She is very confident in her skills.", difficulty: "medium" },
        { word: "Worried", hindi: "चिंतित", pronunciation: "wur-eed", example: "Don't be worried, everything will be fine.", difficulty: "medium" },
        { word: "Surprised", hindi: "हैरान", pronunciation: "ser-prahyzd", example: "I was surprised by the gift.", difficulty: "medium" },
        { word: "Grateful", hindi: "आभारी", pronunciation: "greyt-fuhl", example: "I'm grateful for your help.", difficulty: "medium" },
        { word: "Confused", hindi: "भ्रमित", pronunciation: "kuhn-fyoozd", example: "I'm confused about the directions.", difficulty: "medium" },
      ]
    },
    {
      category: "Work & Office",
      emoji: "💼",
      color: "from-blue-400 to-indigo-500",
      words: [
        { word: "Meeting", hindi: "बैठक", pronunciation: "mee-ting", example: "We have a meeting at 10 AM.", difficulty: "easy" },
        { word: "Deadline", hindi: "अंतिम तिथि", pronunciation: "ded-lahyn", example: "The deadline is tomorrow.", difficulty: "medium" },
        { word: "Project", hindi: "परियोजना", pronunciation: "proj-ekt", example: "I'm working on a new project.", difficulty: "easy" },
        { word: "Colleague", hindi: "सहकर्मी", pronunciation: "kol-eeg", example: "My colleagues are very helpful.", difficulty: "medium" },
        { word: "Manager", hindi: "प्रबंधक", pronunciation: "man-i-jer", example: "I need to speak to the manager.", difficulty: "easy" },
        { word: "Task", hindi: "कार्य", pronunciation: "task", example: "I have many tasks to complete.", difficulty: "easy" },
        { word: "Report", hindi: "रिपोर्ट", pronunciation: "ri-pohrt", example: "Please submit the report by Friday.", difficulty: "medium" },
        { word: "Presentation", hindi: "प्रस्तुति", pronunciation: "prez-uhn-tey-shuhn", example: "I'm preparing a presentation.", difficulty: "medium" },
        { word: "Client", hindi: "ग्राहक", pronunciation: "klahy-uhnt", example: "The client is happy with our work.", difficulty: "medium" },
        { word: "Schedule", hindi: "समय-सारणी", pronunciation: "sked-yool", example: "What's your schedule for today?", difficulty: "medium" },
      ]
    },
    {
      category: "Food & Dining",
      emoji: "🍽️",
      color: "from-green-400 to-teal-500",
      words: [
        { word: "Delicious", hindi: "स्वादिष्ट", pronunciation: "dih-lish-uhs", example: "This food is delicious!", difficulty: "medium" },
        { word: "Hungry", hindi: "भूखा", pronunciation: "huhng-gree", example: "I'm very hungry.", difficulty: "easy" },
        { word: "Thirsty", hindi: "प्यासा", pronunciation: "thur-stee", example: "Can I get some water? I'm thirsty.", difficulty: "easy" },
        { word: "Order", hindi: "ऑर्डर देना", pronunciation: "awr-der", example: "I'd like to order pizza.", difficulty: "easy" },
        { word: "Menu", hindi: "मेन्यू", pronunciation: "men-yoo", example: "Can I see the menu, please?", difficulty: "easy" },
        { word: "Bill", hindi: "बिल", pronunciation: "bil", example: "Can I get the bill, please?", difficulty: "easy" },
        { word: "Spicy", hindi: "मसालेदार", pronunciation: "spahy-see", example: "I don't like spicy food.", difficulty: "medium" },
        { word: "Sweet", hindi: "मीठा", pronunciation: "sweet", example: "This dessert is too sweet.", difficulty: "easy" },
        { word: "Fresh", hindi: "ताज़ा", pronunciation: "fresh", example: "I love fresh vegetables.", difficulty: "easy" },
        { word: "Recipe", hindi: "विधि", pronunciation: "res-uh-pee", example: "Can you share the recipe?", difficulty: "medium" },
      ]
    },
    {
      category: "Travel & Directions",
      emoji: "✈️",
      color: "from-cyan-400 to-blue-500",
      words: [
        { word: "Airport", hindi: "हवाई अड्डा", pronunciation: "air-pawrt", example: "I'm going to the airport.", difficulty: "easy" },
        { word: "Ticket", hindi: "टिकट", pronunciation: "tik-it", example: "I booked my ticket online.", difficulty: "easy" },
        { word: "Luggage", hindi: "सामान", pronunciation: "luhg-ij", example: "Where is my luggage?", difficulty: "medium" },
        { word: "Direction", hindi: "दिशा", pronunciation: "dih-rek-shuhn", example: "Can you give me directions?", difficulty: "medium" },
        { word: "Left", hindi: "बाएं", pronunciation: "left", example: "Turn left at the signal.", difficulty: "easy" },
        { word: "Right", hindi: "दाएं", pronunciation: "rahyt", example: "Turn right from here.", difficulty: "easy" },
        { word: "Straight", hindi: "सीधे", pronunciation: "streyt", example: "Go straight ahead.", difficulty: "easy" },
        { word: "Map", hindi: "नक्शा", pronunciation: "map", example: "I need a map of the city.", difficulty: "easy" },
        { word: "Hotel", hindi: "होटल", pronunciation: "hoh-tel", example: "Which hotel are you staying at?", difficulty: "easy" },
        { word: "Destination", hindi: "गंतव्य", pronunciation: "des-tuh-ney-shuhn", example: "What's your destination?", difficulty: "medium" },
      ]
    },
    {
      category: "Shopping",
      emoji: "🛍️",
      color: "from-yellow-400 to-orange-500",
      words: [
        { word: "Price", hindi: "कीमत", pronunciation: "prahys", example: "What's the price of this shirt?", difficulty: "easy" },
        { word: "Discount", hindi: "छूट", pronunciation: "dis-kount", example: "Is there any discount available?", difficulty: "medium" },
        { word: "Size", hindi: "साइज़", pronunciation: "sahyz", example: "Do you have this in a larger size?", difficulty: "easy" },
        { word: "Color", hindi: "रंग", pronunciation: "kuhl-er", example: "I like this color.", difficulty: "easy" },
        { word: "Payment", hindi: "भुगतान", pronunciation: "pey-muhnt", example: "Cash or card payment?", difficulty: "medium" },
        { word: "Receipt", hindi: "रसीद", pronunciation: "ri-seet", example: "Can I have a receipt?", difficulty: "medium" },
        { word: "Exchange", hindi: "बदलना", pronunciation: "iks-cheynj", example: "Can I exchange this item?", difficulty: "medium" },
        { word: "Return", hindi: "वापस करना", pronunciation: "ri-turn", example: "I want to return this product.", difficulty: "medium" },
        { word: "Quality", hindi: "गुणवत्ता", pronunciation: "kwol-i-tee", example: "The quality is very good.", difficulty: "medium" },
        { word: "Brand", hindi: "ब्रांड", pronunciation: "brand", example: "Which brand do you prefer?", difficulty: "easy" },
      ]
    },
    {
      category: "Health & Wellness",
      emoji: "💊",
      color: "from-red-400 to-pink-500",
      words: [
        { word: "Doctor", hindi: "डॉक्टर", pronunciation: "dok-ter", example: "I need to see a doctor.", difficulty: "easy" },
        { word: "Medicine", hindi: "दवाई", pronunciation: "med-uh-sin", example: "Take this medicine twice a day.", difficulty: "medium" },
        { word: "Headache", hindi: "सिरदर्द", pronunciation: "hed-eyk", example: "I have a terrible headache.", difficulty: "medium" },
        { word: "Fever", hindi: "बुखार", pronunciation: "fee-ver", example: "I think I have a fever.", difficulty: "easy" },
        { word: "Exercise", hindi: "व्यायाम", pronunciation: "ek-ser-sahyz", example: "I exercise every morning.", difficulty: "medium" },
        { word: "Healthy", hindi: "स्वस्थ", pronunciation: "hel-thee", example: "Eating vegetables is healthy.", difficulty: "easy" },
        { word: "Hospital", hindi: "अस्पताल", pronunciation: "hos-pi-tl", example: "He is admitted to the hospital.", difficulty: "easy" },
        { word: "Appointment", hindi: "अपॉइंटमेंट", pronunciation: "uh-point-muhnt", example: "I have a doctor's appointment.", difficulty: "medium" },
        { word: "Symptom", hindi: "लक्षण", pronunciation: "simp-tuhm", example: "What are your symptoms?", difficulty: "medium" },
        { word: "Recovery", hindi: "ठीक होना", pronunciation: "ri-kuhv-uh-ree", example: "I wish you a speedy recovery.", difficulty: "medium" },
      ]
    },
    {
      category: "Technology",
      emoji: "💻",
      color: "from-purple-400 to-indigo-500",
      words: [
        { word: "Computer", hindi: "कंप्यूटर", pronunciation: "kuhm-pyoo-ter", example: "My computer is not working.", difficulty: "easy" },
        { word: "Internet", hindi: "इंटरनेट", pronunciation: "in-ter-net", example: "I need internet connection.", difficulty: "easy" },
        { word: "Website", hindi: "वेबसाइट", pronunciation: "web-sahyt", example: "Visit our website for more info.", difficulty: "easy" },
        { word: "Email", hindi: "ईमेल", pronunciation: "ee-meyl", example: "Send me an email.", difficulty: "easy" },
        { word: "Download", hindi: "डाउनलोड", pronunciation: "doun-lohd", example: "You can download the app.", difficulty: "medium" },
        { word: "Upload", hindi: "अपलोड", pronunciation: "uhp-lohd", example: "Please upload your documents.", difficulty: "medium" },
        { word: "Password", hindi: "पासवर्ड", pronunciation: "pas-wurd", example: "Don't share your password.", difficulty: "easy" },
        { word: "Application", hindi: "एप्लिकेशन", pronunciation: "ap-li-key-shuhn", example: "I use many mobile applications.", difficulty: "medium" },
        { word: "Update", hindi: "अपडेट", pronunciation: "uhp-deyt", example: "Please update your software.", difficulty: "medium" },
        { word: "Settings", hindi: "सेटिंग्स", pronunciation: "set-ings", example: "Go to settings to change options.", difficulty: "easy" },
      ]
    },
    {
      category: "Social Interactions",
      emoji: "👋",
      color: "from-teal-400 to-green-500",
      words: [
        { word: "Greet", hindi: "अभिवादन करना", pronunciation: "greet", example: "I always greet my neighbors.", difficulty: "medium" },
        { word: "Introduce", hindi: "परिचय देना", pronunciation: "in-truh-doos", example: "Let me introduce you to my friend.", difficulty: "medium" },
        { word: "Invite", hindi: "आमंत्रित करना", pronunciation: "in-vahyt", example: "I'd like to invite you to dinner.", difficulty: "medium" },
        { word: "Apologize", hindi: "माफी मांगना", pronunciation: "uh-pol-uh-jahyz", example: "I want to apologize for being late.", difficulty: "medium" },
        { word: "Thank", hindi: "धन्यवाद देना", pronunciation: "thangk", example: "Thank you for your help!", difficulty: "easy" },
        { word: "Congratulate", hindi: "बधाई देना", pronunciation: "kuhn-grach-uh-leyt", example: "I want to congratulate you on your success.", difficulty: "hard" },
        { word: "Request", hindi: "अनुरोध करना", pronunciation: "ri-kwest", example: "I have a small request.", difficulty: "medium" },
        { word: "Suggest", hindi: "सुझाव देना", pronunciation: "suhg-jest", example: "Can I suggest something?", difficulty: "medium" },
        { word: "Agree", hindi: "सहमत होना", pronunciation: "uh-gree", example: "I completely agree with you.", difficulty: "easy" },
        { word: "Disagree", hindi: "असहमत होना", pronunciation: "dis-uh-gree", example: "I have to disagree on this point.", difficulty: "medium" },
      ]
    },
    {
      category: "Time & Calendar",
      emoji: "⏰",
      color: "from-indigo-400 to-purple-500",
      words: [
        { word: "Today", hindi: "आज", pronunciation: "tuh-dey", example: "What are you doing today?", difficulty: "easy" },
        { word: "Tomorrow", hindi: "कल", pronunciation: "tuh-mor-oh", example: "See you tomorrow!", difficulty: "easy" },
        { word: "Yesterday", hindi: "कल (बीता हुआ)", pronunciation: "yes-ter-dey", example: "I met him yesterday.", difficulty: "easy" },
        { word: "Week", hindi: "सप्ताह", pronunciation: "week", example: "I'll finish it in a week.", difficulty: "easy" },
        { word: "Month", hindi: "महीना", pronunciation: "muhnth", example: "This month is very busy.", difficulty: "easy" },
        { word: "Year", hindi: "साल", pronunciation: "yeer", example: "Happy New Year!", difficulty: "easy" },
        { word: "Early", hindi: "जल्दी", pronunciation: "ur-lee", example: "I woke up early today.", difficulty: "easy" },
        { word: "Late", hindi: "देर से", pronunciation: "leyt", example: "Sorry, I'm running late.", difficulty: "easy" },
        { word: "Immediately", hindi: "तुरंत", pronunciation: "ih-mee-dee-it-lee", example: "Please come immediately.", difficulty: "hard" },
        { word: "Eventually", hindi: "अंततः", pronunciation: "ih-ven-choo-uh-lee", example: "He will understand eventually.", difficulty: "hard" },
      ]
    },
  ];

  const allWords = wordCategories.flatMap(cat => 
    cat.words.map(w => ({ ...w, category: cat.category, categoryEmoji: cat.emoji, categoryColor: cat.color }))
  );

  const filteredWords = activeCategory === 'all' 
    ? allWords 
    : allWords.filter(w => w.category === activeCategory);

  const getDifficultyColor = (difficulty) => {
    if (difficulty === 'easy') return darkMode ? 'text-green-400' : 'text-green-600';
    if (difficulty === 'medium') return darkMode ? 'text-yellow-400' : 'text-yellow-600';
    return darkMode ? 'text-red-400' : 'text-red-600';
  };

  const toggleWordComplete = (word) => {
    if (completedWords.includes(word)) {
      setCompletedWords(completedWords.filter(w => w !== word));
    } else {
      setCompletedWords([...completedWords, word]);
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-[#0a0e27] to-[#1a1d3a]' : 'bg-gradient-to-br from-[#e8f5e9] via-[#e1f5fe] to-[#f3e5f5]'} transition-colors duration-500`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 ${darkMode ? 'bg-[#0f1729]/90' : 'bg-white/80'} backdrop-blur-lg border-b ${darkMode ? 'border-[#2a3441]' : 'border-gray-200'} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-4 flex justify-between items-center">
          <button 
            onClick={() => navigate('/easy-level')}
            className={`flex items-center gap-2 ${darkMode ? 'text-[#60a5fa] hover:text-[#3b82f6]' : 'text-[#1976d2] hover:text-[#1565c0]'} font-semibold transition-all hover:scale-105`}
          >
            <span className="text-xl">←</span>
            <span>Back to Topics</span>
          </button>
          
          <div className="flex items-center gap-3">
            <div className={`hidden sm:flex items-center gap-2 ${darkMode ? 'bg-[#1e293b]' : 'bg-blue-100'} px-4 py-2 rounded-full`}>
              <span className="text-xl">🧩</span>
              <span className={`font-semibold ${darkMode ? 'text-[#60a5fa]' : 'text-blue-600'}`}>
                {completedWords.length}/{allWords.length}
              </span>
            </div>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`${darkMode ? 'bg-[#60a5fa] hover:bg-[#3b82f6]' : 'bg-[#1976d2] hover:bg-[#1565c0]'} text-white p-2.5 rounded-full transition-all duration-300 hover:scale-110 shadow-lg`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🧩</div>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
            100 Daily Use English Words
          </h1>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Master essential English vocabulary with Hindi translations, pronunciation, and real examples
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full font-semibold transition-all ${
              activeCategory === 'all'
                ? darkMode ? 'bg-[#60a5fa] text-white' : 'bg-blue-600 text-white'
                : darkMode ? 'bg-[#1e293b] text-[#94a3b8] hover:bg-[#2d3748]' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All ({allWords.length})
          </button>
          {wordCategories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                activeCategory === cat.category
                  ? darkMode ? 'bg-[#60a5fa] text-white' : 'bg-blue-600 text-white'
                  : darkMode ? 'bg-[#1e293b] text-[#94a3b8] hover:bg-[#2d3748]' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {cat.emoji} {cat.category} ({cat.words.length})
            </button>
          ))}
        </div>

        {/* Words Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredWords.map((wordObj, index) => (
            <div
              key={index}
              onClick={() => setSelectedWord(wordObj)}
              className={`group cursor-pointer rounded-2xl overflow-hidden ${
                darkMode ? 'bg-[#1e293b]/50 border-2 border-[#374151]' : 'bg-white border-2 border-gray-200'
              } transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                darkMode ? 'hover:border-[#60a5fa]' : 'hover:border-blue-400'
              } ${completedWords.includes(wordObj.word) ? 'opacity-60' : ''}`}
            >
              <div className={`bg-gradient-to-br ${wordObj.categoryColor} p-4 text-white`}>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-3xl">{wordObj.categoryEmoji}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWordComplete(wordObj.word);
                    }}
                    className={`${completedWords.includes(wordObj.word) ? 'bg-white text-green-600' : 'bg-white/20'} p-1.5 rounded-full hover:scale-110 transition-all`}
                  >
                    {completedWords.includes(wordObj.word) ? '✓' : '○'}
                  </button>
                </div>
                <h3 className="text-2xl font-bold mb-1">{wordObj.word}</h3>
                <p className="text-sm opacity-90">{wordObj.hindi}</p>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-gray-500">🔊</span>
                  <span className={`text-sm ${darkMode ? 'text-[#94a3b8]' : 'text-gray-600'}`}>
                    {wordObj.pronunciation}
                  </span>
                </div>
                <p className={`text-sm ${darkMode ? 'text-[#94a3b8]' : 'text-gray-700'} italic`}>
                  "{wordObj.example}"
                </p>
                <div className="mt-3 flex justify-between items-center">
                  <span className={`text-xs font-semibold ${getDifficultyColor(wordObj.difficulty)} uppercase`}>
                    {wordObj.difficulty}
                  </span>
                  <span className={`text-xs ${darkMode ? 'text-[#60a5fa]' : 'text-blue-600'}`}>
                    Click for details →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Word Detail Modal */}
      {selectedWord && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedWord(null)}
        >
          <div 
            className={`${darkMode ? 'bg-[#1e293b]' : 'bg-white'} rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`bg-gradient-to-br ${selectedWord.categoryColor} p-8 text-white text-center`}>
              <div className="text-6xl mb-4">{selectedWord.categoryEmoji}</div>
              <h2 className="text-4xl font-bold mb-2">{selectedWord.word}</h2>
              <p className="text-xl mb-1">{selectedWord.hindi}</p>
              <p className="text-sm opacity-90">🔊 {selectedWord.pronunciation}</p>
            </div>
            <div className="p-8">
              <div className="mb-6">
                <h3 className={`text-lg font-semibold ${darkMode ? 'text-[#e0e7ff]' : 'text-gray-900'} mb-2`}>
                  Example Sentence:
                </h3>
                <p className={`text-lg ${darkMode ? 'text-[#94a3b8]' : 'text-gray-700'} italic`}>
                  "{selectedWord.example}"
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className={`${darkMode ? 'bg-[#0f1729]' : 'bg-gray-100'} p-4 rounded-xl`}>
                  <div className="text-sm text-gray-500 mb-1">Category</div>
                  <div className={`font-semibold ${darkMode ? 'text-[#e0e7ff]' : 'text-gray-900'}`}>
                    {selectedWord.category}
                  </div>
                </div>
                <div className={`${darkMode ? 'bg-[#0f1729]' : 'bg-gray-100'} p-4 rounded-xl`}>
                  <div className="text-sm text-gray-500 mb-1">Difficulty</div>
                  <div className={`font-semibold ${getDifficultyColor(selectedWord.difficulty)} capitalize`}>
                    {selectedWord.difficulty}
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  toggleWordComplete(selectedWord.word);
                  setSelectedWord(null);
                }}
                className={`w-full ${
                  completedWords.includes(selectedWord.word)
                    ? 'bg-green-600 hover:bg-green-700'
                    : `bg-gradient-to-r ${selectedWord.categoryColor}`
                } text-white font-bold py-4 rounded-full transition-all hover:scale-105`}
              >
                {completedWords.includes(selectedWord.word) ? '✓ Marked as Learned' : 'Mark as Learned'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
