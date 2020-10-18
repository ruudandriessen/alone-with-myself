import {
    action,
    computed,
    observable,
} from 'mobx';

interface PrintTaskProps {
    durationPerItem: number;
    name: string;
    complete: (amount: number) => void;
    maxPrintAmount: () => number;
}

export class PrintTask {
    @observable
    private _durationPerItem: number;

    @observable
    private _name: string;

    @observable
    private _percentageOfTotal: number = 0;

    @observable
    private _complete: (amount: number) => void;

    @observable
    private _progress: number = 0;

    @observable
    private _maxPrintAmount: () => number;

    constructor({
        durationPerItem,
        name,
        complete,
        maxPrintAmount,
    }: PrintTaskProps) {
        this._durationPerItem = durationPerItem,
        this._name = name;
        this._complete = complete;
        this._maxPrintAmount = maxPrintAmount;
    }

    @computed
    public get durationPerItem() {
        return this._durationPerItem;
    }

    @computed
    public get maxPrintAmount() {
        return Math.floor(this._maxPrintAmount());
    }

    @computed
    public get name() {
        return this._name;
    }

    @computed
    public get complete() {
        return this._complete;
    }

    @computed
    public get progress() {
        return this._progress;
    }

    @computed
    public get percentageOfTotal() {
        return this._percentageOfTotal;
    }

    @action.bound
    public set percentageOfTotal(newValue: number) {
        this._percentageOfTotal = newValue;
    }

    @action.bound
    public set progress(newValue: number) {
        this._progress = newValue;
    }
}
