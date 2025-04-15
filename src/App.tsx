import { FormEvent, useState } from 'react'
import './App.css'
import { Field, Fieldset, Input, Label, Legend, Button } from '@headlessui/react'
import PeopleCountPicker from './components/PeopleCountPicker'
import BookingConfirmForm from './components/BookingConfirmForm'
import { BookingInfoType } from './BookingInfoType';

function App() {
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [showPeopleCountPicker, setShowPeopleCountPicker] = useState(false)
  const [showBookingConfirmForm, setShowBookingConfirmForm] = useState(false)
  const [bookingInfo, setBookingInfo] = useState<BookingInfoType>({
    count: 0,
    date: "",
    time: ""
  });

  const handleBook = (e: FormEvent) => {
    e.preventDefault();

    setShowBookingForm(true);
    setShowPeopleCountPicker(false)
    setShowBookingConfirmForm(false);
  }

  const handleShowPeopleCountPicker = (e: FormEvent) => {
    e.preventDefault()

    setShowPeopleCountPicker(true)
  }

  const handleChangePeopleCount = (count: number) => {
    setBookingInfo({
      count: count,
      date: bookingInfo.date,
      time: bookingInfo.time
    })

    setShowPeopleCountPicker(false);
  }

  const handleBookingFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    setBookingInfo({
      count: parseInt(formData.get("count") as string, 10) || 0,
      date: formData.get("date") as string,
      time: formData.get("time") as string
    })

    setShowBookingForm(false);
    setShowBookingConfirmForm(true);
  }

  return (
    <main>
      { (!showBookingForm && !showBookingConfirmForm) &&
        <Button className="btn" onClick={ handleBook }>Book a table</Button>
      }

      { showBookingConfirmForm &&
        <BookingConfirmForm bookingInfo={ bookingInfo } />
      }

      { showBookingForm &&
      <form onSubmit={ handleBookingFormSubmit } className="flex justify-center items-center min-h-screen">
        <Fieldset className="space-y-8 bg-white rounded-lg p-10 w-1/2 text-black">
          <Legend className="text-lg font-bold text-left">Book a table</Legend>
          <Field>
            <Label className="label w-full">
              <span className="w-30 text-black">People</span>
              <Input className="input w-full bg-blue-100" id="count" name="count" 
              readOnly 
              onClick={ handleShowPeopleCountPicker }
              value={ bookingInfo.count === 0 ? "" : bookingInfo.count }
            />
            </Label>

            { showPeopleCountPicker && 
              <div style={{ position: 'absolute', zIndex: 100 }}>
                <PeopleCountPicker onChangePeopleCount={ handleChangePeopleCount } />
              </div>
            }

          </Field>
          <Field>
            <Label className="label w-full">
              <span className="w-30 text-black">Date</span>
              <Input className="input w-full bg-blue-100" type="date" id="date" name="date" />
            </Label>
          </Field>
          <Field>
            <Label className="label w-full">
              <span className="w-30 text-black">Time</span>
              <Input className="input w-full bg-blue-100" id="time" name="time" type="time" />
            </Label>
          </Field>
          <Field>
            <Button className="btn" type="submit">
              Book now
            </Button>
          </Field>
        </Fieldset>
      </form>
      }
    </main>
  )
}

export default App
