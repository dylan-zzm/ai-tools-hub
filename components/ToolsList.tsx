'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ToolCard } from './ToolCard'

// 将 Tool 接口导出
export interface Tool {
  id: string
  name: string
  description: string
  icon: string
  url: string
  category?: string
  rating?: number
  reviews?: number
  pricing?: {
    name: string
    price: string
    features: string[]
  }[]
  features?: string[]
}

interface Category {
  id: string
  title: string
  tools: Tool[]
}

// 确保导出 toolsData
export const toolsData: Category[] = [
  {
    id: 'creative',
    title: '创意生成',
    tools: [
      {
        id: 'midjourney',
        name: 'Midjourney',
        description: '这个页面有修改文字，您看这个工具的详情页。',
        icon: '/tools/midjourney.png',
        url: 'https:raphael.app',
        category: '创意生成',
        rating: 4.9,
        reviews: 1280,
        pricing: [
          { 
            name: '基础版', 
            price: '0美元/月', 
            features: [
              '没有额度限制',
              '无需用户注册',
              '不需要魔法',
              '不限速'
            ] 
          },
          { 
            name: '专业版', 
            price: '30美元/月', 
            features: [
              '完整的商业授权文件',
              '隐/显性水印添加',
              '转换为PS可编辑的形式',
              '图片生成可叠加图层',
              '专属的文件夹管理'
            ] 
          }
        ],
        features: [
          '支持中英文提示词描述',
          '内置多种艺术风格和参考',
          '实时预览和快速迭代',
          '批量图片生成和导出',
          '图片编辑与风格变体',
          '完整的商业版权授权',
          'Discord社区交流支持',
          'API接口调用支持'
        ]
      },
      {
        id: 'dalle',
        name: 'DALL-E 3',
        description: 'OpenAI开发的AI艺术创作工具',
        icon: '/tools/dalle.png',
        url: 'https://openai.com'
      },
      {
        id: 'stable-diffusion',
        name: 'Stable Diffusion',
        description: '开源的AI图像生成模型',
        icon: '/tools/stable-diffusion.png',
        url: 'https://github.com/CompVis/stable-diffusion'
      },
      {
        id: 'runway',
        name: 'Runway',
        description: 'AI视频生成与编辑工具',
        icon: '/tools/runway.png',
        url: 'https://runwayml.com'
      },
      {
        id: 'leonardo',
        name: 'Leonardo.ai',
        description: '专业的AI艺术创作平台',
        icon: '/tools/leonardo.png',
        url: 'https://leonardo.ai'
      },
      {
        id: 'firefly',
        name: 'Adobe Firefly',
        description: 'Adobe的AI创意工具套件',
        icon: '/tools/firefly.png',
        url: 'https://www.adobe.com'
      },
      {
        id: 'canva',
        name: 'Canva AI',
        description: '智能设计助手',
        icon: '/tools/canva.png',
        url: 'https://www.canva.com'
      },
      {
        id: 'jasper-art',
        name: 'Jasper Art',
        description: '营销图像生成工具',
        icon: '/tools/jasper.png',
        url: 'https://jasper.ai'
      },
      {
        id: 'ideogram',
        name: 'Ideogram',
        description: '文字与logo设计工具',
        icon: '/tools/ideogram.png',
        url: 'https://ideogram.ai'
      }
    ]
  },
  {
    id: 'image-service',
    title: '生图服务',
    tools: [
      {
        id: 'clipdrop',
        name: 'ClipDrop',
        description: 'AI图像编辑与背景移除',
        icon: '/tools/clipdrop.png',
        url: 'https://clipdrop.co'
      },
      {
        id: 'photoroom',
        name: 'PhotoRoom',
        description: '智能产品图片处理',
        icon: '/tools/photoroom.png',
        url: 'https://photoroom.ai'
      },
      {
        id: 'removal-ai',
        name: 'Removal.ai',
        description: '自动背景移除工具',
        icon: '/tools/removal-ai.png',
        url: 'https://removal.ai'
      },
      {
        id: 'pixelcut',
        name: 'Pixelcut',
        description: '移动端AI图像编辑',
        icon: '/tools/pixelcut.png',
        url: 'https://pixelcut.app'
      },
      {
        id: 'upscayl',
        name: 'Upscayl',
        description: 'AI图像超分辨率工具',
        icon: '/tools/upscayl.png',
        url: 'https://upscayl.com'
      },
      {
        id: 'topaz',
        name: 'Topaz Labs',
        description: '专业图像增强套件',
        icon: '/tools/topaz.png',
        url: 'https://topazlabs.com'
      },
      {
        id: 'cleanup',
        name: 'Cleanup.pictures',
        description: '智能图像修复工具',
        icon: '/tools/cleanup.png',
        url: 'https://cleanup.pictures'
      },
      {
        id: 'stockai',
        name: 'Stock AI',
        description: 'AI生成的版权图片',
        icon: '/tools/stockai.png',
        url: 'https://stockai.com'
      },
      {
        id: 'imagine-me',
        name: 'Imagine Me',
        description: '个人AI写真生成',
        icon: '/tools/imagine-me.png',
        url: 'https://imagineme.ai'
      }
    ]
  },
  {
    id: 'live',
    title: '直播服务',
    tools: [
      {
        id: 'synthesia',
        name: 'Synthesia',
        description: 'AI数字人视频生成',
        icon: '/tools/synthesia.png',
        url: 'https://synthesia.ai'
      },
      {
        id: 'heygen',
        name: 'HeyGen',
        description: 'AI营销视频制作',
        icon: '/tools/heygen.png',
        url: 'https://heygen.ai'
      },
      {
        id: 'descript',
        name: 'Descript',
        description: 'AI视频编辑工具',
        icon: '/tools/descript.png',
        url: 'https://descript.com'
      },
      {
        id: 'deepbrain',
        name: 'DeepBrain AI',
        description: 'AI主播生成平台',
        icon: '/tools/deepbrain.png',
        url: 'https://deepbrain.ai'
      },
      {
        id: 'hour-one',
        name: 'Hour One',
        description: 'AI人物视频生成',
        icon: '/tools/hour-one.png',
        url: 'https://hourone.ai'
      },
      {
        id: 'pictory',
        name: 'Pictory',
        description: '自动视频剪辑工具',
        icon: '/tools/pictory.png',
        url: 'https://pictory.ai'
      },
      {
        id: 'kapwing',
        name: 'Kapwing',
        description: '在线视频编辑平台',
        icon: '/tools/kapwing.png',
        url: 'https://kapwing.com'
      },
      {
        id: 'veed',
        name: 'VEED.IO',
        description: '专业视频编辑工具',
        icon: '/tools/veed.png',
        url: 'https://veed.io'
      },
      {
        id: 'lumen5',
        name: 'Lumen5',
        description: '营销视频自动生成',
        icon: '/tools/lumen5.png',
        url: 'https://lumen5.com'
      }
    ]
  },
  {
    id: 'cross-border',
    title: '跨境支持',
    tools: [
      {
        id: 'deepl',
        name: 'DeepL',
        description: '专业翻译工具',
        icon: '/tools/deepl.png',
        url: 'https://deepl.com'
      },
      {
        id: 'wordtune',
        name: 'Wordtune',
        description: '英文写作优化助手',
        icon: '/tools/wordtune.png',
        url: 'https://wordtune.com'
      },
      {
        id: 'grammarly',
        name: 'Grammarly',
        description: '英语语法检查工具',
        icon: '/tools/grammarly.png',
        url: 'https://grammarly.com'
      },
      {
        id: 'languagepro',
        name: 'Language Pro',
        description: '多语言内容优化',
        icon: '/tools/languagepro.png',
        url: 'https://languagepro.ai'
      },
      {
        id: 'lokalise',
        name: 'Lokalise AI',
        description: '本地化翻译平台',
        icon: '/tools/lokalise.png',
        url: 'https://lokalise.com'
      },
      {
        id: 'unbabel',
        name: 'Unbabel',
        description: 'AI辅助人工翻译',
        icon: '/tools/unbabel.png',
        url: 'https://unbabel.com'
      },
      {
        id: 'smartling',
        name: 'Smartling',
        description: '企业翻译管理平台',
        icon: '/tools/smartling.png',
        url: 'https://smartling.com'
      },
      {
        id: 'writesonic',
        name: 'Writesonic',
        description: '多语言内容生成',
        icon: '/tools/writesonic.png',
        url: 'https://writesonic.com'
      },
      {
        id: 'copysmith',
        name: 'Copysmith',
        description: '跨境电商内容助手',
        icon: '/tools/copysmith.png',
        url: 'https://copysmith.ai'
      }
    ]
  }
]

// 添加工具点击追踪函数
function trackToolClick(tool: Tool) {
  try {
    const storedTools = localStorage.getItem('recentTools')
    let recentTools: Tool[] = storedTools ? JSON.parse(storedTools) : []
    
    // 移除已存在的相同工具
    recentTools = recentTools.filter(t => t.id !== tool.id)
    
    // 添加到开头
    recentTools.unshift(tool)
    
    // 限制数量
    if (recentTools.length > 4) {
      recentTools = recentTools.slice(0, 4)
    }
    
    localStorage.setItem('recentTools', JSON.stringify(recentTools))
  } catch (error) {
    console.error('Error tracking tool click:', error)
  }
}

export function ToolsList() {
  return (
    <div className="py-12">
      {toolsData.map((category, categoryIndex) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: categoryIndex * 0.1 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="mr-2">{category.title}</span>
            <span className="text-sm text-gray-500 font-normal">
              ({category.tools.length}个工具)
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {category.tools.map((tool, toolIndex) => (
              <ToolCard
                key={tool.id}
                tool={tool}
                onClick={() => trackToolClick(tool)}
                delay={(categoryIndex * 0.1) + (toolIndex * 0.05)}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
} 