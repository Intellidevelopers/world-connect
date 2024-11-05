import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import Swiper from 'react-native-deck-swiper';
import ScrollUsers from '@/components/ScrollUsers';

const Index = () => {
  const [location, setLocation] = useState<string | null>(null);
  const [users, setUsers] = useState([
    {
      name: 'Alexa',
      age: 22,
      occupation: 'UI/UX Designer',
      image: require('../../assets/images/pic1.png'), // Replace with the correct path
    },
    {
      name: 'Jane',
      age: 24,
      occupation: 'Software Engineer',
      image: require('../../assets/images/pic2.png'),
    },
    {
      name: 'Josiah',
      age: 22,
      occupation: 'Developer',
      image: require('../../assets/images/pic1.png'), // Replace with the correct path
    },
    {
      name: 'Olamide',
      age: 24,
      occupation: 'Backend Developer',
      image: require('../../assets/images/pic2.png'),
    },
    // Add more users as needed
  ]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setLocation('Permission to access location was denied');
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(`Lat: ${loc.coords.latitude}, Lon: ${loc.coords.longitude}`);
    })();
  }, []);

  const renderCard = (user: any) => {
    return (
      <View style={styles.profileCard}>
        <Image source={user.image} style={styles.profileImage} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{user.name}, {user.age}</Text>
          <Text style={styles.userOccupation}>{user.occupation}</Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Location Section */}
      <View style={styles.locationContainer}>
        <Ionicons name="location" type="material" color="#E03368" size={24} />
        <View>
          <Text style={styles.locationText}>Location</Text>
          <Text style={styles.subText}>{location}</Text>
        </View>
        <Ionicons name="notifications" type="material" color="#000" size={24} style={styles.notificationIcon} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          <MaterialIcons name="search" type="material" color="#ccc" size={26} />
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <MaterialIcons name="display-settings" type="material" color="#fff" size={20} />
        </TouchableOpacity>
      </View>
      

      {/* Swipeable User Cards */}
      <View style={{ flex: 1, left: -20 }}>
        <Swiper
          cards={users}
          renderCard={renderCard}
          onSwipedLeft={() => console.log('Swiped Left')}
          onSwipedRight={() => console.log('Swiped Right')}
          cardIndex={0}
          backgroundColor={'#fff'}
          stackSize={3}
          verticalSwipe={false}
          containerStyle={{ flex: 1, }} // Ensure swiper adjusts its size to available space
        />
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.cancelButton}>
          <Ionicons name="close" type="material" color="#fff" size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.loveButton}>
          <Ionicons name="heart" type="material" color="#fff" size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.likeButton}>
          <Ionicons name="star" type="material" color="#fff" size={20} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingTop: 40,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
    gap: 10,
    top: 30
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  subText: {
    fontSize: 14,
    color: '#666',
  },
  notificationIcon: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  searchContainer: {
    flexDirection: 'row',
    borderRadius: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginBottom: 5,
    justifyContent: "space-between",
    backgroundColor: "#f5f5f5",
  },
  searchInput: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  filterButton: {
    backgroundColor: '#E03368',
    padding: 10,
    borderRadius: 10,
    marginLeft: 10,
  },
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 30,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center', // Ensures the card contents are centered
    padding: 15,
    marginBottom: 20,
    alignSelf: 'center',
    width: 300, // Specify width to keep the card centered
    height: 500, // Match the image height
    position: 'relative', // For absolute positioning of user info
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
  },
  userInfo: {
    position: 'absolute', // Positioning it on top of the image
    bottom: 40, // A little space from the bottom of the image
    left: 20,
    right: 20, // Ensures it spans across the card width
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for readability
    padding: 10,
    borderRadius: 20,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'left',
  },
  userOccupation: {
    fontSize: 16,
    color: '#f5f5f5',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: "center",
    gap: 25,
    paddingVertical: 25,
  },
  cancelButton: {
    backgroundColor: '#ff6666',
    padding: 15,
    borderRadius: 30,
  },
  loveButton: {
    backgroundColor: '#E03368',
    padding: 15,
    borderRadius: 30,
  },
  likeButton: {
    backgroundColor: '#ffcc66',
    padding: 15,
    borderRadius: 30,
  },
});

export default Index;
