import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.victormugo.rickandmorty',
  appName: 'rickandmorty',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
