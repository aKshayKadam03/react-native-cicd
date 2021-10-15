import React,{ useEffect } from 'react';

import {SafeAreaView, Text, Button} from 'react-native';

import Carshes from 'appcenter-crashes';
import Analytics from 'appcenter-analytics'

export default function App() {

  async function checkPreviousSession(){
    const hasCrashed = await Carshes.hasCrashedInLastSession()
    if(hasCrashed){
      alert("Sorry about the crash, we are working on a solution")
    }
  }

  useEffect(() => {
    checkPreviousSession()
  }, [])

  return (
    <SafeAreaView>
      <Text style={{textAlign: 'center'}}>React CICD Setup</Text>
      <Button
        title="Crash this shit"
        onPress={() => Analytics.trackEvent("My custom event",{ internetSpeed: '20mbps'})}
      />
    </SafeAreaView>
  );
}
