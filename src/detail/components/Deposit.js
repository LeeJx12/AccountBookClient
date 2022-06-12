
export default class Deposit {
    constructor(param = {}) {
        this._depositId         = param.depositId;
        this._depositName       = param.depositName;
        this._description       = param.description;
        this._amount            = param.amount;
        this._depositTypeId     = param.depositTypeId;
        this._depositTypeName   = param.depositTypeName;
        this._startDate         = param.startDate;
        this._endDate           = param.endDate;
        this._company           = param.company;
        this._expAmount         = param.expAmount;
    }

    get depositId() { return this._depositId }
    set depositId( value ) { this._depositId = value }
    get depositName() { return this._depositName }
    set depositName( value ) { this._depositName = value }
    get description() { return this._description }
    set description( value ) { this._description = value }
    get amount() { return this._amount }
    set amount( value ) { this._amount = value }
    get depositTypeId() { return this._depositTypeId }
    set depositTypeId( value ) { this._depositTypeId = value }
    get depositTypeName() { return this._depositTypeName }
    set depositTypeName( value ) { this._depositTypeName = value }
    get startDate() { return this._startDate }
    set startDate( value ) { this._startDate = value }
    get endDate() { return this._endDate }
    set endDate( value ) { this._endDate = value }
    get company() { return this._company }
    set company( value ) { this._company = value }
    get expAmount() { return this._expAmount }
    set expAmount( value ) { this._expAmount = value }
}