import React from "react";
import {
  GraduationCap,
  Building,
  FileCheck,
  Briefcase,
  RefreshCw,
  CreditCard,
  Video,
  Stethoscope,
  FileText,
} from "lucide-react";

// ─────────────────────────────────────────────
// SECTION 5 — COURSE BENEFITS
// ─────────────────────────────────────────────
export default function CourseBenefits({ onCtaClick }) {
  const benefits = [
    {
      icon: <GraduationCap className="w-4 h-4" />,
      iconBg: "bg-emerald-50 border-emerald-200 text-[#0A7A3F]",
      title: "RTMNU Certificate",
      desc: "University-approved credentials recognized across healthcare employers.",
      pill: "Verified",
    },
    {
      icon: <Building className="w-4 h-4" />,
      iconBg: "bg-blue-50 border-blue-200 text-blue-700",
      title: "AAPC-Aligned Training",
      desc: "Curriculum mapped to AAPC CPC® exam objectives and global standards.",
      pill: "Global standard",
    },
    {
      icon: <FileText className="w-4 h-4" />,
      iconBg: "bg-amber-50 border-amber-200 text-amber-700",
      title: "NEP Academic Credits",
      desc: "Credits aligned with National Education Policy for academic progression.",
      pill: "NEP 2020",
    },
    {
      icon: <Briefcase className="w-4 h-4" />,
      iconBg: "bg-sky-50 border-sky-200 text-sky-700",
      title: "Placement Assistance",
      desc: "37-month unbroken placement track with 50+ global hiring partners.",
      pill: "37 months",
    },
    {
      icon: <RefreshCw className="w-4 h-4" />,
      iconBg: "bg-rose-50 border-rose-200 text-rose-700",
      title: "Flexible Learning",
      desc: "Study at your own pace with live sessions, recorded access & weekend batches.",
      pill: "Self-paced",
    },
    {
      icon: <CreditCard className="w-4 h-4" />,
      iconBg: "bg-amber-50 border-amber-200 text-amber-700",
      title: "EMI Available",
      desc: "Zero-cost EMI options to make quality education financially accessible.",
      pill: "0% interest",
    },
    {
      icon: <Video className="w-4 h-4" />,
      iconBg: "bg-teal-50 border-teal-200 text-teal-700",
      title: "Online + Offline Options",
      desc: "Attend physically at Nagpur campus or stream live from anywhere in India.",
      pill: "Hybrid",
    },
    {
      icon: <Stethoscope className="w-4 h-4" />,
      iconBg: "bg-purple-50 border-purple-200 text-purple-700",
      title: "Industry-Oriented Curriculum",
      desc: "Real-world case studies, ICD-10, CPT & HCPCS coding drills with live audits.",
      pill: "Real cases",
    },
  ];

  return (
    <section className="w-full bg-[#FAF7F0] border-b border-amber-100 py-12 sm:py-16 text-left">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-4 border-b border-zinc-200">
          <div className="flex items-start gap-3.5">
            <div className="w-1 h-14 bg-[#0A7A3F] rounded-full shrink-0 mt-1" />
            <div>
              <span className="text-[10px] font-mono text-zinc-400 font-bold uppercase tracking-widest block">
                Program Differentiators
              </span>
              <h2 className="font-sans font-black text-xl sm:text-2xl text-zinc-950 mt-1 leading-tight">
                What Makes This Program Different?
              </h2>
            </div>
          </div>

          <div className="text-[10px] font-mono font-bold text-zinc-500 bg-white border border-zinc-200 p-2 rounded-lg shrink-0 w-fit">
            8 Exclusive Program Benefits
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl border border-zinc-150 space-y-3 shadow-2xs hover:border-[#0A7A3F] hover:-translate-y-0.5 transition-all duration-200 cursor-default"
            >
              <div
                className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 ${b.iconBg}`}
              >
                {b.icon}
              </div>

              <div className="space-y-1">
                <h3 className="text-sm font-bold text-zinc-950 leading-tight">
                  {b.title}
                </h3>

                <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                  {b.desc}
                </p>
              </div>

              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#0A7A3F] bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
                <svg
                  className="w-2.5 h-2.5"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="2,6 5,9 10,3" />
                </svg>

                {b.pill}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center pt-2">
          <button
            onClick={onCtaClick}
            className="inline-flex items-center gap-2 bg-[#0A7A3F] hover:bg-[#085e30] text-white font-bold text-[11px] uppercase tracking-widest px-6 py-3.5 rounded-lg transition-all shadow-sm cursor-pointer"
          >
            <FileCheck className="w-4 h-4" />
            Get Complete Course Details
          </button>
        </div>

      </div>
    </section>
  );
}