import { $enum } from 'ts-enum-util';
import { toConst } from '../utils';

enum SkillTypeEnum {
    Tactics,
    Piloting,
    Leadership,
    Engineering,
    Politics
};

export type SkillType = keyof typeof SkillTypeEnum;

export const SkillTypeConst = toConst($enum(SkillTypeEnum).getKeys());

enum SkillCardEnum {
    ConsolidatePower1,
    ConsolidatePower2,
    InvestigativeCommittee3,
    InvestigativeCommittee4,
    InvestigativeCommittee5,

    LaunchScout1,
    LaunchScout2,
    StrategicPlanning3,
    StrategicPlanning4,
    StrategicPlanning5,

    ExecutiveOrder1,
    ExecutiveOrder2,
    DeclareEmergency3,
    DeclareEmergency4,
    DeclareEmergency5,

    Repair1,
    Repair2,
    ScientificResearch3,
    ScientificResearch4,
    ScientificResearch5,

    EvasiveManeuvers1,
    EvasiveManeuvers2,
    MaximumFirepower3,
    MaximumFirepower4,
    MaximumFirepower5,
};

export type SkillCard = keyof typeof SkillCardEnum;

export const SkillCardConst = toConst($enum(SkillCardEnum).getKeys());

enum SkillCardTypeEnum {
    ScientificResearch,
    Repair,
    EvasiveManeuvers,
    MaximumFirepower,
    LaunchScout,
    StrategicPlanning,
    ExecutiveOrder,
    DeclareEmergency,
    ConsolidatePower,
    InvestigativeCommittee,
};

export type SkillCardType = keyof typeof SkillCardTypeEnum;

export const SkillCardTypeConst = toConst($enum(SkillCardTypeEnum).getKeys());

export interface SkillCardInfo {
    id: SkillCard;
    type: SkillType;
    cardType: SkillCardType;
    strength: number;
}

export type SkillDeckCounts = {
    [key in SkillType]?: number;
}

export type SkillDecks = {
    [key in SkillType]?: SkillCard[]
}
