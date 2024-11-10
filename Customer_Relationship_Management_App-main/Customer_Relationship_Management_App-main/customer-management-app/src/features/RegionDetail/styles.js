import { StyleSheet } from "react-native-web";

const stylesFn = () => {
    return StyleSheet.create({
        container: {
            borderWidth: 2, 
            backgroundColor: 'white',
            borderColor: 'darkgrey',
            margin: 10, 
            padding: 5, 
            borderRadius: 5, 
        },
        name: {
            fontWeight: 'bold',
            fontSize: 20,
            margin: 5, 
            textTransform: 'capitalize', 
        },
        header: {
            fontWeight: 'bold',
            textTransform: 'capitalize',
        },
        detail:{
            flexDirection: 'row', 
            paddingLeft: 10,
        },
        text:{
            paddingLeft: 10, 
            textTransform: 'capitalize',
        },
        emptyText:{
            textAlign: 'center',
            fontSize: 20,
            margin: 10, 
        },
        addBtn: {
            backgroundColor: 'tomato',
            color: 'white',
        },


    })
}

export default stylesFn;