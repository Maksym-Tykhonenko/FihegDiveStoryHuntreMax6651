import ViewShot from 'react-native-view-shot';
import {
    tushperlanFinlsRidl as MnBvCxZaSd,
    tushperlanFinlsRidl as LkJhGfDsAq,
} from '../tushperlanFinlsRidl';
import React, { useState as PlOkMnJbHu, useRef as VbNmQwErTy } from 'react';
import { CameraRoll as OpAsDfGhJk } from '@react-native-camera-roll/camera-roll';
import { BeloblukataGardtainaTenha as ZxCvBnMqWeTy } from '../IvedreKopometsYartri/BeloblukataGardtainaTenha';
import { ScrollView as QwErTyUiOpAs } from 'react-native-gesture-handler';
import {
    Share as ZxCvBnMqWe, TouchableOpacity as QwErTyUiOp, Text as TyUiOpLkJh, View as UiOpAsDfGh,
    PermissionsAndroid as QzWsXcVbNm, Image as PlMnBvCxZa, Dimensions as ErTyUiOpAs,
    Platform as SdFgHjKlQw, Animated as AsDfGhJkLz,
} from 'react-native';


const { width: PlMnBvCxZaS, height: TyUiOpLkJhG } = ErTyUiOpAs.get('window');

// Додаємо price для кожного скіна
const GhJkLzXcVbN = [
    {
       id: 0, req: require('../FideryhViderAshestRigv/DishertyImagesotry/tutaizberegtymozh/FotgzenRays.png'), dishrynae: 'Frozen Light Rays',
       
    },
    {
        dishrynae: 'Three Colors Under Ice', req: require('../FideryhViderAshestRigv/DishertyImagesotry/tutaizberegtymozh/ThreeUnderCrs.png'), id: 1,
      
    },
    {
       id: 2,  req: require('../FideryhViderAshestRigv/DishertyImagesotry/tutaizberegtymozh/NorthernGlow.png'),
        dishrynae: 'Northern Glow',
    },
    {
         req: require('../FideryhViderAshestRigv/DishertyImagesotry/tutaizberegtymozh/CaveDepths.png'), dishrynae: 'Ice Cave Depths',
        id: 3,
    },
    {
        dishrynae: 'Golden Current',
        id: 4, req: require('../FideryhViderAshestRigv/DishertyImagesotry/tutaizberegtymozh/GoldenCurrent.png'),
    },
    {
        id: 5, req: require('../FideryhViderAshestRigv/DishertyImagesotry/tutaizberegtymozh/ColdRdeWater.png'),
        dishrynae: 'Red Flame in Cold Water',
    },
    {
        id: 6, 
        req: require('../FideryhViderAshestRigv/DishertyImagesotry/tutaizberegtymozh/DeepBlueSilence.png'), 
        dishrynae: 'Deep Blue Silence',
    },
    {
        id: 7, 
        dishrynae: 'Frozen Surface Reflection', req: require('../FideryhViderAshestRigv/DishertyImagesotry/tutaizberegtymozh/FrozenSurfaceReflection.png'),
    },
    {
        dishrynae: 'Crystal Ice Garden',
        id: 8, req: require('../FideryhViderAshestRigv/DishertyImagesotry/tutaizberegtymozh/CrystalGarden.png'),
    },
    {
        id: 9, req: require('../FideryhViderAshestRigv/DishertyImagesotry/tutaizberegtymozh/SpringBeneath.png'),
        dishrynae: 'Spring Beneath Ice',
    },
];

export default function CollectionOfSaberezh() {




    const LzXcVbNmQwArr = GhJkLzXcVbN.map(item => ({
        image: item.req,
        dishrynae: item.dishrynae,
        id: item.id,
    }));

    const JkLzXcVbNmQw = async () => {
        if (SdFgHjKlQw.OS !== 'android') return true;
        try {
            const apiLevel = SdFgHjKlQw.Version;
            if (apiLevel >= 33) {
                const granted = await QzWsXcVbNm.request(
                    'android.permission.READ_MEDIA_IMAGES' as any,
                    {
                        buttonNeutral: 'Ask Me Later',
                        message: 'App needs access to your media to save wallpapers',
                        buttonNegative: 'Cancel',
                        buttonPositive: 'OK',
                        title: 'Media Permission Required',
                    },
                );
                return granted === QzWsXcVbNm.RESULTS.GRANTED;
            } else {
                const granted = await QzWsXcVbNm.request(
                    QzWsXcVbNm.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        message: 'App needs access to your storage to save wallpapers',
                        buttonPositive: 'OK',
                        buttonNegative: 'Cancel',
                        title: 'Storage Permission Required',
                        buttonNeutral: 'Ask Me Later',
                    },
                );
                return granted === QzWsXcVbNm.RESULTS.GRANTED;
            }
        } catch (err) {
            return false;
        }
    };

    const UiOpLkJhGfDs = (text: string) => {
        QwErTyUiOpAsSet(text);
        PlOkMnJbHuSet(true);
        AsDfGhJkLz.spring(VbNmQwErTyAnim, {
            toValue: 1,
            useNativeDriver: true,
            friction: 6,
            tension: 90,
        }).start();
        setTimeout(() => {
            AsDfGhJkLz.spring(VbNmQwErTyAnim, {
                toValue: 0,
                useNativeDriver: true,
                friction: 6,
                tension: 90,
            }).start(() => PlOkMnJbHuSet(false));
        }, 1600);
    };

    const ErTyUiOpAsDf = async (id: number) => {
        try {
            if (SdFgHjKlQw.OS === 'android') {
                const hasPerm = await JkLzXcVbNmQw();
                if (!hasPerm) {
                    UiOpLkJhGfDs('Permission denied');
                    return;
                }
            }
            const uri = await VbNmQwErTyRefs.current[id]?.capture();
            if (!uri) throw new Error('Failed to capture image');
            await OpAsDfGhJk.save(uri, { type: 'photo' });
            UiOpLkJhGfDs('Image has been saved!');
        } catch (e: any) {
            UiOpLkJhGfDs(`Error: ${e?.message || 'Unknown error'}`);
        }
    };

    const QwErTyUiOpAsDf = async (id: number) => {
        try {
            const uri = await VbNmQwErTyRefs.current[id]?.capture();
            await ZxCvBnMqWe.share({ url: uri });
        } catch (e) {
            UiOpLkJhGfDs('Error: Failed to share');
        }
    };

    const VbNmQwErTyRefs = VbNmQwErTy<{ [key: number]: any }>({});
    const VbNmQwErTyAnim = VbNmQwErTy(new AsDfGhJkLz.Value(0)).current;
    const [QwErTyUiOpAsText, QwErTyUiOpAsSet] = PlOkMnJbHu('');
    const [PlOkMnJbHuVisible, PlOkMnJbHuSet] = PlOkMnJbHu(false);

    return (
        <UiOpAsDfGh style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: 'transparent',
        }}>
            {/* Preview Save/Share Modal */}
            {PlOkMnJbHuVisible && (
                <AsDfGhJkLz.View
                    style={{
                        left: 0, position: 'absolute', top: TyUiOpLkJhG * 0.3, right: 0,
                        opacity: VbNmQwErTyAnim, zIndex: 100, alignItems: 'center',
                        transform: [
                            {
                                scale: VbNmQwErTyAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0.92, 1],
                                }),
                            },
                        ],
                    }}
                    pointerEvents="none"
                >
                    <UiOpAsDfGh style={{
                        paddingVertical: TyUiOpLkJhG * 0.022,
                        borderColor: '#E9D274',
                        borderRadius: PlMnBvCxZaS * 0.07,
                        borderWidth: 1,
                        backgroundColor: '#E99917',
                        paddingHorizontal: PlMnBvCxZaS * 0.13,
                    }}>
                        <TyUiOpLkJh style={{
                            fontFamily: MnBvCxZaSd.dibutB,textAlign: 'center', fontSize: PlMnBvCxZaS * 0.06104359,
                            color: '#fff',
                        }}>
                            {QwErTyUiOpAsText}
                        </TyUiOpLkJh>
                    </UiOpAsDfGh>
                </AsDfGhJkLz.View>
            )}

            <QwErTyUiOpAs contentContainerStyle={{
                paddingBottom: TyUiOpLkJhG * 0.230523847291,
                paddingTop: TyUiOpLkJhG * 0.02,
            }} showsVerticalScrollIndicator={false}>
                <UiOpAsDfGh style={{
                    width: PlMnBvCxZaS,
                    alignItems: 'center',
                }}>
                    {LzXcVbNmQwArr.map((wall, idx) => (
                        <UiOpAsDfGh
                            key={wall.id}
                            style={{
                                alignItems: 'center',
                                borderRadius: PlMnBvCxZaS * 0.055,
                                width: PlMnBvCxZaS * 0.95,
                                alignSelf: 'center',
                                marginBottom: TyUiOpLkJhG * 0.016,
                                flexDirection: 'row',
                            }}
                        >
                            {/* Image */}
                            <ViewShot
                                options={{ quality: 1, format: 'png', result: 'tmpfile' }}
                                ref={ref => { VbNmQwErTyRefs.current[wall.id] = ref; }}
                                style={{
                                    overflow: 'hidden',
                                    width: PlMnBvCxZaS * 0.33,
                                    marginRight: PlMnBvCxZaS * 0.025,
                                    borderRadius: PlMnBvCxZaS * 0.055,
                                    backgroundColor: '#fff',
                                    height: PlMnBvCxZaS * 0.33,
                                }}
                            >
                                <PlMnBvCxZa
                                    source={wall.image}
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                    }}
                                    resizeMode="cover"
                                />
                            </ViewShot>
                            {/* Right block */}
                            <UiOpAsDfGh
                                style={{
                                    backgroundColor: '#9DE1FF',
                                    borderRadius: PlMnBvCxZaS * 0.055, paddingHorizontal: PlMnBvCxZaS * 0.025, flex: 1, borderWidth: PlMnBvCxZaS * 0.008,
                                    paddingVertical: TyUiOpLkJhG * 0.019,
                                    justifyContent: 'center',
                                    overflow: 'hidden',
                                    minHeight: PlMnBvCxZaS * 0.33,
                                    borderColor: '#FFB70A',
                                }}
                            >
                                <ZxCvBnMqWeTy />
                                {/* Title */}
                                <TyUiOpLkJh
                                    style={{
                                        marginBottom: TyUiOpLkJhG * 0.025,
                                        fontSize: PlMnBvCxZaS * 0.054,
                                        fontFamily: LkJhGfDsAq.dibutB,
                                        color: '#F07911',
                                        textAlign: 'left',
                                    }}
                                    numberOfLines={2}
                                >
                                    {wall.dishrynae}
                                </TyUiOpLkJh>
                                {/* Buttons row */}
                                <UiOpAsDfGh style={{
                                        marginTop: TyUiOpLkJhG * 0.01,
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                    }}
                                >
                                    {/* Download */}
                                    <QwErTyUiOp
                                        style={{
                                            alignItems: 'center',
                                            borderRadius: PlMnBvCxZaS * 0.025,
                                            backgroundColor: '#E99917',
                                            flex: 1,
                                            height: PlMnBvCxZaS * 0.11,
                                            borderColor: '#935200',
                                            marginRight: PlMnBvCxZaS * 0.03,
                                            borderWidth: PlMnBvCxZaS * 0.004,
                                            justifyContent: 'center',
                                        }}
                                        onPress={() => ErTyUiOpAsDf(wall.id)}
                                    >
                                        <TyUiOpLkJh style={{
                                            fontFamily: LkJhGfDsAq.dibutM,
                                            fontSize: PlMnBvCxZaS * 0.05,
                                            color: '#fff',
                                        }}>
                                            Download
                                        </TyUiOpLkJh>
                                    </QwErTyUiOp>
                                    {/* Share */}
                                    <QwErTyUiOp     onPress={() => QwErTyUiOpAsDf(wall.id)}style={{
                                            width: PlMnBvCxZaS * 0.11,
                                            borderRadius: PlMnBvCxZaS * 0.025,
                                            height: PlMnBvCxZaS * 0.11,
                                            borderColor: '#935200',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderWidth: PlMnBvCxZaS * 0.004,
                                            backgroundColor: '#E99917',
                                        }}
                                    >
                                        <PlMnBvCxZa
                                            source={require('../FideryhViderAshestRigv/DishertyImagesotry/maryshrea.png')}
                                            resizeMode="contain"
                                            style={{ height: PlMnBvCxZaS * 0.06, width: PlMnBvCxZaS * 0.06,
                                            }}
                                        />
                                    </QwErTyUiOp>
                                </UiOpAsDfGh>
                            </UiOpAsDfGh>
                        </UiOpAsDfGh>
                    ))}
                </UiOpAsDfGh>
            </QwErTyUiOpAs>
        </UiOpAsDfGh>
    );
}
