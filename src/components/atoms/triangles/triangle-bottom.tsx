import { LegacyRef, forwardRef } from "react"
import { twMerge } from "tailwind-merge"

type ITriangleProps = {
  ref?: LegacyRef<HTMLDivElement> | undefined
  className?: string
}

export const TriangleBottom: React.FC<ITriangleProps> = forwardRef(({ className }, ref) => {
  return (
    <div className={twMerge(
      'w-0 h-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-t-[15px] border-t-blue-500;',
      className
    )} ref={ref}></div>
  )
})
