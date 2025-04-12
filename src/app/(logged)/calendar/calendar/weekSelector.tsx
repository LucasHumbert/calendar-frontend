import {DateTime} from "luxon";

export default function WeekSelector({ year, weekNumber, onChange }: {
    year: number,
    weekNumber: number,
    onChange: (newYear: number, newWeek: number) => void
}) {
    const current = DateTime.fromObject({ weekNumber, weekYear: year });

    const changeWeek = (type: 'previous' | 'next' | 'current') => {
        let newDate;

        if (type === 'previous') {
            newDate = current.minus({ week: 1 })
        } else if (type === 'next') {
            newDate = current.plus({ week: 1 })
        } else {
            newDate = DateTime.now()
        }

        onChange(newDate.year, newDate.weekNumber);
    }

    return <div className='flex flex-row justify-center items-center'>
        <ChangeButton text='<' onClick={() => changeWeek('previous')}></ChangeButton>
        <div className='mx-2'>{current.startOf('week').day}-{current.endOf('week').day} {current.monthLong} {current.year}</div>
        <ChangeButton text='N' onClick={() => changeWeek('current')}></ChangeButton>
        <ChangeButton text='>' onClick={() => changeWeek('next')}></ChangeButton>
    </div>
}

function ChangeButton({ text, onClick }: { text: string, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="cursor-pointer rounded-full w-8 h-8 mx-1 border flex items-center justify-center hover:bg-gray-200"
        >
            {text}
        </button>
    )
}