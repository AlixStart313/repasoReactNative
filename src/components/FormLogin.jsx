//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image,Input } from '@rneui/themed';

export default function FormLogin() {
    const {name,followers,following, post} =post
    return (
        <View>
           <Image
           src={"https://cdn-icons-png.flaticon.com/128/3135/3135823.png"}
           />
           <Input
           placeholder=''
           label=''
           labelStyle={styles.label}
           style={{marginBottom:16}}
           />

<View style={styles.containerStyle}>
      <View style={styles.avatar}>
        <Avatar
          size={82}
          rounded
          title="LG"
          containerStyle={{ backgroundColor: "#9700b9" }}
        />
       
      </View>
      <View style={styles.text_container}> 
      <Text style={styles.text_name}>Llamame.Ali.Bb</Text>
      <Text style={styles.text}>Estudiante de la UTEZ</Text>
      <Text style={styles.text}>Gamer ocasional</Text>
      <Text style={styles.text}>Intento de bailarin</Text>
      </View>
    </View>
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

