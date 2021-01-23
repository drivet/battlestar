import { SpaceLocation } from "location-models";
import { $enum } from 'ts-enum-util';
import { toConst } from '../utils';

enum GalacticaDamageEnum {
    Food,
    Population,
    Armory,
    Hangar,
    WeaponsControl,
    Command,
    FtlControl,
    AdmiralsQuarters
}

export type GalacticaDamage = keyof typeof GalacticaDamageEnum;
export const GalacticaDamageConst = toConst($enum(GalacticaDamageEnum).getKeys());

enum BasestarDamageEnum {
    CriticalHit,
    DisabledHanger,
    DisabledWeapons,
    StructuralDamage
}

export type BasestarDamage = keyof typeof BasestarDamageEnum;
export const BasestarDamageConst = toConst($enum(BasestarDamageEnum).getKeys());


export interface ActiveBasestar {
    location: SpaceLocation;
    damage: BasestarDamage[];
}

export interface CivilianShip {
    food: number;
    fuel: number;
    morale: number;
    population: number;
}
