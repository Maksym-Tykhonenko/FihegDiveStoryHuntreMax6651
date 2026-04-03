import React, {useState, useEffect,  useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const { width, height } = Dimensions.get('window');
import distoSkintresToryh from '../FideryhViderAshestRigv/distoSkintresToryh';
import {
    Dimensions, View, Animated,
    TouchableOpacity,
    Text,
    Image,
} from 'react-native';
import { BeloblukataGardtainaTenha } from '../IvedreKopometsYartri/BeloblukataGardtainaTenha';
import { tushperlanFinlsRidl } from '../tushperlanFinlsRidl';
import { ScrollView } from 'react-native-gesture-handler';

const SKINS = distoSkintresToryh;

const HOOKS_KEY = 'HOOKS_COUNT';
const SKINS_KEY = 'OPENED_SKINS';

function padHooks(num: number) {
    return num.toString().padStart(3, '0');
}

export default function SkihefhireNisksNurty() {
    const [hooks, setHooks] = useState(0);
    const [opened, setOpened] = useState<number[]>([0]);

    // Modal state
    const [modalVisible, setModalVisible] = useState(false);
    const [modalText, setModalText] = useState('');
    const modalAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        (async () => {
            const hooksRaw = await AsyncStorage.getItem(HOOKS_KEY);
            setHooks(hooksRaw ? parseInt(hooksRaw, 10) : 0);

            const openedRaw = await AsyncStorage.getItem(SKINS_KEY);
            if (openedRaw) {
                const arr = JSON.parse(openedRaw);
                setOpened(arr.includes(0) ? arr : [0, ...arr]);
            } else {
                setOpened([0]);
                await AsyncStorage.setItem(SKINS_KEY, JSON.stringify([0]));
            }
        })();
    }, []);

    // Modal show/hide logic
    const showModal = (text: string) => {
        setModalText(text);
        setModalVisible(true);
        Animated.spring(modalAnim, {
            toValue: 1,
            useNativeDriver: true,
            friction: 6,
            tension: 90,
        }).start();
        setTimeout(() => {
            Animated.spring(modalAnim, {
                toValue: 0,
                useNativeDriver: true,
                friction: 6,
                tension: 90,
            }).start(() => setModalVisible(false));
        }, 1600);
    };

    const handleBuy = async (skinId: number, price: number) => {
        if (opened.includes(skinId)) return;
        if (hooks < price) {
            showModal('notenough');
            return;
        }
        const newHooks = hooks - price;
        const newOpened = [...opened, skinId];
        setHooks(newHooks);
        setOpened(newOpened);
        await AsyncStorage.setItem(HOOKS_KEY, newHooks.toString());
        await AsyncStorage.setItem(SKINS_KEY, JSON.stringify(newOpened));
        showModal('Successfully purchased!');
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', }}>
            {/* Animated Modal */}
            {modalVisible && (
                <Animated.View
                    style={{
                        right: width * 0.1,
                        zIndex: 100,
                        top: height * 0.3,
                        left: width * 0.1,
                        opacity: modalAnim,
                        alignItems: 'center',
                        position: 'absolute',
                        transform: [
                            {
                                scale: modalAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0.92, 1],
                                }),
                            },
                        ],
                    }}
                    pointerEvents="none"
                >
                    <View style={{
                        paddingHorizontal: width * 0.13, borderWidth: 1, paddingVertical: height * 0.022, borderColor: '#E9D274',
                        borderRadius: width * 0.07,
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        backgroundColor: '#E99917',
                    }}>
                        {modalText === 'notenough' ? (
                            <>
                                <Text style={{
                                    textAlign: 'center',
                                    fontFamily: tushperlanFinlsRidl.dibutB,
                                    color: '#fff',
                                    fontSize: width * 0.061,
                                }}>
                                    Not enough{' '}
                                </Text>
                                <Image
                                    style={{
                                        marginRight: width * 0.01,
                                        height: width * 0.07,
                                        marginLeft: width * 0.01,
                                        width: width * 0.07,
                                        resizeMode: 'contain',
                                    }}
                                    source={require('../FideryhViderAshestRigv/DishertyImagesotry/gachok.png')}
                                />
                            </>
                        ) : (
                            <Text style={{
                                fontSize: width * 0.061,
                                fontFamily: tushperlanFinlsRidl.dibutB, textAlign: 'center', color: '#fff',
                            }}>
                                {modalText}
                            </Text>
                        )}
                    </View>
                </Animated.View>
            )}
            {/* Hooks counter */}
            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: height * 0.03,}}>
                <View style={{
                    borderRadius: width * 0.045,
                    borderColor: '#FFB70A',
                    height: width * 0.19,
                    borderWidth: width * 0.008,
                    alignItems: 'center',
                    overflow: 'hidden',

                    justifyContent: 'center',
                    marginRight: width * 0.025,
                    width: width * 0.19,

                    
                    backgroundColor: '#9DE1FF',
                }}>
                    <BeloblukataGardtainaTenha />
                    <Image
                        source={require('../FideryhViderAshestRigv/DishertyImagesotry/gachok.png')}
                        style={{
                            width: width * 0.11,
                            height: width * 0.11,
                            resizeMode: 'contain',
                        }}
                    />
                </View>
                <View style={{
                    justifyContent: 'center',
                    borderColor: '#FFB70A',
                    height: width * 0.19,
                    borderWidth: width * 0.008,
                    alignItems: 'center',
                    width: width * 0.35,
                    overflow: 'hidden',
                    borderRadius: width * 0.045,
                }}>
                    <BeloblukataGardtainaTenha />
                    <Text style={{
                        fontSize: width * 0.08,
                        letterSpacing: 2,
                        fontFamily: tushperlanFinlsRidl.dibutM,
                        color: '#A05B00',
                    }}>
                        {padHooks(hooks)}
                    </Text>
                </View>
            </View>
            {/* Skins list */}
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: height * 0.14, alignItems: 'center', }} style={{ width: '100%' }}>


                {SKINS.map((skin, idx) => (
                    <View key={skin.id}
                        style={{
                            marginBottom: height * 0.018,
                            backgroundColor: 'transparent',
                            alignItems: 'center',
                            width: width * 0.95,
                            borderRadius: width * 0.045,
                            flexDirection: 'row',
                        }}
                    >
                        {/* Fish image */}
                        <View style={{
                            alignItems: 'center',
                            borderRadius: width * 0.045,
                            backgroundColor: '#9DE1FF',
                            borderWidth: width * 0.008,
                            borderColor: '#FFB70A',
                            overflow: 'hidden',
                            justifyContent: 'center',
                            height: height * 0.14,
                            marginRight: width * 0.025,
                            width: width * 0.27,
                        }}>
                            <BeloblukataGardtainaTenha />
                            <Image  source={skin.req} style={{
                                height: '100%',
                                resizeMode: 'contain',
                                width: '100%',
                                }}
                            />
                        </View>
                        {/* Right block */}
                        <View style={{
                            backgroundColor: '#9DE1FF',
                            paddingHorizontal: width * 0.025,
                            borderWidth: width * 0.008,
                            borderColor: '#FFB70A',
                            paddingVertical: height * 0.018,
                            minHeight: height * 0.14,
                            flex: 1,
                            justifyContent: 'center',
                            overflow: 'hidden',
                            borderRadius: width * 0.045,
                        }}>
                            <BeloblukataGardtainaTenha />
                            <Text style={{
                                fontSize: width * 0.062,
                                fontFamily: tushperlanFinlsRidl.dibutB,
                                textAlign: 'center',
                                marginBottom: height * 0.012,
                                color: '#F07911',
                            }} numberOfLines={1} adjustsFontSizeToFit>
                                {skin.name}
                            </Text>
                            {/* Buy button */}
                            <TouchableOpacity style={{
                                justifyContent: 'center',
                                flexDirection: 'row',
                                alignSelf: 'center',
                                marginTop: height * 0.005,
                                gap: width * 0.014,
                                alignItems: 'center',
                            }} onPress={() => handleBuy(skin.id, skin.price)} disabled={opened.includes(skin.id)}> 
                                <View style={{
                                    paddingHorizontal: width * 0.04,
                                    borderRadius: width * 0.025,
                                    backgroundColor: '#E99917',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: width * 0.12,
                                    width: width * 0.12, borderColor: '#935200', opacity: opened.includes(skin.id) ? 0.7 : 1, borderWidth: width * 0.004,
                                }}>
                                    <Image  source={require('../FideryhViderAshestRigv/DishertyImagesotry/gachok.png')}
                                        style={{
                                            width: width * 0.06,
                                            height: width * 0.06,
                                            resizeMode: 'contain',
                                        }}
                                    />
                                </View>
                                <View style={{
                                    borderRadius: width * 0.025,
                                    height: width * 0.12,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    borderWidth: width * 0.004,
                                    width: width * 0.35,
                                    justifyContent: 'center',
                                    borderColor: '#935200',
                                    opacity: opened.includes(skin.id) ? 0.7 : 1,
                                    backgroundColor: '#E99917',
                                }}>
                                    <Text style={{ fontFamily: tushperlanFinlsRidl.dibutB, color: '#fff', fontSize: width * 0.06,}}>
                                        {opened.includes(skin.id) ? 'Opened' : padHooks(skin.price)}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}
