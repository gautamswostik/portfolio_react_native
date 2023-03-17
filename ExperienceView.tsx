import { FlatList, StyleSheet, Text, View } from "react-native"

interface Experience {
    companyName: String,
    experienceTime: String,
    worksDid: Array<String>
}

export const ExperienceView = (props: Experience) => {
    return (<View>
        <Text style={styles.companyHeading}>{props.companyName}</Text>
        <Text style={styles.experienceTime}>{props.experienceTime}</Text>
        <FlatList data={props.worksDid} renderItem={(item) => {
            return (<View style={styles.workDetail}>
                <Text style={styles.dotStyle}>{"\u2B22"}</Text>
                <Text style={styles.workDidStyle}>{item.item}</Text>
            </View>)
        }} scrollEnabled={false} />
    </View>)
}

const styles = StyleSheet.create({
    companyHeading: {
        fontSize: 20,
        fontWeight: "400"
    },
    experienceTime: {
        marginVertical: 10,
        fontSize: 18,
        fontWeight: "400",
        color: "purple"
    },
    workDetail: {
        marginVertical: 10,
        paddingHorizontal: 32,
        flexDirection: "row",
    },
    dotStyle: {
        alignSelf: "center",
        marginEnd: 10,
    },
    workDidStyle: {
        alignSelf: "center",
        fontSize: 16
    },
})