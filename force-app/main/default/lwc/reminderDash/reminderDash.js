import { LightningElement, api } from 'lwc';

export default class ReminderDash extends LightningElement {
    @api todayAmount = 0;
    @api upcommingAmount = 0;
    @api scheduledAmount = 0;
    @api allAmount = 0;
}