import React, { useState } from "react";
import DatePicker from "react-datepicker";
import {formatDate} from '../../utils/dateFormat';

type DateSelectorProps = {
    selectedDate: Date;
    ensureDateAndSetSelected: (date: Date | [Date,Date] | null) => void;
}

export const DateSelector: React.FC<DateSelectorProps> = ({selectedDate, ensureDateAndSetSelected}) => {
    const label = `Date: ${formatDate(selectedDate)}`
  return (
      <div>
            <div style={{textAlign: 'left', color: 'green'}}>
                <h3>{label}</h3>
            </div>
            <DatePicker selected={selectedDate} onChange={(date) => ensureDateAndSetSelected(date)} />
      </div>
  );
};