import Calendar from "@/app/(logged)/calendar/calendar/calendar";
import {DateTime} from "luxon";
import {fetchEvents} from "@/app/lib/actions/calendar";


export default async function CalendarPage({ searchParams }: { searchParams: Promise<{ week?: string, year?: string }> }) {
    const { week, year } = await searchParams

    const weekNumber = parseInt(week || `${DateTime.now().weekNumber}`);
    const yearNumber = parseInt(year || `${DateTime.now().year}`);

    const events = await fetchEvents(yearNumber, weekNumber);

    return <>
        <Calendar year={yearNumber} weekNumber={weekNumber} events={events} />
    </>
}