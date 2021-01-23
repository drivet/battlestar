import { $enum } from 'ts-enum-util';
import { toConst } from '../utils';

enum DestinationCardEnum {
    DesolateMoon,
    RagnarAnchorage,
    CylonAmbush,
    CylonRefinery,
    AsteroidField,
    DeepSpace,
    RemotePlanet,
    IcyMoon,
    BarrenPlanet,
    TyliumPlanet,
};

export type DestinationCard = keyof typeof DestinationCardEnum;
export const DestinationCardConst = toConst($enum(DestinationCardEnum).getKeys());

export interface DestinationCardInfo {
    id: DestinationCard;
    distance: number;
}
