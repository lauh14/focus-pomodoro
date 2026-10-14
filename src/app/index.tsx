import {View, Text, Image, StyleSheet, Pressable, 
ImageSourcePropType} from 'react-native';
import { useRef, useState } from 'react';
import { FokusButton } from '../components/FokusButton';
import { ActionButton } from '../components/ActionButton';
import { Timer } from '../components/Timer';

interface PomodoroTimer{
    id: string;
    initialValue: number;
    imagem: ImageSourcePropType;
}

const pomodoro = [
    {
        id:'foco',
        initialValue: 25,
        imagem: require('../assets/foco.png'),
        display: 'Foco'
    },
    {
        id:'curto',
        initialValue: 5,
        imagem: require('../assets/curto.png'),
        display: 'Pausa Curta'
    },
    {
        id:'longo',
        initialValue: 15,
        imagem: require('../assets/longo.png'),
        display: 'Pausa Longo'
    },
]

export default function Index(){

    const [typeTimer, setTypeTimer] = useState<PomodoroTimer>(pomodoro[0])
    const [TimerRunning, setTimerRunning] = useState(false)
    const [seconds, setSeconds] = useState(pomodoro[0].initialValue)
    const timerRef = useRef<ReturnType<typeof setInterval> | null> (null)

    const clear = () => {
        if(timerRef.current != null){
            clearInterval(timerRef.current!)
            timerRef.current = null
            setTimerRunning(false)
    }

    const toogleTypeTimer = (newTypeTimer: PomodoroTimer) => {
        timerRef.current = null
        setSeconds(newTypeTimer.initialValue)
        clear()
    }

    const toogleTimer = () =>{
        if(timerRef.current){
            //pausar
            clearInterval(timerRef.current)
            timerRef.current = null
            return
        }
        setTimerRunning(false)
        const id = setInterval(() =>{
            setSeconds (oldState => {
                return oldState - 1
            }
            )})
            console.log('timer rolando')
        }, 1000
        timerRef.current = id
    }

    return(
        <View style={styles.container}>
            <Image source={typeTimer.imagem}/>
            <View style={styles.actions}>
                <View style={styles.context}>
                    {pomodoro.map(p => (
                    <ActionButton
                     key={p.id}
                    active={typeTimer.id === p.id}
                    onPress={()=> setTypeTimer(p)}
                    display={p.display}/>

                    ))}

                </View>
                <Timer
                    totalSeconds={typeTimer.initialValue}
                />
                <FokusButton 
                title= {timerRef.current ? 'Pausar' : 'Começar'}
                onPress={toogleTimer}/>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    Projeto Fictício Desenvolvido para Fins de Aprendizagem
                </Text>
                <Text style={styles.footerText}>
                    Desenvolvido peelos alunos do Curso de Dev - Sesi/Senai Pederneiras
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#021123"
    },
    actions:{
        padding: 24,
        backgroundColor: "#14448080",
        width: "80%",
        borderRadius: 32,
        borderColor: "#144480",
        gap: 16
    },
    context:{
        flexDirection: "row",
        justifyContent: "space-between"
    },
    footer:{
        width: "80%"
    },
    footerText:{
        textAlign: "center",
        color: "#98a0a0",
        fontSize: 12.5
    }
})