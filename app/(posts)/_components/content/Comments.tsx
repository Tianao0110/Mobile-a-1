import Avatar from "@/app/components/Avatar";
import React from "react";
import { StyleSheet, Text } from "react-native";

const Comments = () => {
  return (
    <view style={styles.container}>
      <view style={{flexDirection:"row"}}>
        <view style={{flexDirection:"row"}}>
          <Avatar
          uri ="https://i.pravatar.cc/150?img=3"
          width = {20}
          style = {{zIndex:3}}>
          </Avatar>
          <Avatar
          uri = "https://i.pravatar.cc/150?img=4"
          width = {20}
          style = {{zIndex: 1, marginLeft: -4}}>
          </Avatar>
          <Avatar 
          uri = "https://i.pravatar.cc/150?img=5"
          width={20}
          style= {{zIndex:1, marginLeft: -4, marginRight:10}}>
          </Avatar>
        </view>
        <Text style = {styles.commonFont}>
          <Text>Liked by</Text>
          <Text style = {{fontWeight: 700}}>paisley.print.48</Text>
          <Text>and</Text>
          <Text style = {{fontWeight: 700}}>7 others</Text>
        </Text>
      </view>
      <Text>

        <Text style = {[styles.commonFont, { fontWeight: 700}]}>frenchie_fry39{" "}</Text>

        <Text style = {styles.commonFont}>Fresh shot on a sunny! ☀</Text>

        <Text style = {{color:"#8d8d8d"}}>View all 12 comments</Text>
      </Text>

      <Text>
        <Text style = {{fontWeight: 700}}>lil_wyatt838</Text>
        <Text>Awesome tones</Text>
      </Text>

      <Text>
        <Text style = {{fontWeight: 700}}>pia.in.a.pod</Text>
        <Text>Gorg. Love it! ❤</Text>
      </Text>

      <Text style = {{color: "#8d8d8d"}}>1 day ago        
      </Text>
    </view>
  );
};

export default Comments;

const styles = StyleSheet.create({
  container: {
    paddingLeft:10,
    paddingRight:10,
    gap:8,
  },

  commonFont: {
    fontSize:16,
  },
});
