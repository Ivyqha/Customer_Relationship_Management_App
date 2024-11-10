import AsyncStorage from "@react-native-async-storage/async-storage";

export const  set = async (key,value) => {
    console.log('set',key,value)
    const serializedValue = JSON.stringify(value)
    return await AsyncStorage.setItem(key,serializedValue)
}

export const get = async (key) => {
    console.log('get',key)
    try {
        const value = await AsyncStorage.getItem(key)
        return JSON.parse(value)
    } catch (error) {
        return {error: 'failed to save to asyncStorage'}
    }
}

export const remove = async (key) => {
    console.log('remove',key)
    return await AsyncStorage.removeItem(key)
}

export const clear = async () => {
    console.log('clear')
    return await AsyncStorage.clear()
}

//javascript objects will be stored in string format