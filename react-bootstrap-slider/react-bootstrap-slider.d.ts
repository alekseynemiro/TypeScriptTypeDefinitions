// Type definitions for react-bootstrap-slider v2.0.0
// Project: https://github.com/brownieboy/react-bootstrap-slider
// Definitions by: Aleksey Nemiro <https://github.com/alekseynemiro>

declare module 'react-bootstrap-slider' {

  import * as React from 'react';

  export interface IProps {

    /** initial value. Use array to have a range slider. */
    value?: Array<number> | number;

    /** make range slider. Optional if initial value is an array. If initial value is scalar, max will be used for second value. */
    range?: boolean;

    change?: any;

    slideStop?: any;

    /** increment step */
    step?: number;

    /** maximum possible value */
    max?: number;

    /** minimum possible value */
    min?: number;

    /** The number of digits shown after the decimal. Defaults to the number of digits after the decimal of step value. */
    precision?: number;

    /** set the orientation. Accepts 'vertical' or 'horizontal' */
    orientation?: 'horizontal' | 'vertical';

    /** whether or not the slider should be reversed */
    reversed?: boolean;

    /** 'auto' */
    rtl?: string;

    disabled?: boolean;

    /** whether or not the slider is initially enabled */
    enabled?: boolean;

    /** formatter callback. Return the value wanted to be displayed in the tooltip, useful for string values. If a string is returned it will be indicated in an aria-valuetext attribute. */
    formatter?: () => any;

    /** The natural order is used for the arrow keys. Arrow up select the upper slider value for vertical sliders, arrow right the righter slider value for a horizontal slider - no matter if the slider was reversed or not. By default the arrow keys are oriented by arrow up/right to the higher slider value, arrow down/left to the lower slider value. */
    naturalArrowKeys?: boolean;

    /** Used to define the values of ticks. Tick marks are indicators to denote special values in the range. This option overwrites min and max options. */
    ticks?: Array<any>;

    /** Defines the labels below the tick marks. Accepts HTML input. */
    ticksLabels?: Array<any>;

    /** Used to define the snap bounds of a tick. Snaps to the tick if value is within these bounds. */
    ticksSnapBounds?: number;

    /** Used to allow for a user to hover over a given tick to see it's value. Useful if custom formatter passed in */
    ticksTooltip?: boolean;

    /** selection placement. Accepts: 'before', 'after' or 'none'. In case of a range slider, the selection will be placed between the handles */
    selection?: 'before' | 'after' | 'none';

    /** whether to show the tooltip on drag, hide the tooltip, or always show the tooltip. Accepts: 'show', 'hide', or 'always' */
    tooltip?: 'show' | 'hide' | 'always';

    /** if false show one tootip if true show two tooltips one for each handler */
    tooltipSplit?: boolean;

    /** Position of tooltip, relative to slider. Accepts 'top'/'bottom' for horizontal sliders and 'left'/'right' for vertically orientated sliders. Default positions are 'top' for horizontal and 'right' for vertical slider. */
    tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';

    /** handle shape. Accepts: 'round', 'square', 'triangle' or 'custom' */
    handle?: 'round' | 'square' | 'triangle' | 'custom';

    /** Set to 'logarithmic' to use a logarithmic scale. */
    scale?: 'linear' | 'logarithmic';
     
    /** Focus the appropriate slider handle after a value change. */
    focus?: boolean;

    /** ARIA labels for the slider handle's, Use array for multiple values in a range slider. */
    labelledby?: Array<any>;

    /** Defines a range array that you want to highlight, for example: [{'start':val1, 'end': val2, 'class': 'optionalAdditionalClassName'}]. */
    rangeHighlights?: Array<any>;

  }

  export default class ReactBootstrapSlider extends React.Component<IProps, any> {
    
  }

}