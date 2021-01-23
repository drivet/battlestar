import { keyBy } from "lodash";
import { DestinationCard, DestinationCardInfo, DestinationCardConst } from "./destination-models";

const destinationCards: DestinationCardInfo[] = [
    {
        id: DestinationCardConst.AsteroidField,
        distance: 3
    },
    {
        id: DestinationCardConst.BarrenPlanet,
        distance: 2
    },
    {
        id: DestinationCardConst.TyliumPlanet,
        distance: 1
    },
    {
        id: DestinationCardConst.RemotePlanet,
        distance: 2
    },
    {
        id: DestinationCardConst.DeepSpace,
        distance: 2
    },
    {
        id: DestinationCardConst.IcyMoon,
        distance: 1
    },
    {
        id: DestinationCardConst.CylonRefinery,
        distance: 2
    },
    {
        id: DestinationCardConst.CylonRefinery,
        distance: 3
    },
    {
        id: DestinationCardConst.DesolateMoon,
        distance: 3
    },
    {
        id: DestinationCardConst.RagnarAnchorage,
        distance: 1
    },
];

export const DestinationCards = keyBy(destinationCards, c => c.id) as {[key in DestinationCard]: DestinationCardInfo};
