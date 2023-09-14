import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  
  return (
    <IconButton
      variant="ghost"
      color="current"
      pos={'fixed'}
      zIndex={'overlay'}
      top={'4'}     // 1 unit = 4px // 4 unit = 16px
      right={'4'}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};

export default ColorModeSwitcher;