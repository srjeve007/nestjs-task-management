// there is database we have define in entity already so no need of this interface
// export interface Task {

//     id:string;
//     title: string;
//     description:string;
//     status: TaskStatus;
// }

export enum TaskStatus{
    OPEN='OPEN',
    IN_PROGRESS='IN_PROGRESS',
    DONE='DONE',
}
