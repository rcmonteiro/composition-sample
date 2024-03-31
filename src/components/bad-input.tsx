import { ReactNode } from "react"

interface BadInputProps {
  label?: string
  icon?: ReactNode
  errorMessage?: string
}

export const BadInput = ({ label, icon = null, errorMessage}: BadInputProps) => {
  return (
    <div className={`flex flex-col p-4`}>
      {label ? (<label>{label}</label>) : null}
      <div className={`flex justify-between gap-2`}>
        <input className="border w-full rounded-md border-slate-600" />
        {icon}
      </div>
      {errorMessage ? (<span className="text-red-500 text-sm">{errorMessage}</span>) : null}
    </div>
  )
}