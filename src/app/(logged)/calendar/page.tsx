import CreateEvent from "@/app/(logged)/calendar/createEvent/create-event";
import Calendar from "@/app/(logged)/calendar/calendar/calendar";


export default function CalendarPage() {
    return <>
        <Calendar />
        <CreateEvent />
    </>
}