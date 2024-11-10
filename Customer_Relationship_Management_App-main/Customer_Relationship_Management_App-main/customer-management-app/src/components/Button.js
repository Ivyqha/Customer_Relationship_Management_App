import { View, Pressable, Text, StyleSheet } from 'react-native';

const CustomButton = ({ onPress, title, style }) => {
    return (
        <View style={styles.btnContainer}>
            <Pressable onPress={onPress}>
                <Text style={[styles.btn, style]}>{title}</Text>
            </Pressable>
        </View>
        
    );
};

const styles = StyleSheet.create({
    btn:{
        padding: 10,
        borderRadius: 5,
        fontWeight: 'bold'
    },
    btnContainer: {
        padding: 10, 
        marginTop: 5,
        marginBottom: 5,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        textTransform: 'uppercase',
    },

})

export default CustomButton; 