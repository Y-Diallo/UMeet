export type EventDetails = {
    id: string;
    title: string;
    attendees: number;
    maxAttendees: number;
    image: string;
    image2?: string;
    date: string;
    location: string;
    startDate: Date;
    endDate: Date;
    description: string;
}