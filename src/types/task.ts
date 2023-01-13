
export interface Task {
    _id: string,
    title: string,
    description: string,
    priority: number,
    status: string

}


export type Status = 'To do' | 'In progress' | 'Done'