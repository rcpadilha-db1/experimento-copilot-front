export interface ActionData {
    symbol: string;
    name: string;
    type: string;
}
  
class LocalStorageService {
  setAction(key: string, action: ActionData): void {
    try {
      const serializedValue = JSON.stringify(action);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error(`Error setting action in localStorage: ${error}`);
    }
  }

  getAction(key: string): ActionData | null {
    try {
      const serializedValue = localStorage.getItem(key);
      return serializedValue ? (JSON.parse(serializedValue) as ActionData) : null;
    } catch (error) {
      console.error(`Error getting action from localStorage: ${error}`);
      return null;
    }
  }

  removeAction(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing action from localStorage: ${error}`);
    }
  }

  clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error(`Error clearing localStorage: ${error}`);
    }
  }
}

export default new LocalStorageService();
