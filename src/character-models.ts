import { HumanLocation } from 'location-models';
import { SkillType } from 'cards/skill-models';
import { $enum } from 'ts-enum-util';
import { toConst } from './utils';

enum CharacterEnum {
    LeeAdama,
    SaulTigh,
    LauraRoslin,
    GaiusBaltar,
    GalenTyrol,
    TomZarek,
    KaraThrace,
    SharonValerii,
    KarlAgathon,
    WilliamAdama
};

export type Character = keyof typeof CharacterEnum;

export const CharacterConst = toConst($enum(CharacterEnum).getKeys());

enum CharacterTypeEnum {
    Pilot,
    Military,
    Political,
    Support
};

export type CharacterType = keyof typeof CharacterTypeEnum;

export const CharacterTypeConst = toConst($enum(CharacterTypeEnum).getKeys());

export interface SkillCardDue {
    skills: SkillType[];
    count: number;
}

export interface CharacterInfo {
    id: Character;
    type: CharacterType;
    name: string;
    startLocation?: HumanLocation;
    cardsDue: SkillCardDue[];
}
