import { yupResolver } from '@hookform/resolvers/yup';
import Tippy, { TippyProps } from '@tippyjs/react';
import { Suspense, useState } from 'react';
import {
  Button, Checkbox, Container, Form, Input, Radio, Text,
} from 'src/components/ui';
import * as yup from 'yup';

const formSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email(),
  checkbox: yup.boolean().required(),
  radioGroup: yup.string(),
});

type FormValue = yup.InferType<typeof formSchema>;

const Home = () => {
  const [state, setState] = useState();
  return (
    <Container>
      <div className="mt-5 flex flex-col w-80 gap-y-2">
        <Text variant="h1" className="mb-2">Complex form</Text>
        <Form<FormValue>
          schema={formSchema}
          onSubmit={(data) => {
            console.log(data);
          }}
        >
          <Form.Item name="name">
            <Input placeholder="Full name" />
          </Form.Item>
          <Form.Item name="email">
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item name="checkbox">
            <Checkbox>Checkbox</Checkbox>
          </Form.Item>
          <Form.Item name="radioGroup">
            <Radio.Group>
              <Radio value="radio-1">radio 1</Radio>
              <Radio value="radio-2">radio 2</Radio>
            </Radio.Group>
          </Form.Item>
          <Tippy
            placement="bottom-start"
            arrow={false}
            content="ok"
            animation="fade"
            theme="light"
          >
            <Button type="submit">Button</Button>
          </Tippy>
        </Form>
      </div>
    </Container>
  );
};

export default Home;
