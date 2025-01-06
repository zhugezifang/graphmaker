"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export function ScrollToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // 当页面滚动超过 200px 时显示按钮
      setShow(window.scrollY > 200)
    }

    // 添加滚动事件监听
    window.addEventListener("scroll", handleScroll)
    
    return () => {
      // 清理事件监听
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  if (!show) return null

  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed bottom-8 right-8 rounded-full opacity-90 hover:opacity-100 transition-opacity"
      onClick={scrollToTop}
    >
      <ArrowUp className="h-4 w-4" />
    </Button>
  )
}
