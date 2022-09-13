const keys = ['Server', 'Cors', 'Typeorm', 'Auth', 'Swagger'] as const;
const envKeys = [...keys.map((key) => key.toUpperCase())] as const;
const configKeys = [...keys.map((key) => key.toLowerCase())] as const;

export type EnvKey = typeof envKeys[number];
export type ConfigKey = typeof configKeys[number];

export const EnvKey = {} as Record<typeof keys[number], typeof envKeys[number]>;
export const ConfigKey = {} as Record<
  typeof keys[number],
  typeof configKeys[number]
>;

keys.forEach((key, i) => {
  EnvKey[key] = envKeys[i];
  ConfigKey[key] = configKeys[i];
});
