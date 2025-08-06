/**
 * Copyright (c) 2025 Siddhesh Jitendra Shinde
 * Licensed under the MIT License. See LICENSE file in the project root for details.
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
