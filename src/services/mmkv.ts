import {EXPO_APP_OWNERSHIP} from '@/constants/storage';
import Constants from 'expo-constants';
import {MMKV} from 'react-native-mmkv';
import {MMKVInterface} from 'react-native-mmkv/lib/typescript/src/Types';

const isRunningInExpoGo = Constants.appOwnership === EXPO_APP_OWNERSHIP;

class DummyMMKV implements MMKVInterface {
  size = 0;
  isReadOnly = false;
  private map: Record<string, string | number | boolean | ArrayBuffer> = {};
  addOnValueChangedListener(_onValueChanged: (key: string) => void) {
    return {remove: () => {}};
  }
  contains(key: string): boolean {
    return key in this.map;
  }
  delete(key: string) {
    delete this.map[key];
  }
  getAllKeys(): string[] {
    return Object.keys(this.map);
  }
  clearAll() {
    this.map = {};
  }
  recrypt(key: string | undefined) {}
  trim() {}
  set(key: string, value: string | number | boolean | ArrayBuffer) {
    this.map[key] = value;
  }
  getString(key: string) {
    return this.map[key] as string;
  }
  getNumber(key: string) {
    return this.map[key] as number;
  }
  getBoolean(key: string) {
    return this.map[key] as boolean;
  }

  getBuffer(key: string): ArrayBuffer | undefined {
    return this.map[key] as ArrayBuffer;
  }
}

export const storage = isRunningInExpoGo ? new DummyMMKV() : new MMKV();
