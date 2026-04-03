import { tushperlanFinlsRidl as SdFgHjKlQw } from '../tushperlanFinlsRidl';
import TipCard from './TipCard';
import {
    ScrollView as UiOpAsDfGh,
    Image as TyUiOpLkJh, View as PlMnBvCxZa, TouchableOpacity as AsDfGhJkLz,
    Dimensions as ZxCvBnMqWe,
    Text as QwErTyUiOp,
} from 'react-native';
const { width: LkJhGfDsAq, height: MnBvCxZaSd } = ZxCvBnMqWe.get('window');
import xcvbnmlkjhgfd from '../FideryhViderAshestRigv/ditiphefs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState as ErTyUiOpAs } from 'react';

// Розміри
const QzWsXcVbNm = LkJhGfDsAq * 0.025;
const OpAsDfGhJk = LkJhGfDsAq * 0.06;
const VbNmQwErTy = MnBvCxZaSd * 0.07;
const JkLzXcVbNm = LkJhGfDsAq * 0.004;

export default function HefiTigpsHiher() {
    const [QwErTyUiOpAs, PlOkMnJbHu] = ErTyUiOpAs<number | null>(null);
    const [ZxCvBnMqWeTy, TyUiOpLkJhG] = ErTyUiOpAs<boolean[]>([]);
    const [UiOpAsDfGhJ, SdFgHjKlQwEr] = ErTyUiOpAs<boolean[]>([]);
    const [LzXcVbNmQw, OpAsDfGhJkL] = ErTyUiOpAs<{ category: string, tip: string }[]>([]);

    const xcvbn = QwErTyUiOpAs !== null ? xcvbnmlkjhgfd[QwErTyUiOpAs] : null;

    const ErTyUiOpAsDf = () => {
        const idx = Math.floor(Math.random() * xcvbnmlkjhgfd.length);
        PlOkMnJbHu(idx);
        TyUiOpLkJhG(Array(xcvbnmlkjhgfd[idx].tips.length).fill(false));
        SdFgHjKlQwEr(Array(xcvbnmlkjhgfd[idx].tips.length).fill(false));
    };

    const QwErTyUiOpAsDfGh = (idx: number) => {
        PlOkMnJbHu(idx);
        TyUiOpLkJhG(Array(xcvbnmlkjhgfd[idx].tips.length).fill(false));
        SdFgHjKlQwEr(Array(xcvbnmlkjhgfd[idx].tips.length).fill(false));
    };

    const STORAGE_KEY = 'SAVED_TIPS';

    React.useEffect(() => {
        AsyncStorage.getItem(STORAGE_KEY).then(data => {
            if (data) {
                try {
                    OpAsDfGhJkL(JSON.parse(data));
                } catch {
                    OpAsDfGhJkL([]);
                }
            } else {
                OpAsDfGhJkL([]);
            }
        });
    }, []);

    React.useEffect(() => {
        if (QwErTyUiOpAs !== null) {
            const cat = xcvbnmlkjhgfd[QwErTyUiOpAs];
            TyUiOpLkJhG(Array(cat.tips.length).fill(false));
            SdFgHjKlQwEr(cat.tips.map(tip =>
                LzXcVbNmQw.some(
                    saved => saved.category === cat.category && saved.tip === tip
                )
            ));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [QwErTyUiOpAs, LzXcVbNmQw]);

    // --- Екран вибору категорії ---
    if (QwErTyUiOpAs === null) {
        return (
            <PlMnBvCxZa style={{ alignItems: 'center', backgroundColor: 'transparent', flex: 1, }}>
                <TyUiOpLkJh resizeMode="stretch"
                    source={require('../FideryhViderAshestRigv/DishertyImagesotry/motivips.png')} style={{
                        height: MnBvCxZaSd * 0.25,
                        marginTop: LkJhGfDsAq * 0.03,
                        width: LkJhGfDsAq * 0.95,
                        opacity: 0
                    }}
                />
                <PlMnBvCxZa style={{
                    marginTop: LkJhGfDsAq * 0.04, width: LkJhGfDsAq * 0.95,



                    alignItems: 'center',
                }}>
                    {xcvbnmlkjhgfd.map((cat, idx) => (
                        <AsDfGhJkLz
                            key={cat.category}
                            style={{
                                borderColor: '#935200', borderRadius: QzWsXcVbNm, backgroundColor: '#E99917',
                                width: LkJhGfDsAq * 0.91,
                                alignItems: 'center', height: VbNmQwErTy, marginBottom: LkJhGfDsAq * 0.04, borderWidth: JkLzXcVbNm,
                                justifyContent: 'center',
                            }}
                            onPress={() => QwErTyUiOpAsDfGh(idx)}
                        >
                            <QwErTyUiOp style={{
                                fontSize: OpAsDfGhJk,
                                color: '#fff',
                                fontFamily: SdFgHjKlQw.dibutB,
                            }}>
                                {cat.category}
                            </QwErTyUiOp>
                        </AsDfGhJkLz>
                    ))}
                    <AsDfGhJkLz style={{
                        alignItems: 'center',
                        backgroundColor: '#935200',
                        width: LkJhGfDsAq * 0.7,
                        justifyContent: 'center',
                        marginTop: LkJhGfDsAq * 0.01,
                        height: VbNmQwErTy * 0.9,
                        borderRadius: QzWsXcVbNm,
                    }}
                        onPress={ErTyUiOpAsDf}
                    >
                        <QwErTyUiOp style={{ fontFamily: SdFgHjKlQw.dibutB, color: '#fff', fontSize: OpAsDfGhJk * 0.9, }}>
                            Randomly
                        </QwErTyUiOp>
                    </AsDfGhJkLz>
                </PlMnBvCxZa>
            </PlMnBvCxZa>
        );
    }

    // --- Екран тіпсів категорії ---
    return (
        <PlMnBvCxZa style={{ alignItems: 'center', flex: 1, backgroundColor: 'transparent', }}>
            <UiOpAsDfGh
                contentContainerStyle={{ paddingBottom: MnBvCxZaSd * 0.19, alignItems: 'center', }}
                showsVerticalScrollIndicator={false}
                style={{ width: '100%' }}
            >
                {xcvbn.tips.map((tip, idx) => (
                    <TipCard
                        opened={ZxCvBnMqWeTy[idx]}
                        category={xcvbn.category}
                        tip={tip}
                        key={idx}
                        onToggleOpen={() => {
                            const arr = [...ZxCvBnMqWeTy];
                            arr[idx] = !arr[idx];
                            TyUiOpLkJhG(arr);
                        }}
                        isBookmarked={UiOpAsDfGhJ[idx]}
                        onBookmarkChange={async (newState: boolean) => {
                            let updated: { category: string, tip: string }[];
                            if (newState) {
                                updated = [...LzXcVbNmQw, { category: xcvbn.category, tip }];
                            } else {
                                updated = LzXcVbNmQw.filter(
                                    t => !(t.category === xcvbn.category && t.tip === tip)
                                );
                            }
                            OpAsDfGhJkL(updated);
                            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
                        }}
                    />
                ))}
                <AsDfGhJkLz style={{
                    backgroundColor: '#935200',
                    alignItems: 'center',alignSelf: 'center',marginTop: LkJhGfDsAq * 0.06,
                    width: LkJhGfDsAq * 0.5,
                    height: VbNmQwErTy * 0.8,
                    justifyContent: 'center',
                    borderRadius: QzWsXcVbNm,
                    }}
                    onPress={() => PlOkMnJbHu(null)}
                >
                    <QwErTyUiOp style={{
                        fontSize: OpAsDfGhJk * 0.9,
                        color: '#fff',
                        fontFamily: SdFgHjKlQw.dibutB,
                    }}>
                        Back
                    </QwErTyUiOp>
                </AsDfGhJkLz>
            </UiOpAsDfGh>
        </PlMnBvCxZa>
    );
}
