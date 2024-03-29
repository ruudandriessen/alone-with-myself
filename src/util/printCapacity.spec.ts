import { createPrintableInstance } from '../models/PrintableUnion';
import { PrinterSnapshot } from '../models/Printer';
import {
    createPrintTask,
    PrintTask,
} from '../models/PrintTask';
import { PrintableType } from '../models/types/PrintableType';
import { ResourceType } from '../models/types/ResourceType';
import { printCapacity } from './printCapacity';

describe('util: printCapacity', () => {
    const duration = 20;

    let task: PrintTask;
    beforeEach(() => {
        const printer: PrinterSnapshot = {
            cost: [ {
                amount: 10,
                type: ResourceType.minerals,
            } ],
            id: 'printer',
            duration,
            type: PrintableType.printer,
        };

        task = createPrintTask({
            count: 0,
            printable: createPrintableInstance(printer),
            progress: 0,
        });
    });

    it('should use existing progress', () => {
        task.setProgress(19.009602000000044);
        const capacity = 1.000140000000014;
        task.setCount(task.count + 1);

        expect(printCapacity(capacity, task)).toEqual({
            capacityLeft: 0.009742000000057649,
            progress: 0,
            numberFinished: 1,
            numberStarted: 0,
        });
    });

    it('should return empty when count is zero', () => {
        expect(printCapacity(1000, task)).toEqual({
            capacityLeft: 1000,
            numberFinished: 0,
            numberStarted: 0,
            progress: 0,
        });
    });

    it('should return empty when capacity passed is zero', () => {
        task.setCount(task.count + 1);
        expect(printCapacity(0, task)).toEqual({
            capacityLeft: 0,
            numberFinished: 0,
            numberStarted: 0,
            progress: 0,
        });
    });

    it('should return the correct result when exactly finished', () => {
        task.setCount(task.count + 1);
        expect(printCapacity(duration, task)).toEqual({
            capacityLeft: 0,
            numberFinished: 1,
            numberStarted: 1,
            progress: 0,
        });
    });

    it('should throw if negative capacity is passed', () => {
        expect(() => {
            printCapacity(-100, task);
        }).toThrow();
    });

    it('should return the correct result when partially finished', () => {
        task.setCount(task.count + 1);
        const delta = 10;
        const capacity = duration - delta;
        expect(printCapacity(capacity, task)).toEqual({
            capacityLeft: 0,
            numberFinished: 0,
            numberStarted: 1,
            progress: capacity,
        });
    });

    it('should return the correct result when there is capacity left', () => {
        task.setCount(task.count + 1);
        const delta = 10;
        const capacity = duration + delta;
        expect(printCapacity(capacity, task)).toEqual({
            capacityLeft: delta,
            numberFinished: 1,
            numberStarted: 1,
            progress: 0,
        });
    });

    it('should return the correct result when the second is partially finished', () => {
        task.setCount(task.count + 2);
        const delta = 10;
        const capacity = duration + delta;
        expect(printCapacity(capacity, task)).toEqual({
            capacityLeft: 0,
            numberFinished: 1,
            numberStarted: 2,
            progress: delta,
        });
    });

    it('should return the correct result when one to much can be afforded', () => {
        task.setCount(task.count + 1);
        const delta = 10;
        const capacity = duration + delta;
        expect(printCapacity(capacity, task)).toEqual({
            capacityLeft: delta,
            numberFinished: 1,
            numberStarted: 1,
            progress: 0,
        });
    });
});
