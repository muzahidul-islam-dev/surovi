"use client"

export function NewsTicker() {
  const news = [
    "সুরভি  “সুরভি একটি বিশ্বাস” ১৯৭৯ সালের ১লা ফেব্রুয়ারী বিশিষ্ট সমাজ সেবী  ''সৈয়দা ইকবাল মান্দ বানু   সম্পূর্ণ নিজ অর্থে প্রতিষ্ঠা করেন সেবামুলক প্রতিষ্ঠান “ সুরভি”। তিনি তাঁর এই প্রতিষ্ঠানের মাধ্যমে গরিব দুঃখী, অসহায় মানুষের সেবা করে যাচ্ছেন"
  ]

  return (
    <div className="bg-primary text-primary-foreground py-3 overflow-hidden">
      <div className="animate-scroll whitespace-nowrap">
        <span className="inline-block px-4">
          {news.map((item, index) => (
            <span key={index} className="mx-8 font-medium">
              {item}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {news.map((item, index) => (
            <span key={`dup-${index}`} className="mx-8 font-medium">
              {item}
            </span>
          ))}
        </span>
      </div>
    </div>
  )
}
