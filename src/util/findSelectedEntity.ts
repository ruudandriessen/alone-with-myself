import {
    DrawableEntity,
    EntityType,
} from '../internal';

export function findSelectedEntity(entities: DrawableEntity[]): DrawableEntity | null {
    return entities.reduce<DrawableEntity | null>((prev, current) => {
        if (prev == null) {
            return current;
        }

        if (current.type === EntityType.InteractionPoint) {
            return current;
        }

        if (prev.type === EntityType.InteractionPoint) {
            return prev;
        }

        if (current.type === EntityType.Transporter) {
            return current;
        }

        if (prev.type === EntityType.Transporter) {
            return prev;
        }

        if (current.type === EntityType.AsteroidBelt) {
            return current;
        }

        if (prev.type === EntityType.AsteroidBelt) {
            return prev;
        }

        return current;
    }, null);
}
