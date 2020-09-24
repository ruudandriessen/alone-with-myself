import { observable } from 'mobx';

import { ResourceType } from './ResourceType';

export class ResourceStorage {
    @observable
    private _resources = new Map<ResourceType, number>();

    public has(type: ResourceType, amount: number) {
        const currentValue = this._resources.get(type) ?? 0;
        return amount <= currentValue;
    }

    public decrement(type: ResourceType, amount: number) {
        this.increment(type, -amount);
    }

    public increment(type: ResourceType, amount: number) {
        const currentValue = this._resources.get(type) ?? 0;
        this._resources.set(type, amount + currentValue);
    }

    public numberOf(type: ResourceType) {
        return this._resources.get(type) ?? 0;
    }

    public get resources() {
        return Array.from(this._resources.keys());
    }
}
