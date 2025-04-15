import { Field, Fieldset, Input, Label, Legend, Button } from '@headlessui/react'
import PeopleCountPicker from './PeopleCountPicker'
import { BookingInfoType } from '../BookingInfoType';
import { FormEvent, useState } from 'react'

interface BookingFormProps {
    setBookingInfo: (bookingInfo: BookingInfoType) => void
}

export default function BookingForm({ setBookingInfo }: BookingFormProps) {
    const [showBookingForm, setShowBookingForm] = useState(false)
    const [showPeopleCountPicker, setShowPeopleCountPicker] = useState(false)

    const handleShowPeopleCountPicker = (e: FormEvent) => {
        e.preventDefault()
        setShowPeopleCountPicker(true)
    }

    const handleChangePeopleCount = (count: number) => {
        setBookingInfo(prevState => {
            return { 
              ...prevState, 
              count: count 
            }
          })
    
        setShowPeopleCountPicker(false);
    }

    const handleBookingFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const formData = new FormData(e.currentTarget);
    
        setBookingInfo({
          count: parseInt(formData.get("count") as string, 10) || 0,
          date: formData.get("date") as string,
          time: formData.get("time") as string,
          name: "",
          phone: ""
        })
    
        setShowBookingForm(false);
        setShowBookingConfirmForm(true);
      }

    return (
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
    )
}