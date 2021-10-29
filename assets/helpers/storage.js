// import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Storage { 
    constructor() {
        this.storage = AsyncStorage;
    }
    async setItem(key, value) {
        try {
            await this.storage.setItem(key, value);
        } catch (error) {
            console.log(error);
        }
    }
    async getItem(key) {
        return await this.storage.getItem(key);
    }
    async removeItem(key) {
        await this.storage.removeItem(key);
    }
}

export default Storage;