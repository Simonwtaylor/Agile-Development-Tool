import * as React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input } from 'semantic-ui-react';

export interface IAddSprintProps {

}

type FormData = {
  name: string;
  startDate: string;
  endDate: string;
};

const AddSprint: React.FC<IAddSprintProps> = () => {

  const { register, handleSubmit, control } = useForm<FormData>();
  const onSubmit = (data: any) => { console.log(data) }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name={'name'}
        as={<Input
          placeholder={'Sprint Name'}
        />}
        control={control}
      />
      <Controller
        name={'startDate'}
        as={
          <Input
            placeholder={'Start Date'}
          />
        }
        control={control}
      />
      <Controller
        name={'endDate'}
        as={
          <Input
            placeholder={'End Date'}
          />
        }
        control={control}
      />
      <button type="submit" className="button green">Save</button>
    </form>
  );
}

export default AddSprint;