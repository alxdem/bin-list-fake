import type {Organization} from './models';

export const organizations: Organization[] = [
    {
        id: 'bear',
        name: 'Bear bank',
        numbers: [0, 9],
        colors: ['#c0350c', '#100506'],
        logo: '/logos/bear-bank.png',
    },
    {
        id: 'buddha',
        name: 'Buddha bank',
        numbers: [10, 19],
        colors: ['#ebf6f4', '#3caa99'],
        logo: '/logos/buddha.png',
    },
    {
        id: 'eagle',
        name: 'Eagle Bank',
        numbers: [20, 29],
        colors: ['#ffffff', '#0A3161'],
        logo: '/logos/eagle-bank.png',
    },
    {
        id: 'eastern-union',
        name: 'Eastern Union',
        numbers: [30, 39],
        colors: ['#ffffff', '#B31942'],
        logo: '/logos/eastern-union.png',
    },
    {
        id: 'robocop',
        name: 'Robocop',
        numbers: [40, 49],
        colors: ['#bbddee', '#7799cc'],
        logo: '/logos/robocop.png',
    },
    {
        id: 'umbrella',
        name: 'Umbrella corp',
        numbers: [50, 59],
        colors: ['#ffffff', '#ff0000'],
        logo: '/logos/umbrella.png',
    }
]