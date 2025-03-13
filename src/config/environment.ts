import fs from 'fs';
import path from 'path';

import dotenv from 'dotenv';

// Define the available environments
export type Environment = 'development' | 'staging' | 'production';

// Define the configuration interface
export interface Config {
  server: {
    port: number;
    host: string;
    nodeEnv: Environment;
  };
  database: {
    url: string;
  };
  logging: {
    level: string;
  };
  api: {
    prefix: string;
  };
}

// Load environment variables based on NODE_ENV
export function loadEnv(): void {
  const nodeEnv = process.env.NODE_ENV || 'development';
  const envPath = path.resolve(process.cwd(), `.env.${nodeEnv}`);
  
  // Check if environment-specific .env file exists
  if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
    console.log(`Loaded environment configuration from ${envPath}`);
  } else {
    // Fallback to default .env
    dotenv.config();
    console.log('Loaded default environment configuration');
  }
}

// Get the configuration based on loaded environment variables
export function getConfig(): Config {
  return {
    server: {
      port: parseInt(process.env.PORT || '3000', 10),
      host: process.env.HOST || 'localhost',
      nodeEnv: (process.env.NODE_ENV as Environment) || 'development',
    },
    database: {
      url: process.env.DATABASE_URL || 'postgresql://postgres:password@localhost:5432/expense_tracker_dev',
    },
    logging: {
      level: process.env.LOG_LEVEL || 'debug',
    },
    api: {
      prefix: process.env.API_PREFIX || '/api',
    },
  };
}

// Initialize configuration
loadEnv();
const config = getConfig();

export default config; 