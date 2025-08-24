import { Action } from '@falconx/planner';

export interface Workflow {
  id: string;
  name: string;
  actions: Action[];
}

export class Recorder {
  private isRecording: boolean = false;
  private actions: Action[] = [];
  private startTime: number | null = null;

  start() {
    if (this.isRecording) {
      console.warn("Recorder is already running.");
      return;
    }
    console.log("Starting recorder...");
    this.isRecording = true;
    this.startTime = Date.now();
    this.actions = [];
  }

  stop() {
    if (!this.isRecording) {
      console.warn("Recorder is not running.");
      return;
    }
    console.log("Stopping recorder...");
    this.isRecording = false;
  }

  addAction(action: Action) {
    if (!this.isRecording) {
      console.warn("Cannot add action, recorder is not running.");
      return;
    }
    console.log("Adding action:", action);
    this.actions.push(action);
  }

  save(name: string): Workflow {
    if (this.isRecording) {
      this.stop();
    }

    const workflow: Workflow = {
      id: `wf-${Date.now()}`,
      name: name,
      actions: this.actions,
    };

    console.log("Saving workflow:", JSON.stringify(workflow, null, 2));

    // In a real implementation, this would save to a file.
    // For now, we just return the object.
    return workflow;
  }
}
