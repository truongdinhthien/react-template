import InternalForm from './Form';
import FormItem from './FormItem';

type FormType = typeof InternalForm;

interface RadioInterface extends FormType {
  Item: typeof FormItem
}

const Form = InternalForm as RadioInterface;

Form.Item = FormItem;

export default Form;
