import React, { useState } from 'react';
import { TouchableOpacity, Text, ViewStyle } from 'react-native';

interface ItemComponentProps {
  label: string;
  width?: number;
  checked: boolean
}

const ItemComponent: React.FC<ItemComponentProps> = ({ label, width = 100, checked }) => {
  const [checkedSingle, setCheckedSingle] = useState(false);

  const handleClick = () => {
    setCheckedSingle(!checkedSingle);
  };

  const containerStyle: ViewStyle = {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    width: width,
    height: 35,
    borderRadius: 20,
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: checkedSingle || checked ? '#000000' : 'transparent',
  };

  const textStyle = {
    color: checkedSingle || checked ? '#ffffff' : '#000000',
  };

  return (
    <TouchableOpacity onPress={handleClick} style={containerStyle}>
      <Text style={textStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ItemComponent;
