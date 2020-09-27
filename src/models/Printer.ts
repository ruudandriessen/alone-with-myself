import {
    action,
    computed,
    observable,
} from 'mobx';

import { assert } from '../util';
import {
    Entity,
    EntityType,
} from './Entity';
import { PrintQueue } from './PrintQueue';
import { PrintTask } from './PrintTask';

export class Printer extends Entity {
    protected _type = EntityType.Printer;

    @observable
    private _queue: PrintQueue;

    @observable
    private _task: PrintTask | null = null;

    @observable
    private _progress: number = 0;

    constructor(queue: PrintQueue) {
        super();
        this._queue = queue;
    }

    public get isPrinting() {
        return this._task != null;
    }

    @computed
    public get taskProgress() {
        if (this._task == null) {
            return 0;
        }

        return this._progress / this._task.duration;
    }

    public update(delta: number) {
        if (this._task == null && this._queue.queueLength === 0) {
            this._progress = 0;
        }

        if (this._task == null && this._queue.hasTask) {
            this._takeNewTask();
        }

        if (this._task == null) {
            return;
        }

        this._progress += delta;

        if (this._task.duration <= this._progress) {
            this._completeTask();
        }
    }

    public pointIsInside() {
        return false;
    }

    @action.bound
    private _completeTask() {
        this._task?.complete();
        this._progress -= this._task?.duration ?? 0;
        this._task = null;
    }

    @action.bound
    private _takeNewTask() {
        const newTask = this._queue.takeTask();
        assert(newTask != null, 'A printer tried to take a non existing task from the queue');
        this._task = newTask;
    }
}