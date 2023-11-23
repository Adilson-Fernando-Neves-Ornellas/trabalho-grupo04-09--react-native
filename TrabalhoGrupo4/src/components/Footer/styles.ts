import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  viewContainer: {
    ...Platform.select({
      android:{
        width: "100%",
        
      },
      ios:{
        width: "100%",
        
      },
      default:{
        width: "100%",
        
      }
    })
  },
  img: {
    ...Platform.select({
      android:{
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        height: 100,
        width: "100%",
      },
      ios:{
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        height: 100,
        width: "100%", 
      },
      default:{
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        height: 100,
        width: "100%",
      }
    })
  },
});
