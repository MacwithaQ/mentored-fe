import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, FormControl, HStack, Modal, Stack } from "native-base";
import Btn from "../../components/Btn";
import Input from "../../components/Input";
import studentStore from "../../stores/studentStore";

const BalanceModal = ({ isOpenModal, setIsOpenModal, balance, id }) => {
  const [newBalance, setNewBalance] = useState(0);
  const handleBalance = async () => {
    await studentStore.addStudentBalance(newBalance, balance, id);
    setIsOpenModal(false);
  };

  return (
    <View>
      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} mt={12}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Add Balance</Modal.Header>
          <Modal.Body>
            <FormControl>
              <HStack style={{ alignItems: "center" }}>
                <Input
                  placeholder={"Enter the amount in KD"}
                  style={{ width: "100%" }}
                  defaultValue={0}
                  onChangeText={(value) => setNewBalance(value)}
                />
              </HStack>
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setIsOpenModal(false);
                }}
              >
                Cancel
              </Button>
              <Btn onPress={handleBalance}>Add</Btn>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </View>
  );
};

export default BalanceModal;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
    textAlign: "center",
    marginHorizontal: 5,
    borderRadius: 30,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});

/* <Pressable style={styles.card}>
  <HStack>
    <Text
      style={{
        fontSize: 15,
        marginHorizontal: 5,
        color: "black",
        textTransform: "capitalize",
      }}
    >
      5KD
    </Text>
  </HStack>
</Pressable>
<Pressable style={styles.card}>
  <HStack>
    <Text
      style={{
        fontSize: 15,
        marginHorizontal: 5,
        color: "black",
        textTransform: "capitalize",
      }}
    >
      10KD
    </Text>
  </HStack>
</Pressable>
<Pressable style={styles.card}>
  <HStack>
    <Text
      style={{
        fontSize: 15,
        marginHorizontal: 5,
        color: "black",
        textTransform: "capitalize",
      }}
    >
      20KD
    </Text>
  </HStack>
</Pressable> */
