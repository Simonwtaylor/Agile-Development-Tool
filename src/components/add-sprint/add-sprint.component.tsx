import * as React from 'react';
import { Input, Button } from 'semantic-ui-react';
import { DateRangePicker } from 'react-dates';
import * as moment from 'moment';

export interface IAddSprintProps {
  onAddSprint: (sprint: any) => void;
}

type FormData = {
  name: string;
  startDate: any;
  endDate: any;
};

const AddSprint: React.FC<IAddSprintProps> = ({
  onAddSprint,
}) => {

  const [startDate, setStartDate] = React.useState<moment.Moment|null>(null);;
  const [focusedDate, setfocusedDate] = React.useState<'startDate'|'endDate'|null>(null);
  const [endDate, setEndDate] = React.useState<moment.Moment|null>(null);
  const [name, setName] = React.useState('');
  const handleSubmit = () => {
    if (startDate && endDate) {
      onAddSprint({
        name,
        startDate: startDate.toDate(),
        endDate: endDate.toDate(),
      });
    }
  };

  return (
    <>
      <Input
        placeholder={'Sprint Name'}
        style={{
          paddingLeft: '5px',
          paddingRight: '5px'
        }}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <DateRangePicker
        startDate={startDate}
        startDateId={"startDate"}
        endDate={endDate}
        endDateId={"endDate"}
        onDatesChange={({ startDate: startDateInput, endDate: endDateInput }) => {
          
          if (startDateInput) {
            setStartDate(startDateInput);
          }

          if (endDateInput) {
            setEndDate(endDateInput);
          }
        }}
        onClose={() => {
          setfocusedDate(null)
        }}
        focusedInput={focusedDate}
        onFocusChange={(focus) => {
          if (focus) {
            setfocusedDate(focus)
          }
        }}

      />
      <Button
        style={{
          marginLeft: '5px',
          marginRight: '5px'
        }}
        onClick={handleSubmit}
        className="button green"
      >
        Save
      </Button>
    </>
  );
}

export default AddSprint;