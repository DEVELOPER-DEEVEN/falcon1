export interface Action {
  type: 'click' | 'type' | 'screenshot' | 'open_url';
  params: any;
}

export interface ActionPlan {
  id: string;
  description: string;
  actions: Action[];
}

/**
 * Converts a natural language query into an action plan.
 * In a real implementation, this would use an LLM and a fallback parser.
 * @param query The natural language query.
 * @returns A structured action plan.
 */
export function createPlan(query: string): ActionPlan {
  console.log(`Creating plan for query: "${query}"`);

  // Hardcoded response for simulation
  if (query.toLowerCase().includes('gmail')) {
    return {
      id: `plan-${Date.now()}`,
      description: "Open Gmail and compose a new email",
      actions: [
        {
          type: 'open_url',
          params: { url: 'https://mail.google.com' },
        },
        {
          type: 'click',
          params: { element_description: 'the "Compose" button' },
        },
        {
          type: 'type',
          params: { text: 'Hello from FalconX!', element_description: 'the message body' },
        },
      ],
    };
  }

  return {
    id: `plan-${Date.now()}`,
    description: "No plan found",
    actions: [],
  };
}
