import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { HStack } from "native-base";

const Schedule = () => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [time, setTime] = useState(new Date().toISOString().slice(11, 16));
  const setT = (e, theDate) => {
    const currDate = theDate || date;
    setDate(currDate);
  };

  const handleDate = (e, theDate) => {
    const currDate = theDate.toISOString().slice(0, 10) || date;
    setDate(currDate);
  };

  return (
    <>
      <HStack style={{ alignItems: "center" }}>
        <Text>Schedule</Text>
        <DateTimePicker
          mode="time"
          display="default"
          style={{ flex: 1, backgroundColor: "#fff" }}
          value={new Date()}
        />
      </HStack>
      <HStack style={{ alignItems: "center" }}>
        <Text>Schedule</Text>
        <DateTimePicker
          mode="date"
          display="default"
          style={{ flex: 1, backgroundColor: "#fff" }}
          value={new Date("2022-03-29T06:13:37.174Z")}
          onChange={handleDate}
          minimumDate={Date.now()}
        />
      </HStack>
    </>
  );
};

export default Schedule;

const styles = StyleSheet.create({});

// import React, { Component } from "react";
// import { StyleSheet, Text, View } from "react-native";
// import CalendarPicker from "react-native-calendar-picker";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedStartDate: null,
//     };
//     this.onDateChange = this.onDateChange.bind(this);
//   }

//   onDateChange(date) {
//     this.setState({
//       selectedStartDate: date,
//     });
//   }
//   render() {
//     const { selectedStartDate } = this.state;
//     const startDate = selectedStartDate ? selectedStartDate.toString() : "";
//     return (
//       <View style={styles.container}>
//         <CalendarPicker
//           onDateChange={this.onDateChange}
//           selectedDayColor={"#57A0D7"}
//           selectedDayTextColor={"#fff"}
//           scaleFactor={375}
//         />
//         <View>
//           <Text>SELECTED DATE:{startDate}</Text>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FFFFFF",
//     marginTop: 0,
//   },
// });
