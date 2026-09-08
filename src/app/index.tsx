import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

export default function Index() {
    return (
        <View style={styles.container}>
            <Image source={require('@/assets/foco.png')}/>
            <View style={styles.action}>
                <View style={styles.context}>
                    <Pressable style={styles.contextButtonActive}>
                        <Text style={styles.contextButtonText}>
                            Foco
                        </Text>
                    </Pressable>
                    <Pressable>
                        <Text style={styles.contextButtonText}>
                            Pausa curta
                        </Text>
                    </Pressable>
                    <Pressable>
                        <Text style={styles.contextButtonText}>
                            Pausa longa
                        </Text>
                    </Pressable>
                </View>
                <Text style={styles.timer}>25:00</Text>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Começar</Text>
                </Pressable>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    Projeto ficticio desenvolvido para fins de aprendizagem.
                </Text>
                <Text style={styles.footerText}>
                    Desenvolvido pelos alunos do curso de Dev - Sesi/Senai Pederneiras
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#021123',
        gap: 32
    },
    action:{
        padding: 24,
        backgroundColor: '#14448080',
        width: '80%',
        borderRadius: 32,
        borderWidth: 2,
        borderColor: '#144480',
        gap: 16
    },
    context:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    contextButtonActive:{
        backgroundColor: '#144480',
        borderRadius: 8
    },
    contextButtonText:{
        color: '#fff',
        fontSize: 12.5,
        padding: 8
    },
    timer:{
        color: '#fff',
        fontSize: 48,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    button:{
        backgroundColor: '#144480',
        borderRadius: 32,
        padding: 8
    },
    buttonText:{
        textAlign: 'center',
        color: '#021123',
        fontSize: 18
    },
    footer:{
        width: '80%'
    },
    footerText:{
        textAlign: 'center',
        color: '#98a0a8',
        fontSize: 12.5
    }
})