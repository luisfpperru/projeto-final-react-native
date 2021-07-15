import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';

export default function App (){
  const modalRef = useRef(null);

  const onOpen = () => {
    const modal = modalRef.current;

    if (modal) {
      modal.open();
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={onOpen}>
        <Text>Open the modal</Text>
      </TouchableOpacity>

      <Modalize ref={modalRef}>...your content</Modalize>
    </View>
  );
};