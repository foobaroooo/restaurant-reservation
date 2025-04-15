import { FormEvent, useState } from 'react'
import './App.css'
import { Field, Fieldset, Input, Label, Legend, Button } from '@headlessui/react'
import PeopleCountPicker from './assets/components/PeopleCountPicker'

interface BookingInfo {
  count: number | undefined
}

function App() {
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [showPeopleCountPicker, setShowPeopleCountPicker] = useState(false)
  const [bookingInfo, setBookingInfo] = useState<BookingInfo>({ count: undefined });

  const handleBook = (e: FormEvent) => {
    e.preventDefault();

    setShowBookingForm(true);
    setShowPeopleCountPicker(false)
  }

  const handleShowPeopleCountPicker = (e: FormEvent) => {
    e.preventDefault()

    setShowPeopleCountPicker(true)
  }

  const handlePickPeopleCount = (count: number) => {
    setBookingInfo({
      count: count
    })
  }

  return (
    <main>
      { !showBookingForm &&
        <Button className="btn" onClick={ handleBook }>Book a table</Button>
      }

      { showBookingForm &&
        <Fieldset className="space-y-8 bg-blue-100 rounded-lg p-10 w-full text-black">
          <Legend className="text-lg font-bold text-left">Book a table</Legend>
          <Field>
            <Label className="label w-full">
              <span className="w-30 text-black">People</span>
              <Input className="input w-full" id="count" name="count" 
                readOnly 
                onClick={ handleShowPeopleCountPicker }
                value={ bookingInfo.count ?? "" }
              />
            </Label>
          </Field>
          <Field>
            <Label className="label w-full">
              <span className="w-30 text-black">Date</span>
              <Input className="input w-full" type="date" id="date" name="date" />
            </Label>
          </Field>
          <Field>
            <Label className="label w-full">
              <span className="w-30 text-black">Time</span>
              <Input className="input w-full" id="time" name="time" type="time" />
            </Label>
          </Field>
          <Button className="btn">
            Book now
          </Button>
        </Fieldset>
      }


      { showPeopleCountPicker && 
        <PeopleCountPicker onPickPeopleCount={ handlePickPeopleCount } />
      }

    </main>
  )
}

export default App
