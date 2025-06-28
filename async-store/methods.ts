import AsyncStorage from '@react-native-async-storage/async-storage';

// create or update
const storeData = async (data: string | object | number | boolean, key: string) => {
    try {
        if( typeof(data) == 'object') {
            await AsyncStorage.setItem(key, JSON.stringify(data))
        }else {
            await AsyncStorage.setItem(key, data as string)
        }
    } catch (error) {
        console.error(error)
    }
}

// read
const getData = async (key: string, type: string) => {
    try {
        const data: any = await AsyncStorage.getItem(key);
        if (!data) return null;
        else if (type === 'object') {
            return JSON.parse(data);
        }else {
            return data
        }
    } catch (error) {
        console.error(error)
    }
}

const removeData = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.error(error)
    }
}

const asyncStoreMethods = {
    storeData,
    getData,
    removeData
}

export default asyncStoreMethods;