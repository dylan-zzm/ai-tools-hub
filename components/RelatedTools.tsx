'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// 模拟相关工具数据
const mockRelatedTools = [
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion',
    description: '开源AI图像生成工具',
    icon: '/icons/stable-diffusion.png',
    category: '广告制作'
  },
  // 添加更多相关工具...
]

export function RelatedTools({ 
  category, 
  currentToolId 
}: { 
  category: string
  currentToolId: string 
}) {
  const relatedTools = mockRelatedTools.filter(tool => 
    tool.category === category && tool.id !== currentToolId
  )

  return (
    <div className="mt-8 bg-white rounded-xl shadow-sm p-8">
      <h2 className="text-2xl font-bold mb-6">相关工具</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedTools.map((tool, index) => (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={`/tool/${tool.id}`}>
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 relative">
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      fill
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{tool.name}</h3>
                    <p className="text-sm text-gray-600">{tool.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 