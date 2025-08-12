import { useEffect, useRef } from 'react'
import './Cursor.css'

const Cursor = () => {
  const cursorRef = useRef(null)
  const outlineRef = useRef(null)
  const isPointerRef = useRef(false)
  const rafIdRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const outline = outlineRef.current
    
    if (!cursor || !outline) return

    let mouseX = 0
    let mouseY = 0
    let outlineX = 0
    let outlineY = 0

    const updateCursor = () => {
      // Smooth cursor dot movement
      cursor.style.left = mouseX + 'px'
      cursor.style.top = mouseY + 'px'
      
      // Smooth outline movement with slight delay
      outlineX += (mouseX - outlineX) * 0.1
      outlineY += (mouseY - outlineY) * 0.1
      outline.style.left = outlineX + 'px'
      outline.style.top = outlineY + 'px'
      
      rafIdRef.current = requestAnimationFrame(updateCursor)
    }

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      
      if (!rafIdRef.current) {
        rafIdRef.current = requestAnimationFrame(updateCursor)
      }
    }

    const handleMouseEnter = () => {
      cursor.style.opacity = '1'
      outline.style.opacity = '1'
    }

    const handleMouseLeave = () => {
      cursor.style.opacity = '0'
      outline.style.opacity = '0'
    }

    const handleMouseOver = (e) => {
      const shouldBePointer = 
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(e.target).cursor === 'pointer'
      
      if (shouldBePointer !== isPointerRef.current) {
        isPointerRef.current = shouldBePointer
        cursor.classList.toggle('pointer', shouldBePointer)
        outline.classList.toggle('pointer', shouldBePointer)
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseover', handleMouseOver)
      
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current)
      }
    }
  }, [])

  // Don't show custom cursor on mobile devices
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  
  if (isMobile) {
    return null
  }

  return (
    <>
      <div
        ref={cursorRef}
        className="cursor-dot"
      />
      <div
        ref={outlineRef}
        className="cursor-outline"
      />
    </>
  )
}

export default Cursor

