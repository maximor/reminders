import { LightningElement, track } from 'lwc';

export default class ReminderDash extends LightningElement {
    @track todayTasks = 0;
    @track scheduledTasks = 0;
    @track allTasks = 0;
    @track upcomingTasks = 0;
}