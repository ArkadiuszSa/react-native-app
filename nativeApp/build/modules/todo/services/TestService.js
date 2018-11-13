import { StorageService } from "../../../common/services/StorageService";
export class TestService {
    constructor() { }
    test() {
        const store = new StorageService();
        console.log(store);
        console.log('storage w test');
        console.log();
        console.log('storage w test');
        return 'work';
    }
}
//# sourceMappingURL=TestService.js.map