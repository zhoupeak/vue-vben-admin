interface FallbackProps {
  /**
   * 描述
   */
  description?: string;
  /**
   *  @zh_CN 首页路由地址
   *  @default /
   */
  homePath?: string;
  /**
   * @zh_CN 默认显示的图片
   * @default pageNotFoundSvg
   */
  image?: string;

  /**
   *  @zh_CN 是否显示返回首页按钮
   *  @default true
   */
  showBack?: boolean;
  /**
   *  @zh_CN 内置类型
   */
  status?: '403' | '404' | '500' | 'offline';
  /**
   *  @zh_CN 页面提示语
   */
  title?: string;
}
export type { FallbackProps };
