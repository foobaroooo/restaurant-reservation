import { Button } from '@headlessui/react'

interface PeopleCountPickerProps {
    onPickPeopleCount: (count: number) => void
}

export default function PeopleCountPicker( { onPickPeopleCount } : PeopleCountPickerProps) {
    const maxCount: number = 10;

    const handlePickPeopleCount = (e: React.MouseEvent<HTMLButtonElement>) => {
        onPickPeopleCount(Number(e.currentTarget.textContent));
    }

    return (
        <div>
          <ul id="peopleCount" className="flex flex-wrap">
            {
                Array.from({ length: maxCount }, (value, index) => (
                    <li key={index+1} className="flex flex-col w-1/5 rounded border-1 p-5 justify-center">
                        <Button onClick={ handlePickPeopleCount }>{index+1}</Button>
                    </li>
                ))
            }   
          </ul>
        </div>
    )
}