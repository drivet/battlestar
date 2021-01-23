import { HumanLocationConst } from 'location-models';
import { keyBy } from 'lodash';
import { SkillTypeConst } from 'cards/skill-models';
import { CharacterInfo, Character, CharacterConst, CharacterTypeConst } from './character-models';

const characters: CharacterInfo[] = [
    {
        id: CharacterConst.KaraThrace,
        name: 'Kara "Starbuck" Thrace',
        type: CharacterTypeConst.Pilot,
        startLocation: HumanLocationConst.HangarDeck,
        cardsDue: [
            {
                skills: [SkillTypeConst.Tactics],
                count: 2
            },
            {
                skills: [SkillTypeConst.Piloting],
                count: 2
            },
            {
                skills: [SkillTypeConst.Leadership, SkillTypeConst.Engineering],
                count: 1
            }
        ]
    },
    {
        id: CharacterConst.WilliamAdama,
        name: "William Adama",
        type: CharacterTypeConst.Military,
        startLocation: HumanLocationConst.AdmiralsQuarters,
        cardsDue: [
            {
                skills: [SkillTypeConst.Leadership],
                count: 3
            },
            {
                skills: [SkillTypeConst.Tactics],
                count: 2
            }
        ]
    },
    {
        id: CharacterConst.SharonValerii,
        name: 'Sharon "Boomer" Valeri',
        type: CharacterTypeConst.Pilot,
        startLocation: HumanLocationConst.Armory,
        cardsDue: [
            {
                skills: [SkillTypeConst.Tactics],
                count: 2
            },
            {
                skills: [SkillTypeConst.Piloting],
                count: 2
            },
            {
                skills: [SkillTypeConst.Engineering],
                count: 1
            }
        ]
    },
    {
        id: CharacterConst.LeeAdama,
        name: 'Lee "Apollo" Adama',
        type: CharacterTypeConst.Pilot,
        cardsDue: [
            {
                skills: [SkillTypeConst.Tactics],
                count: 1
            },
            {
                skills: [SkillTypeConst.Piloting],
                count: 2
            },
            {
                skills: [SkillTypeConst.Leadership, SkillTypeConst.Politics],
                count: 2
            }
        ]
    },
    {
        id: CharacterConst.KarlAgathon,
        name: 'Karl "Helo" Agathon',
        type: CharacterTypeConst.Military,
        cardsDue: [
            {
                skills: [SkillTypeConst.Leadership],
                count: 2
            },
            {
                skills: [SkillTypeConst.Tactics],
                count: 2
            },
            {
                skills: [SkillTypeConst.Piloting],
                count: 1
            }
        ]
    },
    {
        id: CharacterConst.GaiusBaltar,
        name: "Gaius Baltar",
        type: CharacterTypeConst.Political,
        startLocation: HumanLocationConst.ResearchLab,
        cardsDue: [
            {
                skills: [SkillTypeConst.Politics],
                count: 2
            },
            {
                skills: [SkillTypeConst.Leadership],
                count: 1
            },
            {
                skills: [SkillTypeConst.Engineering],
                count: 1
            }
        ]
    },
    {
        id: CharacterConst.GalenTyrol,
        name: '"Chief" Galen Tyrol',
        type: CharacterTypeConst.Support,
        startLocation: HumanLocationConst.HangarDeck,
        cardsDue: [
            {
                skills: [SkillTypeConst.Politics],
                count: 1
            },
            {
                skills: [SkillTypeConst.Leadership],
                count: 2
            },
            {
                skills: [SkillTypeConst.Engineering],
                count: 2
            }
        ]
    },
    {
        id: CharacterConst.SaulTigh,
        name: "Saul Tigh",
        type: CharacterTypeConst.Military,
        startLocation: HumanLocationConst.Command,
        cardsDue: [
            {
                skills: [SkillTypeConst.Leadership],
                count: 2
            },
            {
                skills: [SkillTypeConst.Tactics],
                count: 3
            }
        ]

    },
    {
        id: CharacterConst.LauraRoslin,
        name: "Laura Roslin",
        type: CharacterTypeConst.Political,
        startLocation: HumanLocationConst.PresidentsOffice,
        cardsDue: [
            {
                skills: [SkillTypeConst.Politics],
                count: 3
            },
            {
                skills: [SkillTypeConst.Leadership],
                count: 2
            }
        ]
    },
    {
        id: CharacterConst.TomZarek,
        name: "Tom Zarek",
        type: CharacterTypeConst.Political,
        startLocation: HumanLocationConst.Administration,
        cardsDue: [
            {
                skills: [SkillTypeConst.Politics],
                count: 2
            },
            {
                skills: [SkillTypeConst.Leadership],
                count: 2
            },
            {
                skills: [SkillTypeConst.Tactics],
                count: 1
            }
        ]
    }
];

export const Characters = keyBy(characters, c => c.id) as {[key in Character]: CharacterInfo};
