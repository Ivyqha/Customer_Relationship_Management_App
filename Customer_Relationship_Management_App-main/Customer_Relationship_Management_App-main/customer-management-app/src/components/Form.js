//base skeleton of the form 
import { Text, View, Pressable, TextInput, StyleSheet} from 'react-native';
import { useNavigation, useRoute} from '@react-navigation/native'
import { useUpdateFields , useCreateCustomer } from '../features/Form/hooks';
import React, { useState, useEffect } from 'react'; 
import { PENDING, INPROGRESS, REQUESTING, SUCCESS, ERROR } from '../utilities/helpers'

// import stylesFn from './styles'

const Form = ({handleSubmit, status, editCustomer}) => {
    const styles = stylesFn();
    const {navigate} = useNavigation();
    const { fields, setFormField} = useUpdateFields(editCustomer)
    const [selectedRegion, setSelectedRegion] = useState(fields.region); 
    const [selectedActive, setSelectedActive] = useState(fields.active);
    
    useEffect(() => {
        // Update selectedActive and selectedRegion when fields change, e.g., when editCustomer changes
        setSelectedActive(fields.active);
        setSelectedRegion(fields.region);
    }, [fields]);

    const {
        first_name, 
        last_name,
    } = fields; 

    const handleSelectRegion = (region) => {
        setFormField('region', region)
        setSelectedRegion(region)
        console.log('Region selected:', region)
    };

    const handleSelectActive = (active) => {
        setFormField('active', active)
        setSelectedActive(active)
        console.log('Active selected:', active)
    };

    // Function to dynamically change the button style based on selection
    const regionSelect = (region) => {
        return region === selectedRegion ? styles.selectedChoiceBtn : styles.choiceBtn;
    };

    const activeSelect = (active) => {
        return active === selectedActive ? styles.selectedChoiceBtn : styles.choiceBtn;
    };
    
    const onSubmit = () => {
        handleSubmit();
        setSelectedRegion('');
        setSelectedActive('');
        navigate('Home');
    };

    return (
        <View>
            <TextInput 
                key={'first_name'}
                placeholder={first_name || 'First Name'}
                value={first_name || ''}
                style={styles.textInput}
                onChangeText={v => setFormField('first_name', v)}
            />
            <TextInput
                key={'last_name'}
                placeholder={last_name || 'Last Name'}
                value={last_name || ''}
                style={styles.textInput}
                onChangeText={v => setFormField('last_name', v)}
            />
            <View>
                <Text style={styles.text}>Active/In-active</Text>
                {['active', 'in-active'].map((active) => {
                    return (
                        <Pressable
                            key={active}
                            style={activeSelect(active)}
                            onPress={() => handleSelectActive(active)}
                        >
                            <Text>{active}</Text>
                        </Pressable>
                    );
                })}
            </View>

            <View>
                <Text style={styles.text}>Region:</Text>
                <View>
                    {['South West', 'North West', 'South East', 'North East', 'Mid West'].map((region) => (
                        <Pressable
                            key={region}
                            style={regionSelect(region)}
                            onPress={() => handleSelectRegion(region)}
                        >
                            <Text>{region}</Text>
                        </Pressable>
                    ))}
                </View>
            </View>

            <Pressable 
                onPress={onSubmit} 
                style={styles.button}
                disabled={status !== PENDING && status !== INPROGRESS}
            >
                <Text>Submit</Text>
            </Pressable>

        </View> 
    );
};

const stylesFn = () => {
    const buttonFormat ={ 
        alignSelf: 'center',
        alignItems: 'center',
        padding: 10,
    }

    const optionBtn = {
        borderRadius: 10, 
        marginTop: 10,
        width: '80%',
        ...buttonFormat,
    }

    return StyleSheet.create({
        textInput: {
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 4,
            padding: 15,
            marginTop: 10, 
            width: '90%',
            alignSelf: 'center'
        },
        button: {
            backgroundColor: 'orange',
            borderRadius: 4,
            width: '80%',
            marginTop: 40,
            marginBottom: 20,  
            ...buttonFormat, 
        },
        text: {
            marginTop: 10, 
            marginLeft: 20, 
            fontWeight: 'bold',
        },
        choiceBtn: {
            backgroundColor: 'lightgrey', 
            ...optionBtn
        }, 
        selectedChoiceBtn : {
            backgroundColor: 'tomato', 
            ...optionBtn
        }
    })
}


export default Form;