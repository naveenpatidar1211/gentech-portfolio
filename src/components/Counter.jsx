import { useEffect, useRef, useState } from "react"

function Counter({ end }) {
  const [count, setCount] = useState(0)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0
          const duration = 1500
          const stepTime = 20
          const steps = duration / stepTime
          const increment = end / steps

          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, stepTime)

          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [end])

  return (
    <h4 ref={ref}>
      {count}+
    </h4>
  )
}

export default Counter