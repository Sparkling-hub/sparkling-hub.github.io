import benefitsOne from './benefitsOne';
import benefitsTwo from './benefitsTwo';
import benefitsThree from './benefitsThree';
import benefitsFour from './benefits_Four';
import benefitsFive from './benefitsFive';
import IBenefits from '../../interface/IBenefits'
const benefits: Record<string, IBenefits> = {
  benefitsOne: benefitsOne,
  benefitsTwo: benefitsTwo,
  benefitsThree: benefitsThree,
  benefitsFour: benefitsFour,
  benefitsFive: benefitsFive,

};

export default {benefits}