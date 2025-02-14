import Link from 'next/link'
import { IconPalette, IconPencil, IconChartBar, IconRocket } from '@/components/icons'

const categories = [
  {
    id: 'creative',
    title: '广告制作',
    icon: IconPalette,
    description: 'AI驱动的创意设计工具',
    color: 'bg-blue-500',
    toolCount: 28,
    tags: ['图片生成', '视频制作', '设计辅助']
  },
  {
    id: 'copywriting',
    title: '文案优化',
    icon: IconPencil,
    description: '智能文案生成与优化',
    color: 'bg-green-500',
    toolCount: 35,
    tags: ['文案生成', 'SEO优化', '标题优化']
  },
  {
    id: 'advertising',
    title: '投流管理',
    icon: IconRocket,
    description: '智能投放与优化工具',
    color: 'bg-purple-500',
    toolCount: 42,
    tags: ['广告优化', '自动化投放', '竞价管理']
  },
  {
    id: 'analytics',
    title: '数据分析',
    icon: IconChartBar,
    description: 'AI驱动的数据分析工具',
    color: 'bg-orange-500',
    toolCount: 31,
    tags: ['数据可视化', '预测分析', '归因分析']
  },
]

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-12">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/category/${category.id}`}
          className="group"
        >
          <div className="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className={`${category.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
              <category.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
            <p className="text-gray-600 mb-4">{category.description}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{category.toolCount}个工具</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {category.tags.map((tag, index) => (
                <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
} 