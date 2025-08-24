import { Plugin, PluginContext } from './index';

export const SlackPlugin: Plugin = {
  name: 'Slack',
  description: 'A plugin for interacting with Slack.',

  customActions: {
    async sendSlackMessage(context: PluginContext, params: { channel: string; message: string }) {
      console.log(`[Slack Plugin] Sending message to #${params.channel}: ${params.message}`);
      // In a real implementation, this would use the Slack API.
      // const slackToken = context.apiKey;
      // await someSlackApi.postMessage({ token: slackToken, ...params });
      return { success: true };
    },
  },

  async onLoad(context: PluginContext) {
    console.log('[Slack Plugin] Loaded.');
  },
};

export const GmailPlugin: Plugin = {
  name: 'Gmail',
  description: 'A plugin for interacting with Gmail.',

  customActions: {
    async sendEmail(context: PluginContext, params: { to: string; subject: string; body: string }) {
      console.log(`[Gmail Plugin] Sending email to ${params.to} with subject "${params.subject}"`);
      // In a real implementation, this would use the Gmail API.
      return { success: true, messageId: `msg-${Date.now()}` };
    }
  },

  async onLoad(context: PluginContext) {
    console.log('[Gmail Plugin] Loaded.');
  },
};
