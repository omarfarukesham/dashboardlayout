import React, { useState, useEffect } from 'react';
import { Text, View, Switch, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import tailwind from 'tailwind-rn';
import { registerForPushNotificationsAsync, sendPushNotification } from './notifications';

const BlogPostNotification = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => console.log(token));
  }, []);

  const handlePress = async () => {
    await sendPushNotification();
  };

  return (
    <View style={tailwind('p-4')}>
      <Text style={tailwind('text-lg font-bold')}>Blog Post Notifications</Text>
      <View style={tailwind('flex-row justify-between items-center mt-4')}>
        <Text style={tailwind('text-gray-500')}>Receive notifications for new blog posts</Text>
        <Switch
          trackColor={{ false: "#ccc", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <TouchableOpacity
        style={tailwind('bg-blue-500 py-2 px-4 rounded mt-4')}
        onPress={handlePress}
        disabled={!isEnabled}
      >
        <Text style={tailwind('text-white font-bold')}>Send test notification</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BlogPostNotification;
