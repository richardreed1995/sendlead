"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Lock, Eye, EyeOff, Check, X, ChevronRight, 
  Menu, Shield, TrendingUp, Clock, 
  LayoutDashboard, Target, PlayCircle, 
  Database, Mail, DollarSign, Calculator, HelpCircle,
  RefreshCw, ChevronLeft
} from "lucide-react";
import { cn } from "@/lib/utils";

// ==========================================
// PASSWORD PROTECTION
// ==========================================
interface PasswordProtectionProps {
  onPasswordCorrect: () => void;
}

function PasswordProtection({ onPasswordCorrect }: PasswordProtectionProps) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    setTimeout(() => {
      if (password === "sendlead2025") {
        sessionStorage.setItem("salesRoomAuth", "true");
        onPasswordCorrect();
      } else {
        setError("Invalid access code.");
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full border rounded-xl p-8 shadow-sm bg-card">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight mb-2">Sendlead Sales Room</h1>
          <p className="text-muted-foreground text-sm">Restricted access. Please enter your code.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Access Code"
                className="pr-10"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
          </div>

          <Button type="submit" className="w-full bg-[#2998FD] hover:bg-[#1f7fd9]" disabled={isLoading}>
            {isLoading ? "Verifying..." : "Enter Sales Room"}
          </Button>
        </form>
      </div>
    </div>
  );
}

// ==========================================
// SIDEBAR NAVIGATION
// ==========================================
const navItems = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "process", label: "Our Process", icon: Target },
  { id: "demo", label: "Live Demo", icon: PlayCircle },
  { id: "data", label: "Lead Data", icon: Database },
  { id: "pricing", label: "Pricing", icon: DollarSign },
  { id: "roi", label: "ROI Calculator", icon: Calculator },
  { id: "faq", label: "FAQ", icon: HelpCircle },
];

function Sidebar({ activeSection, onNavigate, isOpen, setIsOpen }: any) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside className={cn(
        "fixed top-0 left-0 z-50 h-screen w-64 bg-background border-r transition-transform duration-300 ease-in-out lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="h-16 flex items-center px-6 border-b">
            <span className="font-bold text-xl tracking-tight">Sendlead</span>
          </div>

          {/* Nav Items */}
          <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    isActive 
                      ? "bg-blue-50 text-[#2998FD]" 
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <Icon className={cn("w-4 h-4", isActive ? "text-[#2998FD]" : "text-muted-foreground")} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Bottom Action */}
          <div className="p-4 border-t bg-muted/20">
            <Button 
              onClick={() => {
                onNavigate('contact');
                setIsOpen(false);
              }}
              className="w-full bg-[#2998FD] hover:bg-[#1f7fd9] text-white shadow-sm"
            >
              Get Started
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}

// ==========================================
// SECTIONS
// ==========================================

// --- Overview ---
function Overview() {
  return (
    <section id="overview" className="pt-24 pb-20 px-6 lg:px-10">
      <div className="max-w-5xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Live Sales Room
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-foreground">
          Premium Business Loan Leads,<br />
          <span className="text-[#2998FD]">Delivered in Real-Time</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
          Stop chasing cold prospects. Our pre-qualified leads are business owners actively seeking funding - verified, scored, and ready to convert.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t">
          {[
            { value: "10+", label: "Qualification Points" },
            { value: "100%", label: "Verified Contact Info" },
            { value: "< 5min", label: "Delivery Time" },
            { value: "15-25%", label: "Avg. Conversion" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Process ---
function Process() {
  return (
    <section id="process" className="py-20 px-6 lg:px-10 bg-muted/30">
      <div className="max-w-5xl">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-2">How We Deliver Quality</h2>
          <p className="text-muted-foreground">Our 3-step verification process ensures high intent.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Shield,
              title: "Verified Intent",
              desc: "Every lead completes a 10-point assessment. We verify email and phone via OTP."
            },
            {
              icon: TrendingUp,
              title: "Scoring & Tiering",
              desc: "Leads are scored A-D based on trading history, turnover, and credit profile."
            },
            {
              icon: Clock,
              title: "Instant Delivery",
              desc: "Leads are delivered to your inbox or CRM seconds after qualification."
            }
          ].map((item, i) => (
            <div key={i} className="bg-background p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-[#2998FD]" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Interactive Qualification Demo ---
function QualificationDemo() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  
  const questions = [
    { q: "How much funding do you need?", options: ["£10k - £25k", "£25k - £50k", "£50k - £100k", "£100k+"] },
    { q: "What is the primary purpose?", options: ["Working Capital", "Expansion", "Equipment", "Cash Flow"] },
    { q: "Monthly turnover?", options: ["Under £10k", "£10k - £50k", "£50k+"] },
    { q: "Trading history?", options: ["< 1 year", "1-2 years", "3+ years"] }
  ];

  const handleAnswer = (option: string) => {
    setAnswers({ ...answers, [step]: option });
    if (step < questions.length - 1) setStep(step + 1);
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
  };

  return (
    <section id="demo" className="py-20 px-6 lg:px-10">
      <div className="max-w-4xl">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-2">Live Qualification Demo</h2>
          <p className="text-muted-foreground">Experience the exact assessment flow your leads go through.</p>
        </div>

        <div className="bg-background rounded-xl border shadow-sm p-8 max-w-2xl relative overflow-hidden">
          {step < questions.length ? (
            <>
              <div className="mb-8 flex justify-between text-xs font-medium uppercase text-muted-foreground tracking-wider">
                <span>Question {step + 1} of {questions.length}</span>
                <span>{Math.round(((step + 1) / questions.length) * 100)}%</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-6">{questions[step].q}</h3>
              
              <div className="space-y-3">
                {questions[step].options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleAnswer(opt)}
                    className="w-full text-left px-4 py-3 rounded-lg border hover:border-primary hover:bg-blue-50 transition-all text-sm font-medium"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Lead Qualified!</h3>
              <p className="text-muted-foreground mb-8">
                In production, this lead would be instantly delivered to your CRM.
              </p>
              <Button onClick={reset} variant="outline" className="gap-2">
                <RefreshCw className="w-4 h-4" /> Try Again
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// --- Live Lead Data ---
function LeadData() {
  const leads = [
    { tier: "A", amount: "£75,000", purpose: "Expansion", turnover: "£50k+", score: 168 },
    { tier: "A", amount: "£45,000", purpose: "Equipment", turnover: "£30k+", score: 155 },
    { tier: "B", amount: "£25,000", purpose: "Working Capital", turnover: "£15k+", score: 132 },
    { tier: "C", amount: "£10,000", purpose: "Cash Flow", turnover: "£8k+", score: 98 },
  ];

  return (
    <section id="data" className="py-20 px-6 lg:px-10 bg-muted/30">
      <div className="max-w-5xl">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-2">Real-Time Data Feed</h2>
          <p className="text-muted-foreground">Recent anonymized leads from our network.</p>
        </div>

        <div className="grid gap-3">
          {leads.map((lead, i) => (
            <div key={i} className="bg-background border rounded-lg p-5 flex flex-col sm:flex-row items-center justify-between gap-4 hover:border-primary/50 transition-colors cursor-default">
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0",
                  lead.tier === "A" ? "bg-green-100 text-green-700" :
                  lead.tier === "B" ? "bg-blue-100 text-blue-700" : "bg-yellow-100 text-yellow-700"
                )}>
                  {lead.tier}
                </div>
                <div>
                  <div className="font-semibold">{lead.purpose} - {lead.amount}</div>
                  <div className="text-sm text-muted-foreground">Turnover: {lead.turnover}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                <div className="text-right">
                  <div className="text-xs uppercase text-muted-foreground font-medium">Score</div>
                  <div className="font-bold font-mono">{lead.score}/200</div>
                </div>
                <Button variant="ghost" size="sm" className="hidden sm:flex">
                  Details <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Pricing ---
function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 lg:px-10">
      <div className="max-w-5xl">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-2">Transparent Pricing</h2>
          <p className="text-muted-foreground">Pay per lead. No hidden fees. No lock-in contracts.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { tier: "Tier C", price: "£45", desc: "Volume leads for high-activity teams", color: "border-l-4 border-yellow-400" },
            { tier: "Tier B", price: "£65", desc: "Solid prospects with verified intent", color: "border-l-4 border-blue-400" },
            { tier: "Tier A", price: "£85", desc: "High-value, prime borrowers", color: "border-l-4 border-green-400", recommended: true },
          ].map((plan, i) => (
            <div key={i} className={cn("bg-background border rounded-xl p-6 shadow-sm relative flex flex-col", plan.recommended && "ring-1 ring-primary shadow-md")}>
              {plan.recommended && <div className="absolute top-0 right-0 bg-primary text-white text-[10px] px-2 py-1 rounded-bl-lg rounded-tr-lg font-bold uppercase tracking-wide">Recommended</div>}
              <div className="text-lg font-bold mb-2">{plan.tier}</div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">/lead</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6 flex-1">{plan.desc}</p>
              <Button className={cn("w-full mt-auto", plan.recommended ? "bg-[#2998FD] hover:bg-[#1f7fd9]" : "variant-outline")}>
                Select Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- ROI Calculator ---
function ROICalculator() {
  const [leads, setLeads] = useState(20);
  const [conv, setConv] = useState(15);
  const [loan, setLoan] = useState(50000);
  
  const cost = leads * 85;
  const revenue = (leads * (conv/100)) * (loan * 0.02);
  const profit = revenue - cost;

  return (
    <section id="roi" className="py-20 px-6 lg:px-10 bg-muted/30">
      <div className="max-w-4xl">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-2">ROI Estimator</h2>
          <p className="text-muted-foreground">Calculate potential returns with Tier A leads.</p>
        </div>

        <div className="bg-background rounded-xl border p-6 lg:p-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">Leads per Month</label>
                  <span className="text-sm font-bold">{leads}</span>
                </div>
                <input type="range" min="10" max="100" value={leads} onChange={e => setLeads(Number(e.target.value))} className="w-full accent-primary" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">Conversion Rate</label>
                  <span className="text-sm font-bold">{conv}%</span>
                </div>
                <input type="range" min="5" max="30" value={conv} onChange={e => setConv(Number(e.target.value))} className="w-full accent-primary" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">Avg Loan Value</label>
                  <span className="text-sm font-bold">£{loan.toLocaleString()}</span>
                </div>
                <input type="range" min="10000" max="100000" step="5000" value={loan} onChange={e => setLoan(Number(e.target.value))} className="w-full accent-primary" />
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 flex flex-col justify-center space-y-4 border border-slate-100">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Monthly Investment</span>
                <span className="font-medium">£{cost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Est. Revenue (2% comm.)</span>
                <span className="font-medium">£{revenue.toLocaleString()}</span>
              </div>
              <div className="pt-4 border-t border-slate-200 mt-2">
                <div className="flex justify-between items-end">
                  <span className="font-semibold text-slate-900">Net Profit</span>
                  <span className="text-2xl font-bold text-[#2998FD]">£{profit.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- FAQ ---
function FAQ() {
  const faqs = [
    { q: "Is there a minimum contract?", a: "No. You can start with a small test batch and scale as needed. Pause or cancel anytime." },
    { q: "How fast are leads delivered?", a: "Instantly. As soon as a lead completes qualification, it's sent to your email or CRM." },
    { q: "What is your refund policy?", a: "We replace any invalid lead (disconnected number, wrong person) free of charge." },
  ];

  return (
    <section id="faq" className="py-20 px-6 lg:px-10">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-bold mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div key={i} className="border rounded-lg p-5 bg-card">
              <h3 className="font-medium mb-2 text-foreground">{item.q}</h3>
              <p className="text-muted-foreground text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Contact ---
function Contact() {
  return (
    <section id="contact" className="py-20 px-6 lg:px-10 bg-background border-t">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Start?</h2>
        <p className="text-muted-foreground mb-8">
          Request access to our platform and start receiving leads today.
        </p>
        
        <div className="space-y-3 text-left">
          <Input placeholder="Full Name" />
          <Input placeholder="Work Email" />
          <Button className="w-full bg-[#2998FD] hover:bg-[#1f7fd9] text-white">
            Get Access
          </Button>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
export default function SalesRoomPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const [activeSection, setActiveSection] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const auth = sessionStorage.getItem("salesRoomAuth");
    if (auth === "true") setIsAuthenticated(true);
    setIsChecking(false);
  }, []);

  // Scroll Spy
  useEffect(() => {
    if (!isAuthenticated) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { rootMargin: "-20% 0px -60% 0px" });

    navItems.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isAuthenticated]);

  const handleNavigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  if (isChecking) return null;

  if (!isAuthenticated) {
    return <PasswordProtection onPasswordCorrect={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur border-b h-14 flex items-center px-4 justify-between">
        <div className="font-bold text-lg">Sendlead</div>
        <button onClick={() => setSidebarOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </header>

      <Sidebar 
        activeSection={activeSection} 
        onNavigate={handleNavigate}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      {/* Main Content Area */}
      <main className="lg:pl-64 pt-14 lg:pt-0 transition-all duration-300">
        <Overview />
        <Process />
        <QualificationDemo />
        <LeadData />
        <Pricing />
        <ROICalculator />
        <FAQ />
        <Contact />
        
        <footer className="py-8 text-center text-xs text-muted-foreground border-t mx-6 lg:mx-10">
          © {new Date().getFullYear()} Sendlead. Confidential Sales Material.
        </footer>
      </main>
    </div>
  );
}



