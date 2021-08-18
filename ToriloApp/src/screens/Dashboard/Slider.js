import { Box, HStack, VStack } from 'native-base';
import * as React from 'react';
import {
  Text,
  Image,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { View } from 'native-base'
import Carousel from 'react-native-snap-carousel';

export default class Slider extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    }
  }

  _renderItem({ item, index }, navigation) {
    return (
      <TouchableOpacity onPress={() => navigation.push('Job', { data: item })}>
        <View px={5} py={5} style={styles.container} >

          <VStack>
            <HStack my={2}>
              <Box width={"40%"}>
                <Image height={20} width={20} style={styles.slideImage} source={{ uri: item.company_logo_url }} />
              </Box>
              <Text numberOfLines={1} style={styles.salary}>{item.salary}  </Text>

            </HStack>
            <VStack mb={5}>
              <Text style={styles.slideTitle}>{item.title}</Text>
              <Text style={{ fontSize: 10, fontFamily: 'Ubuntu-Regular' }} numberOfLines={1}>{item.company_name}  {item.candidate_required_location.length > 0 ? <Text>&bull;</Text> : ""} {item.candidate_required_location}</Text>
            </VStack>

            <HStack>
              <Text style={styles.jobType}>{item.job_type}</Text>
            </HStack>

          </VStack>

        </View>
      </TouchableOpacity>


    )
  }

  render() {
    return (
      <View style={{ flex: 1, paddingVertical: 20, flexDirection: 'row', justifyContent: 'center', }}>
        {
          this.props.data.length > 0 ?
            <Carousel
              layout={"default"}
              ref={ref => this.carousel = ref}
              data={this.props.data}
              sliderWidth={250}
              itemWidth={270}
              renderItem={({ item, index }) => this._renderItem({ item, index }, this.props.navigation)}
              onSnapToItem={index => this.setState({ activeIndex: index })} />
            :

            <ActivityIndicator size="large" color="black" />
        }
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    minHeight: 200,

    marginLeft: 5,
    marginRight: 5
  },
  salary: { fontSize: 10, width: "60%", lineHeight: 40, textAlign: 'right', fontFamily: 'Ubuntu-Regular' },
  slideImage: { height: 50, borderWidth: 0.2, borderColor: "grey", width: 50, borderRadius: 10 },
  slideTitle: { fontSize: 13, fontFamily: 'Ubuntu-Regular', marginBottom: 5 },
  jobType: { fontSize: 10, paddingHorizontal: 15, paddingVertical: 5, color: 'black', backgroundColor: '#D3D3D3', borderRadius: 5, fontFamily: 'Ubuntu-Regular' }
})