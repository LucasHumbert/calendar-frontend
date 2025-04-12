import {DateTime} from "luxon";

export default function WeekSelector({ weekInfo, setWeekInfo }: { weekInfo: { weekNumber: number, year: number }, setWeekInfo: (value: { weekNumber: number, year: number }) => void }) {
    const day = DateTime.fromObject({ weekNumber: weekInfo.weekNumber , weekYear: weekInfo.year })

    const changeWeek = (type: 'previous' | 'next') => {
        const newWeek = type === 'previous' ?  day.minus({ week: 1 }) : day.plus({ week: 1 })
        setWeekInfo({ weekNumber: newWeek.weekNumber, year: newWeek.year })
    }

    return <div>
        <ChangeButton text='<' onClick={() => changeWeek('previous')}></ChangeButton>
        <div>{day.startOf('week').day}-{day.endOf('week').day} {day.monthLong} {day.year}</div>
        <ChangeButton text='>' onClick={() => changeWeek('next')}></ChangeButton>
    </div>
}

function ChangeButton({ text, onClick }: { text: string, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="cursor-pointer rounded-full w-8 h-8 border flex items-center justify-center hover:bg-gray-200"
        >
            {text}
        </button>
    )
}