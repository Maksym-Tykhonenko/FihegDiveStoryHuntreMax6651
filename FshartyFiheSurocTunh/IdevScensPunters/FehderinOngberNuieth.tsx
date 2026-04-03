import React, { useState as WqAzXsEdCr } from 'react';

import {
    Text as SdFgHjKlQw,
    View as ZxCvBnMqWe,
    SafeAreaView as MnBvCxZaSd,

    Image as UiOpLkJhGf,  
    
    
    
    
    TouchableOpacity as ErTyUiOpAs,

    useWindowDimensions as TyUiOpLkJh,
} from 'react-native';
import { BeloblukataGardtainaTenha as RfVtGbHuJi } from '../IvedreKopometsYartri/BeloblukataGardtainaTenha';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { tushperlanFinlsRidl as YhNujMiKoLp } from '../tushperlanFinlsRidl';
import { useNavigation as QpLmNbVtRew } from '@react-navigation/native';
const QwErTyUiOp = [
    {
        qazws: require('../FideryhViderAshestRigv/DishertyImagesotry/onfitesra/sinlpwmn.png'),
        plmok: 'Dive into the hole and collect as many fish as you can before the screen freezes.\nMove fast — the frost is coming.',
        xcvbn: 'Welcome to the frozen waters beneath the ice.',
    },
    {
        qazws: require('../FideryhViderAshestRigv/DishertyImagesotry/onfitesra/sortybkredea.png'),
        plmok: 'After each story, you will take a short 5-question quiz. \nAnswer at least 4 correctly to receive rewards.',
        xcvbn: 'Exchange your fish for northern stories.',
    },
    {
        qazws: require('../FideryhViderAshestRigv/DishertyImagesotry/onfitesra/takinfoucards.png'),
        plmok: 'Use hooks to unlock exclusive skins for your fish and personalize your collection.',
        xcvbn: 'Earn hooks and collectible wallpapers.',
    },
]
const PlMnBvCxZaS = 'qazxswedc-12plmnb-09lkjhgfds-tyuiop';


export default function VbNmQwErTy() {
    const OpAsDfGhJkL = QpLmNbVtRew();

    const { width: UiOpAsDfGh, height: JkLzXcVbNm } = TyUiOpLkJh();

    const [WeRtYuIoPl, QwErTyUiOpAs] = WqAzXsEdCr(0);

    const ZxCvBnMqWeTy = (WeRtYuIoPl: number) => {
        switch (WeRtYuIoPl) {
            case 1:
                return 'Next';
            case 2:
                return 'Okay';
            default:
                return 'Start';
        }
    }

    const PlMnBvCxZaSd = async () => {
        if (WeRtYuIoPl < QwErTyUiOp.length - 1) {
            QwErTyUiOpAs(v => v + 1);
        } else {
            try {
                await AsyncStorage.setItem(PlMnBvCxZaS, 'zorked');
            } catch (TyUiOpLkJhGf) {
                if (__DEV__) console.warn('VbNmQwErTy::fail', TyUiOpLkJhGf);
            }
            OpAsDfGhJkL.replace?.('HupowrtoKorntelnrReild');
        }
    };

    return (
        <ZxCvBnMqWe style={{
            paddingBottom: JkLzXcVbNm * 0.08, height: JkLzXcVbNm,  width: UiOpAsDfGh, flex: 1, alignItems: 'center', justifyContent: 'flex-end',
           
        }}>
            <MnBvCxZaSd />
            <UiOpLkJhGf source={require('../FideryhViderAshestRigv/DishertyImagesotry/miafontas.png')} style={{height: JkLzXcVbNm,



                width: UiOpAsDfGh, 

                position: 'absolute',
            }} resizeMode="cover"  />

            <UiOpLkJhGf style={{
                width: UiOpAsDfGh * 0.91, height: JkLzXcVbNm * 0.5,
            }} resizeMode="contain" source={QwErTyUiOp[WeRtYuIoPl].qazws} />


            <ZxCvBnMqWe style={{
                overflow: 'hidden',
                width: UiOpAsDfGh * 0.95,
                alignSelf: 'center',
                borderWidth: UiOpAsDfGh * 0.005,
                borderRadius: UiOpAsDfGh * 0.04,
                borderColor: '#E4AD1B',
            }}>
                <RfVtGbHuJi />

                <ZxCvBnMqWe style={{
                    alignItems: 'flex-start',
                    width: '100%',
                    padding: UiOpAsDfGh * 0.04,
                }}>
                    {/* Прогрес-індикатор */}
                    <ZxCvBnMqWe style={{
                        alignSelf: 'flex-start',
                        justifyContent: 'space-between',
                        marginBottom: UiOpAsDfGh * 0.04,
                        alignItems: 'center',
                        width: UiOpAsDfGh * 0.7,
                        flexDirection: 'row',
                    }}>
                        {QwErTyUiOp.map((_, idx) => (
                            <ZxCvBnMqWe
                            style={{
                                backgroundColor: idx <= WeRtYuIoPl ? '#E4AD1B' : '#935200',
                                height: UiOpAsDfGh * 0.018,
                                marginRight: UiOpAsDfGh * 0.02,
                                borderRadius: UiOpAsDfGh * 0.009,
                                width: UiOpAsDfGh * 0.22 / QwErTyUiOp.length + UiOpAsDfGh * 0.12,
                            }}
                            key={idx}
                            />
                        ))}
                    </ZxCvBnMqWe>

                    <SdFgHjKlQw style={{
                        fontSize: UiOpAsDfGh * 0.05,fontFamily: YhNujMiKoLp.dibutB,color: '#F07911',
                    }}>
                        {QwErTyUiOp[WeRtYuIoPl].xcvbn}
                    </SdFgHjKlQw>
                    <SdFgHjKlQw style={{
                        fontSize: UiOpAsDfGh * 0.035,
                        fontFamily: YhNujMiKoLp.dibutR,
                        marginTop: UiOpAsDfGh * 0.02,
                        color: 'white',
                    }}>
                        {QwErTyUiOp[WeRtYuIoPl].plmok}
                    </SdFgHjKlQw>

                    <ZxCvBnMqWe style={{
                        alignItems: 'center',
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: UiOpAsDfGh * 0.04,
                        alignSelf: 'center',
                    }}>
                        <ErTyUiOpAs onPress={PlMnBvCxZaSd} style={{
                            alignItems: 'center',
                          height: JkLzXcVbNm * 0.07,  borderWidth: UiOpAsDfGh * 0.004, borderColor: '#935200',  backgroundColor: '#F07911',
                          
                            width: '70%', 
                            borderRadius: UiOpAsDfGh * 0.04,
                           
                            justifyContent: 'center',
                        }}>
                            <SdFgHjKlQw style={{
                            textAlign: 'center',
                                color: 'white',
                                textAlignVertical: 'center',
                                fontFamily: YhNujMiKoLp.dibutB,
                                fontSize: UiOpAsDfGh * 0.05,
                            }}>
                                {ZxCvBnMqWeTy(WeRtYuIoPl)}
                            </SdFgHjKlQw>
                        </ErTyUiOpAs>
                        <ErTyUiOpAs onPress={() => {
                            OpAsDfGhJkL.replace?.('HupowrtoKorntelnrReild');
                        }} style={{
                            width: '30%',
                            justifyContent: 'center',
                             height: JkLzXcVbNm * 0.07,
                            alignItems: 'center',
                        }}>
                            <SdFgHjKlQw style={{
                                textAlign: 'center',
                                fontSize: UiOpAsDfGh * 0.05,
                                fontFamily: YhNujMiKoLp.dibutR,
                                textAlignVertical: 'center',



                                color: '#935200',
                            }}>
                                Skip
                            </SdFgHjKlQw>
                        </ErTyUiOpAs>
                    </ZxCvBnMqWe>
                </ZxCvBnMqWe>
            </ZxCvBnMqWe>
        </ZxCvBnMqWe>
    );
};
