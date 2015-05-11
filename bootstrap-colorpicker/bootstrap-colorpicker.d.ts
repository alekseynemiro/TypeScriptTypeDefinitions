// Type definitions for Bootstrap ColorPicker v2.1
// Project: http://mjolnic.github.io/bootstrap-colorpicker/
// Definitions by: Aleksey Nemiro <https://github.com/alekseynemiro>

/// <reference path="../jquery/jquery.d.ts" /> 

interface ColorPickerSettings {

	/*
	 * If not false, forces the color format to be hex, rgb or rgba, otherwise the format is automatically detected.
	 */
	format?: string|boolean;

	/*
	 * If not false, sets the color to this value.
	 */
	color?: string|boolean;

	/**
	 * If not false, the picker will be contained inside this element, otherwise it will be appended to the document body.
	 */
	container?: string|JQuery|boolean;

	/*
	 * Children selector for the component or element that trigger the colorpicker and which background color will change (needs an inner <i> element).
	 */
	component?: string|JQuery;

	/*
	 * Children selector for the input that will store the picker selected value.
	 */
	input?: string|JQuery;

	/*
	 * If true, the hue and alpha channel bars will be rendered horizontally, above the saturation selector.
	 */
	horizontal?: boolean;

	/*
	 * If true, forces to show the colorpicker as an inline element.
	 */
	inline?: boolean;

	/*
	 * Vertical sliders configuration (read source code if you really need to tweak this).
	 */
	sliders?: any;

	/*
	 * Horizontal sliders configuration (read source code if you really need to tweak this).
	 */
	slidersHorz?: any;

	/*
	 * Customizes the default colorpicker HTML template.
	 */
	template?: string;

	/*
	 * By default, the colorpicker is aligned to the right of the input.
	 * If you need to switch it to the left, set align to 'left'.
	 */
	align?: string;

}

/*
 * Represents color information.
 */
interface ColorPickerColor {

	/**
	 * Set a new color. The value is parsed and tries to do a quess on the format.
	 */
	setColor(value: string): void;

	/*
	 * Set the HUE with a value between 0 and 1.
	 */
	setHue(value: number): void;

	/*
	 * Set the saturation with a value between 0 and 1.
	 */
	setSaturation(value: number): void;

	/*
	 * Set the brightness with a value between 0 and 1.
	 */
	setBrightness(value: number): void;

	/*
	 * Set the transparency with a value between 0 and 1.
	 */
	setAlpha(value: number): void;

	/*
	 * Returns a hash with red, green, blue and alpha.
	 */
	toRGB(): string;

	/*
	 * Returns a string with HEX format for the current color.
	 */
	toHex(): string;

	/*
	 * Returns a hash with HSLA values.
	 */
	toHSL(): string;
	
}

/*
 * Interface of the Bootstrap ColorPicker extension of the JQuery event object.
 */
interface ColorPickerEventObject extends JQueryEventObject {
	
	color: ColorPickerColor;

}

interface ColorPicker extends JQuery {

	/*
	 * This event fires immediately when the color picker is created.
	 */
	create: (event: ColorPickerEventObject) => void;

	/*
	 * This event fires immediately when the color picker is displayed.
	 */
	showPicker: (event: ColorPickerEventObject) => void;

	/*
	 * This event is fired immediately when the color picker is hidden.
	 */
	hidePicker: (event: ColorPickerEventObject) => void;

	/*
	 * This event is fired when the color is changed.
	 */
	changeColor: (event: ColorPickerEventObject) => void;

	/*
	 * This event is fired immediately when the color picker is disabled, except if it was initialized as disabled.
	 */
	disable: (event: ColorPickerEventObject) => void;

	/*
	 * This event is fired immediately when the color picker is enabled, except upon initialization.
	 */
	enable: (event: ColorPickerEventObject) => void;

	/*
	 * This event fires immediately when the color picker is destroyed.
	 */
	destroy: (event: ColorPickerEventObject) => void;

}

interface JQueryStatic {

	colorpicker: ColorPicker;

} 

interface JQuery {

	/*
	 * Initializes an colorpicker.
	 */
	colorpicker(): ColorPicker;

	/*
	 * Initializes an colorpicker with the specified settings.
	 * 
	 * @param settings The colorpicker settings.
	 */
	colorpicker(settings: ColorPickerSettings): ColorPicker;

	/**
	 * Gets or sets setting value.
	 * 
	 * @param name The name of parameter.
	 * @param value The parameter value.
	 */
	colorpicker(name: string, value?: any): ColorPicker;

}