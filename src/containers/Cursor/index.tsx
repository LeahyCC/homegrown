import { useEffect, useState, useRef } from 'react'
import InnerPageContainer from '@/components/InnerPageWrapper'
import nickImg from './nick.png'

const About = () => {
  const [pointer, setPointer] = useState({ x: 0, y: 0 })
  const mouseWrapRef = useRef<any>(null)

  useEffect(() => {
    const handler = (e: any) => {
      setPointer({ x: e.clientX, y: e.clientY })
    }
    mouseWrapRef.current?.addEventListener('pointermove', handler)
    return () => {
      mouseWrapRef.current?.removeEventListener('pointermove', handler)
    }
  }, [])

  return (
    <InnerPageContainer>
      X: {pointer.x}
      <br />
      Y: {pointer.y}
      <br />
      <br />
      <div
        style={{
          borderRadius: '3px',
          border: '3px solid lightblue',
          height: '80vh',
        }}
        ref={mouseWrapRef}
      >
        <img
          src={nickImg}
          alt="nick"
          style={{
            position: 'absolute',
            left: pointer.x,
            top: pointer.y,
            height: '150px',
            width: '150px',
          }}
        />
      </div>
    </InnerPageContainer>
  )
}

export default About
