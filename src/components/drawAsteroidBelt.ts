import { FULL_CIRCLE } from '../constants';
import { AsteroidBelt } from '../models/AsteroidBelt';
import { drawCircle } from './drawCircle';
import { drawMarker } from './drawMarker';

interface DrawAsteroidBeltProps {
    context: CanvasRenderingContext2D;
    model: AsteroidBelt;
}

export function drawAsteroidBelt({
    context,
    model: {
        bodies,
        mouseOver,
        orbitCenter,
        width,
        orbitFocus,
        selected,
        interactionPoints,
    },
}: DrawAsteroidBeltProps) {
    context.beginPath();
    context.fillStyle = 'grey';

    bodies.forEach(({
        position: {
            x, y,
        }, radius,
    }) => {
        context.moveTo(x, y);
        context.arc(
            x, y,
            radius,
            0, FULL_CIRCLE,
        );
    });
    context.fill();

    if (mouseOver) {
        drawCircle({
            context,
            position: orbitFocus.position,
            radius: orbitCenter,
            lineWidth: width,
            strokeColor: 'rgba(100, 100, 100, 0.2)',
        });
    }

    if (selected) {
        drawCircle({
            context,
            position: orbitFocus.position,
            radius: orbitCenter,
            lineWidth: width,
            strokeColor: 'rgba(0, 100, 100, 0.4)',
        });
    }

    interactionPoints.forEach((point) => {
        if (!point.selected && !selected) {
            return;
        }

        const color = point.mouseOver || point.selected
            ? 'rgb(0, 255, 255)'
            : 'rgb(0, 180, 180)';

        drawMarker({
            context,
            point,
            color,
        });
    });
}
