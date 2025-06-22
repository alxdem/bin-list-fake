import type {GetBankData} from './models';
import {organizations} from './names';

export const getBankData: GetBankData = (value) => {
    return organizations.find(organization => value >= organization.numbers[0] && value <= organization.numbers[1]);
}