import { Timestamp } from "../types";

export namespace event {
    interface EventData {
        /**
         * The ID of whatever the event is
         */
        ResourceId: string;

        /**
         * When the event happened
         */
        Date: Timestamp;

        /**
         * The event type
         */
        EventType: EventType;
    }

    type EventType =
        "PAYIN_NORMAL_CREATED"
        | "PAYIN_NORMAL_SUCCEEDED"
        | "PAYIN_NORMAL_FAILED"
        | "PAYOUT_NORMAL_CREATED"
        | "PAYOUT_NORMAL_SUCCEEDED"
        | "PAYOUT_NORMAL_FAILED"
        | "TRANSFER_NORMAL_CREATED"
        | "TRANSFER_NORMAL_SUCCEEDED"
        | "TRANSFER_NORMAL_FAILED"
        | "PAYIN_REFUND_CREATED"
        | "PAYIN_REFUND_SUCCEEDED"
        | "PAYIN_REFUND_FAILED"
        | "PAYOUT_REFUND_CREATED"
        | "PAYOUT_REFUND_SUCCEEDED"
        | "PAYOUT_REFUND_FAILED"
        | "INSTANT_PAYOUT_SUCCEEDED"
        | "INSTANT_PAYOUT_FALLBACKED"
        | "TRANSFER_REFUND_CREATED"
        | "TRANSFER_REFUND_SUCCEEDED"
        | "TRANSFER_REFUND_FAILED"
        | "KYC_CREATED"
        | "KYC_OUTDATED"
        | "KYC_VALIDATION_ASKED"
        | "KYC_SUCCEEDED"
        | "KYC_FAILED"
        | "PAYIN_REPUDIATION_CREATED"
        | "PAYIN_REPUDIATION_SUCCEEDED"
        | "PAYIN_REPUDIATION_FAILED"
        | "DISPUTE_DOCUMENT_CREATED"
        | "DISPUTE_DOCUMENT_VALIDATION_ASKED"
        | "DISPUTE_DOCUMENT_SUCCEEDED"
        | "DISPUTE_DOCUMENT_FAILED"
        | "DISPUTE_CREATED"
        | "DISPUTE_SUBMITTED"
        | "DISPUTE_ACTION_REQUIRED"
        | "DISPUTE_FURTHER_ACTION_REQUIRED"
        | "DISPUTE_CLOSED"
        | "DISPUTE_SENT_TO_BANK"
        | "TRANSFER_SETTLEMENT_CREATED"
        | "TRANSFER_SETTLEMENT_SUCCEEDED"
        | "TRANSFER_SETTLEMENT_FAILED"
        | "MANDATE_CREATED"
        | "MANDATE_FAILED"
        | "MANDATE_ACTIVATED"
        | "MANDATE_SUBMITTED"
        | "MANDATE_EXPIRED"
        | "PREAUTHORIZATION_PAYMENT_WAITING"
        | "PREAUTHORIZATION_PAYMENT_EXPIRED"
        | "PREAUTHORIZATION_PAYMENT_CANCELED"
        | "PREAUTHORIZATION_PAYMENT_VALIDATED"
        | "UBO_DECLARATION_CREATED"
        | "UBO_DECLARATION_VALIDATION_ASKED"
        | "UBO_DECLARATION_REFUSED"
        | "UBO_DECLARATION_VALIDATED"
        | "UBO_DECLARATION_INCOMPLETE"
        | "USER_KYC_REGULAR"
        | "USER_KYC_LIGHT"
        | "USER_INFLOWS_BLOCKED"
        | "USER_INFLOWS_UNBLOCKED"
        | "USER_OUTFLOWS_BLOCKED"
        | "USER_OUTFLOWS_UNBLOCKED"
        | "PREAUTHORIZATION_CREATED"
        | "PREAUTHORIZATION_SUCCEEDED"
        | "PREAUTHORIZATION_FAILED";
}