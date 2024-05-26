import { LegacyRef, forwardRef } from "react"
import { twMerge } from "tailwind-merge"

type ITriangleProps = {
  ref?: LegacyRef<HTMLDivElement> | undefined
  className?: string
}

export const TriangleLeft: React.FC<ITriangleProps> = forwardRef(({ className }, ref) => {
  return (
    <div className={twMerge(
      'w-0 h-0 border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent border-r-[15px] border-r-blue-500;',
      className
    )} ref={ref}></div>
  )
})
