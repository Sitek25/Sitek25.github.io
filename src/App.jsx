import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, GraduationCap, Calendar, Zap, 
  Monitor, PenTool, Globe, Layout, ShoppingCart, FileSpreadsheet, Code2, Wrench, X
} from "lucide-react";
import { 
  SiHtml5, SiCss3, SiJavascript, SiPhp, 
  SiReact, SiTailwindcss, SiSqlite, SiOpenai 
} from "react-icons/si";

export default function App() {
  const [mode, setMode] = useState("client"); 
  const [showAlert, setShowAlert] = useState(true);
  const isClient = mode === "client";
  const themeColor = isClient ? "#8b5cf6" : "#f97316"; 
  const accentClass = isClient ? "text-purple-500" : "text-orange-500";

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const techs = [
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "SQL", icon: <SiSqlite /> },
    { name: "JS", icon: <SiJavascript /> },
    { name: "PHP", icon: <SiPhp /> },
    { name: "React", icon: <SiReact /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "AI", icon: <SiOpenai /> },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white/20 font-sans overflow-x-hidden relative">
      
      {/* ALERT / MODAL NA ŚRODKU (WARSTWA Z-INDEX 100) */}
      <AnimatePresence>
        {showAlert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative max-w-md w-full bg-zinc-900/95 border border-white/10 p-8 rounded-3xl shadow-2xl text-center overflow-hidden"
            >
              {/* Tło z delikatnym akcentem kolorystycznym */}
              <div className={`absolute -top-24 -left-24 w-48 h-48 rounded-full blur-3xl opacity-20 ${isClient ? 'bg-purple-500' : 'bg-orange-500'}`} />

              <button 
                onClick={() => setShowAlert(false)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-white p-2 rounded-full hover:bg-white/5 transition-colors"
                aria-label="Zamknij"
              >
                <X size={20} />
              </button>

              <div className={`w-14 h-14 rounded-2xl mx-auto mb-6 flex items-center justify-center bg-zinc-800/80 border border-white/10 ${accentClass}`}>
                <Wrench size={28} />
              </div>

              <h3 className="text-2xl font-black tracking-tight mb-3">
                Trwają prace nad nową stroną
              </h3>

              <p className="text-zinc-400 text-sm leading-relaxed mb-8 font-light">
                Portfolio jest obecnie w trakcie przebudowy. Niektóre sekcje i projekty są aktualizowane na bieżąco.
              </p>

              <button
                onClick={() => setShowAlert(false)}
                style={{ backgroundColor: themeColor }}
                className="w-full py-3.5 rounded-xl text-white font-bold tracking-wider uppercase text-xs hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg"
              >
                Rozumiem, Przeglądaj
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING TOGGLE */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2">
        <div className="bg-zinc-900/90 backdrop-blur-xl p-1.5 rounded-full border border-white/10 flex items-center shadow-2xl">
          <button 
            onClick={() => setMode("client")}
            className={`px-8 py-2.5 rounded-full text-[10px] md:text-xs font-black tracking-widest transition-all ${isClient ? "bg-purple-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]" : "text-zinc-500"}`}
          >
            DLA KLIENTA
          </button>
          <button 
            onClick={() => setMode("employer")}
            className={`px-8 py-2.5 rounded-full text-[10px] md:text-xs font-black tracking-widest transition-all ${!isClient ? "bg-orange-600 text-white shadow-[0_0_20px_rgba(249,115,22,0.4)]" : "text-zinc-500"}`}
          >
            DLA PRACODAWCY
          </button>
        </div>
      </div>

      {/* HERO */}
      <section className="min-h-screen flex items-center px-6 md:px-24">
        <div className={`w-full flex ${isClient ? "justify-start text-left" : "justify-end text-right"}`}>
          <motion.div 
            key={mode}
            initial={{ opacity: 0, x: isClient ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className={`${accentClass} font-mono tracking-[0.4em] uppercase mb-6 block font-bold text-sm`}>
              Sitek // {isClient ? "Freelance Developer" : "Junior Frontend Dev"}
            </span>
            <h1 className="text-6xl md:text-[7.5rem] font-bold tracking-tighter mb-10 leading-[1.1]">
              {isClient ? "Buduję Twoją" : "Koduję Twoje"}<br />
              <span className="text-zinc-800 italic">{isClient ? "Obecność." : "Wizje."}</span>
            </h1>
            
            <p className={`text-xl text-zinc-400 leading-relaxed mb-12 font-light max-w-xl ${isClient ? 'mr-auto ml-0 text-left' : 'ml-auto mr-0 text-right'}`}>
              Specjalizuję się w ekosystemie <strong className="text-white">React</strong>. Łączę techniczne wykształcenie informatyczne z nowoczesnym podejściem AI i No-code.
            </p>
            
            <button 
              onClick={scrollToContact}
              style={{ backgroundColor: themeColor }}
              className="text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
            >
              {isClient ? "Zacznijmy Projekt" : "Skontaktuj się"}
            </button>
          </motion.div>
        </div>
      </section>

      {/* TOOLBOX */}
      <div className="py-12 border-y border-white/5 bg-zinc-900/10 overflow-hidden relative">
        <motion.div 
          animate={{ x: [0, -1500] }} 
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex gap-20 items-center opacity-40 hover:opacity-100 transition-opacity"
        >
          {[...techs, ...techs, ...techs].map((tech, i) => (
            <div key={i} className={`flex items-center gap-6 ${accentClass}`}>
               <span className="text-4xl md:text-5xl">{tech.icon}</span>
               <span className="text-3xl font-black uppercase tracking-tighter text-white">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* SEKCJA ŚRODKOWA */}
      <section className="py-32 px-6 md:px-24">
        <AnimatePresence mode="wait">
          {isClient ? (
            <motion.div key="client-v" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid md:grid-cols-2 gap-10">
              <div className="group bg-zinc-900/50 p-12 rounded-[3rem] border border-white/5 flex flex-col justify-between min-h-[400px] overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-110 transition-transform" alt="" />
                <h3 className="relative text-4xl font-bold tracking-tighter italic leading-tight">Stworzę Twoją stronę <br/> od podstaw.</h3>
                <Monitor className="relative text-purple-500" size={56} />
              </div>
              <div className="group bg-purple-600 p-12 rounded-[3rem] text-white flex flex-col justify-between shadow-2xl min-h-[400px] overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=500" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform" alt="" />
                <h3 className="relative text-4xl font-bold tracking-tighter italic leading-tight">Pomogę Ci w ulepszeniu <br/> aktualnego projektu.</h3>
                <PenTool className="relative" size={56} />
              </div>
            </motion.div>
          ) : (
            <motion.div key="emp-v" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid md:grid-cols-2 gap-20">
              <div className="space-y-12">
                <h2 className="text-4xl font-black uppercase italic tracking-tighter text-orange-500">Czym mogę się zająć w firmie?</h2>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { label: "Strony WWW (Front/Back/Full)", icon: <Globe size={20}/> },
                    { label: "Aplikacje mobilne i webowe", icon: <Layout size={20}/> },
                    { label: "Systemy e-commerce", icon: <ShoppingCart size={20}/> },
                    { label: "Dokumentacja i arkusze Excel", icon: <FileSpreadsheet size={20}/> }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 bg-zinc-900/50 p-6 rounded-2xl border border-white/5 hover:border-orange-500/50 transition-colors">
                      <div className="text-orange-500">{item.icon}</div>
                      <span className="font-bold tracking-tight">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col items-end text-right">
                <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-16 text-zinc-700">Roadmapa</h2>
                <div className="relative border-r-2 border-orange-500/20 mr-4 space-y-16 py-4 pr-12">
                  {[
                    { date: "2017-2021", title: "Technik Informatyk", desc: "Solidne podstawy IT i systemów.", icon: <GraduationCap /> },
                    { date: "2021-2024", title: "Projekty Prywatne", desc: "Nauka logiki programowania.", icon: <Calendar /> },
                    { date: "2025-2026", title: "Specjalizacja App & Web", desc: "Roczny kurs tworzenia aplikacji.", icon: <Zap /> },
                    { date: "TERAZ", title: "React Focus", desc: "Szlifowanie Frontendu.", icon: <Zap /> }
                  ].map((item, i) => (
                    <div key={i} className="relative group">
                      <div className="absolute right-[-57px] top-0 w-4 h-4 rounded-full bg-orange-500 shadow-[0_0_15px_#f97316]" />
                      <span className="text-orange-500 font-mono text-xs font-bold">{item.date}</span>
                      <h4 className="text-2xl font-bold mt-1 tracking-tighter">{item.title}</h4>
                      <p className="text-zinc-500 mt-2 text-sm leading-relaxed ml-auto max-w-[250px]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* PROJEKTY */}
      <section className="py-24 px-6 md:px-24 bg-zinc-900/20 rounded-[4rem] mx-4 mb-20">
         <h3 className={`text-2xl font-black uppercase italic mb-16 tracking-widest ${accentClass}`}>Aktualne Projekty</h3>
         <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 group">
              <span className="text-zinc-500 font-mono text-xs font-bold uppercase tracking-[0.3em]">Aktualnie buduję</span>
              <div className="aspect-video bg-zinc-900 rounded-[2.5rem] border border-white/10 flex items-center justify-center overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700" alt="" />
                  <h4 className="relative text-2xl font-bold px-6 text-center tracking-tighter">App dla trenerów personalnych</h4>
              </div>
            </div>
            <div className="space-y-6 group opacity-70 hover:opacity-100 transition-opacity">
              <span className="text-zinc-500 font-mono text-xs font-bold uppercase tracking-[0.3em]">Następny projekt</span>
              <div className="aspect-video bg-zinc-900 rounded-[2.5rem] border border-white/10 flex items-center justify-center overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-110 transition-transform duration-700" alt="" />
                  <h4 className="relative text-2xl font-bold px-6 text-center tracking-tighter">Modern CRM System</h4>
              </div>
            </div>
         </div>
      </section>

      {/* KONTAKT */}
      <section id="contact" className="py-48 px-6 md:px-24 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tighter leading-tight">
          {isClient ? "Potrzebujesz solidnego wsparcia?" : "Jeśli zachęciłem Cię to napisz,"} <br />
          <span className={accentClass}>{isClient ? "Porozmawiajmy o biznesie." : "i porozmawiajmy o zatrudnieniu."}</span>
        </h2>
        
        <div className="text-2xl md:text-6xl font-black text-white/90 tracking-tighter hover:scale-105 transition-transform cursor-default">
          SITEK2025@GMAIL.COM
        </div>
      </section>

      <footer className="py-12 text-center text-zinc-800 font-mono text-[10px] tracking-[0.5em] uppercase border-t border-white/5">
        Sitek // {mode} Mode // 2026
      </footer>

    </div>
  );
}
