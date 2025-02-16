'use client'

import { useState, useEffect } from 'react'
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

// 从 localStorage 获取评论
const getStoredReviews = (toolId: string): Review[] => {
  if (typeof window === 'undefined') return []
  const stored = localStorage.getItem(`reviews_${toolId}`)
  return stored ? JSON.parse(stored) : []
}

// 保存评论到 localStorage
const saveReviews = (toolId: string, reviews: Review[]) => {
  localStorage.setItem(`reviews_${toolId}`, JSON.stringify(reviews))
}

export function ToolReviews({ toolId }: { toolId: string }) {
  const [reviews, setReviews] = useState<Review[]>([])
  const [newReview, setNewReview] = useState('')
  const [rating, setRating] = useState(5)
  const [submitting, setSubmitting] = useState(false)

  // 加载已有评论
  useEffect(() => {
    setReviews(getStoredReviews(toolId))
  }, [toolId])

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newReview.trim()) {
      alert('请输入评论内容')
      return
    }

    setSubmitting(true)

    try {
      // 创建新评论
      const review: Review = {
        id: Date.now().toString(),
        user: {
          name: '匿名用户',  // 可以改为实际用户名
          avatar: '/avatars/default.png'  // 默认头像
        },
        rating,
        content: newReview,
        date: new Date().toISOString().split('T')[0]
      }

      // 更新状态
      const updatedReviews = [review, ...reviews]
      setReviews(updatedReviews)
      
      // 保存到 localStorage
      saveReviews(toolId, updatedReviews)

      // 重置表单
      setNewReview('')
      setRating(5)

      // 显示成功提示
      alert('评论提交成功！')
    } catch (error) {
      console.error('提交评论失败:', error)
      alert('评论提交失败，请重试')
    } finally {
      setSubmitting(false)
    }
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
                  width={40}
                  height={40}
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
          disabled={submitting}
          className={`bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors ${
            submitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {submitting ? '提交中...' : '提交评价'}
        </button>
      </form>
    </div>
  )
} 