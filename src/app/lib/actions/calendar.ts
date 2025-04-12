'use server'

import {RepetitiveEvent} from "@/app/lib/types/events";

export async function fetchEvents(week: number, year: number): Promise<RepetitiveEvent[]> {
    console.log(week, year)
    console.log('fetch...')

    return []
}