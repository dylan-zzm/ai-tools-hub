'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// 节日数据，按日期排序
const allHolidays = [
  { name: '618购物节', date: '2024-06-18', theme: 'from-blue-500 to-purple-500' },
  { name: '七夕节', date: '2024-08-22', theme: 'from-pink-500 to-rose-500' },
  { name: '中秋节', date: '2024-09-17', theme: 'from-yellow-500 to-orange-500' },
  { name: '国庆节', date: '2024-10-01', theme: 'from-red-500 to-orange-500' },
  { name: '双11', date: '2024-11-11', theme: 'from-purple-500 to-red-500' },
  { name: '双12', date: '2024-12-12', theme: 'from-blue-500 to-indigo-500' },
  { name: '元旦节', date: '2025-01-01', theme: 'from-green-500 to-teal-500' },
  { name: '春节', date: '2025-01-29', theme: 'from-red-500 to-yellow-500' }
]

interface Holiday {
  name: string
  date: string
  theme: string
  daysLeft: number
}

export function HolidayCountdown() {
  const [upcomingHolidays, setUpcomingHolidays] = useState<Holiday[]>([])

  useEffect(() => {
    const calculateHolidays = () => {
      const now = new Date()
      // 设置时间为当天开始
      now.setHours(0, 0, 0, 0)

      const upcoming = allHolidays
        .map(h => {
          const holidayDate = new Date(h.date)
          holidayDate.setHours(0, 0, 0, 0)
          return {
            ...h,
            daysLeft: Math.ceil((holidayDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
          }
        })
        .filter(h => h.daysLeft >= 0) // 修改为 >= 0，包含当天
        .sort((a, b) => a.daysLeft - b.daysLeft)
        .slice(0, 4)

      console.log('Calculated holidays:', upcoming)
      setUpcomingHolidays(upcoming)
    }

    // 立即计算一次
    calculateHolidays()
    
    // 每天凌晨更新一次
    const timer = setInterval(calculateHolidays, 1000 * 60 * 60)
    
    return () => clearInterval(timer)
  }, [])

  // 如果没有即将到来的节日，显示占位内容
  if (upcomingHolidays.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        正在加载节日信息...
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-8">
      {upcomingHolidays.map((holiday, index) => (
        <motion.div
          key={holiday.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`bg-gradient-to-r ${holiday.theme} rounded-lg p-4 text-white shadow-lg`}
        >
          <div className="text-center">
            <h3 className="text-lg font-medium mb-2">{holiday.name}</h3>
            <div className="flex items-center justify-center space-x-2">
              <motion.div
                key={holiday.daysLeft}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                className="bg-white/20 rounded-lg px-3 py-1"
              >
                <span className="text-2xl font-bold">{holiday.daysLeft}</span>
                <span className="ml-1">天</span>
              </motion.div>
            </div>
            <div className="mt-2 text-sm text-white/80">
              {new Date(holiday.date).toLocaleDateString('zh-CN')}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
} 