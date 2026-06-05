import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">

      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-block bg-green-50 text-green-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          Powered by Claude AI
        </div>

        <h1 className="text-5xl font-bold leading-tight mb-4">
          Your <span className="text-green-600">career roadmap</span>,<br />
          built for India's future
        </h1>

        <p className="text-gray-500 text-lg max-w-xl mx-auto mb-8">
          Personalised guidance for school students, college graduates, and
          early professionals — in your language, for your goals.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link
            href="/assessment"
            className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-xl transition-colors"
          >
            Start career assessment
          </Link>
          <Link
            href="/chat"
            className="border border-gray-200 hover:bg-gray-100 text-gray-700 font-medium px-6 py-3 rounded-xl transition-colors"
          >
            Chat with AI Mentor
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {[
          { num: "50K+", label: "Students guided" },
          { num: "200+", label: "Career paths" },
          { num: "12", label: "Indian languages" },
          { num: "95%", label: "Satisfaction rate" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white border border-gray-100 rounded-2xl p-5 text-center">
            <div className="text-2xl font-bold text-green-600">{stat.num}</div>
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Features */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Everything you need to grow</h2>
        <p className="text-gray-500 text-sm mb-6">From discovering your interest to landing your first job</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { title: "Career Discovery", desc: "Find careers that match your aptitude and the Indian job market.", href: "/assessment", emoji: "🧠" },
            { title: "Skill Roadmap", desc: "Personalised learning paths with free resources and certifications.", href: "/skills", emoji: "🗺️" },
            { title: "AI Mentor Chat", desc: "Ask anything about careers, college, exams, and life decisions.", href: "/chat", emoji: "💬" },
            { title: "Goal Tracker", desc: "Set, track and celebrate your milestones with streaks and badges.", href: "/dashboard", emoji: "🏆" },
            { title: "College & Scholarships", desc: "Find the right college, course, and funding for your situation.", href: "/dashboard", emoji: "🎓" },
            { title: "Resume & Interview", desc: "Build your resume and prepare for interviews with AI feedback.", href: "/chat", emoji: "📄" },
          ].map((feature) => (
            <Link
              key={feature.title}
              href={feature.href}
              className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-green-400 hover:bg-green-50 transition-all"
            >
              <div className="text-3xl mb-3">{feature.emoji}</div>
              <h3 className="font-semibold mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.desc}</p>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}