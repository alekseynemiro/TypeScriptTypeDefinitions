interface IJQueryResizableOptions
{

  /** top, right, bottom or left */
  direction?: Array<string>;

}

interface JQueryStatic {

  resizable(options?: any); 

}

interface JQuery {

  /**
   * Initializes tagEditor.
   */
  resizable(options?: any): JQuery;

} 