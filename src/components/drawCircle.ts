import { FULL_CIRCLE } from '../constants';
import { Vector } from '../models';

interface DrawArcProps {
    position: Vector;
    radius: number;
    fillColor?: string;
    strokeColor?: string;
    lineWidth?: number;
    context: CanvasRenderingContext2D;
}

export function drawCircle({
    context,
    position,
    radius,
    fillColor,
    strokeColor,
    lineWidth,
}: DrawArcProps) {
    context.save();

    const {
        x,
        y,
    } = position;
    context.beginPath();
    context.arc(
        x, y,
        radius,
        0, FULL_CIRCLE,
    );

    if (fillColor) {
        context.fillStyle = fillColor;
        context.fill();
    }

    if (strokeColor) {
        context.strokeStyle = strokeColor;
        context.lineWidth = lineWidth ?? 4;
        context.stroke();
    }

    context.restore();
}
