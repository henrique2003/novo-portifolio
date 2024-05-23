import { ReactNode } from "react"

type IContainerProps = {
  children: ReactNode
}

export const Container: React.FC<IContainerProps> = ({ children }) => {
  return (
    <div className="w-full py-4 px-10 min-h-screen bg-darker">
      {children}
    </div>
  )
}
