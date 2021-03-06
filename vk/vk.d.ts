﻿// Type definitions for VK JavaScript SDK
// Project: http://vk.com/dev/Javascript_SDK
// Definitions by: Aleksey Nemiro <https://github.com/alekseynemiro>

interface VkModules {

	callbacks: Array<any>;

	loaded(name: string): void;

	load(name: string, callback: Function, path: string): void;

}

interface VkWidgets {

	// TODO

}

interface VkStatic {

	/** 
	 * Инициализирует соединение с родительским окном для запуска внешних вызовов. При успешной инициализации соединения вызывается функция success.
	 * @param success Функция, которая будет вызвана в случае успешной инициализации.
	 * @param failure Функция, которая будет вызвана в случае ошибки.
	 * @param ver Версия API. На данный момент актуальная версия 5.31
	 */
	init(success: Function, failure: Function, ver: string): void;

	initXDConn(): void;

	/** 
	 * Осуществляет внешний вызов метода Client API <http://vk.com/dev/clientapi>. 
	 * @param methodName Название метода.
	 * @param args Параметры.
	 */
	callMethod(methodName: string, args?: any[]|string|number|any): void;

	/** 
	 * Добавляет функцию callback в качестве обработчика события name.
	 */
	addCallback(eventName: string, callback: Function): void;

	/** 
	 * Удаляет функцию callback из обработчика события name.
	 */
	removeCallback(eventName: string): void;

	/** 
	 * Вспомогательный метод, который проверяет является ли указанное значение функцией или нет. 
	 */
	isFunc(obj: any): boolean;

	params: Array<any>;

	loadParams(q: any): void;

	addScript(url: string): void;

	/** 
	 * Выполняет запрос к ВКонтакте API и передаёт полученные данные в функцию callback.
	 * 
	 * @param method Название метода API.
	 * @param params Объект с параметрами запроса.
	 * @param callback Функция для обработки результата. 
	 */
	api(method: string, params?: any, callback?: Function): void;

	Modules: VkModules;

	showPortlet(opts: any): void;

	Widgets: VkWidgets;

}

declare var VK: VkStatic;