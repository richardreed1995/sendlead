"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "../../card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { Home, Lock, Sun, Leaf, MessageCircle, Shield, CheckCircle, MoreHorizontal } from "lucide-react";

const leadTypes = [
  { id: "mortgages", label: "Mortgages", icon: <Home className="h-6 w-6 text-gray-700" /> },
  { id: "secured-loans", label: "Secured Loans", icon: <Lock className="h-6 w-6 text-gray-700" /> },
  { id: "solar", label: "Solar", icon: <Sun className="h-6 w-6 text-gray-700" /> },
  { id: "eco4", label: "ECO4", icon: <Leaf className="h-6 w-6 text-gray-700" /> },
  { id: "financial-advice", label: "Financial Advice", icon: <MessageCircle className="h-6 w-6 text-gray-700" /> },
  { id: "life-insurance", label: "Life Insurance", icon: <Shield className="h-6 w-6 text-gray-700" /> },
  { id: "equity-release", label: "Equity Release", icon: <CheckCircle className="h-6 w-6 text-gray-700" /> },
  { id: "other", label: "Other", icon: <MoreHorizontal className="h-6 w-6 text-gray-700" /> },
];

export default function QuizFunnel() {
  const [step, setStep] = useState(0);
  const [buyingLeads, setBuyingLeads] = useState<null | boolean>(null);
  const [leadsPerWeek, setLeadsPerWeek] = useState(500);
  const [additionalLeads, setAdditionalLeads] = useState(500);
  const [spend, setSpend] = useState(0);
  const [leadType, setLeadType] = useState<string | null>(null);
  const [contact, setContact] = useState({ first: "", last: "", company: "", phone: "", email: "" });
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const totalSteps = 6;
  const progress = ((step + 1) / totalSteps) * 100;

  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  function validatePhone(phone: string) {
    // Accepts UK/international, 10-15 digits, allows spaces/dashes/parentheses
    return /^[+]?[(]?[0-9]{1,4}[)]?[-\s0-9]{7,15}$/.test(phone);
  }

  // Reordered steps:
  // 0: What type of leads are you looking for? *
  // 1: Are you currently buying leads? *
  // 2: How many leads are you currently buying per week?
  // 3: How many additional leads are you looking for per week?
  // 4: How much are you currently spending on leads per month?
  // 5: We just need a few contact details:

  function next() {
    setError("");
    if (step === 0 && !leadType) return setError("Please select a lead type");
    if (step === 1 && buyingLeads === null) return setError("Please select an option");
    if (step === 4 && !spend && spend !== 0) return setError("Please enter a value");
    if (step === 5) {
      if (!contact.first || !contact.last || !contact.company || !contact.phone || !contact.email) {
        return setError("Please fill in all fields");
      }
      if (!validateEmail(contact.email)) {
        return setError("Please enter a valid email address");
      }
      if (!validatePhone(contact.phone)) {
        return setError("Please enter a valid phone number");
      }
      if (!agree) return setError("You must agree to the privacy policy");
      router.push("/success");
      return;
    }
    setStep((s) => s + 1);
  }
  function prev() { setStep((s) => Math.max(0, s - 1)); }

  return (
    <div>
      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm text-gray-500">
          <span>Step {step + 1} of {totalSteps}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-black transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>
      <Card className="border border-gray-200 shadow-sm p-6">
        {step === 0 && (
          <div>
            <h3 className="text-xl font-bold mb-6 text-center">What type of leads are you looking for? <span className="text-red-500">*</span></h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
              {leadTypes.map(type => (
                <button
                  key={type.id}
                  className={`rounded-xl border-2 flex flex-col items-center py-8 px-2 font-semibold text-lg transition-all ${leadType === type.id ? "border-black bg-gray-100" : "border-gray-200 bg-white hover:bg-gray-50"}`}
                  onClick={() => setLeadType(type.id)}
                >
                  <span className="mb-2">{type.icon}</span>
                  {type.label}
                </button>
              ))}
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <div className="flex justify-between gap-4 mt-6 w-full">
              <Button variant="back" className="w-1/2" onClick={prev} disabled={step === 0}>Back</Button>
              <Button className="w-1/2" onClick={next}>Next</Button>
            </div>
          </div>
        )}
        {step === 1 && (
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-6">Are you currently buying leads? <span className="text-red-500">*</span></h3>
            <div className="flex gap-8 mb-4">
              <button
                className={`rounded-xl px-8 py-8 text-2xl font-bold flex flex-col items-center border-2 ${buyingLeads === true ? "border-black bg-gray-100" : "border-gray-200"}`}
                onClick={() => setBuyingLeads(true)}
              >
                Yes
              </button>
              <button
                className={`rounded-xl px-8 py-8 text-2xl font-bold flex flex-col items-center border-2 ${buyingLeads === false ? "border-black bg-gray-100" : "border-gray-200"}`}
                onClick={() => setBuyingLeads(false)}
              >
                No
              </button>
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <div className="flex justify-between gap-4 mt-6 w-full">
              <Button variant="back" className="w-1/2" onClick={prev}>Back</Button>
              <Button className="w-1/2" onClick={next}>Next</Button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-6">How many leads are you currently buying per week? <span className="text-red-500">*</span></h3>
            <div className="w-full flex justify-center">
              <input
                type="range"
                min={0}
                max={2000}
                step={10}
                value={leadsPerWeek}
                onChange={e => setLeadsPerWeek(Number(e.target.value))}
                className="w-full max-w-xs mb-2 accent-black"
              />
            </div>
            <div className="text-2xl font-bold mb-4">{leadsPerWeek}</div>
            <div className="flex justify-between gap-4 mt-6 w-full">
              <Button variant="back" className="w-1/2" onClick={prev}>Back</Button>
              <Button className="w-1/2" onClick={next}>Next</Button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-6">How many additional leads are you looking for per week?</h3>
            <div className="w-full flex justify-center">
              <input
                type="range"
                min={0}
                max={2000}
                step={10}
                value={additionalLeads}
                onChange={e => setAdditionalLeads(Number(e.target.value))}
                className="w-full max-w-xs mb-2 accent-black"
              />
            </div>
            <div className="text-2xl font-bold mb-4">{additionalLeads}</div>
            <div className="flex justify-between gap-4 mt-6 w-full">
              <Button variant="back" className="w-1/2" onClick={prev}>Back</Button>
              <Button className="w-1/2" onClick={next}>Next</Button>
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-2">How much are you currently spending on leads per month?</h3>
            <p className="text-gray-500 mb-4 text-center">Please include internal ad spend on online platforms like Google, Facebook, Instagram and TikTok.</p>
            <div className="flex items-center w-full mb-4">
              <span className="bg-gray-100 border border-gray-200 rounded-l px-3 py-2 text-lg">£</span>
              <input
                type="number"
                min={0}
                value={spend}
                onChange={e => setSpend(Number(e.target.value))}
                className="w-full border border-gray-200 rounded-r px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <div className="flex justify-between gap-4 mt-6 w-full">
              <Button variant="back" className="w-1/2" onClick={prev}>Back</Button>
              <Button className="w-1/2" onClick={next}>Next</Button>
            </div>
          </div>
        )}
        {step === 5 && (
          <div>
            <h3 className="text-xl font-bold mb-6 text-center">We just need a few contact details:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <Input placeholder="Enter Your First Name" value={contact.first} onChange={e => setContact({ ...contact, first: e.target.value })} />
              <Input placeholder="Enter Your Last Name" value={contact.last} onChange={e => setContact({ ...contact, last: e.target.value })} />
              <Input placeholder="Company Name" value={contact.company} onChange={e => setContact({ ...contact, company: e.target.value })} />
              <Input placeholder="Phone Number" value={contact.phone} onChange={e => setContact({ ...contact, phone: e.target.value })} />
              <Input placeholder="Email Address" value={contact.email} onChange={e => setContact({ ...contact, email: e.target.value })} />
            </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" id="agree" checked={agree} onChange={e => setAgree(e.target.checked)} className="mr-2" />
              <Label htmlFor="agree" className="text-sm">I agree to the privacy policy and terms & conditions</Label>
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <div className="flex justify-between gap-4 mt-6 w-full">
              <Button variant="back" className="w-1/2" onClick={prev}>Back</Button>
              <Button className="w-1/2" onClick={next}>Get started</Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
} 