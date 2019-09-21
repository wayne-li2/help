import React from 'react';

import { 
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

type ScreenProps = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  screenProps?: object;
};

export default function screen(WrappedComponent, navigationOptions?) {
  const Screen = (props: ScreenProps) => {
    const { navigation, screenProps } = props;
    let navigationStateParams = {};
    if (navigation && navigation.state && navigation.state.params) {
      navigationStateParams = navigation.state.params;
    }
    return (
      <WrappedComponent {...props} {...screenProps} {...navigationStateParams} />
    );
  }

  (Screen as any).navigationOptions = navigationOptions;
  return Screen;
}
