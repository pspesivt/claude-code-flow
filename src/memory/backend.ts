/**
 * Memory Backend Factory
 */

import { IMemoryBackend } from './backends/base.ts';
import { MarkdownBackend } from './backends/markdown.ts';
import { SQLiteBackend } from './backends/sqlite.ts';
import { ILogger, Logger } from '../core/logger.ts';

export class MemoryBackendFactory {
  static create(type: 'markdown' | 'sqlite', options?: any): IMemoryBackend {
    const logger = options?.logger || new Logger({
      level: 'info',
      format: 'json',
      destination: 'console'
    });
    
    switch (type) {
      case 'markdown':
        return new MarkdownBackend(options?.path || './memory', logger);
      case 'sqlite':
        return new SQLiteBackend(options?.path || './memory/memory.db', logger);
      default:
        throw new Error(`Unknown backend type: ${type}`);
    }
  }
}

export type { IMemoryBackend } from './backends/base.ts';
export { MarkdownBackend } from './backends/markdown.ts';
export { SQLiteBackend } from './backends/sqlite.ts';