"use client";
import React, { useState } from 'react'
import { FaArrowDown } from "react-icons/fa";

export default function FilterOption() {
    const [ showMobFilter, setShowMobFilter ] = useState(false);
  return (
    <div className="w-full sm:max-w-60 sm:min-w-60">

    <button type="button" className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:border-gray-900 hover:text-white hover:bg-gray-900 cursor-pointer mb-4 sm:hidden" onClick={() => setShowMobFilter((prev)=> !prev)}> Filter <span className={`transition-transform duration-300 sm:hidden ${showMobFilter? 'rotate-180' : ''}`}><FaArrowDown /></span></button>

      <div className={`space-y-6 sm:block ${showMobFilter ? 'block' : 'hidden'}`}>

        <div className="rounded-xl border border-gray-300 p-5">
          <h3 className="mb-4 text-sm font-semibold tracking-wide">CATEGORIES</h3>
          <div className="space-y-3 text-sm text-gray-600">
            <label className="flex items-center gap-3">
              <input type="checkbox" className="mr-2" />
              <span>Women</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="mr-2" />
              <span>Men</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="mr-2" />
              <span>Children</span>
            </label>
          </div>
        </div>

        <div className="rounded-xl border border-gray-300 p-5">
          <h3 className="mb-4 text-sm font-semibold tracking-wide">PRODUCT TYPE</h3>
          <div className="space-y-3 text-sm text-gray-600">
            <label className="flex items-center gap-3">
              <input type="checkbox" className="mr-2" />
              <span>T-Shirts</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="mr-2" />
              <span>Shirts</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="mr-2" />
              <span>Hoodies</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="mr-2" />
              <span>Jackets</span>
            </label>
          </div>
        </div>

            

      </div>

    </div>
  )
}
