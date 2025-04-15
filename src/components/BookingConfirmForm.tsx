import { Field, Fieldset, Input, Label, Legend, Button } from '@headlessui/react'
import { BookingInfoType } from '../BookingInfoType'
import { FormEvent } from 'react'

interface BookingConfirmFormProps {
    bookingInfo: BookingInfoType
}

export default function BookingConfirmForm({ bookingInfo } : BookingConfirmFormProps ) {
    const handleBookingConfirmSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        
        // setBookingInfo({
        //     count: parseInt(formData.get("count") as string, 10) || 0,
        //     date: formData.get("date") as string,
        //     time: formData.get("time") as string,
        //     name: formData.get("name") as string,
        //     phone: formData.get("phone") as string,
        //   })
    }

    return (
        <form onSubmit={ handleBookingConfirmSubmit } className="flex justify-center items-center min-h-screen">
            <Fieldset className="space-y-8 bg-white rounded-lg p-10 w-1/2 text-black">
                <Legend className="text-lg font-bold text-left">Contact details</Legend>
                <div className="bg-blue-100 p-5 font-bold">
                    You are making a reservation for {bookingInfo.count} persons, on {bookingInfo.date} at {bookingInfo.time}
                </div>
                <Field>
                    <Label className="label w-full">Name</Label>
                    <Input className="input w-full bg-white border-gray-300" type="text" id="name" name="name" />
                </Field>
                <Field>
                    <Label className="label w-full">Phone</Label>
                    <Input className="input w-full bg-white border-gray-300" id="phone" name="phone" type="text" />
                </Field>
                <Field>
                    <Button className="btn" type="submit">
                        Confirm reservation
                    </Button>
                </Field>
            </Fieldset>
        </form>
    )
}