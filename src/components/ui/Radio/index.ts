import InternalRadio from './Radio';
import RadioGroup from './RadioGroup';

type RadioType = typeof InternalRadio;

interface RadioInterface extends RadioType {
  Group: typeof RadioGroup
}

const Radio = InternalRadio as RadioInterface;

Radio.Group = RadioGroup;

export default Radio;
