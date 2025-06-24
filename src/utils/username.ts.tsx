import os from 'os';

export function getWindowsUsername(): string {
  try {
    return os.userInfo().username;
  } catch (error) {
    console.error('Error retrieving username:', error);
    return 'Unknown';
  }
}