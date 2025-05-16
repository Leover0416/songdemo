import React from 'react';
import { motion } from 'framer-motion';
import { Music } from 'lucide-react';

const NightEnd = () => {
  const lyrics = [
    {
      chinese: `我的秘密 想对你说\n我的泪滴 想让你触摸\n无言以对 也想蹉跎\n我的年岁 想为你挥霍`,
      english: ``
    },
    {
      chinese: `如果 你让我\n整个宇宙 我都想让你拥有\n以你为念的星宿 陪你到时间尽头`,
      english: ``
    },
    {
      chinese: `就跟我走 若世界狂如洪流\n我陪你寻觅方舟 自由在夜的尽头`,
      english: `I am the one that you've been looking for\nI am the one that you've been looking for`
    },
    {
      chinese: `没有你 快乐太单薄\n是你让快乐足够斑驳\n没有你 世界像荒漠\n你是我荒漠里的江河`,
      english: `I am the one that you've been looking for\nThe way, the truth, the life that you've been looking for`
    },
    {
      chinese: `如果 你让我\n整个宇宙 我都想让你拥有\n以你为念的星宿 陪你到时间尽头\n就跟我走 若世界狂如洪流\n我陪你寻觅方舟 自由在夜的尽头`,
      english: `I am the one that you've been looking for\nI am the one that you've been looking for`
    },
    {
      chinese: `就跟我走 夜的尽头 就是自由\n就跟我走 我带你走 夜的尽头 是永恒的自由`,
      english: `I am the one that you've been looking for\nThe way, the truth, the life that you've been looking for`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2A2356] via-[#4A445F] to-[#D4A6B6] text-white">
      {/* Header */}
      <header className="h-20 flex items-center justify-center bg-white/10 backdrop-blur-sm border-b border-white/20">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-semibold flex items-center"
        >
          <Music className="mr-3" /> 夜的尽头
        </motion.h1>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Chinese Lyrics */}
          <div className="space-y-6">
            {lyrics?.map((verse, index) => (
              <motion.div
                key={`chinese-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: [0.8, 1, 0.8],
                  scale: [0.98, 1, 0.98]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-md rounded-xl p-6 h-48 overflow-y-auto shadow-lg"
              >
                <p className="text-xl leading-relaxed font-serif whitespace-pre-line first-letter:text-2xl first-letter:font-bold">
                  {verse?.chinese}
                </p>
              </motion.div>
            ))}
          </div>

          {/* English Lyrics */}
          <div className="space-y-6">
            {lyrics?.map((verse, index) => (
              <motion.div
                key={`english-${index}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: [0.8, 1, 0.8],
                  scale: [0.98, 1, 0.98]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-md rounded-xl p-6 h-48 overflow-y-auto shadow-lg"
              >
                <p className={`text-lg leading-relaxed font-sans whitespace-pre-line ${index === 2 || index === 5 ? 'text-xl text-[#FF69B4]' : ''}`}>
                  {verse?.english}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="h-16 bg-black/30 flex flex-col items-center justify-center text-sm text-[#D4A6B6]">
        <p>created by <a href="https://space.coze.cn" className="text-[#FFB6C1] hover:text-[#FF69B4] transition-colors">coze space</a></p>
        <p>页面内容均由 AI 生成，仅供参考</p>
      </footer>
    </div>
  );
};

export default NightEnd;