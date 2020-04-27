/*
 * cloudbeaver - Cloud Database Manager
 * Copyright (C) 2020 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */

export function parseJSONFlat(
  object: any,
  setValue: (key: string, value: any) => void,
  scope?: string
) {
  if (typeof object === 'object') {
    for (const [key, value] of Object.entries<any>(object)) {
      parseJSONFlat(value, setValue, `${scope ? `${scope}.` : ''}${key}`);
    }
    return;
  }
  if (scope) {
    setValue(scope, object);
  }
}