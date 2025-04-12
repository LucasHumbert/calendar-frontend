'use client'

import {DateTime} from "luxon";
import WeekSelector from "@/app/(logged)/calendar/calendar/weekSelector";
import {useState} from "react";

export default function Calendar() {
    const [weekInfo, setWeekInfo] = useState<{ weekNumber: number, year: number }>(() => ({
        weekNumber: DateTime.now().weekNumber,
        year: DateTime.now().year,
    }))
    const startOfWeek = DateTime.fromObject({weekNumber: weekInfo.weekNumber, weekYear: weekInfo.year}).startOf('week')

    const weekDays = Array.from({ length: 7 }).map((_, i) =>
        startOfWeek.plus({ days: i })
    )

    return <div>
        <WeekSelector weekInfo={weekInfo} setWeekInfo={setWeekInfo} />
        <div className='mt-4'>
            { weekDays.map((day) => (
                <div key={day.day}>{day.weekdayLong} { day.day }</div>
            )) }
        </div>
    </div>
}