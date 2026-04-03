import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import { ViewStyle, StyleProp, } from 'react-native';

type EmagovradinProps = {
  style?: StyleProp<ViewStyle>;
};

export const BeloblukataGardtainaTenha: React.FC<EmagovradinProps> = ({ style }) => (
  <LinearGradient
  
    colors={['#DFF9FF', '#6CD0F7', '#54C0DA']}

    end={{ x: 0.5, y: 1 }}

    start={{ x: 0.5, y: 0 }}

    style={[{
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      position: 'absolute',
    }, style]}
  />
);
