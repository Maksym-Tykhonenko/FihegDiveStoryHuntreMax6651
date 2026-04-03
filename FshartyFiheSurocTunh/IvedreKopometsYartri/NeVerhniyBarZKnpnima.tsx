const knopNobtsAri = [
    {
        zimbrahs: require('../FideryhViderAshestRigv/DishertyImagesotry/kopkinznotom/rybki.png'),
        naimpgans: 'Ditory Coletc Shifart',
    },
    {
        naimpgans: 'Stories',
        zimbrahs: require('../FideryhViderAshestRigv/DishertyImagesotry/kopkinznotom/knizhka.png'),
    },
    {
        naimpgans: 'Skins',
        zimbrahs: require('../FideryhViderAshestRigv/DishertyImagesotry/kopkinznotom/footbolka.png'),
    },
    {
        zimbrahs: require('../FideryhViderAshestRigv/DishertyImagesotry/kopkinznotom/colekcia.png'),


        naimpgans: 'Collection',
    },
    {
        naimpgans: 'Tips',
        zimbrahs: require('../FideryhViderAshestRigv/DishertyImagesotry/kopkinznotom/tips.png'),
    },
    {
        naimpgans: 'Saved',
        zimbrahs: require('../FideryhViderAshestRigv/DishertyImagesotry/kopkinznotom/zberezhene.png'),
    },
];
import React from 'react';
import {
    TouchableOpacity as OrtynertTapxcjiHSo,
    Image as IadnkImganoIJjqn,
    View as QitrangBoxooPankl,
    Dimensions as HunertDisnemoPufsol,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const { width: wuriodhok, height: qiodsjunh } = HunertDisnemoPufsol.get('window');

type NashrytPoripolsHunirt = {
    avicterpgns: string;
    postanVidhefgOstr: (val: any) => void;
};

const NeVerhniyBarZKnpnima: React.FC<NashrytPoripolsHunirt> = ({ avicterpgns, postanVidhefgOstr }) => (
    <QitrangBoxooPankl style={{
         borderRadius: wuriodhok * 0.06, width: wuriodhok * 0.95, bottom: qiodsjunh * 0.025, zIndex: 10,
       position: 'absolute',  justifyContent: 'space-around',alignSelf: 'center', height: qiodsjunh * 0.1,  
        flexDirection: 'row',
        overflow: 'hidden', 
        alignItems: 'center',
    }}>
        {knopNobtsAri.map((btn, idx) => (
            <OrtynertTapxcjiHSo key={idx} onPress={() => postanVidhefgOstr(btn.naimpgans)} style={{
                borderRadius: wuriodhok * 0.04,overflow: 'hidden', borderColor: '#935200', borderWidth: wuriodhok * 0.004,
                backgroundColor: '#935200',
                
                width: wuriodhok * 0.1512, height: wuriodhok * 0.152,alignItems: 'center',
                justifyContent: 'center',
            }}>
                {btn.naimpgans === avicterpgns && (
                    <LinearGradient
                    end={{ x: 0.5, y: 1 }}
                    start={{ x: 0.5, y: 0 }}
                    colors={['#E4AD1B', '#F07911']}
                        style={{
                            bottom: 0,

                            position: 'absolute',
                            left: 0,

                            right: 0,


                            top: 0,
                        }}
                    />
                )}
                <IadnkImganoIJjqn
                    style={{
                        tintColor: avicterpgns === btn.naimpgans ? 'white' : '#EB8E15',
                        width: wuriodhok * 0.08,
                        height: wuriodhok * 0.08,
                    }}
                    resizeMode="contain"
                    source={btn.zimbrahs}
                />
            </OrtynertTapxcjiHSo>
        ))}


    </QitrangBoxooPankl>
);

export default NeVerhniyBarZKnpnima;
