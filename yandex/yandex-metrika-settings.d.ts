interface YaMetrikaSettings {

  /** Идентификатор счетчика. */
  id: number;

  /** Карта кликов. */
  clickmap?: boolean;

  /** Пути ссылок. */
  trackLinks?: boolean;

  /***/
  accurateTrackBounce?: boolean;

  /** Вебвизор, карта скроллинга, аналитика форм. */
  webvisor: boolean;

  /** Отслеживание хеша в адресной строке браузера. */
  trackHash: boolean;

  /** Параметры отправки на индексацию страниц сайта. */
  ut: { 'noindex' };

  /** Отправка в Метрику данных электронной коммерции. */
  ecommerce: string;

}

declare var YaMetrikaSettings: YaMetrikaSettings;