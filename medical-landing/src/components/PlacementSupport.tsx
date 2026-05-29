import React from "react";
import {
  FileText,
  MessageSquare,
  Users,
  Compass,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

export default function PlacementSupport({ onCtaClick }) {
  const supports = [
    {
      icon: <FileText className="w-4 h-4" />,
      title: "Resume Building",
      desc: "Professionally structured healthcare resumes tailored for coding & RCM roles.",
      color: "bg-emerald-50 border-emerald-200 text-emerald-700",
    },
    {
      icon: <MessageSquare className="w-4 h-4" />,
      title: "Interview Preparation",
      desc: "Industry-oriented interview coaching with HR & technical guidance.",
      color: "bg-blue-50 border-blue-200 text-blue-700",
    },
    {
      icon: <Users className="w-4 h-4" />,
      title: "Mock Interviews",
      desc: "Realistic practice sessions to improve confidence and communication.",
      color: "bg-purple-50 border-purple-200 text-purple-700",
    },
    {
      icon: <Compass className="w-4 h-4" />,
      title: "Career Guidance",
      desc: "Personalized guidance for certifications, domains, and career growth.",
      color: "bg-amber-50 border-amber-200 text-amber-700",
    },
    {
      icon: <Briefcase className="w-4 h-4" />,
      title: "Hiring Partner Connections",
      desc: "Direct access to hiring opportunities through our recruitment network.",
      color: "bg-sky-50 border-sky-200 text-sky-700",
    },
  ];

  return (
    <section id="placement" className="w-full bg-[#FAF7F0] border-b border-amber-100 py-12 sm:py-16 text-left">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-4 border-b border-zinc-200">
          <div className="flex items-start gap-3.5">
            <div className="w-1 h-14 bg-[#0A7A3F] rounded-full shrink-0 mt-1" />

            <div>
              <span className="text-[10px] font-mono text-zinc-400 font-bold uppercase tracking-widest block">
                Career Support
              </span>

              <h2 className="font-sans font-black text-xl sm:text-2xl text-zinc-950 mt-1 leading-tight">
                Get Career Support Beyond Training
              </h2>
            </div>
          </div>

          <div className="text-[10px] font-mono font-bold text-zinc-500 bg-white border border-zinc-200 p-2 rounded-lg shrink-0 w-fit">
            37 Months Placement Record
          </div>
        </div>

        {/* Intro */}
        <div className="bg-white rounded-2xl border border-zinc-200 p-5 sm:p-6">
          <p className="text-sm sm:text-[15px] text-zinc-600 leading-relaxed font-medium">
            At{" "}
            <span className="font-bold text-[#0A7A3F]">
              Spruce Lifeskills
            </span>
            , learning doesn’t stop at training. We help students become
            industry-ready with complete placement and career support.
          </p>
        </div>

        {/* Support Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {supports.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-zinc-200 p-5 space-y-3 hover:border-[#0A7A3F] hover:-translate-y-1 transition-all duration-200"
            >
              <div
                className={`w-9 h-9 rounded-lg border flex items-center justify-center ${item.color}`}
              >
                {item.icon}
              </div>

              <div className="space-y-1.5">
                <h3 className="text-sm font-black text-zinc-950 leading-tight">
                  {item.title}
                </h3>

                <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Placement Highlight */}
        <div className="rounded-2xl bg-[#0A7A3F] p-6 sm:p-7 text-white flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-emerald-200 font-mono">
              Placement Excellence
            </p>

            <h3 className="text-2xl sm:text-3xl font-black leading-tight">
              50+ Recruitment Partners Across India
            </h3>

            <p className="text-sm text-emerald-50 leading-relaxed max-w-2xl">
              Our students consistently receive opportunities from healthcare,
              RCM, medical coding, and multinational healthcare organizations.
            </p>
          </div>

          <div className="flex gap-4 flex-wrap">
            {[
              "37 Months Continuous Placements",
              "Industry Hiring Connections",
              "Healthcare Career Mentorship",
            ].map((point, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/10 border border-white/10 rounded-xl px-4 py-3"
              >
                <CheckCircle2 className="w-4 h-4 text-[#01F182]" />

                <span className="text-xs font-bold">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <button
            onClick={onCtaClick}
            className="inline-flex items-center gap-2 bg-[#0A7A3F] hover:bg-[#085e30] text-white font-black text-[11px] uppercase tracking-widest px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg"
          >
            <Briefcase className="w-4 h-4" />
            Explore Career Opportunities
          </button>
        </div>

      </div>
    </section>
  );
}