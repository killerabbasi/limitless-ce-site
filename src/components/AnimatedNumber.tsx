import { useCountUp } from '../hooks/useCountUp'

interface Props {
  end: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}

export default function AnimatedNumber({ end, prefix = '', suffix = '', duration = 2000, className }: Props) {
  const { count, ref } = useCountUp(end, duration)

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}
