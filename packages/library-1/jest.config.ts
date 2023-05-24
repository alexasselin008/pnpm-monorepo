import type { Config } from "jest";
import { config as swcConfig } from "./swc.jest.ts";

const config: Config = {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(js|ts|tsx)$": ["@swc/jest", swcConfig as Record<string, unknown>]
    },
    moduleNameMapper: {
        "library-2(.*)$": "../../../packages/library-2/src/$1"
    },
};

export default config;
