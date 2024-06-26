//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image,Input } from '@rneui/themed';

export default function AvatarProfile(props) {
    const {name,followers,following, post} =post
    return (
        <View>
           <Image
           src={}
           width={}
           height={}
           />
           <Input
           placeholder=''
           label=''
           labelStyle={styles.label}
           style={{marginBottom:16}}
           />

        </View>
    )
}


const styles = StyleSheet.create({
    containerStyle:{
      flex:1,
      paddingTop:16,
       flexDirection: 'column'
    },
    avatar: {
      paddingTop:55,
      paddingLeft:55,
      backgroundColor: '#fff',
      flexDirection: 'column',
    },
    text_name: {
      fontWeight: 'bold',
    },
    text:{
      alignItems:'center',
    },
    text_container:{
      paddingTop:16,
      paddingLeft:16
    }
  });

