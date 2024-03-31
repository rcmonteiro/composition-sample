import { AlertTriangle } from "lucide-react"
import { BadInput } from "./components/bad-input"
import * as Input from "./components/input"

export const App = () => {
  return (
    <>
      <h1 className="text-2xl leading-tight text-violet-500">Composition vs Customization</h1>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <h2>Customization</h2>
          <BadInput label="Bad Input" icon={<AlertTriangle />} errorMessage="Não faça assim nunca!" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <h2>Composition</h2>
          <Input.Root>
            <Input.Label className=" text-slate-500">Assim fica melhor</Input.Label>
            <Input.Field />
            <Input.Field />
            {/* <Check className="text-emerald-500" /> */}
          </Input.Root>
        </div>
      </div>
    </>
  )
}
