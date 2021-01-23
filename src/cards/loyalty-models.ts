import { $enum } from 'ts-enum-util';
import { toConst } from '../utils';

enum LoyaltyCardEnum {
    Human,
    Sympathizer,
    ReduceMorale,
    SendCharToSickbay,
    DamageGalactica,
    SendCharToBrig
};

export type LoyaltyCard = keyof typeof LoyaltyCardEnum;
export const LoyaltyCardConst = toConst($enum(LoyaltyCardEnum).getKeys());
