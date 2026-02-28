import { Stack } from "expo-router";
import { ScrollView, View, StyleSheet, Image } from "react-native";
import {
  Card,
  Avatar,
  Text,
  Searchbar,
  Button,
} from "react-native-paper";
import { useState } from "react";
import userData from "./data.json";
import styles from "./AppStyles";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = userData.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Stack.Screen options={{ title: "User Directory" }} />

      <View style={styles.screen}>
        
        {/* Header */}
        <Image 
        source={require("../assets/cookieestagram.png")}
        style={styles.logo}
        resizeMode="contain"
        />
        <Text variant="bodyMedium" style={styles.subtitle}>
          Find and connect with people
        </Text>

        {/* Search */}
        <Searchbar
          placeholder="Search user..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={styles.search}
        />

        {/* User List */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {filteredUsers.map((user, index) => (
            <Card key={index} style={styles.card} mode="elevated">
              <Card.Content style={styles.cardContent}>
                <Avatar.Image
                  size={60}
                  source={{ uri: user.photo_url }}
                />
                <View style={styles.userInfo}>
                  <Text variant="titleMedium" style={styles.name}>
                    {user.name}
                  </Text>
                  <Text variant="bodySmall" style={styles.email}>
                    {user.email}
                  </Text>
                  <Button
                    mode="contained"
                    compact
                    style={styles.button}
                  >
                    <Text style={styles.buttontext}>View Profile</Text>
                  </Button>
                </View>
              </Card.Content>
            </Card>
          ))}
        </ScrollView>
      </View>
    </>
  );
}

