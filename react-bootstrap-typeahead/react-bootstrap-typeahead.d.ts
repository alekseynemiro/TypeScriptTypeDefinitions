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

      onChange: () => void;

      /** Array list or objects. */
      options: Array<any>;

      multiple?: boolean;

      filterBy?: () => void;

      renderMenuItemChildren?: (props, option, idx) => void;

      renderToken?: (option, onRemove) => void;

    }

  }

  export default class Typeahead extends React.Component<Typeahead.Props, any> { }

}
