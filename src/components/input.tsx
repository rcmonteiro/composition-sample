import { LabelHTMLAttributes, ReactNode } from "react"

interface RootProps {
  children: ReactNode
}
export const Root = ({ children }: RootProps) => {
  return (
    <div className={`flex gap-2`}>
      {children}
    </div>
  )
}

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}
export const Label = (props: LabelProps) => {
  return (
    <label className="place-self-stretch" {...props} />
  )
}

export const Field = () => {
  return (
    <input type="text" className="border rounded-md border-slate-600" />
  )
}