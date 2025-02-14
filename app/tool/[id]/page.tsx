import { notFound } from 'next/navigation'
import Image from 'next/image'
import { ToolReviews } from '@/components/ToolReviews'
import { RelatedTools } from '@/components/RelatedTools'

// 模拟数据，实际应该从数据库获取
const toolData = {
  midjourney: {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'AI图像生成工具的领导者，通过简单的文字描述生成高质量图像。支持多种艺术风格，适用于广告创意、产品展示等场景。',
    category: '广告制作',
    icon: '/icons/midjourney.png',
    rating: 4.9,
    reviews: 1280,
    pricing: [
      { name: '基础版', price: '10美元/月', features: ['每月100次生成', '基础分辨率', '普通用户支持'] },
      { name: '专业版', price: '30美元/月', features: ['无限次生成', '高分辨率', '优先用户支持'] }
    ],
    features: [
      '支持中英文提示词',
      '多种艺术风格选择',
      '批量图片生成',
      '图片编辑与变体',
      '商业版权授权'
    ],
    website: 'https://www.midjourney.com'
  },
  // 其他工具数据...
}

export default function ToolPage({ params }: { params: { id: string } }) {
  const tool = toolData[params.id as keyof typeof toolData]

  if (!tool) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* 工具头部信息 */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 relative">
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  fill
                  className="rounded-xl object-cover"
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
                href={tool.website}
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