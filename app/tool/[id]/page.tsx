'use client'

import { notFound } from 'next/navigation'
import Image from 'next/image'
import { ToolReviews } from '@/components/ToolReviews'
import { RelatedTools } from '@/components/RelatedTools'
import { toolsData, Tool } from '@/components/ToolsList'
import { useEffect, useState } from 'react'

export default function ToolPage({ params }: { params: { id: string } }) {
  const [tool, setTool] = useState<Tool | null>(null)

  useEffect(() => {
    // 在客户端查找工具
    const findTool = () => {
      for (const category of toolsData) {
        const found = category.tools.find(t => t.id === params.id)
        if (found) {
          // 添加默认值
          setTool({
            ...found,
            category: found.category || '未分类',
            rating: found.rating || 0,
            reviews: found.reviews || 0,
            pricing: found.pricing || [
              { 
                name: '基础版', 
                price: '暂无价格', 
                features: ['暂无详细信息'] 
              }
            ],
            features: found.features || [
              '暂无特性信息'
            ]
          })
          return
        }
      }
      notFound()
    }

    findTool()
  }, [params.id])

  if (!tool) {
    return <div className="min-h-screen bg-gray-50 p-8 flex items-center justify-center">
      <div className="text-center">
        <div className="text-2xl font-bold text-gray-600 mb-2">加载中...</div>
        <div className="text-gray-500">正在获取工具信息</div>
      </div>
    </div>
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* 工具头部信息 */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 relative bg-white/10 rounded-xl p-2">
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  width={80}
                  height={80}
                  className="rounded-lg object-contain"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2">{tool.name}</h1>
                <p className="text-lg text-gray-100 max-w-2xl">{tool.description}</p>
              </div>
            </div>
          </div>

          {/* 工具详细信息 */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 特性列表 */}
              <div>
                <h2 className="text-xl font-semibold mb-4">主要特性</h2>
                <ul className="space-y-3">
                  {tool.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 价格方案 */}
              <div>
                <h2 className="text-xl font-semibold mb-4">价格方案</h2>
                <div className="space-y-4">
                  {tool.pricing.map((plan, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold">{plan.name}</h3>
                        <span className="text-blue-600 font-medium">{plan.price}</span>
                      </div>
                      <ul className="text-sm text-gray-600">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="mb-1">• {feature}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 访问按钮 */}
            <div className="mt-8 flex justify-center">
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                访问官网
              </a>
            </div>
          </div>
        </div>

        {/* 评论区 */}
        <ToolReviews toolId={tool.id} />

        {/* 相关工具推荐 */}
        <RelatedTools category={tool.category} currentToolId={tool.id} />
      </div>
    </div>
  )
} 