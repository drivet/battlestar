import { $enum } from 'ts-enum-util';
import { toConst } from './utils';

enum ColonialOneLocationEnum {
    PressRoom,
    Administration,
    PresidentsOffice,
}

export type ColonialOneLocation = keyof typeof ColonialOneLocationEnum;

export const ColonialOneLocationConst = toConst($enum(ColonialOneLocationEnum).getKeys());


enum CylonLocationEnum {
    CylonFleet,
    HumanFleet,
    ResurrectionShip,
    Caprica,
}

export type CylonLocation = keyof typeof CylonLocationEnum;

export const CylonLocationConst = toConst($enum(CylonLocationEnum).getKeys());

enum GalacticaLocationEnum {
    Command,
    FtlControl,
    WeaponsControl,
    HangarDeck,
    Communications,
    Brig,
    Sickbay,
    ResearchLab,
    Armory,
    AdmiralsQuarters,
}


export type GalacticaLocation = keyof typeof GalacticaLocationEnum;

export const GalacticaLocationConst = toConst($enum(GalacticaLocationEnum).getKeys());

enum SpaceLocationEnum {
    BackAbove,
    FrontAbove,
    Back,
    Front,
    FrontBelow,
    BackBelow
}

export type SpaceLocation = keyof typeof SpaceLocationEnum;

export const SpaceLocationConst = toConst($enum(SpaceLocationEnum).getKeys());

export type HumanLocation = ColonialOneLocation | GalacticaLocation | SpaceLocation;

export const HumanLocationConst = {
    ...ColonialOneLocationConst,
    ...GalacticaLocationConst,
    ...SpaceLocationConst
};

export type Location = HumanLocation | CylonLocation;

export const LocationConst = {
    ...HumanLocationConst,
    ...CylonLocationConst,
};

export type SpaceLocationCounts = {
    [key in SpaceLocation]?: number;
};
