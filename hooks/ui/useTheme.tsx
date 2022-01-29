import {useState, useEffect} from 'react';
import {Appearance} from 'react-native';
import {Theme} from '@react-navigation/native';
import {DarkTheme, LightTheme} from '../../styles';

const useTheme = (): Theme => {
  const [theme, setTheme] = useState<Theme>({...DarkTheme, dark: true});
  const [mode, setMode] = useState<string>(
    Appearance.getColorScheme() || 'dark',
  );

  useEffect(() => {
    setTheme(
      mode === 'dark'
        ? {...DarkTheme, dark: true}
        : {...LightTheme, dark: false},
    );
  }, [mode]);

  useEffect(() => {
    const updateMode = () => {
      const currentMode = Appearance.getColorScheme();
      setMode(currentMode === 'dark' ? 'dark' : 'light');
    };

    Appearance.addChangeListener(updateMode);
  }, []);

  return theme;
};

export default useTheme;
