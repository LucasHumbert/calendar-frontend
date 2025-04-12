export type RepetitiveEvent = {
    weekDays: { "days": number[] },
    title: string,
    description: string | null,
    startHour: string,
    endHour: string,
    userId: number
}