import { createStore } from 'solid-js/store';

import { assert } from '../util/assert';
import { multiplyMaterials } from '../util/multiplyMaterials';
import { multiplyResources } from '../util/multiplyResources';
import { resourcesInStorage } from '../util/resourcesInStorage';
import { IPrintable } from './IPrintable';
import { ResourceStorage } from './ResourceStorage';
import { Materials } from './types/Materials';
import { PrintableType } from './types/PrintableType';
import { ResourceSet } from './types/ResourceSet';

export interface ManufacturerSnapshot extends IPrintable {
    type: PrintableType.manufacturer;
    powerUsage: number;
    produces: Materials;
    consumes: ResourceSet;
}

export interface Manufacturer extends ReturnType<typeof createManufacturer> {}

const NO_PRODUCTION = {
    consumedResources: [],
    producedMaterials: {
        power: 0,
        mass: 0,
    },
    consumedPower: 0,
};

export function createManufacturer({
    type,
    cost,
    id,
    duration,
    amount = 0,
    produces,
    consumes,
    powerUsage,
}: ManufacturerSnapshot) {
    const [ store, setStore ] = createStore({
        type,
        cost,
        id,
        duration,
        amount,
        produces,
        consumes,
        powerUsage,
        manufactureOver(
            delta: number,
            storage: ResourceStorage,
            availablePower: number,
        ) {
            if (this.amount === 0) {
                return NO_PRODUCTION;
            }

            const consumedPower = this.powerUsage * this.amount * delta;
            const hasPower = availablePower >= consumedPower;

            if (!hasPower) {
                return NO_PRODUCTION;
            }

            const consumedResources = multiplyResources(
                this.consumes,
                this.amount * delta
            );
            const producedMaterials = multiplyMaterials(
                this.produces,
                this.amount * delta
            );

            if (resourcesInStorage(storage, consumedResources) < 1) {
                return NO_PRODUCTION;
            }

            return {
                consumedResources,
                producedMaterials,
                consumedPower,
            };
        },

        maxAffordable(materials: Materials) {
            return Math.floor(
                materials.mass / this.cost
            );
        },
        add(increment: number) {
            assert(this.amount + increment >= 0, 'An attempt was made to decrease a printable below zero.');
            setStore('amount', this.amount + increment);
        },
    });

    return store;
}
