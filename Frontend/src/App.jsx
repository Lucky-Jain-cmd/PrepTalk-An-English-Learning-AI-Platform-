import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import './App.css';

import LandingPage from './Pages/LandingPage.jsx';
import DashboardPage from './Pages/DashboardPage.jsx';
import SignupPage from './Pages/SignupPage.jsx';
import LoginPage from './Pages/LoginPage.jsx';
import LearningPaths from './Pages/LearningPaths.jsx';
import EasyLevel from './Pages/EasyLevel.jsx';
import DailyWords from './Pages/DailyWords.jsx';
import BasicConversations from './Pages/BasicConversations.jsx';
import GrammarStarter from './Pages/GrammarStarter.jsx';
import MiniQuiz from './Pages/MiniQuiz.jsx';
import IntermediateLevel from './Pages/IntermediateLevel.jsx';
import IntermediateDialogues from './Pages/IntermediateDialogues.jsx';
import IntermediateGrammar from './Pages/IntermediateGrammar.jsx';
import VocabularyBuilder from './Pages/VocabularyBuilder.jsx';
import ChallengeMode from './Pages/ChallengeMode.jsx';
import HardLevel from './Pages/HardLevel.jsx';
import AdvancedGrammar from './Pages/AdvancedGrammar.jsx';
import PublicSpeaking from './Pages/PublicSpeaking.jsx';
import ProfessionalWriting from './Pages/ProfessionalWriting.jsx';
import AccentTraining from './Pages/AccentTraining.jsx';
import ProChallenge from './Pages/ProChallenge.jsx';
import GrammarLessons from './Pages/GrammarLessons.jsx';
import ReadingComprehension from './Pages/ReadingComprehension.jsx';
import GroupDiscussion from './Pages/GroupDiscussion.jsx';
import NativeLanguageSupport from './Pages/NativeLanguageSupport.jsx';

function App() {

  // ⭐ STEP 1 — Language + Translation State
  const [selectedLang, setSelectedLang] = useState("en");
  const [translatedOutput, setTranslatedOutput] = useState("");

  // ⭐ STEP 2 — Handler function
  const handleLanguageChange = (lang, translated) => {
    setSelectedLang(lang);
    setTranslatedOutput(translated);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />

        <Route path="/learning-paths" element={<LearningPaths />} />
        <Route path="/easy-level" element={<EasyLevel />} />
        <Route path="/daily-words" element={<DailyWords />} />
        <Route path="/basic-conversations" element={<BasicConversations />} />
        <Route path="/grammar-starter" element={<GrammarStarter />} />
        <Route path="/mini-quiz" element={<MiniQuiz />} />
        <Route path="/intermediate-level" element={<IntermediateLevel />} />
        <Route path="/intermediate-dialogues" element={<IntermediateDialogues />} />
        <Route path="/intermediate-grammar" element={<IntermediateGrammar />} />
        <Route path="/vocabulary" element={<VocabularyBuilder />} />
        <Route path="/challenge-mode" element={<ChallengeMode />} />
        <Route path="/hard-level" element={<HardLevel />} />
        <Route path="/advanced-grammar" element={<AdvancedGrammar />} />
        <Route path="/public-speaking" element={<PublicSpeaking />} />
        <Route path="/professional-writing" element={<ProfessionalWriting />} />
        <Route path="/accent-training" element={<AccentTraining />} />
        <Route path="/pro-challenge" element={<ProChallenge />} />
        <Route path="/grammar" element={<GrammarLessons />} />
        <Route path="/reading" element={<ReadingComprehension />} />
        <Route path="/discuss" element={<GroupDiscussion />} />

        {/* ⭐ STEP 3 — PASS LANGUAGE PROPS */}
        <Route 
          path="/language"
          element={
            <NativeLanguageSupport 
              onLanguageChange={handleLanguageChange}
              sampleText="Welcome to our English learning app!"
            />
          }
        />
      </Routes>

      {/* ⭐ STEP 4 — Show the translated result */}
      <div className="p-4 bg-gray-100 mt-4">
        <h3>Selected Language: {selectedLang}</h3>
        <p>Translated Text: {translatedOutput}</p>
      </div>

    </BrowserRouter>
  );
}

export default App;
