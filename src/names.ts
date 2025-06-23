import type {Organization} from './models';
import BearLogo from './assets/logos/bear-bank.png';
import BuddhaLogo from './assets/logos/buddha.png';
import EagleLogo from './assets/logos/eagle-bank.png';
import EasternUnionLogo from './assets/logos/eastern-union.png';
import RobocopLogo from './assets/logos/robocop.png';
import UmbrellaLogo from './assets/logos/umbrella.png';

export const organizations: Organization[] = [
    {
        id: 'bear',
        name: 'Bear bank',
        numbers: [0, 9],
        colors: ['#c0350c', '#100506'],
        logo: BearLogo,
    },
    {
        id: 'buddha',
        name: 'Buddha bank',
        numbers: [10, 19],
        colors: ['#ebf6f4', '#3caa99'],
        logo: BuddhaLogo,
    },
    {
        id: 'eagle',
        name: 'Eagle Bank',
        numbers: [20, 29],
        colors: ['#ffffff', '#0A3161'],
        logo: EagleLogo,
    },
    {
        id: 'eastern-union',
        name: 'Eastern Union',
        numbers: [30, 39],
        colors: ['#ffffff', '#B31942'],
        logo: EasternUnionLogo,
    },
    {
        id: 'robocop',
        name: 'Robocop',
        numbers: [40, 49],
        colors: ['#bbddee', '#7799cc'],
        logo: RobocopLogo,
    },
    {
        id: 'umbrella',
        name: 'Umbrella corp',
        numbers: [50, 59],
        colors: ['#ffffff', '#ff0000'],
        logo: UmbrellaLogo,
    }
]