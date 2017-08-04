// Type definitions for react-bootstrap-date-picker 5.0.1
// Project: https://github.com/pushtell/react-bootstrap-date-picker
// Definitions by: Aleksey Nemiro <https://github.com/alekseynemiro>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'react-bootstrap-date-picker' {

  import * as React from 'react';

  type ChangeCallback = (value: string, formattedValue: string) => void;

  interface DatePickerProps {
    /** ISO date string representing the current value. */
    value?: string;
    /** ISO date string representing the default value. Cannot be set with 'value'. */
    defaultValue?: string;
    /** ISO date string to set the lowest allowable date value. */
    minDate?: string;
    /** ISO date string to set the highest allowable date value. */
    maxDate?: string;
    /** Style object passed to the FormControl input element. */
    style?: any;
    /** Class name passed to the FormControl input element. */
    className?: string;
    /** autoComplete attribute passed to the FormControl input element. */
    autoComplete?: string;
    /** Whether or not component starts with focus. */
    autoFocus?: boolean;
    /** Whether or not component is disabled. */
    disabled?: boolean;
    /** Focus callback function. */
    onChange?: ChangeCallback;
    /** Focus callback function. */
    onFocus?: React.EventHandler<any>;
    /** Blur callback function. */
    onBlur?: React.EventHandler<any>;
    /** Date format. Any combination of DD, MM, YYYY and separator. */
    dateFormat?: string;
    /** Character or component to use for the clear button. */
    clearButtonElement?: React.ReactNode;
    /** Toggles the visibility of the clearButton */
    showClearButton?: boolean;
    /** Defines what happens when clear button is clicked. */
    onClear?(): void;
    /** Character or component to use for the calendar's previous button. */
    previousButtonElement?: React.ReactNode;
    /** Character or component to use for the calendar's next button. */
    nextButtonElement?: React.ReactNode;
    /** CSS padding value for calendar date cells. */
    cellPadding?: string;
    /** Array of day names to use in the calendar. Starting on Sunday. */
    dayLabels?: string[];
    /** Array of month names to use in the calendar. */
    monthLabels?: string[];
    /** Overlay placement for the popover calendar. */
    calendarPlacement?: string;
    /** Overlay container for the popover calendar. When placing the date-picker in a scrolling container, set this prop to some ancestor of the scrolling container. */
    calendarContainer?: any;
    /** Makes the calendar's week to start on a specified day. 0 = Sunday, 1 = Monday, etc. */
    weekStartsOn?: number;
    /** Toggles the visibility of the today-button. */
    showTodayButton?: boolean;
    /** Label for the today-button */
    todayButtonLabel?: string;
    /** Overwrite the default FormControl component with your own component. */
    customControl?: React.StatelessComponent<any> | React.ComponentClass<any>;
  }

  export default class DatePicker extends React.Component<DatePickerProps, any> {
  }

}