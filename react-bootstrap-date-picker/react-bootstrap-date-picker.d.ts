// Type definitions for react-bootstrap-date-picker 4.0
// Project: https://github.com/pushtell/react-bootstrap-date-picker#readme
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare module 'react-bootstrap-date-picker' {

  import * as React from 'react';

  type ChangeCallback = (value: string, formattedValue: string) => void;

  interface DatePickerProps {
    value?: string;
    defaultValue?: string;
    style?: any;
    className?: string;
    autoFocus?: boolean;
    disabled?: boolean;
    onChange?: ChangeCallback;
    onFocus?: React.EventHandler<any>;
    onBlur?: React.EventHandler<any>;
    dateFormat?: string;
    clearButtonElement?: React.ReactNode;
    showClearButton?: boolean;
    onClear?(): void;
    previousButtonElement?: React.ReactNode;
    nextButtonElement?: React.ReactNode;
    cellPadding?: string;
    dayLabels?: string[];
    monthLabels?: string[];
    calendarPlacement?: string;
    calendarContainer?: any;
    weekStartsOn?: number;
    showTodayButton?: boolean;
    todayButtonLabel?: string;
    customControl?: React.StatelessComponent<any> | React.ComponentClass<any>;
  }

  export default class DatePicker extends React.Component<DatePickerProps, any> {
  }

}