var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { AsyncStorage } from 'react-native';
export class StorageService {
    constructor() {
        this.setItem = (field, data, parse = false) => AsyncStorage.setItem(field, parse ? JSON.stringify(data) : data);
    }
    getItem(field, parse = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = yield AsyncStorage.getItem(field);
            if (item && parse) {
                return JSON.parse(item);
            }
            return item;
        });
    }
    removeItem(field) {
        AsyncStorage.removeItem(field);
    }
}
//# sourceMappingURL=StorageService.js.map