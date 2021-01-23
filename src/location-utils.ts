import { ColonialOneLocationConst, GalacticaLocationConst, HumanLocation, SpaceLocationConst } from "location-models";

export function isSpace(location: HumanLocation): boolean {
    return Object.keys(SpaceLocationConst).indexOf(location) !== -1;
}

export function onGalactica(location: HumanLocation) {
    return Object.keys(GalacticaLocationConst).indexOf(location) !== -1;
}

export function onColonialOne(location: HumanLocation) {
    return Object.keys(ColonialOneLocationConst).indexOf(location) !== -1;
}

export function requiresDiscard(toLocation: HumanLocation, fromLocation: HumanLocation): boolean {
    return (onColonialOne(fromLocation) && onGalactica(toLocation)) ||
        (onGalactica(fromLocation) && onColonialOne(toLocation)) ||
        (isSpace(fromLocation) && (onGalactica(toLocation) || onColonialOne(toLocation)))
}
