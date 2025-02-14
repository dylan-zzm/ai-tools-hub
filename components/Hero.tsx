'use client'
import { useState } from 'react'

export function Hero() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="text-center py-16 bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          发现最佳<span className="text-yellow-300">AI营销工具</span>
        </h1>
        <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8">
          我们精选全球顶级AI工具，助力您的营销效率提升
        </p>
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索AI工具..."
              className="w-full px-6 py-3 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              搜索
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 