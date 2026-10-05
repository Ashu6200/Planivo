/**
 * Electron Preload Script
 *
 * This is the ONLY bridge between the main process and the renderer.
 * Uses contextBridge to expose a controlled, typed API.
 *
 * Security:
 * - No direct Node.js API access in the renderer
 * - Only explicitly defined methods are exposed
 * - All IPC goes through ipcRenderer.invoke (request/response pattern)
 */

import { contextBridge, ipcRenderer } from 'electron';

export interface ElectronAPI {
  getAppInfo: () => Promise<{
    name: string;
    version: string;
    platform: string;
    arch: string;
  }>;
}

const electronAPI: ElectronAPI = {
  getAppInfo: () => ipcRenderer.invoke('app:getInfo'),
};

contextBridge.exposeInMainWorld('electronAPI', electronAPI);
