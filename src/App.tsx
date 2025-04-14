import { useState } from 'react'
import './App.css'
import { Field, Fieldset, Input, Label, Legend, Button } from '@headlessui/react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button className="btn">Book a table</Button>

      <Fieldset className="space-y-8 bg-blue-100 rounded-lg p-10 ">
        <Legend className="text-lg font-bold text-left">Book a table</Legend>
        <Field>
          <Label className="label w-full">
            <span className="w-30">People</span>
            <Input className="input w-full" name="people" />
          </Label>
        </Field>
        <Field>
          <Label className="label w-full">
            <span className="w-30">Date</span>
            <Input className="input w-full" type="date" id="date" name="date" />
          </Label>
        </Field>
        <Field>
          <Label className="label w-full">
            <span className="w-30">Time</span>
            <Input className="input w-full" name="time" type="time" />
          </Label>
        </Field>
        <Button className="btn">
          Book now
        </Button>
      </Fieldset>
    </>
  )
}

export default App
