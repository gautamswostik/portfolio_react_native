import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';

export interface SocialItem {
    iconName: string,
    contact: String,
    onPressed: () => Promise<void>
}

interface SocailItems {
    socials: Array<SocialItem>
}

export const SocialsView = (props: SocailItems) => {
    var items: Array<SocialItem> = props.socials
    return (<View style={styles.socialViewStyle}>
        {items.map((item) => {
              return (
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        margin: 4,
                    }}>
                    <Icon name={item.iconName} size={20} color="white" />
                    <Text style={styles.contactStyle} onPress={item.onPressed}>{item.contact}</Text>
                </View>
            )
        })}
    </View>)
}

const styles = StyleSheet.create({
    socialViewStyle: {
        marginTop: 20,
        paddingLeft: 20,
        paddingVertical: 10,
        backgroundColor: "black",
    },
    contactStyle: {
        alignSelf: "center",
        fontSize: 18,
        paddingLeft: 20,
        color: "white"
    },
})