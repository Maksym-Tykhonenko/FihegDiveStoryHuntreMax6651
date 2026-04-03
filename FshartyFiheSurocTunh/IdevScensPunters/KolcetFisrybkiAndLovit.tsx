import { BeloblukataGardtainaTenha } from '../IvedreKopometsYartri/BeloblukataGardtainaTenha';
import React, { useState, useEffect, useRef } from 'react';
import { tushperlanFinlsRidl } from '../tushperlanFinlsRidl';
import DirtosyWomnCrda from './DirtosyWomnCrda';




import distoSkintresToryh from '../FideryhViderAshestRigv/distoSkintresToryh';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    Image,




    Text,
    Animated,
    View,
    Easing,



    Dimensions,
    TouchableOpacity,
} from 'react-native';


const { width, height } = Dimensions.get('window');
const HOOKS_KEY = 'HOOKS_COUNT';
const SKINS_KEY = 'OPENED_SKINS';

function padHooks(num: number) {
    return num.toString().padStart(3, '0');
}

function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const FISH_HEIGHT = height * 0.13;
const FISH_WIDTH = width * 0.23;
const FISH_AREA_TOP = height * 0.25;
const FISH_AREA_BOTTOM = height * 0.7;

export default function ZorpGallery(props: {
    isHomeStage?: boolean;
    setIsHomeStage?: (v: boolean) => void;
    postanVidhefgOstr?: any;
}) {
    const [gameStarted, setGameStarted] = useState(false);
    const [openedSkins, setOpenedSkins] = useState<number[]>([0]);
    const [sessionHooks, setSessionHooks] = useState(0);
    const [totalHooks, setTotalHooks] = useState(0);
    const [fishes, setFishes] = useState<any[]>([]);
    const fishAnimRefs = useRef<{ [key: string]: Animated.Value }>({});

    // Load opened skins and hooks
    useEffect(() => {
        (async () => {
            const openedRaw = await AsyncStorage.getItem(SKINS_KEY);
            let openedArr = [0];
            if (openedRaw) {
                const arr = JSON.parse(openedRaw);
                openedArr = arr.includes(0) ? arr : [0, ...arr];
            }
            setOpenedSkins(openedArr);

            const hooksRaw = await AsyncStorage.getItem(HOOKS_KEY);
            setTotalHooks(hooksRaw ? parseInt(hooksRaw, 10) : 0);
        })();
    }, []);

    // Генерує одну рибку з потрібним id (для першої рибки) або випадковим відкритим скіном
    const generateFish = (forceId?: number) => {
        let availableSkins = distoSkintresToryh.filter(s => openedSkins.includes(s.id));
        let skin;
        if (forceId === 0) {
            skin = distoSkintresToryh[0];
        } else {
            availableSkins = availableSkins.filter(s => s.id !== 0);
            if (availableSkins.length === 0) {
                skin = distoSkintresToryh[0];
            } else {
                skin = availableSkins[getRandomInt(0, availableSkins.length - 1)];
            }
        }
        const direction = Math.random() > 0.5 ? 'ltr' : 'rtl';
        const top = getRandomInt(0, Math.max(1, FISH_AREA_BOTTOM - FISH_AREA_TOP - FISH_HEIGHT));
        const id = `${Date.now()}_${Math.random()}`;
        return { id, skin, direction, top };
    };

    // Старт гри: перша рибка завжди id 0, інші — відкриті
    const startGame = () => {
        setGameStarted(true);
        setSessionHooks(0);

        // Перша рибка — завжди id 0
        const fishesArr = [generateFish(0)];
        // Інші — тільки відкриті (крім 0)
        const availableSkins = distoSkintresToryh.filter(s => openedSkins.includes(s.id) && s.id !== 0);
        const fishCount = Math.max(availableSkins.length, 4); // 4 додаткові рибки мінімум
        for (let i = 0; i < fishCount; ++i) {
            fishesArr.push(generateFish());
        }
        setFishes(fishesArr);

        // Створити анімації для кожної рибки
        setTimeout(() => {
            fishesArr.forEach(fish => {
                fishAnimRefs.current[fish.id] = new Animated.Value(
                    fish.direction === 'ltr' ? -FISH_WIDTH : width
                );
                animateFish(fish);
            });
        }, 0);
    };

    // Анімація рибки: нескінченне плавання
    const animateFish = (fish: any) => {
        const from = fish.direction === 'ltr' ? -FISH_WIDTH : width;
        const to = fish.direction === 'ltr' ? width : -FISH_WIDTH;
        fishAnimRefs.current[fish.id]?.setValue(from);
        Animated.timing(fishAnimRefs.current[fish.id], {
            toValue: to,
            duration: getRandomInt(3500, 5000),
            easing: Easing.linear,
            useNativeDriver: false,
        }).start(({ finished }) => {
            if (finished) {
                setFishes(prev => {
                    if (!prev.find(f => f.id === fish.id)) return prev;
                    const newFish = prev[0].id === fish.id
                        ? generateFish(0)
                        : generateFish();
                    fishAnimRefs.current[newFish.id] = new Animated.Value(
                        newFish.direction === 'ltr' ? -FISH_WIDTH : width
                    );
                    setTimeout(() => animateFish(newFish), 0);
                    return prev.map(f => f.id === fish.id ? newFish : f);
                });
            }
        });
    };

    // Тап по рибці
    const handleFishTap = async (fishId: string) => {
        setFishes(prev => {
            const idx = prev.findIndex(f => f.id === fishId);
            if (idx === -1) return prev;
            const newFish = idx === 0 ? generateFish(0) : generateFish();
            fishAnimRefs.current[newFish.id] = new Animated.Value(
                newFish.direction === 'ltr' ? -FISH_WIDTH : width
            );
            setTimeout(() => animateFish(newFish), 0);
            const newArr = [...prev];
            newArr[idx] = newFish;
            return newArr;
        });
        setSessionHooks(h => h + 1);
        setTotalHooks(h => {
            const newHooks = h + 1;
            AsyncStorage.setItem(HOOKS_KEY, newHooks.toString());
            return newHooks;
        });
    };

    // Оновлювати анімації при зміні fishes (на випадок гарячої заміни)
    useEffect(() => {
        if (!gameStarted) return;
        fishes.forEach(fish => {
            if (!fishAnimRefs.current[fish.id]) {
                fishAnimRefs.current[fish.id] = new Animated.Value(
                    fish.direction === 'ltr' ? -FISH_WIDTH : width
                );
                setTimeout(() => animateFish(fish), 0);
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fishes, gameStarted]);

    return (
        <View style={{alignItems: 'center',  flex: 1,backgroundColor: 'transparent' , justifyContent: 'flex-start', }}>
            {!gameStarted && (
                <View style={{  alignItems: 'center',paddingBottom: height * 0.14, justifyContent: 'flex-end',  flex: 1, }}>
                    <DirtosyWomnCrda
                        secondText='Catch all the fish you see, be quick, because time is limited'
                        buttonText="Start"
                        onPress={startGame}
                        mainText="Ready to catch all the fish?"
                    />
                </View>
            )}
            {gameStarted && (
                <>
                    {/* Верхній лічильник */}
                    <View style={{marginTop: height * 0.06, alignItems: 'center', marginBottom: height * 0.03, flexDirection: 'row',}}>
                        <View style={{
                            borderColor: '#FFB70A',
                            borderWidth: width * 0.008,
                            height: width * 0.19,
                            marginRight: width * 0.025,
                            backgroundColor: '#9DE1FF',
                            borderRadius: width * 0.045,
                            overflow: 'hidden',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: width * 0.19,
                        }}>
                            <BeloblukataGardtainaTenha />
                            <Image  source={require('../FideryhViderAshestRigv/DishertyImagesotry/gachok.png')} style={{
                                    height: width * 0.11,
                                    resizeMode: 'contain',
                                    width: width * 0.11,
                                }}
                            />
                        </View>
                        <View style={{
                            borderWidth: width * 0.008,
                            height: width * 0.19,
                            width: width * 0.35,
                            borderRadius: width * 0.045,
                            overflow: 'hidden',
                            borderColor: '#FFB70A',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <BeloblukataGardtainaTenha />
                            <Text style={{
                                fontSize: width * 0.08,
                                color: '#A05B00',
                                letterSpacing: 2,
                                fontFamily: tushperlanFinlsRidl.dibutM,
                            }}>
                                {padHooks(sessionHooks)}
                            </Text>
                        </View>
                    </View>
                    {/* Зона для рибок */}
                    <View style={{
                        width: width, position: 'absolute', bottom: height * 0.07,
                        left: 0,
                        top: FISH_AREA_TOP,
                        zIndex: 10,
                        height: FISH_AREA_BOTTOM - FISH_AREA_TOP,
                        right: 0,
                    }}>
                        {fishes.map(fish => (
                            <Animated.View
                                key={fish.id}
                                style={{
                                    zIndex: 10,
                                    top: fish.top,
                                    width: FISH_WIDTH,
                                    left: fishAnimRefs.current[fish.id] ?? (fish.direction === 'ltr' ? -FISH_WIDTH : width),
                                    position: 'absolute',
                                    height: FISH_HEIGHT,
                                }}
                            >
                                <TouchableOpacity
                                    onPress={() => handleFishTap(fish.id)}
                                    activeOpacity={0.7}
                                    style={{ width: '100%', height: '100%' }}
                                >
                                    <Image
                                        source={fish.skin.req}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            resizeMode: 'contain',
                                            // Виправлено: якщо пливе зліва направо (ltr), дзеркалимо, якщо справа наліво (rtl) — не дзеркалимо
                                            transform: fish.direction === 'ltr'
                                                ? [{ scaleX: -1 }]
                                                : undefined,
                                        }}
                                    />
                                </TouchableOpacity>
                            </Animated.View>
                        ))}
                    </View>
                    {/* Back button */}
                    <View style={{
                      right: 0,  left: 0,  position: 'absolute',bottom: height * 0.13, 
                       
                        alignItems: 'center',
                    }}>
                        <TouchableOpacity
                            style={{
                                borderWidth: 1,
                                borderRadius: width * 0.045,                                zIndex: 500,paddingHorizontal: width * 0.13, paddingVertical: height * 0.022,
                                borderColor: '#E9D274',
                                backgroundColor: '#E99917',
                            }}
                            onPress={() => setGameStarted(false)}
                        >
                            <Text style={{
                                fontSize: width * 0.061,
                                fontFamily: tushperlanFinlsRidl.dibutB,
                                textAlign: 'center',
                                color: '#fff',
                            }}>
                                Back
                            </Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </View>
    );
}
