import { AsyncStorage } from 'react-native';

type StorageItem = null | string;

export class StorageService {
  public async getItem<I>(
    field: string,
    parse: boolean = false
  ): Promise<I | StorageItem> {
    const item = await AsyncStorage.getItem(field);

    if (item && parse) {
      return JSON.parse(item);
    }

    return item;
  }

  public removeItem(field: string): void {
    AsyncStorage.removeItem(field);
  }

  public setItem = (
    field: string,
    data: object | string,
    parse: boolean = false
  ) => {
    console.log('odpalam zapis');
    AsyncStorage.setItem(
      field,
      parse ? JSON.stringify(data) : (data as string)
    );
  }

}
