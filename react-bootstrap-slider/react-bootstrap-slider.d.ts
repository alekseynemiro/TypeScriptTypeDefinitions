// Type definitions for react-bootstrap-slider v2.0.0
// Project: https://github.com/brownieboy/react-bootstrap-slider
// Definitions by: Aleksey Nemiro <https://github.com/alekseynemiro>

declare module 'react-bootstrap-slider' {

  import * as React from 'react';

  export interface IProps {

    value?: any;

    change?: any;

    slideStop?: any;

    step?: any;

    max?: any;

    min?: any;

    orientation?: { 'horizontal', 'vertical' };

    reversed?: boolean;

    disabled?: boolean;

  }

  export default class ReactBootstrapSlider extends React.Component<IProps, any> {
    
  }

}