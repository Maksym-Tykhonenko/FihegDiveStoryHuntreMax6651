import { ScrollView as VbNmQwErTy } from 'react-native-gesture-handler';
import { tushperlanFinlsRidl as SdFgHjKlQw, tushperlanFinlsRidl } from '../tushperlanFinlsRidl';
import xcvbnmlkjhgfd from '../FideryhViderAshestRigv/sortyHtunNwe';
import { BeloblukataGardtainaTenha, BeloblukataGardtainaTenha as OpAsDfGhJkL } from '../IvedreKopometsYartri/BeloblukataGardtainaTenha';
import {
    Dimensions as ZxCvBnMqWe,
    View as PlMnBvCxZa,
    TouchableOpacity as AsDfGhJkLz, Easing as ErTyUiOpAs, Animated as UiOpAsDfGh, Image as TyUiOpLkJh,
    Text as QwErTyUiOp,
} from 'react-native';
import React, { useState as LkJhGfDsAq, useRef as MnBvCxZaSd, useEffect } from 'react';
import DirtosyWomnCrda from './DirtosyWomnCrda';
import icedfone from '../FideryhViderAshestRigv/DishertyImagesotry/icedfone.png';
import AsyncStorage from '@react-native-async-storage/async-storage';


const { width: JkLzXcVbNm, height: QzWsXcVbNm } = ZxCvBnMqWe.get('window');

// Основні розміри
const QwErTyUiOpAs = JkLzXcVbNm * 0.03;
const PlMnBvCxZaS = JkLzXcVbNm * 0.025;
const AsDfGhJkLzQw = JkLzXcVbNm * 0.28;
const ZxCvBnMqWeTy = JkLzXcVbNm * 0.11;
const TyUiOpLkJhG = JkLzXcVbNm * 0.025;
const UiOpAsDfGhJ = JkLzXcVbNm * 0.06;
const ErTyUiOpAsDf = JkLzXcVbNm * 0.055;
const LkJhGfDsAqZx = JkLzXcVbNm * 0.038;

const MnBvCxZaSdQw = JkLzXcVbNm * 0.45;
const JkLzXcVbNmQw = JkLzXcVbNm * 0.04;
const QzWsXcVbNmAs = JkLzXcVbNm * 0.045;
const OpAsDfGhJkLz = JkLzXcVbNm * 0.07;
const VbNmQwErTyUi = JkLzXcVbNm * 0.045;
const QwErTyUiOpAsDf = JkLzXcVbNm * 0.025;
const PlMnBvCxZaSd = JkLzXcVbNm * 0.06;

export default function GhJkLzXcVbN() {
    const [UiOpLkJhGf, ErTyUiOpAsQw] = LkJhGfDsAq<number | null>(null);
    const [SdFgHjKlQwEr, OpAsDfGhJkLQw] = LkJhGfDsAq(false);
    const [quizMode, setQuizMode] = LkJhGfDsAq(false);
    const [quizStep, setQuizStep] = LkJhGfDsAq(0);
    const [quizAnswers, setQuizAnswers] = LkJhGfDsAq<number[]>([]);
    const [quizFinished, setQuizFinished] = LkJhGfDsAq(false);
    const [showPrize, setShowPrize] = LkJhGfDsAq(false);
    const [quizTimeLeft, setQuizTimeLeft] = LkJhGfDsAq(30);
    const [answerState, setAnswerState] = LkJhGfDsAq<{
        selected: number | null,
        correct: number | null,
        show: boolean
    }>({ selected: null, correct: null, show: false });

    // Animation values
    const VbNmQwErTyAs = MnBvCxZaSd(new UiOpAsDfGh.Value(0)).current;

    // Open details with animation
    const QzWsXcVbNmQw = (idx: number) => {
        ErTyUiOpAsQw(idx);
        OpAsDfGhJkLQw(true);
        VbNmQwErTyAs.setValue(0);
        UiOpAsDfGh.timing(VbNmQwErTyAs, {
            toValue: 1,
            duration: 420,
            easing: ErTyUiOpAs.out(ErTyUiOpAs.cubic),
            useNativeDriver: true,
        }).start();
    };

    // Close details with animation
    const LkJhGfDsAqAs = () => {
        UiOpAsDfGh.timing(VbNmQwErTyAs, {
            toValue: 0,
            duration: 320,
            easing: ErTyUiOpAs.in(ErTyUiOpAs.cubic),
            useNativeDriver: true,
        }).start(() => {
            OpAsDfGhJkLQw(false);
            ErTyUiOpAsQw(null);
        });
    };

    // Animation styles
    const detailsAnimStyle = {
        opacity: VbNmQwErTyAs,
        transform: [
            {
                translateY: VbNmQwErTyAs.interpolate({
                    inputRange: [0, 1],
                    outputRange: [40, 0],
                }),
            },
            {
                scale: VbNmQwErTyAs.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.97, 1],
                }),
            },
        ],
    };

    // ДОДАЙТЕ ЦЮ ФУНКЦІЮ:
    const exitQuiz = () => {
        setQuizMode(false);
        setQuizStep(0);
        setQuizAnswers([]);
        setQuizFinished(false);
        setShowPrize(false);
        setQuizTimeLeft(30);
    };

    // Timer effect: запускає таймер при quizMode, зупиняє при quizFinished
    useEffect(() => {
        if (quizMode && !quizFinished) {
            if (quizTimeLeft <= 0) {
                setQuizFinished(true);
                return;
            }
            const timer = setTimeout(() => setQuizTimeLeft(quizTimeLeft - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [quizMode, quizTimeLeft, quizFinished]);

    // Скидання answerState при переході до нового питання або виході з квізу
    useEffect(() => {
        setAnswerState({ selected: null, correct: null, show: false });
    }, [quizStep, quizMode]);

    // Додаємо ефект для оновлення HOOKS_COUNT після завершення квізу
    useEffect(() => {
        if (quizFinished) {
            const quiz = UiOpLkJhGf !== null ? xcvbnmlkjhgfd[UiOpLkJhGf].quiz : null;
            if (!quiz) return;
            const correctCount = quizAnswers.filter((a, i) => a === quiz[i].answer).length;
            const addHooks = correctCount >= 4 ? 30 : 10;
            AsyncStorage.getItem('HOOKS_COUNT')
                .then(val => {
                    let current = 0;
                    if (val && !isNaN(Number(val))) current = Number(val);
                    return AsyncStorage.setItem('HOOKS_COUNT', String(current + addHooks));
                })
                .catch(() => {
                    // fallback: просто встановити значення
                    AsyncStorage.setItem('HOOKS_COUNT', String(addHooks));
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quizFinished]);

    if (SdFgHjKlQwEr && UiOpLkJhGf !== null) {
        const story = xcvbnmlkjhgfd[UiOpLkJhGf];

        // Quiz mode rendering
        if (quizMode && story.quiz) {
            const quiz = story.quiz;
            const current = quiz[quizStep];
            const correctCount = quizAnswers.filter((a, i) => a === quiz[i].answer).length;

            // After quiz finished, show result and "Let's go" button
            if (quizFinished) {
                // Якщо таймер закінчився (quizTimeLeft === 0), mainText інший
                const isTimeout = quizTimeLeft === 0;
                if (showPrize) {
                    return (
                        <PlMnBvCxZa style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', paddingBottom: JkLzXcVbNm * 0.25 }}>
                            <TyUiOpLkJh
                                source={require('../FideryhViderAshestRigv/DishertyImagesotry/fihoks.png')}
                                style={{
                                    width: JkLzXcVbNm * 0.93,
                                    height: QzWsXcVbNm * 0.25,
                                    // opacity: 0
                                }}
                                resizeMode='stretch'
                            />
                            <PlMnBvCxZa style={{ flexDirection: 'row', alignItems: 'center', marginBottom: QzWsXcVbNm * 0.03, }}>
                                <PlMnBvCxZa style={{
                                    borderRadius: JkLzXcVbNm * 0.045,
                                    borderColor: '#FFB70A',
                                    height: JkLzXcVbNm * 0.19,
                                    borderWidth: JkLzXcVbNm * 0.008,
                                    alignItems: 'center',
                                    overflow: 'hidden',

                                    justifyContent: 'center',
                                    marginRight: JkLzXcVbNm * 0.025,
                                    width: JkLzXcVbNm * 0.19,


                                    backgroundColor: '#9DE1FF',
                                }}>
                                    <BeloblukataGardtainaTenha />
                                    <TyUiOpLkJh
                                        source={require('../FideryhViderAshestRigv/DishertyImagesotry/gachok.png')}
                                        style={{
                                            width: JkLzXcVbNm * 0.11,
                                            height: JkLzXcVbNm * 0.11,
                                            resizeMode: 'contain',
                                        }}
                                    />
                                </PlMnBvCxZa>
                                <PlMnBvCxZa style={{
                                    justifyContent: 'center',
                                    borderColor: '#FFB70A',
                                    height: JkLzXcVbNm * 0.19,
                                    borderWidth: JkLzXcVbNm * 0.008,
                                    alignItems: 'center',
                                    width: JkLzXcVbNm * 0.35,
                                    overflow: 'hidden',
                                    borderRadius: JkLzXcVbNm * 0.045,
                                }}>
                                    <BeloblukataGardtainaTenha />
                                    <QwErTyUiOp style={{
                                        fontSize: JkLzXcVbNm * 0.08,
                                        letterSpacing: 2,
                                        fontFamily: tushperlanFinlsRidl.dibutM,
                                        color: '#A05B00',
                                    }}>
                                        {correctCount < 4 ? '010' : '030'}
                                    </QwErTyUiOp>
                                </PlMnBvCxZa>
                            </PlMnBvCxZa>

                            <AsDfGhJkLz
                                onPress={() => {
                                    exitQuiz();
                                }}
                                style={{
                                    height: QzWsXcVbNm * 0.08,
                                    borderRadius: QwErTyUiOpAsDf,
                                    backgroundColor: '#E99917',
                                    marginBottom: QzWsXcVbNm * 0.03,
                                    borderColor: '#935200',
                                    justifyContent: 'center',
                                    borderWidth: JkLzXcVbNm * 0.004,
                                    alignItems: 'center',
                                    width: JkLzXcVbNm * 0.8,
                                }}
                            >
                                <QwErTyUiOp
                                    style={{
                                        color: '#fff',
                                        fontSize: PlMnBvCxZaSd,
                                        fontFamily: SdFgHjKlQw.dibutB,
                                    }}
                                >
                                    Next
                                </QwErTyUiOp>
                            </AsDfGhJkLz>
                        </PlMnBvCxZa>
                    );
                }
                return (
                    <PlMnBvCxZa style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: JkLzXcVbNm * 0.19 }}>
                        <DirtosyWomnCrda
                            secondText={`You answered ${correctCount} out of ${quiz.length} questions correctly. ${correctCount >= 4 ? 'Great job! You earned a prize.' : 'Try again to earn a prize.'}`}
                            buttonText="Let's go"
                            onPress={() => setShowPrize(true)}
                            mainText={isTimeout ? "Time's up!" : correctCount < 4 ? "Better luck next time." : "Congratulations!"}
                        />
                    </PlMnBvCxZa>
                );
            }

            // Quiz question rendering
            return (
                <PlMnBvCxZa style={{ flex: 1, alignItems: 'center' }}>
                    <VbNmQwErTy style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center', paddingTop: JkLzXcVbNm * 0.01 }}>
                        <PlMnBvCxZa style={{
                            width: JkLzXcVbNm * 0.93,
                            marginBottom: JkLzXcVbNm * 0.03,
                            borderRadius: QzWsXcVbNmAs,
                            height: QzWsXcVbNm * 0.23,
                            overflow: 'hidden',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <TyUiOpLkJh
                                source={icedfone}
                                style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    top: 0,
                                    left: 0,
                                    zIndex: 0,
                                }}
                                resizeMode="stretch"
                            />
                            <PlMnBvCxZa style={{
                                padding: JkLzXcVbNm * 0.03,
                                alignItems: 'center',
                                width: '95%',
                                zIndex: 1,
                                marginTop: - JkLzXcVbNm * 0.08,
                            }}>
                                <PlMnBvCxZa style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', }}>
                                    <PlMnBvCxZa style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <PlMnBvCxZa style={{
                                            width: QzWsXcVbNm * 0.064,
                                            height: QzWsXcVbNm * 0.064,
                                            overflow: 'hidden',
                                            borderRadius: QzWsXcVbNmAs,
                                            borderColor: '#E99917',
                                            borderWidth: JkLzXcVbNm * 0.004,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                            <BeloblukataGardtainaTenha />
                                            {/* Timer icon (emoji or SVG if you have) */}
                                            <TyUiOpLkJh
                                                source={require('../FideryhViderAshestRigv/DishertyImagesotry/tiorpem.png')}
                                                style={{
                                                    width: '55%',
                                                    height: '55%',
                                                }}
                                                resizeMode="contain"
                                            />
                                        </PlMnBvCxZa>
                                        <PlMnBvCxZa style={{
                                            width: JkLzXcVbNm * 0.21,
                                            marginLeft: JkLzXcVbNm * 0.01,
                                            height: QzWsXcVbNm * 0.064,
                                            overflow: 'hidden',
                                            borderRadius: QzWsXcVbNmAs,
                                            borderColor: '#E99917',
                                            borderWidth: JkLzXcVbNm * 0.004,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                            <BeloblukataGardtainaTenha />
                                            <QwErTyUiOp style={{
                                                fontSize: VbNmQwErTyUi,
                                                color: '#935200',
                                                fontFamily: SdFgHjKlQw.dibutM,
                                            }}>
                                                {quizTimeLeft < 10 ? `00:0${quizTimeLeft}` : `00:${quizTimeLeft}`}
                                            </QwErTyUiOp>
                                        </PlMnBvCxZa>
                                    </PlMnBvCxZa>
                                    <PlMnBvCxZa style={{
                                        width: JkLzXcVbNm * 0.35,
                                        height: QzWsXcVbNm * 0.064,
                                        overflow: 'hidden',
                                        borderRadius: QzWsXcVbNmAs,
                                        borderColor: '#E99917',
                                        borderWidth: JkLzXcVbNm * 0.004,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <BeloblukataGardtainaTenha />
                                        <QwErTyUiOp style={{
                                            fontSize: VbNmQwErTyUi,
                                            color: '#935200',
                                            fontFamily: SdFgHjKlQw.dibutM,
                                        }}>
                                            Question {quizStep + 1}/{quiz.length}
                                        </QwErTyUiOp>
                                    </PlMnBvCxZa>
                                </PlMnBvCxZa>
                                <QwErTyUiOp style={{
                                    fontFamily: SdFgHjKlQw.dibutB,
                                    color: '#ac6208',
                                    fontSize: ErTyUiOpAsDf,
                                    marginTop: JkLzXcVbNm * 0.025,
                                    textAlign: 'center'
                                }}>
                                    {current.question}
                                </QwErTyUiOp>
                            </PlMnBvCxZa>
                        </PlMnBvCxZa>
                        {current.options.map((opt, i) => {
                            let bgColor = '#b6e0ff';
                            let textColor = '#F07911';
                            // Підсвічування відповіді
                            if (answerState.show) {
                                if (i === answerState.selected && i === current.answer) {
                                    bgColor = '#7ed957'; // зелений, якщо вибрана і правильна
                                    textColor = '#fff';
                                } else if (i === answerState.selected && i !== current.answer) {
                                    bgColor = '#ff6b6b'; // червоний, якщо вибрана і неправильна
                                    textColor = '#fff';
                                } else if (i === current.answer) {
                                    bgColor = '#7ed957'; // зелений для правильної, якщо вибрана інша
                                    textColor = '#fff';
                                }
                            }
                            return (
                                <AsDfGhJkLz
                                    key={i}
                                    disabled={answerState.show}
                                    onPress={() => {
                                        setAnswerState({ selected: i, correct: current.answer, show: true });
                                        setTimeout(() => {
                                            setAnswerState({ selected: null, correct: null, show: false });
                                            if (quizStep === quiz.length - 1) {
                                                setQuizAnswers([...quizAnswers, i]);
                                                setQuizFinished(true);
                                            } else {
                                                setQuizAnswers([...quizAnswers, i]);
                                                setQuizStep(quizStep + 1);
                                            }
                                        }, 1200);
                                    }}
                                    style={{
                                        width: JkLzXcVbNm * 0.86,
                                        height: QzWsXcVbNm * 0.059,
                                        justifyContent: 'center',
                                        backgroundColor: bgColor,
                                        borderRadius: QzWsXcVbNmAs,
                                        borderWidth: 2,
                                        borderColor: '#ffb300',
                                        marginBottom: JkLzXcVbNm * 0.018,
                                        alignItems: 'center',
                                        overflow: 'hidden',
                                    }}>
                                    {/* <BeloblukataGardtainaTenha /> */}
                                    {!answerState.show && <BeloblukataGardtainaTenha />}
                                    <QwErTyUiOp style={{
                                        fontFamily: SdFgHjKlQw.dibutB,
                                        color: textColor,
                                        fontSize: JkLzXcVbNm * 0.048,
                                        textAlign: 'center',
                                        padding: JkLzXcVbNm * 0.005,
                                    }} numberOfLines={2} adjustsFontSizeToFit>
                                        {opt}
                                    </QwErTyUiOp>
                                </AsDfGhJkLz>
                            );
                        })}
                        <AsDfGhJkLz
                            onPress={exitQuiz}
                            disabled={answerState.show}
                            style={{
                                marginTop: JkLzXcVbNm * 0.02,
                                backgroundColor: '#E99917',
                                borderRadius: QwErTyUiOpAsDf,
                                borderWidth: JkLzXcVbNm * 0.004,
                                borderColor: '#935200',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: JkLzXcVbNm * 0.59,
                                height: QzWsXcVbNm * 0.061,
                                opacity: answerState.show ? 0.5 : 1,
                            }}>
                            <QwErTyUiOp style={{
                                color: '#fff',
                                fontSize: PlMnBvCxZaSd,
                                fontFamily: SdFgHjKlQw.dibutB,
                            }}>
                                Back
                            </QwErTyUiOp>
                        </AsDfGhJkLz>
                    </VbNmQwErTy>
                </PlMnBvCxZa>
            );
        }

        // Story details rendering (with Back and Quiz buttons)
        return (
            <UiOpAsDfGh.View style={[
                {
                    flex: 1,
                    alignItems: 'center',
                },
                detailsAnimStyle,
                { width: '100%' }
            ]}>
                <VbNmQwErTy style={{
                    width: '100%',
                }} contentContainerStyle={{
                    paddingBottom: QzWsXcVbNm * 0.19,
                }}>
                    <TyUiOpLkJh resizeMode="stretch" source={story.horintz} style={{
                        width: JkLzXcVbNm * 0.95,
                        height: MnBvCxZaSdQw,
                        marginBottom: JkLzXcVbNm * 0.03,
                        alignSelf: 'center',
                    }}
                    />
                    <PlMnBvCxZa style={{
                        alignItems: 'center',
                        backgroundColor: '#e3f5ff',
                        shadowOpacity: 0.13,
                        borderRadius: QzWsXcVbNmAs,
                        borderColor: '#ffb300', shadowColor: '#000', shadowRadius: 10, padding: JkLzXcVbNmQw,
                        alignSelf: 'center',
                        elevation: 4,
                        overflow: 'hidden',
                        borderWidth: 2,
                        width: JkLzXcVbNm * 0.95,
                    }}>
                        <OpAsDfGhJkL />
                        <QwErTyUiOp style={{
                            fontFamily: SdFgHjKlQw.dibutB,
                            color: '#F07911',
                            marginBottom: JkLzXcVbNm * 0.02,
                            fontSize: OpAsDfGhJkLz,
                            textAlign: 'center',
                        }}
                        >
                            {story.title}
                        </QwErTyUiOp>
                        <QwErTyUiOp
                            style={{
                                marginBottom: JkLzXcVbNm * 0.04,
                                color: '#935200',
                                fontSize: VbNmQwErTyUi,
                                fontFamily: SdFgHjKlQw.dibutR,
                                textAlign: 'center',
                            }}
                        >
                            {story.text}
                        </QwErTyUiOp>
                        <PlMnBvCxZa style={{ flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
                            <AsDfGhJkLz
                                onPress={LkJhGfDsAqAs}
                                style={{
                                    height: QzWsXcVbNm * 0.061,
                                    borderRadius: QwErTyUiOpAsDf,
                                    backgroundColor: '#E99917',
                                    marginTop: JkLzXcVbNm * 0.01,
                                    borderColor: '#935200',
                                    justifyContent: 'center',
                                    borderWidth: JkLzXcVbNm * 0.004,
                                    alignItems: 'center',
                                    width: JkLzXcVbNm * 0.29,
                                    marginRight: JkLzXcVbNm * 0.04,
                                }}
                            >
                                <QwErTyUiOp
                                    style={{
                                        color: '#fff',
                                        fontSize: PlMnBvCxZaSd,
                                        fontFamily: SdFgHjKlQw.dibutB,
                                    }}
                                >
                                    Back
                                </QwErTyUiOp>
                            </AsDfGhJkLz>
                            <AsDfGhJkLz
                                onPress={() => {
                                    setQuizMode(true);
                                    setQuizStep(0);
                                    setQuizAnswers([]);
                                    setQuizFinished(false);
                                    setShowPrize(false);
                                }}
                                style={{
                                    height: QzWsXcVbNm * 0.061,
                                    borderRadius: QwErTyUiOpAsDf,
                                    backgroundColor: '#E99917',
                                    marginTop: JkLzXcVbNm * 0.01,
                                    borderColor: '#935200',
                                    justifyContent: 'center',
                                    borderWidth: JkLzXcVbNm * 0.004,
                                    alignItems: 'center',
                                    width: JkLzXcVbNm * 0.29,
                                }}
                            >
                                <QwErTyUiOp
                                    style={{
                                        color: '#fff',
                                        fontSize: PlMnBvCxZaSd,
                                        fontFamily: SdFgHjKlQw.dibutB,
                                    }}
                                >
                                    Quiz
                                </QwErTyUiOp>
                            </AsDfGhJkLz>
                        </PlMnBvCxZa>
                    </PlMnBvCxZa>
                </VbNmQwErTy>
            </UiOpAsDfGh.View>
        );
    }

    return (
        <PlMnBvCxZa style={{
            alignItems: 'center',





            flex: 1,




            justifyContent: 'flex-start',
        }}>
            <VbNmQwErTy style={{ width: '100%' }} contentContainerStyle={{
                paddingBottom: JkLzXcVbNm * 0.1,
                paddingVertical: JkLzXcVbNm * 0.03,
                alignItems: 'center',
            }} showsVerticalScrollIndicator={false}
            >
                {xcvbnmlkjhgfd.map((story, idx) => {
                    return (
                        <PlMnBvCxZa key={idx} style={{
                            padding: JkLzXcVbNm * 0.021,
                            borderColor: '#ffb300',
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: PlMnBvCxZaS,
                            width: JkLzXcVbNm * 0.93,
                            borderWidth: JkLzXcVbNm * 0.004,
                            overflow: 'hidden',
                            borderRadius: JkLzXcVbNm * 0.0610243,
                        }}
                        >
                            <OpAsDfGhJkL />
                            <TyUiOpLkJh source={story.swrig} style={{
                                height: AsDfGhJkLzQw,
                                width: AsDfGhJkLzQw,
                                marginRight: QwErTyUiOpAs,
                            }} resizeMode="stretch" />
                            <PlMnBvCxZa style={{ justifyContent: 'center', flex: 1, }}>
                                <QwErTyUiOp style={{
                                    fontSize: ErTyUiOpAsDf,
                                    color: '#b76a00',
                                    fontFamily: SdFgHjKlQw.dibutB,
                                }}
                                >
                                    {story.title}
                                </QwErTyUiOp>
                                <QwErTyUiOp
                                    style={{
                                        fontSize: LkJhGfDsAqZx,
                                        color: '#935200',
                                        marginVertical: JkLzXcVbNm * 0.016,
                                        fontFamily: SdFgHjKlQw.dibutR,
                                        lineHeight: LkJhGfDsAqZx * 1.4,
                                    }}
                                    numberOfLines={2} ellipsizeMode='tail'
                                >
                                    {story.text}
                                </QwErTyUiOp>
                                <AsDfGhJkLz
                                    onPress={() => QzWsXcVbNmQw(idx)}
                                    style={{ height: ZxCvBnMqWeTy, backgroundColor: '#E99917', borderColor: '#935200', alignItems: 'center', justifyContent: 'center', marginTop: JkLzXcVbNm * 0.01, borderWidth: JkLzXcVbNm * 0.004, borderRadius: TyUiOpLkJhG, }}>
                                    <QwErTyUiOp style={{
                                        fontFamily: SdFgHjKlQw.dibutB,
                                        color: '#fff',
                                        fontSize: UiOpAsDfGhJ,
                                    }}
                                    >
                                        Read
                                    </QwErTyUiOp>
                                </AsDfGhJkLz>
                            </PlMnBvCxZa>
                        </PlMnBvCxZa>
                    );
                })}
            </VbNmQwErTy>
        </PlMnBvCxZa>
    );
}
