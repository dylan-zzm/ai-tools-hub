'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Tool } from './ToolsList'

interface ToolCardProps {
  tool: Tool
  onClick?: () => void
  delay?: number
}

export function ToolCard({ tool, onClick, delay = 0 }: ToolCardProps) {
  const handleVisitWebsite = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    window.open(tool.url, '_blank', 'noopener,noreferrer')
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      className="relative"
    >
      <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
        <div className="flex items-start space-x-4">
          <div className="w-16 h-16 relative flex-shrink-0">
            <Image
              src={tool.icon}
              alt={tool.name}
              width={64}
              height={64}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold mb-1 truncate">{tool.name}</h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{tool.description}</p>
          </div>
        </div>
        <div className="flex justify-end mt-2">
          <button
            onClick={handleVisitWebsite}
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors z-10"
          >
            直达官网
            <svg 
              className="w-4 h-4 ml-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </button>
        </div>
        <Link 
          href={`/tool/${tool.id}`}
          onClick={onClick}
          className="absolute inset-0"
          aria-label={`查看 ${tool.name} 详情`}
        />
      </div>
    </motion.div>
  )
} 