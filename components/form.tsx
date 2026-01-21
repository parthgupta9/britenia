"use client"

import Link from "next/link"
import type React from "react"

import { useRef, useState } from "react"


export default function ParentConsentForm() {
    const [otpRequested, setOtpRequested] = useState(false)
const [otp, setOtp] = useState(["", "", "", ""])
const [showError, setShowError] = useState(false)
    const otpRefs = useRef<Array<HTMLInputElement | null>>([])

  const [formData, setFormData] = useState({
    parentName: "",
    gender: "Male", 
    age: "",
    mobileNumber: "",
  })

  type CheckboxField = "moderation" | "anonymize"

  const [checkboxes, setCheckboxes] = useState<Record<CheckboxField, boolean>>({
    moderation: false,
    anonymize: true,
  })

  const sanitizeName = (value: string) => value.replace(/[^a-zA-Z\s]/g, "")
  const sanitizeDigits = (value: string) => value.replace(/\D/g, "")

  const handleOtpChange = (index: number, rawValue: string) => {
    const value = rawValue.replace(/\D/, "")
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    if (value && index < otp.length - 1) {
      otpRefs.current[index + 1]?.focus()
    }
  }

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus()
    }
  }

  const isReadyToSubmit = otpRequested && checkboxes.moderation

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleCheckboxChange = (field: CheckboxField) => {
    setCheckboxes((prev) => ({
      ...prev,
      [field]: !prev[field],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", { formData, checkboxes })
  }

  return (
  <div className="px-4 w-full max-w-lg h-auto mx-auto">

   <div className={`bg-[#63277E] border-4 border-[#FFD900] px-4 py-2 overflow-hidden ${otpRequested ? 'h-auto' : 'h-auto'}`}>

        {/* Header */}
     

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Parent Name */}
          <div>
            <label className="block text-[#FFD900] font-[fredoka] text-sm ">Name</label>
            <input
              type="text"
              value={formData.parentName}
              onChange={(e) => handleInputChange("parentName", sanitizeName(e.target.value))}
              className="mb-1 w-full px-3 py-2 bg-white font-[fredoka] text-black border-0 focus:outline-none focus:ring-2 focus:ring-[#FFD900]"
              placeholder="Enter parent name"
            />
          </div>

          {/* Gender and Age */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[#FFD900] font-[fredoka] text-sm">Gender</label>
              <div className="relative">
                <select
                  value={formData.gender}
                  onChange={(e) => handleInputChange("gender", e.target.value)}
                  className="w-full px-3 py-2 bg-white font-[fredoka] text-black  border-0 focus:outline-none focus:ring-2 focus:ring-[#FFD900] appearance-none cursor-pointer"
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                <img src="/assets/6.png" className="absolute right-3 top-3.5 w-3 h-2 text-black pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-[#FFD900] font-[fredoka] text-sm">Age</label>
              <input
                type="number"
                min="0"
                max="100"
                value={formData.age}
                onChange={(e) => {
                  const value = sanitizeDigits(e.target.value)
                  if (value === "" || parseInt(value, 10) <= 100) {
                    handleInputChange("age", value)
                  }
                }}
                className="mb-1 w-full px-3 py-2 bg-white font-[fredoka] text-black  border-0 focus:outline-none focus:ring-2 focus:ring-[#FFD900]"
                placeholder="00"
              />
            </div>
          </div>

          {/* Mobile Number and OTP */}
          <div className="grid grid-cols-3 gap-4 items-end">
            <div className="col-span-2">
              <label className="block text-[#FFD900] font-[fredoka] text-sm">Mobile Number</label>
              <input
                type="tel"
                value={formData.mobileNumber}
                onChange={(e) => {
                  const digitsOnly = sanitizeDigits(e.target.value).slice(0, 10)
                  handleInputChange("mobileNumber", digitsOnly)
                  setShowError(false)
                }}
                className="w-full px-3 py-2 bg-white font-[fredoka] text-black border-0 focus:outline-none focus:ring-2 focus:ring-[#FFD900]"
                placeholder="Enter mobile number"
              />
             
            </div>
         <button
  type="button"
  onClick={() => {
    if (formData.mobileNumber.length === 10) {
      setOtpRequested(true)
      setShowError(false)
    } 
  }}
  className={`font-[fredoka] font-bold py-2 px-3 transition-colors ${
    formData.mobileNumber.length === 10
      ? "bg-yellow-400 text-black hover:bg-yellow-500 cursor-pointer"
      : "bg-[#D4D4D4] text-[#9F9F9F] cursor-pointer"
  }`}
>
  Get OTP
</button>

          </div>
{otpRequested && (
  <div className="flex gap-3 justify-between mt-3">
    {otp.map((digit, index) => (
      <input
        key={index}
        type="text"
        maxLength={1}
        value={digit}
        ref={(el) => {
          otpRefs.current[index] = el
        }}
        onChange={(e) => handleOtpChange(index, e.target.value)}
        onKeyDown={(e) => handleOtpKeyDown(index, e)}
        className="w-14 h-8 text-center text-lg font-bold bg-white text-black border-2 border-[#FFD900] focus:outline-none focus:ring-2 focus:ring-[#FFD900]"
      />
    ))}
  </div>
)}

          {/* Checkboxes */}
          <div className="space-y-3 py-4">
            <label className="flex items-start cursor-pointer group">
              <input
                type="checkbox"
                checked={checkboxes.moderation}
                onChange={() => handleCheckboxChange("moderation")}
                className="w-4 h-4 cursor-pointer accent-yellow-400"
              />
              <span className="ml-3 text-white text-sm font-[fredoka]">
              By signing up you agree to our Terms & Conditions and Privacy Policy

              </span>
            </label>

          
          </div>
        </form>
      </div>
<Link href="/submit">
<button
  disabled={!isReadyToSubmit}
  className={`w-full mt-2 font-[fredoka] font-semibold py-2 px-4 transition-colors text-xl
    ${
      isReadyToSubmit
        ? "bg-[#FFD900] text-black hover:bg-yellow-500"
        : "bg-[#D4D4D4] text-[#9F9F9F] cursor-not-allowed"
    }
  `}
>
  {isReadyToSubmit ? "Submit" : "Verify Your Number"}
</button>
</Link>
    </div>
  )
}
