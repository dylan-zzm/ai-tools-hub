'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const featuredTools = [
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'AI图像生成工具的领导者',
    category: '广告制作',
    icon: '/icons/midjourney.png',
    rating: 4.9,
    reviews: 1280,
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: '智能文案生成与优化助手',
    category: '文案优化',
    icon: '/icons/chatgpt.png',
    rating: 4.8,
    reviews: 2150,
  },
  // 添加更多推荐工具...
]

export function FeaturedTools() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">热门推荐</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/tool/${tool.id}`}>
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 relative">
                      <Image
                        src={tool.icon}
                        alt={tool.name}
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{tool.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{tool.description}</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">{tool.category}</span>
                        <span className="text-sm text-yellow-500">★ {tool.rating}</span>
                        <span className="text-sm text-gray-500">({tool.reviews})</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 