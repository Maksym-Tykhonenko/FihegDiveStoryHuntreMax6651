import React from 'react';
import { View,Image,TouchableOpacity,  Dimensions, Text, Share,  } from 'react-native';
import { tushperlanFinlsRidl } from '../tushperlanFinlsRidl';
import { BeloblukataGardtainaTenha } from '../IvedreKopometsYartri/BeloblukataGardtainaTenha';

const { width, height } = Dimensions.get('window');
const cardRadius = width * 0.04;
const cardPadding = width * 0.045;
const cardMargin = width * 0.025;
const cardTitleFont = width * 0.09;
const cardTextFont = width * 0.045;
const cardButtonRadius = width * 0.025;
const cardButtonFont = width * 0.06;
const cardButtonHeight = height * 0.07;
const cardButtonMarginTop = width * 0.06;
const cardButtonIconMargin = width * 0.03;
const cardBorderWidth = width * 0.004;

const bookmarkEmpty = require('../FideryhViderAshestRigv/DishertyImagesotry/bomrkuns.png');
const bookmarkFilled = require('../FideryhViderAshestRigv/DishertyImagesotry/borkfild.png');

type Props = {
    category: string;
    tip: string;
    opened: boolean;
    onToggleOpen: () => void;
    isBookmarked: boolean;
    onBookmarkChange: (newState: boolean) => void;
};

export default function TipCard({
    category,
    tip,
    opened,
    onToggleOpen,
    isBookmarked,
    onBookmarkChange,
}: Props) {
    return (
        <View
            style={{
                width: width * 0.95,
                backgroundColor: opened
                    ? 'rgba(0,180,255,0.18)'
                    : 'rgba(0,180,255,0.13)',
                    marginTop: cardMargin,
                    borderWidth: cardBorderWidth,
                    borderRadius: cardRadius,
                borderColor: '#E99917',
                shadowOpacity: 0.08,
                shadowColor: '#000',
                shadowRadius: width * 0.02,
                shadowOffset: { width: 0, height: width * 0.01 },
                overflow: 'hidden',
                padding: cardPadding,
            }}
        >
            <BeloblukataGardtainaTenha />
            <Text style={{ marginBottom: width * 0.02, fontFamily: tushperlanFinlsRidl.dibutB,textAlign: 'center',
                color: '#935200',
                fontSize: cardTitleFont,
            }}>
                {category}
            </Text>
            <Text style={{  textAlign: 'center', fontFamily: tushperlanFinlsRidl.dibutR,fontSize: cardTextFont,
                color: '#3d2c1a',
                marginBottom: cardButtonMarginTop,
            }}>
                {tip}
            </Text>
            <View style={{   flexDirection: 'row',   alignItems: 'center',  justifyContent: 'center',   }}>
                <TouchableOpacity
                    style={{
                        marginRight: cardButtonIconMargin,
                        backgroundColor: '#E99917',
                        height: cardButtonHeight,    flex: 1, alignItems: 'center',borderRadius: cardButtonRadius,
                        justifyContent: 'center',
                        borderWidth: cardBorderWidth,
                        borderColor: '#935200',
                    }}
                    onPress={() => {
                        Share.share({
                            message: `${category} tip: ${tip}`,
                        });
                    }}
                >
                    <Text style={{
                        color: '#fff',
                        fontSize: cardButtonFont,
                        fontFamily: tushperlanFinlsRidl.dibutB,
                    }}>
                        Share
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onBookmarkChange(!isBookmarked)}
                    style={{
                        height: cardButtonHeight,
                        justifyContent: 'center',
                        width: cardButtonHeight,
                        backgroundColor: '#E99917',
                        borderWidth: cardBorderWidth,
                        borderColor: '#935200',
                        alignItems: 'center',
                        borderRadius: cardButtonRadius,
                    }}
                >
                    <Image
                        source={isBookmarked ? bookmarkFilled : bookmarkEmpty}
                        style={{
                            width: cardButtonHeight * 0.59,
                            height: cardButtonHeight * 0.59,
                            resizeMode: 'contain',
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}
