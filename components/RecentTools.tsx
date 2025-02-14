'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Tool } from './ToolsList' // 导入 Tool 接口
import { ToolCard } from './ToolCard'

const MAX_RECENT_TOOLS = 4

export function RecentTools() {
  const [recentTools, setRecentTools] = useState<Tool[]>([])

  useEffect(() => {
    // 从 localStorage 获取最近访问的工具
    const storedTools = localStorage.getItem('recentTools')
    if (storedTools) {
      setRecentTools(JSON.parse(storedTools))
    }
  }, [])

  if (recentTools.length === 0) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-16"
    >
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <span className="mr-2">您的常用</span>
        <span className="text-sm text-gray-500 font-normal">
          (最近访问)
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {recentTools.map((tool, index) => (
          <ToolCard
            key={tool.id}
            tool={tool}
            delay={index * 0.05}
          />
        ))}
      </div>
    </motion.div>
  )
} 