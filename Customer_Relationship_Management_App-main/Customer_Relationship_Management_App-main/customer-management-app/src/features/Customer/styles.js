import { StyleSheet } from "react-native-web";

const stylesFn = () => {
    const title = {
        fontWeight: 'bold',
        fontSize: 15,
    };

    return StyleSheet.create({
        container: {
            backgroundColor: 'white',
            borderWidth: 2, 
            borderColor: 'darkgrey',
            margin: 10, 
            padding: 10, 
            borderRadius: 10,
        },
        detail: {
            flexDirection: 'row',
            margin: 5,
        },
        header: {
            ...title,
        },
        btnContainer: {
            padding: 10, 
            margin: 10, 
            justifyContent: 'space-around',
            alignItems: 'center',
            textTransform: 'uppercase',
            flexDirection: 'row',
        },
        btn: {
            color: 'white',
            backgroundColor: 'tomato',
        },
        delete: {
            ...title,
            textAlign: 'center',
            margin: 10,
        }
    });
}

export default stylesFn;