import { $enum } from 'ts-enum-util';
import { toConst } from '../utils';

enum QuorumCardEnum {
    AssignMissionSpecialist,
    AuthorizationOfBrutalForce,
    FoodRationing,
    ReleaseCylonMugshots,
    AssignVicePresident,
    AssignArbitrator,
    EncourageMutiny,
    PresidentialPardon,
    AcceptProphecy,
    ArrestOrder,
    InspirationalSpeech
};

export type QuorumCard = keyof typeof QuorumCardEnum;
export const QuorumCardConst = toConst($enum(QuorumCardEnum).getKeys())
