import KqweopZmxnvb from './FshartyFiheSurocTunh/IdevScensPunters/HupowrtoKorntelnrReild';
import { GestureHandlerRootView as QwopZmxncbvTyu } from 'react-native-gesture-handler';
import OoufdsNWofdYSak from './FshartyFiheSurocTunh/IdevScensPunters/CisheNughiheLodaiver';



const VbnqweZmxnvb = LkjqweZmxnvb();
import { NavigationContainer as QazplmwsxOijn } from '@react-navigation/native';
import { createNativeStackNavigator as LkjqweZmxnvb } from '@react-navigation/native-stack';

import { SafeAreaProvider as XzqplmWoqpZx } from 'react-native-safe-area-context';

import QwoplkjZmxncbvQaz from './FshartyFiheSurocTunh/IdevScensPunters/FehderinOngberNuieth';

const PqowieuZmxnvb = () => {
    const XcvbnmQazwsx = VbnqweZmxnvb.Screen;
    const MnbvcxzPoiuyt = VbnqweZmxnvb.Navigator;

    const QazwsxedcRfv = {
        lkj: { headerShown: false, animation: 'fade' },
        mnb: { headerShown: false, animation: 'fade' },
    };

    return (
        <QazplmwsxOijn>
            <MnbvcxzPoiuyt initialRouteName="CisheNughiheLodaiver" screenOptions={{
                contentStyle: { backgroundColor: '#6CD0F7' },
                animationEnabled: true,
            }}>
                <XcvbnmQazwsx
                    name="HupowrtoKorntelnrReild"
                    component={KqweopZmxnvb}
                    options={{ ...QazwsxedcRfv.lkj, gestureEnabled: false, }}
                />
                <XcvbnmQazwsx 
                    name="FehderinOngberNuieth"
                    component={QwoplkjZmxncbvQaz}
                    options={{ ...QazwsxedcRfv.mnb, }} 
                />
                <XcvbnmQazwsx
                    options={{...QazwsxedcRfv.lkj,}}
                    component={OoufdsNWofdYSak}
                    name="CisheNughiheLodaiver"
                />
            </MnbvcxzPoiuyt>
        </QazplmwsxOijn>
    );
};

const Wqazxswedcvfr = () => {
    return (
        <QwopZmxncbvTyu style={{ flex: 1, backgroundColor: '#6CD0F7' }}>
            <XzqplmWoqpZx>
                <PqowieuZmxnvb />
            </XzqplmWoqpZx>
        </QwopZmxncbvTyu>
    );
};

export default Wqazxswedcvfr;