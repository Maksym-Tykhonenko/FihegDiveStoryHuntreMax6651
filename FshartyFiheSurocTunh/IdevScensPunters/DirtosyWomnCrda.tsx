import { BeloblukataGardtainaTenha } from '../IvedreKopometsYartri/BeloblukataGardtainaTenha';
const { width, height } = Dimensions.get('window');
import { tushperlanFinlsRidl } from '../tushperlanFinlsRidl';
import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import React from 'react';
const cardButtonRadius = width * 0.025;
const cardButtonHeight = height * 0.07;
const cardBorderWidth = width * 0.004;

type Props = {
    mainText: string;
    secondText: string;
    buttonText: string;
    onPress: () => void;
};

export default function DirtosyWomnCrda({ mainText, secondText, buttonText, onPress }: Props) {
    return (
        <View>
            <Image
                source={require('../FideryhViderAshestRigv/DishertyImagesotry/onfitesra/sinlpwmn.png')}
                style={{
                    bottom: -height * 0.08,
                    height: height * 0.4,
                    opacity: 0,
                    alignSelf: 'center',
                    width: width * 0.8,
                }}
                resizeMode="contain"
            />

            <View style={{
                width: width * 0.95,
                alignItems: 'flex-start',
                padding: width * 0.03,
                overflow: 'hidden',
                borderWidth: width * 0.008,
                borderColor: '#E99917',
                borderRadius: width * 0.03,
            }}>
                <BeloblukataGardtainaTenha />
                <Text style={{
                    marginBottom: width * 0.03,
                    fontSize: width * 0.064,
                    textAlign: 'left',
                    color: '#935200',
                    fontFamily: tushperlanFinlsRidl.dibutB,
                }}>
                    <Text style={{ color: '#E99917' }}>{mainText}</Text>
                </Text>
                <Text style={{
                    textAlign: 'left',
                    fontSize: width * 0.045,
                    marginBottom: width * 0.06,
                    color: '#6a4d2c',
                    fontFamily: tushperlanFinlsRidl.dibutR,
                }}>
                    {secondText}
                </Text>
                <TouchableOpacity
                    style={{
                        height: cardButtonHeight,
                        borderRadius: cardButtonRadius,
                        width: width * 0.57,
                        alignItems: 'center',
                        borderColor: '#935200',
                        justifyContent: 'center',
                        alignSelf: 'flex-start',
                        borderWidth: cardBorderWidth,
                        backgroundColor: '#E99917',
                    }}
                    onPress={onPress}
                >
                    <Text style={{ fontSize: width * 0.048, fontFamily: tushperlanFinlsRidl.dibutB, color: '#fff',}}>
                        {buttonText}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
