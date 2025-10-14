"use client"

export function NewsTicker() {
  const news = [
    "🎉 We've reached 50,000 people with clean water access!",
    "📚 New school opening in rural Kenya next month",
    "💝 Thank you to all our donors - $2M raised this year!",
    "🏥 Mobile health clinic serving 5 new villages",
    "🌱 Tree planting initiative: 10,000 trees planted",
    "👏 Volunteer appreciation day - June 15th",
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
