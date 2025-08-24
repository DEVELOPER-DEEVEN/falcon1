import { Action } from '@falconx/planner';

export interface PluginContext {
  // In the future, this could contain API keys, user settings, etc.
  [key: string]: any;
}

export interface Plugin {
  name: string;
  description: string;

  /**
   * A list of custom actions this plugin provides.
   * These can be used in the planner.
   */
  customActions?: {
    [actionName: string]: (context: PluginContext, params: any) => Promise<any>;
  };

  /**
   * A function that is called when the plugin is loaded.
   */
  onLoad?: (context: PluginContext) => Promise<void>;

  /**
   * A function that is called when the plugin is unloaded.
   */
  onUnload?: () => Promise<void>;
}
