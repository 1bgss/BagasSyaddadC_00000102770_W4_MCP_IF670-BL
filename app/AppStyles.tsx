import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
screen: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: "#604630",
    },
title: {
    fontWeight: "bold",
    color: "white",
    },
subtitle: {
    marginBottom: 15,
    color: "white",
    alignSelf: "center",
    fontStyle: "italic",
    },
search: {
    marginBottom: 15,
    borderRadius: 12,
    backgroundColor: "#36210E",
    },
card: {
    marginBottom: 15,
    borderRadius: 15,
    backgroundColor: "#FFFDD0",
    },
cardContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    },
userInfo: {
    flex: 1,
    },
name: {
    fontWeight: "bold",
    color: "black",
    },
email: {
    color: "black",
    marginBottom: 6,
    fontWeight: "bold",
    },
button: {
    alignSelf: "flex-start",
    marginTop: 5,
    borderRadius: 8,
    backgroundColor: "#36210E",
    color: "white",
    },
buttontext: {
    color: "white",
    fontWeight: "bold",
},
logo: {
    width: 500,
    height: 60,
    alignSelf: "center",
    marginBottom: 10,
},

});

export default styles;