import React, {useState} from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [petName, setPetName] = useState('');
  const [motherName, setMotherName] = useState('');

function confirmPasswords(props) {
  const { nativeEvent: { text }} = props
  if(text !== password){
    alert('Passwords do not match!')
  }
}

  return(
  <ScrollView>
  <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#ecf0f1', marginTop: 30 }}>
    <InputField label='Email' placeholder='Your email' value={email} onChangeText={setEmail} />
    <InputField label='Password' placeholder='Choose a password' value={password} onChangeText={setPassword} secureTextEntry={true} />
    <InputField label='Confirm Password' placeholder='Confirm your password' value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry={true} onSubmitEditing={confirmPasswords} />
    <InputField label='Your Name' placeholder='Your name' value={name} onChangeText={setName} />
    <InputField label='Date Of Birth' placeholder='Your date of birth' value={dob} onChangeText={setDob} />
    <InputField label='Your First Pet&apos;s Name' placeholder='Your first pet&apos;s name' value={petName} onChangeText={setPetName} />
    <InputField label='Your Mother&apos;s Maiden Name' placeholder='Your mother&apos;s maiden name' value={motherName} onChangeText={setMotherName} />
  </View>
  </ScrollView>

)
};

function InputField(props) {
  const {label, placeholder, value, onChangeText, secureTextEntry, onSubmitEditing} = props;
  return(

  <View style={{ padding: 16}}>
  <Text style={{ padding: 8, fontSize: 18}}>{label}</Text>
  <TextInput style={{ padding: 8, fontSize: 18}}placeholder={placeholder} value={value} onChangeText={onChangeText} secureTextEntry={secureTextEntry} onSubmitEditing={onSubmitEditing}/>
  </View>
  );
}


export default App;
