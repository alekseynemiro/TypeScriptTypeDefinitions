// Type definitions for react-bootstrap-typeahead v0.9.2
// Project: https://github.com/ericgio/react-bootstrap-typeahead
// Definitions by: Aleksey Nemiro <https://github.com/alekseynemiro>

/// <reference path="../react/react.d.ts" />

/**
 * https://github.com/ericgio/react-bootstrap-typeahead
 */
declare module 'react-bootstrap-typeahead' {

  import React = __React;

  namespace Typeahead {

    export interface Props {

      /** Callback fired whenever items are added or removed. Receives an array of the selected options. */
      onChange?: (e: Event) => void;

      /** Callback fired when the input is blurred. Receives an event. */
      onBlur?: (e: Event) => void;

      /** Callback fired when the input is focused. Receives an event. */
      onFocus?: (e: Event) => void;

      /** Callback fired when user-input text changes. Receives the text string. */
      onInputChange?: (e: Event) => void;

      /** Full set of options, including any pre-selected options. */
      options: Array<any>;

      /** 
       * The selected option(s) displayed in the input. 
       * Use this prop if you want to control the component via its parent.
       */
      selected?: Array<any>;

      /** Whether or not multiple selections are allowed. */
      multiple?: boolean;

      /** Name property for the input. */
      name?: string;

      /** 
       * Provides the ability to specify a prefix before the user-entered 
       * text to indicate that the selection will be new. No-op unless allowNew={true}.
       */
      newSelectionPrefix?: string;

      /** 
       * Optional callback to use when filtering the options. 
       * The function will receive each option as the first parameter. 
       */
      filterBy?: () => void;

      /** Provides a hook for customized rendering of menu item contents. */
      renderMenuItemChildren?: (props, option, idx) => void;

      /** Provides a hook for customized rendering of tokens when multiple selections are enabled. */
      renderToken?: (option, onRemove) => void;

      /**
       * Specify menu alignment. 
       * The default value is justify, which makes the menu as wide 
       * as the input and truncates long values. Specifying left or right will align 
       * the menu to that side and the width will be determined by the length of menu item values. 
       */
      align?: string;

      /** 
       * Allows the creation of new selections on the fly. 
       * Any new items will be added to the list of selections, 
       * but not the list of original options unless handled as such by Typeahead's parent. 
       * The newly added item will always be returned as an object even if the other options are simply strings, 
       * so be sure your onChange callback can handle this. 
       */
      allowNew?: boolean;

      /** Specify any pre-selected options. Use only if you want the component to be uncontrolled. */
      defaultSelected?: Array<any>;

      /** Whether to disable the input. Will also disable selections when multiple={true}. */
      disabled?: boolean;

      /** Message to display in the menu if there are no valid results. */
      emptyLabel?: string;

      /** Specify which option key to use for display. By default, the selector will use the label key. */
      labelKey?: string;

      /** Maximum height of the dropdown menu, in px. Default: 300px. */
      maxHeight?: number;

      /** 
       * Maximum number of results to display by default. 
       * Mostly done for performance reasons so as not to render too 
       * many DOM nodes in the case of large data sets.
       * Default: 100.
       */
      maxResults?: number;

      /** Number of input characters that must be entered before showing results. Default: 0. */
      minLength?: number;

      /** Give user the ability to display additional results if the number of results exceeds maxResults. */
      paginate?: boolean;

      /** DEPRECATED. Use maxResults and paginate instead. */
      paginateResults?: number;

      /** Prompt displayed when large data sets are paginated. */
      paginationText?: string;

      /** Placeholder text for the input. */
      placeholder?: string;

    }

  }

  export default class Typeahead extends React.Component<Typeahead.Props, any> { 

    /** Provides a programmatic way to blur the input. */
    public blur(): void;

    /** Provides a programmatic way to reset the input. Calling the method will clear both text and selection(s). */
    public clear(): void;

    /** Provides a programmatic way to focus the input. */
    public focus(): void;

  }

}
