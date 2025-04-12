'use client'

import {DateTime} from "luxon";
import WeekSelector from "@/app/(logged)/calendar/calendar/weekSelector";
import {useRouter} from "next/navigation";
import {RepetitiveEvent} from "@/app/lib/types/events";
import CreateEvent from "@/app/(logged)/calendar/createEvent/create-event";

export default function Calendar({ year, weekNumber, events }: {
    year: number,
    weekNumber: number,
    events: RepetitiveEvent[]
}) {
    const router = useRouter();

    const handleWeekChange = (newYear: number, newWeek: number) => {
        router.push(`/calendar?year=${newYear}&week=${newWeek}`);
    };

    const startOfWeek = DateTime.fromObject({ weekNumber, weekYear: year }).startOf('week');

    const weekDays = Array.from({ length: 7 }).map((_, i) =>
        startOfWeek.plus({ days: i })
    )

    return <div>
        <CreateEvent />
        <WeekSelector year={year} weekNumber={weekNumber} onChange={handleWeekChange} />
        <div className='mt-4'>
            { weekDays.map((day) => (
                <div key={day.day}>{day.weekdayLong} { day.day }</div>
            )) }
        </div>
        <div>
            {events.map((event) => (
                <div key={event.title}>{event.title}</div>
            ))}
        </div>
    </div>
}