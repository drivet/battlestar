import { Character } from "character-models";
import { Location, SpaceLocationCounts } from "location-models";
import { SkillDeckCounts, SkillDecks } from "cards/skill-models";
import { ActiveBasestar } from "tokens/token-models";

export interface PlayerView {
    userId: string;
    characterId?: Character;
    admiral?: boolean;
    president?: boolean;
    location?: Location;
    skillCounts?: SkillDeckCounts;
    quorumCount?: number;
    loyaltyCount?: number;
    vicePresident?: boolean;
}

export interface GameView {
    players: PlayerView[];
    currentPlayer: number;

    // resource counters
    food: number;
    fuel: number;
    morale: number;
    population: number;

    // ships and tokens in reserve
    vipers: number;
    raptors: number;
    raiders: number;
    heavyRaiders: number;
    centurions: number;
    basestars: number;
    civilianShips: number;
    galacticaDamage: number;
    basestarDamage: number;

    damagedVipers: number;

    damagedLocations: Location[];

    // all the various ships that can be on the board
    activeVipers: SpaceLocationCounts;
    activeRaiders: SpaceLocationCounts;
    activeHeavyRaiders: SpaceLocationCounts;
    activeCivilians: SpaceLocationCounts;
    activeBasestars: ActiveBasestar[];

    boardedCenturions: number[];

    nukes: number;

    jumpPosition: number;
    distance: number;

    quorumDeck: number;
    destinationDeck: number;
    skillDecks: SkillDeckCounts;
    discardedSkillDecks: SkillDecks;
    destinyDeck: number;
    crisisDeck: number;
    superCrisisDeck: number;
    loyaltyDeck: number;
}
