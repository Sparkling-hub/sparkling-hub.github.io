import benefitsOne from './benefitsOne';
import benefitsTwo from './benefitsTwo';
import benefitsThree from './benefitsThree';
import IBenefits from '../../interface/IBenefits'

export const sections: Record<string, IBenefits> = {
    benefitsOne: benefitsOne,
    benefitsTwo: benefitsTwo,
    benefitsThree: benefitsThree,
  };
