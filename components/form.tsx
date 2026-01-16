"use client"

import type React from "react"

import { useState } from "react"


export default function ParentConsentForm() {
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
   <div className="w-full max-w-lg p-4 h-[55vh] mx-auto">

    <div className="bg-[#63277E] border-4 border-[#FFD900] px-4 py-2 h-[40vh] overflow-y-auto">

        {/* Header */}
        <div className=" text-center">
          <h1 className="text-xl font-[fredoka] font-[700] text-[#FFD900] ">Parent consent</h1>
          <p className="text-white text-sm font-[fredoka]">We need to verify an adult is Present.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Parent Name */}
          <div>
            <label className="block text-[#FFD900] font-[fredoka] text-sm ">Parent Name</label>
            <input
              type="text"
              value={formData.parentName}
              onChange={(e) => handleInputChange("parentName", e.target.value)}
              className="mb-1 w-full px-2 py-1 bg-white font-[fredoka] text-black border-0 focus:outline-none focus:ring-2 focus:ring-[#FFD900]"
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
                  className="w-full px-2 py-1 bg-white font-[fredoka] text-black  border-0 focus:outline-none focus:ring-2 focus:ring-[#FFD900] appearance-none cursor-pointer"
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
                className="mb-1 w-full px-2 py-1 bg-white font-[fredoka] text-black  border-0 focus:outline-none focus:ring-2 focus:ring-[#FFD900]"
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
                className="w-full px-2 py-1 bg-white font-[fredoka] text-black border-0 focus:outline-none focus:ring-2 focus:ring-[#FFD900]"
                placeholder="9999999999"
              />
            </div>
            <button
              type="button"
              className="bg-yellow-400 text-black font-[fredoka] font-bold py-1 px-2  hover:bg-yellow-500 transition-colors whitespace-nowrap"
            >
              Get OTP
            </button>
          </div>

          {/* Checkboxes */}
          <div className="space-y-3 py-4">
            <label className="flex items-start cursor-pointer group">
              <input
                type="checkbox"
                checked={checkboxes.moderation}
                onChange={() => handleCheckboxChange("moderation")}
                className="w-5 h-5 mt-0.5 cursor-pointer accent-yellow-400"
              />
              <span className="ml-3 text-white text-sm font-[fredoka]">
                I allow this story to be moderated and shared on the platform.
              </span>
            </label>

            <label className="flex items-start cursor-pointer group">
              <input
                type="checkbox"
                checked={checkboxes.anonymize}
                onChange={() => handleCheckboxChange("anonymize")}
                className="w-5 h-5 mt-0.5 cursor-pointer accent-blue-500"
              />
              <span className="ml-3 text-white text-sm font-[fredoka]">Anonymize child's name (Recommended)</span>
            </label>
          </div>
        </form>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="w-full mt-4 bg-[##D4D4D4] text-[#9F9F9F] font-[fredoka] font-semibold py-3 px-6  hover:bg-gray-400 transition-colors"
      >
        Submit with Parent —
      </button>
    </div>
  )
}
