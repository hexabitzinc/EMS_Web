namespace EMS.Consumer {
    export interface ConsumerRow {
        ConsumerId?: number;
        FirstName?: string;
        LastName?: string;
        Gender?: string;
        Address?: string;
        Phone?: string;
        OtherInformation?: string;
        Mobile?: string;
        Email?: string;
        Deleted?: boolean;
    }

    export namespace ConsumerRow {
        export const idProperty = 'ConsumerId';
        export const nameProperty = 'FirstName';
        export const localTextPrefix = 'Consumer.Consumer';

        export declare const enum Fields {
            ConsumerId = "ConsumerId",
            FirstName = "FirstName",
            LastName = "LastName",
            Gender = "Gender",
            Address = "Address",
            Phone = "Phone",
            OtherInformation = "OtherInformation",
            Mobile = "Mobile",
            Email = "Email",
            Deleted = "Deleted"
        }
    }
}
