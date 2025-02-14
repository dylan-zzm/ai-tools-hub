'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface Review {
  id: string
  user: {
    name: string
    avatar: string
  }
  rating: number
  content: string
  date: string
}

// 模拟评论数据
const mockReviews: Review[] = [
  {
    id: '1',
    user: {
      name: '张三',
      avatar: '/avatars/user1.png'
    },
    rating: 5,
    content: '非常好用的工具，大大提高了工作效率！',
    date: '2024-02-13'
  },
  // 添加更多评论...
]

export function ToolReviews({ toolId }: { toolId: string }) {
  const [reviews] = useState<Review[]>(mockReviews)
  const [newReview, setNewReview] = useState('')
  const [rating, setRating] = useState(5)

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    // 处理评论提交
    console.log({ rating, content: newReview })
  }

  return (
    <div className="mt-8 bg-white rounded-xl shadow-sm p-8">
      <h2 className="text-2xl font-bold mb-6">用户评价</h2>

      {/* 评论列表 */}
      <div className="space-y-6 mb-8">
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-b pb-6"
          >
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 relative">
                <Image
                  src={review.avatar}
                  alt={review.user.name}
                  fill
                  className="rounded-full"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{review.user.name}</span>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <div className="flex items-center mt-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${
                        i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600">{review.content}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 评论表单 */}
      <form onSubmit={handleSubmitReview} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            评分
          </label>
          <div className="flex items-center space-x-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setRating(i + 1)}
                className="text-2xl focus:outline-none"
              >
                <span className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
                  ★
                </span>
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            评价内容
          </label>
          <textarea
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="分享您的使用体验..."
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          提交评价
        </button>
      </form>
    </div>
  )
} 