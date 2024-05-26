import { LegacyRef, forwardRef } from "react"
import { twMerge } from "tailwind-merge"

type ITechnologieItemProps = {
  borderColor: string
  icon: JSX.Element
  text: string
  description: string
  ref: LegacyRef<HTMLDivElement> | undefined
  id: number
}

export const TechnologieItem: React.FC<ITechnologieItemProps> = forwardRef(({ icon, text, borderColor, description, id }, ref) => {
  return (
    <div className="w-full bg-[#2C2C2C] rounded-lg flex items-center px-5 py-4 gap-2" ref={ref}>
      <div className={twMerge(
        'w-[60px] h-[60px] rounded-[50%] flex justify-center items-center border-2',
        borderColor
      )}>
        {icon}
      </div>
      <div className="flex-1 overflow-hidden">
        <p className="text-md font-medium text-white tracking-wider translate-y-[10px]" id={`technologie-item-title-${id}`}>{text}</p>
        <p className="text-sm font-light text-white tracking-wider opacity-70 translate-y-[20px]" id={`technologie-item-description-${id}`}>{description}</p>
      </div>
    </div>
  )
})
