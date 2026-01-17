"use client"

import Link from "next/link"
import type React from "react"

import { useState } from "react"


export default function ParentConsentForm() {
    const [otpRequested, setOtpRequested] = useState(false)
const [otp, setOtp] = useState(["", "", "", ""])

  const [formData, setFormData] = useState({
    parentName: "Abcd",
    gender: "Male",
    age: "00",
    mobileNumber: "9992226662",
  })

  type CheckboxField = "moderation" | "anonymize"

  const [checkboxes, setCheckboxes] = useState<Record<CheckboxField, boolean>>({
    moderation: false,
    anonymize: true,
  })

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

   <div className={`bg-[#63277E] border-4 border-[#FFD900] px-4 py-2 ${otpRequested ? 'h-[38vh]' : 'h-[36vh]'} overflow-y-auto`}>

        {/* Header */}
     

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Parent Name */}
          <div>
            <label className="block text-[#FFD900] font-[fredoka] text-sm ">Name</label>
            <input
              type="text"
              value={formData.parentName}
              onChange={(e) => handleInputChange("parentName", e.target.value)}
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
                type="text"
                value={formData.age}
                onChange={(e) => handleInputChange("age", e.target.value)}
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
                onChange={(e) => handleInputChange("mobileNumber", e.target.value)}
                className="w-full px-3 py-2 bg-white font-[fredoka] text-black border-0 focus:outline-none focus:ring-2 focus:ring-[#FFD900]"
                placeholder="9999999999"
              />
            </div>
         <button
  type="button"
  onClick={() => setOtpRequested(true)}
  className="bg-yellow-400 text-black font-[fredoka] font-bold py-2 px-3 hover:bg-yellow-500"
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
        onChange={(e) => {
          const newOtp = [...otp]
          newOtp[index] = e.target.value.replace(/\D/, "")
          setOtp(newOtp)
        }}
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

  disabled={!otpRequested}
  className={`w-full mt-2 font-[fredoka] font-semibold py-2 px-4 transition-colors text-xl
    ${
      otpRequested
        ? "bg-[#FFD900] text-black hover:bg-yellow-500"
        : "bg-[#D4D4D4] text-[#9F9F9F] cursor-not-allowed"
    }
  `}
>
  {otpRequested ? "Submit" : "Verify Your Number"}
</button>
</Link>
    </div>
  )
}
