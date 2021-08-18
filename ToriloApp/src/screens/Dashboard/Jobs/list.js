import { Box, HStack, Icon, VStack } from 'native-base';
import * as React from 'react';
import {
  Text,
  SafeAreaView,
  Image,
  
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { View } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class List extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,

    }
  }

  _renderItem(item, index) {
    return (
      <TouchableOpacity key={index} onPress={() => this.props.navigation.push('Job', { data: item })} >
        <View px={3} py={5} style={{ backgroundColor: 'white', width: '100%', height: 90, borderRadius: 10 }}>
          <HStack>
            <Image source={{ uri: item.company_logo_url }} style={{ marginRight: 15, height: 50, width: '25%' }} height={50} width={50} />
            <Box width={"70%"} px={2}>
              <Text numberOfLines={1} style={{ fontFamily: 'Ubuntu-Bold', fontSize: 13, marginBottom: 10 }} >{item.title} </Text>
              <Text style={{ fontFamily: 'Ubuntu-Regular', fontSize: 10, color: 'grey' }}>{item.company_name} &bull; {item.job_type}</Text>
            </Box>

            <Box width={"5%"}>
              <Ionicons size={20} style={{ lineHeight: 50 }} name="ios-ellipsis-vertical-sharp"></Ionicons>
            </Box>
          </HStack>
        </View>
      </TouchableOpacity>


    )
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, paddingVertical: 20, }}>
        {
          this.props.data.length > 0 ?

            <VStack space={3}>
              {
                this.props.data.map((v, i, a) => { console.log(a.length); return this._renderItem(v, i) })
              }
              <View backgroundColor="gray.200" borderRadius={5} py={3}>
                <Text style={{ textAlign: 'center', fontFamily: 'Ubuntu-Regular', fontSize: 13 }}>Load More</Text>
              </View>
            </VStack>
            :
            <ActivityIndicator size="large" color="black" />
          }
      </SafeAreaView>
    );
  }
}