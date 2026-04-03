import {
    ScrollView as AsDfGhJkLz, Dimensions as PlMnBvCxZa, View as QwErTyUiOp,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TipCard from './TipCard';
import React, { useEffect as TyUiOpLkJh, useState as ZxCvBnMqWe, } from 'react';
import DirtosyWomnCrda from './DirtosyWomnCrda';

const { width: UiOpAsDfGh, height: ErTyUiOpAs } = PlMnBvCxZa.get('window');

const STORAGE_KEY = 'SAVED_TIPS';

export default function GhJkLzXcVbN({ navtotips }: { navtotips: () => void }) {
    const [QzWsXcVbNm, OpAsDfGhJkL] = ZxCvBnMqWe<{ category: string, tip: string }[]>([]);
    const [VbNmQwErTy, JkLzXcVbNm] = ZxCvBnMqWe<boolean[]>([]);

    TyUiOpLkJh(() => {
        AsyncStorage.getItem(STORAGE_KEY).then(data => {
            if (data) {
                try {
                    const arr = JSON.parse(data);
                    OpAsDfGhJkL(arr);
                    JkLzXcVbNm(Array(arr.length).fill(false));
                } catch {
                    OpAsDfGhJkL([]);
                    JkLzXcVbNm([]);
                }
            } else {
                OpAsDfGhJkL([]);
                JkLzXcVbNm([]);
            }
        });
    }, []);

    // Групування по категоріях
    const grouped: { [category: string]: string[] } = {};
    QzWsXcVbNm.forEach(({ category, tip }) => {
        if (!grouped[category]) grouped[category] = [];
        grouped[category].push(tip);
    });

    if (QzWsXcVbNm.length === 0) {
        return (
            <QwErTyUiOp style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', paddingBottom: ErTyUiOpAs * 0.14 }}>
                <DirtosyWomnCrda buttonText="Go to tips" secondText='Go to the "Tips" section and save something for yourself' mainText="You have no saves yet." onPress={navtotips} />
            </QwErTyUiOp>
        );
    }

    // Відображення збережених тіпсів
    return (
        <QwErTyUiOp style={{
            flex: 1,
            alignItems: 'center',
        }}>
            <AsDfGhJkLz style={{ width: '100%', flex: 1, }}
                contentContainerStyle={{
                    alignSelf: 'center',
                    paddingTop: UiOpAsDfGh * 0.04,
                    paddingBottom: ErTyUiOpAs * 0.19,
                    alignItems: 'center',
                }}
                showsVerticalScrollIndicator={false}
            >
                {Object.entries(grouped).map(([category, tips]) => (
                    <QwErTyUiOp key={category} style={{ width: '100%', }}>
                        {tips.map((tip, idx) => (
                            <TipCard
                                tip={tip}
                                category={category}
                                key={category + tip}
                                opened={VbNmQwErTy[idx]}
                                onToggleOpen={() => {
                                    const arr = [...VbNmQwErTy];
                                    arr[idx] = !arr[idx];
                                    JkLzXcVbNm(arr);
                                }}
                                isBookmarked={true}
                                onBookmarkChange={async (newState: boolean) => {
                                    if (!newState) {
                                        // Remove from saved
                                        const updated = QzWsXcVbNm.filter(
                                            t => !(t.category === category && t.tip === tip)
                                        );
                                        OpAsDfGhJkL(updated);
                                        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
                                    }
                                }}
                            />
                        ))}
                    </QwErTyUiOp>
                ))}
            </AsDfGhJkLz>
        </QwErTyUiOp>
    );
}
