import {
    makeAutoObservable,
    runInAction,
} from 'mobx';

import {
    PRINTABLES,
    Satellite,
    SatelliteModel,
} from '../internal';
import { ResourceType } from './types/ResourceType';

const WORLD_DELTA_MINIMUM = 1000;

export class Game {
    private _satellite: Satellite;
    private _animationFrameId: number | null = null;
    private _lastFrame: number | null = null;
    private _gameSpeed: number = 1;
    private _gameDelta: number = 0;

    constructor() {
        this.start();

        this._satellite = SatelliteModel.create({
            name: 'Small asteroid',
            printers: { printers: 'Printer' },
            producer: {
                consumables: {
                    resources: [
                        {
                            amount: 1000,
                            type: ResourceType.minerals,
                        },
                    ],
                },
            },
            storage: {
                resources: [
                    {
                        amount: 100000,
                        type: ResourceType.minerals,
                    },
                ],
            },
            printables: PRINTABLES,
        });
        const { printers } = this._satellite.printers;
        if (printers.amount === 0) {
            printers.add(1);
        }

        makeAutoObservable(this);
    }

    get satellite() {
        return this._satellite;
    }

    destroy() {
        if (this._animationFrameId != null) {
            window.cancelAnimationFrame(this._animationFrameId);
        }
    }

    start() {
        this._animationFrameId = window.requestAnimationFrame(this._tick);
    }

    private _worldUpdate(dialatedDelta: number) {
        [ this._satellite ].forEach((entity) => {
            const start = performance.now();
            entity.update(dialatedDelta);

            const duration = performance.now() - start;
            if (duration > 100) {
                console.warn('Entity update took a long time', duration, entity);
            }
        });
    }

    private _update(delta: number) {
        const dialatedDelta = delta * this._gameSpeed;
        this._gameDelta += dialatedDelta;

        if (this._gameDelta > WORLD_DELTA_MINIMUM) {
            this._worldUpdate(this._gameDelta);
            this._gameDelta = 0;
        }
    }

    private _tick = (time: number) => {
        const delta = this._lastFrame ? time - this._lastFrame : 0;

        runInAction(() => {
            this._update(delta);
        });

        this._lastFrame = time;
        this._animationFrameId = window.requestAnimationFrame(this._tick);
    };
}
