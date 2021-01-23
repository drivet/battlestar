import { $enum } from 'ts-enum-util';
import { toConst } from '../utils';

enum CrisisCylonAttackEnum {
    JammedAssault,
    BoardingParties,
    ThirtyThree,
    RaidingParty,
    TacticalStrike,
    Surrounded,
    CylonSwarm,
    Ambush,
    HeavyAssault,
    Besieged,
};

export type CrisisCylonAttack = keyof typeof CrisisCylonAttackEnum;
export const CrisisCylonAttackConst = toConst($enum(CrisisCylonAttackEnum).getKeys());

enum CrisisEventEnum {
    RescueMission,
    Riots,
    FoodShortage,
    WaterShortage,
    RescueTheFleet,
    RescueCapricaSurvivors,
    BuildCylonDetector,
    RequestedResignation,
    SleepDeprivation,
    DeclareMartialLaw,
};

export type CrisisEvent = keyof typeof CrisisEventEnum;
export const CrisisEventConst = toConst($enum(CrisisEventEnum).getKeys());

enum CrisisSkillCheckEnum {
    ScoutingForWater,
    UnidentifiedShip,
    UnexpectedReunion,
    DetectorSabotage,
    AdmiralGrilled,
    CylonVirus,
    SendSurveyTeam,
    GuiltByCollusion,
    WeaponMalfunction,
    PrisonLabor,
    LegendaryDiscovery,
    SecurityBreach,
    WitchHunt,
    PrisonerRevolt,
    JumpComputerFailure,
    MissingG4Explosives,
    NetworkComputers,
    CrippledRadar,
    Resistance,
    HangarAccident,
    BombThreat,
    FulfillerOfProphecy,
    ATraitorAccused,
    TerroristInvestigations,
    ColonialDay,
    MandatoryTesting,
    TheOlympicCarrier,
    ElectionsLoom,
    LossOfAFriend,
    CylonTrackingDevice,
    CrashLanding,
    CylonScreenings,
    AnalyzeEnemyFighter,
    ScoutingForFuel,
    LowSupplies,
    WaterSabotaged,
    KeepTabsOnVisitor,
    ForcedWaterMining,
    TerroristBomber,
    CylonAccusation,
    InformingThePublic,
};

export type CrisisSkillCheck = keyof typeof CrisisSkillCheckEnum;
export const CrisisSkillCheckConst = toConst($enum(CrisisSkillCheckEnum).getKeys());

enum SuperCrisisCylonAttackEnum {
    MassiveAssault,
}

export type SuperCrisisCylonAttack = keyof typeof SuperCrisisCylonAttackEnum;
export const SuperCrisisCylonAttackConst = toConst($enum(SuperCrisisCylonAttackEnum).getKeys());

enum SuperCrisisSkillCheckEnum {
    InboundNukes,
    BombOnColonialOne,
    CylonIntruders,
    FleetMobilization,
}

export type SuperCrisisSkillCheck = keyof typeof SuperCrisisSkillCheckEnum;
export const SuperCrisisSkillCheckConst = toConst($enum(SuperCrisisSkillCheckEnum).getKeys());

export type CrisisCard = CrisisCylonAttack | CrisisEvent | CrisisSkillCheck;
export const CrisisCardConst = {
    ...CrisisCylonAttackConst,
    ...CrisisEventConst,
    ...CrisisSkillCheckConst
}

export type SuperCrisisCard = SuperCrisisCylonAttack | SuperCrisisSkillCheck;
export const SuperCrisisCardConst = {
    ...SuperCrisisCylonAttackConst,
    ...SuperCrisisSkillCheckConst
}
