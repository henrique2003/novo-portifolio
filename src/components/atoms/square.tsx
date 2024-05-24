import { LegacyRef, forwardRef } from "react"
import { twMerge } from "tailwind-merge"

type ISquareProps = {
  ref: LegacyRef<HTMLDivElement> | undefined
  className?: string
}

export const Square: React.FC<ISquareProps> = forwardRef((props, ref) => {
  return (
    <div className={twMerge(
      'w-[7px] h-[7px] bg-grayrer absolute',
      props.className,
      "right-[-50px] opacity-0"
    )} ref={ref}></div>
  )
})
