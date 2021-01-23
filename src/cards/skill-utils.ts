import { SkillCardInfo, SkillCard, SkillCardConst, SkillCardType, SkillType, SkillTypeConst, SkillCardTypeConst } from "./skill-models";
import { keyBy } from 'lodash';

export function skillCard(id: SkillCard, type: SkillType, cardType: SkillCardType, strength: number): SkillCardInfo {
    return { id, cardType, type, strength };
}

const skillCards: SkillCardInfo[] = [
    skillCard(SkillCardConst.LaunchScout1, SkillTypeConst.Tactics, SkillCardTypeConst.LaunchScout, 1),
    skillCard(SkillCardConst.LaunchScout2, SkillTypeConst.Tactics, SkillCardTypeConst.LaunchScout, 2),
    skillCard(SkillCardConst.StrategicPlanning3, SkillTypeConst.Tactics, SkillCardTypeConst.StrategicPlanning, 3),
    skillCard(SkillCardConst.StrategicPlanning4, SkillTypeConst.Tactics, SkillCardTypeConst.StrategicPlanning, 4),
    skillCard(SkillCardConst.StrategicPlanning5, SkillTypeConst.Tactics, SkillCardTypeConst.StrategicPlanning, 5),

    skillCard(SkillCardConst.ExecutiveOrder1, SkillTypeConst.Leadership, SkillCardTypeConst.ExecutiveOrder, 1),
    skillCard(SkillCardConst.ExecutiveOrder2, SkillTypeConst.Leadership, SkillCardTypeConst.ExecutiveOrder, 2),
    skillCard(SkillCardConst.DeclareEmergency3, SkillTypeConst.Leadership, SkillCardTypeConst.DeclareEmergency, 3),
    skillCard(SkillCardConst.DeclareEmergency4, SkillTypeConst.Leadership, SkillCardTypeConst.DeclareEmergency, 4),
    skillCard(SkillCardConst.DeclareEmergency5, SkillTypeConst.Leadership, SkillCardTypeConst.DeclareEmergency, 5),

    skillCard(SkillCardConst.ConsolidatePower1, SkillTypeConst.Politics, SkillCardTypeConst.ConsolidatePower, 1),
    skillCard(SkillCardConst.ConsolidatePower2, SkillTypeConst.Politics, SkillCardTypeConst.ConsolidatePower, 2),
    skillCard(SkillCardConst.InvestigativeCommittee3, SkillTypeConst.Politics, SkillCardTypeConst.InvestigativeCommittee, 3),
    skillCard(SkillCardConst.InvestigativeCommittee4, SkillTypeConst.Politics, SkillCardTypeConst.InvestigativeCommittee, 4),
    skillCard(SkillCardConst.InvestigativeCommittee5, SkillTypeConst.Politics, SkillCardTypeConst.InvestigativeCommittee, 5),

    skillCard(SkillCardConst.Repair1, SkillTypeConst.Engineering, SkillCardTypeConst.Repair, 1),
    skillCard(SkillCardConst.Repair2, SkillTypeConst.Engineering, SkillCardTypeConst.Repair, 2),
    skillCard(SkillCardConst.ScientificResearch3, SkillTypeConst.Engineering, SkillCardTypeConst.ScientificResearch,3),
    skillCard(SkillCardConst.ScientificResearch4, SkillTypeConst.Engineering, SkillCardTypeConst.ScientificResearch,4),
    skillCard(SkillCardConst.ScientificResearch5, SkillTypeConst.Engineering, SkillCardTypeConst.ScientificResearch,5),

    skillCard(SkillCardConst.EvasiveManeuvers1, SkillTypeConst.Piloting, SkillCardTypeConst.EvasiveManeuvers,1),
    skillCard(SkillCardConst.EvasiveManeuvers2, SkillTypeConst.Piloting, SkillCardTypeConst.EvasiveManeuvers,2),
    skillCard(SkillCardConst.MaximumFirepower3, SkillTypeConst.Piloting, SkillCardTypeConst.MaximumFirepower,3),
    skillCard(SkillCardConst.MaximumFirepower4, SkillTypeConst.Piloting, SkillCardTypeConst.MaximumFirepower,4),
    skillCard(SkillCardConst.MaximumFirepower5, SkillTypeConst.Piloting, SkillCardTypeConst.MaximumFirepower,5),
];

export const SkillCards = keyBy(skillCards, c => c.id) as {[key in SkillCard]: SkillCardInfo};
