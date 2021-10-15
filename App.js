import React,{ useEffect } from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import Carshes from 'appcenter-crashes';
import Analytics from 'appcenter-analytics'
import Auth from './components/Auth';

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
      <Auth/>
    </SafeAreaView>
  );
}
