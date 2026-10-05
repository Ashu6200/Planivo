/**
 * Type declarations for the Electron preload API.
 * Available as window.electronAPI in the renderer.
 */

export interface ElectronAPI {
  getAppInfo: () => Promise<{
    name: string;
    version: string;
    platform: string;
    arch: string;
  }>;
}

declare global {
  interface Window {
    electronAPI?: ElectronAPI;
  }
}
