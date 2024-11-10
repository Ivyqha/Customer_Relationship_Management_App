import React, { useEffect, useState } from 'react'
import { Keyboard, TextInput, View, Button, Text } from 'react-native'
// Expo Constants provides system information https://docs.expo.dev/versions/latest/sdk/constants/
import Constants from 'expo-constants'
import CustomButton from '../../components/Button'
import * as Notifications from 'expo-notifications'

const onSubmit = (seconds) => {
  Keyboard.dismiss()
  const schedulingOptions = {
    content: {
      title: `Aim to get one more customer today!`,
      body: 'Open the app to access the form',
      sound: true,
      priority: Notifications.AndroidNotificationPriority.HIGH,
      color: 'blue'
    },
    trigger: {
      seconds: seconds,
    },
  }
  // Notifications show only when app is not active.
  // (ie. another app being used or device's screen is locked)
  Notifications.scheduleNotificationAsync(
    schedulingOptions,
  )
}

const handleNotification = () => {
  console.warn('Your notification ran, but won`t show up in the app!')
}

const askNotification = async () => {
  // We need to ask for Notification permissions for ios devices
  const { status } = await Notifications.requestPermissionsAsync()
  if (Constants.isDevice && status === 'granted') {
    console.log('Notification permissions granted.')
  }
}

const Notification= () => {
    useEffect(() => {
    askNotification()

    const listener = Notifications.addNotificationReceivedListener(handleNotification)
    return () => listener.remove()
    }, [])

    return (
        <View style={{width: '70%', alignSelf: 'center', marginBottom: '10px'}}>
          <CustomButton onPress={() => onSubmit(10)} title='Schedule Notification' style={{backgroundColor: 'orange', color: 'white'}}/>
        </View>
    )
}

export default Notification; 