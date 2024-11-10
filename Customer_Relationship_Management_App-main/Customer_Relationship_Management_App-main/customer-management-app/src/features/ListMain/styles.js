import { StyleSheet} from 'react-native';

const stylesFn = () => {
    return StyleSheet.create({
        choiceBtn: {
            backgroundColor: 'lightgrey',
            marginTop: 5,
            marginBottom: 5,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            textTransform: 'uppercase',
        },
        btnNew: {
            color: 'white',
            backgroundColor: 'tomato',
        },
        region:{
            color: 'black',
            backgroundColor: 'lightgrey',
            width: 200,
            textAlign:'center'
        },
        container: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold',
            margin: 10
        }
    });
};

export default stylesFn;