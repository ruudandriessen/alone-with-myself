import { Vector } from './Vector';

interface BodyProps {
    position: Vector;
    radius: number;
    mass: number;
    orbit?: {
        radius: number;
        focus: BodyModel;
        velocity: number;
        angle: number;
    };
    color: string;
}

export class BodyModel {
    private _position: Vector;
    private _radius: number;
    private _mass: number;
    private _orbit?: {
        radius: number;
        focus: BodyModel;
        velocity: number;
        angle: number;
    };
    private _color: string;

    constructor({
        position,
        radius,
        mass,
        orbit,
        color,
    }: BodyProps) {
        this._position = position;
        this._radius = radius;
        this._mass = mass;
        this._orbit = orbit;
        this._color = color;
    }

    public get color() {
        return this._color;
    }

    public get position() {
        return this._position;
    }

    public get radius() {
        return this._radius;
    }

    public get orbit() {
        return this._orbit;
    }

    public get mass() {
        return this._mass;
    }

    public update = (delta: number) => {
        this._updateOrbit(delta);
    }

    private _updateOrbit = (delta: number) => {
        if (this._orbit == null) {
            return;
        }
        const s = delta / 1000;
        const {
            angle, velocity, focus, radius,
        } = this._orbit;
        const newAngle = angle + velocity * s;
        this._orbit.angle = newAngle;

        this._position = {
            x: focus.position.x + radius * Math.cos(newAngle),
            y: focus.position.y + radius * Math.sin(newAngle),
        };
    }
}
