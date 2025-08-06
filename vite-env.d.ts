/**
 * Copyright (c) 2025 Siddhesh Jitendra Shinde
 * Licensed under the MIT License. See LICENSE file in the project root for details.
 */

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly DEV: boolean
  readonly PROD: boolean
  readonly MODE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
} 