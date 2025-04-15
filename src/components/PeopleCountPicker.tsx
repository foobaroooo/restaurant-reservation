import { Button } from '@headlessui/react'

interface PeopleCountPickerProps {
    onChangePeopleCount: (count: number) => void
}

export default function PeopleCountPicker( { onChangePeopleCount } : PeopleCountPickerProps) {
    const maxCount: number = 10;

    const handleChangePeopleCount = (e: React.MouseEvent<HTMLButtonElement>) => {
        onChangePeopleCount(Number(e.currentTarget.textContent));
    }

    return (
        <ul id="peopleCount" className="flex flex-wrap bg-blue-50 rounded-lg p-5 text-black shadow-lg shadow-gray-500">
        {
            Array.from({ length: maxCount }, (value, index) => (
                <li key={index+1} className="flex flex-col w-1/5 rounded border-2 border-gray-300 justify-center">
                    <Button className="bg-white w-full p-5" onClick={ handleChangePeopleCount }>{index+1}</Button>
                </li>
            ))
        }   
        </ul>
    )
}